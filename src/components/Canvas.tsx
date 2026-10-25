import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import data from "@contents/pages/decision_tree.json";
import "@styles/canvas.module.css";

/* ───────── Types ───────── */
type Option = { value: string; label: string; next: string | null; articles: string[] };
type QNode = {
  question: string;
  type: "yes_no" | "single_choice" | "multi_choice";
  articles?: string[];
  options: Option[];
};
type Tree = { start: string; nodes: Record<string, QNode> };
type M = {
  id: string;
  kind: "root" | "opt" | "art";
  label: string;
  sub?: string;
  code?: string;
  parent?: string;
  children: string[];
  multi: boolean; // sibling group allows several open branches
  h: number;
};
type XY = { x: number; y: number };
type Cam = { x: number; y: number; s: number };

/* ───────── Tunables ───────── */
const W = 240; // node width
const H = { root: 108, opt: 128, art: 68 }; // node heights (match canvas.css)
const GAP_X = 28, GAP_Y = 84;
const MIN_S = 0.3, MAX_S = 1.6;
const DEFAULT_EDGE_WIDTH = 2; // line thickness; slider, `edgeWidth` prop, or --cn-edge-width
const MOVE_MS = 520, CAM_MS = 560;

const tree = data as unknown as Tree;
const TYPE_LABEL = { yes_no: "Yes / no", single_choice: "Choose one", multi_choice: "Choose any" };
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const humanize = (code: string) => cap(code.split("_").slice(1).join(" "));
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const ease = (k: number) => 1 - Math.pow(1 - k, 4);
const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ───────── Canvas tree built once from the JSON ───────── */
const model = (() => {
  const m = new Map<string, M>();
  const addArticles = (p: M, codes: string[]) => {
    for (const code of codes) {
      const id = `${p.id}#${code}`;
      if (m.has(id)) continue;
      m.set(id, { id, kind: "art", label: humanize(code), sub: cap(code.split("_")[0]), code, parent: p.id, children: [], multi: false, h: H.art });
      p.children.push(id);
    }
  };
  const expand = (p: M, nodeId: string, stack: string[]) => {
    const q = tree.nodes[nodeId];
    if (!q || stack.includes(nodeId)) return;
    const multi = q.type === "multi_choice";
    for (const o of q.options) {
      const next = o.next ? tree.nodes[o.next] : undefined;
      const sub = next ? `Next: ${next.question}` : o.articles.length ? `${o.articles.length} article${o.articles.length > 1 ? "s" : ""}` : undefined;
      const n: M = { id: `${p.id}/${o.value}`, kind: "opt", label: o.label, sub, parent: p.id, children: [], multi, h: H.opt };
      m.set(n.id, n);
      p.children.push(n.id);
      if (o.next) expand(n, o.next, [...stack, nodeId]);
      addArticles(n, o.articles);
    }
    addArticles(p, q.articles ?? []);
  };
  const q0 = tree.nodes[tree.start];
  const root: M = { id: "root", kind: "root", label: q0.question, sub: TYPE_LABEL[q0.type], children: [], multi: false, h: H.root };
  m.set("root", root);
  expand(root, tree.start, []);
  return m;
})();

const closeTree = (set: Set<string>, id: string) => {
  set.delete(id);
  model.get(id)!.children.forEach((c) => closeTree(set, c));
};

/* Top→bottom tidy tree: parents centred over visible children. */
function layout(open: Set<string>): Map<string, XY> {
  const kids = (id: string) => (open.has(id) ? model.get(id)!.children : []);
  const wm = new Map<string, number>();
  const width = (id: string): number => {
    const hit = wm.get(id);
    if (hit !== undefined) return hit;
    const k = kids(id);
    const w = k.length ? Math.max(W, k.reduce((s, c) => s + width(c), 0) + GAP_X * (k.length - 1)) : W;
    wm.set(id, w);
    return w;
  };
  const depthH: number[] = [];
  const walk = (id: string, d: number) => {
    depthH[d] = Math.max(depthH[d] ?? 0, model.get(id)!.h);
    kids(id).forEach((c) => walk(c, d + 1));
  };
  walk("root", 0);
  const ys: number[] = [];
  let y = 0;
  depthH.forEach((h, d) => { ys[d] = y; y += h + GAP_Y; });

  const pos = new Map<string, XY>();
  const place = (id: string, d: number, left: number) => {
    const w = width(id);
    pos.set(id, { x: left + (w - W) / 2, y: ys[d] }); // parent first so tweens can start from it
    const k = kids(id);
    if (!k.length) return;
    let cl = left + (w - (k.reduce((s, c) => s + width(c), 0) + GAP_X * (k.length - 1))) / 2;
    for (const c of k) { place(c, d + 1, cl); cl += width(c) + GAP_X; }
  };
  place("root", 0, 0);
  return pos;
}

/* ───────── Public component: canvas ≥768px, stacked list below ───────── */
type Props = { basePath?: string; edgeWidth?: number; height?: string };

export default function Canvas({ basePath = "/articles", edgeWidth = DEFAULT_EDGE_WIDTH, height = "100vh" }: Props) {
  const [mobile, setMobile] = useState(() => matchMedia("(max-width: 767px)").matches);
  useEffect(() => {
    const mq = matchMedia("(max-width: 767px)");
    const on = () => setMobile(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return (
    <div className="cn-root" style={{ height }}>
      {mobile ? <MobileList basePath={basePath} /> : <CanvasView basePath={basePath} edgeWidth={edgeWidth} />}
    </div>
  );
}

/* Mobile: plain nested list, canvas fully disabled. */
function MobileList({ basePath }: { basePath: string }) {
  const Branch = ({ id }: { id: string }) => {
    const m = model.get(id)!;
    if (m.kind === "art")
      return (
        <a className="cn-mlink" href={`${basePath}/${m.code}`}>
          <span className="cn-mtitle">{m.label}</span>
          <span className="cn-mexcerpt">{m.sub}</span>
        </a>
      );
    const head = (
      <>
        <span className="cn-mtitle">{m.label}</span>
        {m.sub && <span className="cn-mexcerpt">{m.sub}</span>}
      </>
    );
    return m.children.length ? (
      <details className="cn-mbranch">
        <summary className="cn-mlink">{head}</summary>
        <div className="cn-mkids">{m.children.map((c) => <Branch key={c} id={c} />)}</div>
      </details>
    ) : (
      <div className="cn-mlink">{head}</div>
    );
  };
  const root = model.get("root")!;
  return (
    <nav className="cn-mobile" aria-label="Prostate cancer journey">
      <div className="cn-mlabel">{root.label}</div>
      {root.children.map((c) => <Branch key={c} id={c} />)}
    </nav>
  );
}

/* ───────── Desktop / tablet canvas ───────── */
function CanvasView({ basePath, edgeWidth }: { basePath: string; edgeWidth: number }) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(["root"]));
  const [focus, setFocus] = useState("root");
  const [tick, setTick] = useState(0);
  const [panelOpen, setPanelOpen] = useState(true);
  const [edgeW, setEdgeW] = useState(edgeWidth);

  const pos = useMemo(() => layout(open), [open]);
  const edges = useMemo(
    () => [...pos.keys()].filter((id) => id !== "root").map((id) => ({ key: id, from: model.get(id)!.parent!, to: id })),
    [pos]
  );
  const pathSet = useMemo(() => {
    const s = new Set<string>();
    for (let id: string | undefined = focus; id; id = model.get(id)?.parent) s.add(id);
    return s;
  }, [focus]);

  /* Everything animated lives in refs → no React renders during pan/zoom/drag/tween. */
  const wrap = useRef<HTMLDivElement>(null);
  const world = useRef<HTMLDivElement>(null);
  const zoomEl = useRef<HTMLSpanElement>(null);
  const nodeEls = useRef(new Map<string, HTMLDivElement>());
  const edgeEls = useRef(new Map<string, SVGPathElement>());
  const shown = useRef(new Map<string, XY>());
  const off = useRef(new Map<string, XY>());
  const cam = useRef<Cam>({ x: 0, y: 0, s: 1 });
  const nodeAnim = useRef<{ t0: number; dur: number; from: Map<string, XY>; to: Map<string, XY> } | null>(null);
  const camAnim = useRef<{ t0: number; dur: number; from: Cam; to: Cam } | null>(null);
  const raf = useRef(0);
  const frameReq = useRef<{ ids: string[]; instant?: boolean } | null>(null);
  const lastFrame = useRef<string[]>(["root", ...model.get("root")!.children]);
  const openRef = useRef(open);
  const edgesRef = useRef(edges);
  const inited = useRef(false);
  const suppressClick = useRef(false);
  openRef.current = open;
  edgesRef.current = edges;

  const setT = (id: string) => {
    const el = nodeEls.current.get(id), p = shown.current.get(id);
    if (el && p) el.style.transform = `translate3d(${p.x}px,${p.y}px,0)`;
  };
  const drawEdges = () => {
    for (const e of edgesRef.current) {
      const a = shown.current.get(e.from), b = shown.current.get(e.to);
      if (!a || !b) continue;
      const x1 = a.x + W / 2, y1 = a.y + model.get(e.from)!.h, x2 = b.x + W / 2, y2 = b.y;
      const dy = Math.max(40, Math.abs(y2 - y1) / 2);
      edgeEls.current.get(e.key)?.setAttribute("d", `M${x1} ${y1} C${x1} ${y1 + dy} ${x2} ${y2 - dy} ${x2} ${y2}`);
    }
  };
  const apply = () => {
    const { x, y, s } = cam.current;
    if (world.current) world.current.style.transform = `translate3d(${x}px,${y}px,0) scale(${s})`;
    if (zoomEl.current) zoomEl.current.textContent = `${Math.round(s * 100)}%`;
  };

  const loop = useCallback((now: number) => {
    let alive = false;
    const na = nodeAnim.current;
    if (na) {
      const k = na.dur ? Math.min(1, (now - na.t0) / na.dur) : 1, e = ease(k);
      na.to.forEach((t, id) => {
        const f = na.from.get(id)!;
        shown.current.set(id, { x: f.x + (t.x - f.x) * e, y: f.y + (t.y - f.y) * e });
        setT(id);
      });
      drawEdges();
      if (k < 1) alive = true; else nodeAnim.current = null;
    }
    const ca = camAnim.current;
    if (ca) {
      const k = ca.dur ? Math.min(1, (now - ca.t0) / ca.dur) : 1, e = ease(k);
      cam.current = {
        x: ca.from.x + (ca.to.x - ca.from.x) * e,
        y: ca.from.y + (ca.to.y - ca.from.y) * e,
        s: ca.from.s + (ca.to.s - ca.from.s) * e,
      };
      apply();
      if (k < 1) alive = true; else camAnim.current = null;
    }
    if (alive) raf.current = requestAnimationFrame(loop);
  }, []);
  const kick = useCallback(() => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(loop);
  }, [loop]);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  /* Layout changed → tween nodes (new ones grow out of their parent) and frame the camera. */
  useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const to = new Map<string, XY>();
    pos.forEach((p, id) => {
      const o = off.current.get(id);
      to.set(id, { x: p.x + (o?.x ?? 0), y: p.y + (o?.y ?? 0) });
    });
    const from = new Map<string, XY>();
    to.forEach((t, id) => {
      const par = model.get(id)!.parent;
      from.set(id, shown.current.get(id) ?? (par ? from.get(par) : undefined) ?? t);
    });
    for (const id of [...shown.current.keys()]) if (!to.has(id)) shown.current.delete(id);
    from.forEach((f, id) => { shown.current.set(id, { ...f }); setT(id); });
    drawEdges();

    const first = !inited.current;
    inited.current = true;
    const instant = first || reduceMotion() || !!frameReq.current?.instant;
    nodeAnim.current = { t0: performance.now(), dur: instant ? 0 : MOVE_MS, from, to };

    const req = frameReq.current ?? (first ? { ids: lastFrame.current } : null);
    frameReq.current = null;
    if (req) {
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      for (const id of req.ids) {
        const t = to.get(id);
        if (!t) continue;
        x0 = Math.min(x0, t.x); x1 = Math.max(x1, t.x + W);
        y0 = Math.min(y0, t.y); y1 = Math.max(y1, t.y + model.get(id)!.h);
      }
      if (x0 <= x1) {
        const vw = el.clientWidth, vh = el.clientHeight;
        const pad = vw < 900 ? 28 : 72;
        const s = clamp(Math.min((vw - pad * 2) / (x1 - x0), (vh - pad * 2) / (y1 - y0)), MIN_S, 1);
        camAnim.current = {
          t0: performance.now(),
          dur: instant ? 0 : CAM_MS,
          from: { ...cam.current },
          to: { s, x: vw / 2 - ((x0 + x1) / 2) * s, y: vh / 2 - ((y0 + y1) / 2) * s },
        };
      }
    }
    kick();
  }, [pos, tick, kick]);

  const zoomAt = (cx: number, cy: number, f: number) => {
    const r = wrap.current!.getBoundingClientRect();
    const px = cx - r.left, py = cy - r.top, c = cam.current;
    const s2 = clamp(c.s * f, MIN_S, MAX_S), k = s2 / c.s;
    cam.current = { x: px - (px - c.x) * k, y: py - (py - c.y) * k, s: s2 };
    apply();
  };
  const zoomBy = (f: number) => {
    const el = wrap.current!, c = cam.current;
    const s2 = clamp(c.s * f, MIN_S, MAX_S), k = s2 / c.s;
    const px = el.clientWidth / 2, py = el.clientHeight / 2;
    camAnim.current = { t0: performance.now(), dur: 260, from: { ...c }, to: { x: px - (px - c.x) * k, y: py - (py - c.y) * k, s: s2 } };
    kick();
  };

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      frameReq.current = { ids: lastFrame.current, instant: true };
      setTick((t) => t + 1);
    });
    ro.observe(el);
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camAnim.current = null;
      zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0012)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => { ro.disconnect(); el.removeEventListener("wheel", onWheel); };
  }, []);

  /* ── Open / collapse ── */
  const frame = (ids: string[]) => { frameReq.current = { ids }; lastFrame.current = ids; };
  const activate = (id: string) => {
    const m = model.get(id)!;
    if (m.kind !== "opt" || !m.children.length) return;
    const next = new Set(openRef.current);
    if (next.has(id)) {
      closeTree(next, id);
      const p = m.parent!;
      frame([p, ...model.get(p)!.children]);
      setFocus(p);
    } else {
      if (!m.multi) for (const s of model.get(m.parent!)!.children) if (s !== id) closeTree(next, s); // collapse siblings' branches
      next.add(id);
      frame([id, ...m.children]);
      setFocus(id);
    }
    setOpen(next);
  };
  const startOver = () => {
    off.current.clear();
    frame(["root", ...model.get("root")!.children]);
    setFocus("root");
    setOpen(new Set(["root"]));
    setTick((t) => t + 1);
  };
  const fit = () => { frameReq.current = { ids: lastFrame.current }; setTick((t) => t + 1); };

  const lit = (id: string, on: boolean) => {
    for (const e of edgesRef.current)
      if (e.from === id || e.to === id) edgeEls.current.get(e.key)?.classList.toggle("lit", on);
  };

  /* ── Background pan + pinch ── */
  const ptrs = useRef(new Map<number, XY>());
  const lastDist = useRef(0);
  const onDown = (e: React.PointerEvent) => {
    if (e.button !== 0 || (e.target as HTMLElement).closest(".cn-node,.cn-hud")) return;
    wrap.current!.setPointerCapture(e.pointerId);
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    camAnim.current = null;
    wrap.current!.classList.add("grabbing");
    if (ptrs.current.size === 2) {
      const [a, b] = [...ptrs.current.values()];
      lastDist.current = Math.hypot(a.x - b.x, a.y - b.y);
    }
  };
  const onMove = (e: React.PointerEvent) => {
    const prev = ptrs.current.get(e.pointerId);
    if (!prev) return;
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.current.size === 1) {
      cam.current.x += e.clientX - prev.x;
      cam.current.y += e.clientY - prev.y;
      apply();
    } else if (ptrs.current.size === 2) {
      const [a, b] = [...ptrs.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (lastDist.current) zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, d / lastDist.current);
      lastDist.current = d;
    }
  };
  const onUp = (e: React.PointerEvent) => {
    ptrs.current.delete(e.pointerId);
    if (!ptrs.current.size) wrap.current!.classList.remove("grabbing");
  };

  /* ── Node drag; a click without movement activates the node ── */
  const startDrag = (e: React.PointerEvent<HTMLDivElement>, id: string) => {
    if (e.button !== 0) return;
    suppressClick.current = false;
    const el = e.currentTarget;
    const sx = e.clientX, sy = e.clientY;
    const p0 = { ...shown.current.get(id)! };
    const base = pos.get(id)!;
    let moved = false, f = 0;
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (!moved && Math.hypot(dx, dy) < 4) return;
      if (!moved) { moved = true; el.classList.add("dragging"); nodeAnim.current = null; }
      const nx = p0.x + dx / cam.current.s, ny = p0.y + dy / cam.current.s;
      off.current.set(id, { x: nx - base.x, y: ny - base.y });
      shown.current.set(id, { x: nx, y: ny });
      cancelAnimationFrame(f);
      f = requestAnimationFrame(() => { setT(id); drawEdges(); });
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      el.classList.remove("dragging");
      if (moved) suppressClick.current = true;
      else activate(id);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div
      ref={wrap}
      className="cn-wrap"
      style={{ "--cn-edge-width": edgeW } as React.CSSProperties}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <div ref={world} className="cn-world">
        <svg className="cn-edges" width="1" height="1" aria-hidden="true">
          {edges.map((e) => (
            <path
              key={e.key}
              ref={(el) => { el ? edgeEls.current.set(e.key, el) : edgeEls.current.delete(e.key); }}
              className={`edge${pathSet.has(e.to) ? " path" : ""}`}
            />
          ))}
        </svg>

        {[...pos.keys()].map((id) => {
          const m = model.get(id)!;
          const isOpen = open.has(id) && m.kind === "opt";
          const cls = [
            "cn-node",
            m.kind,
            isOpen && "open",
            focus === id && "here",
            pathSet.has(id) && "onpath",
            m.multi && "multi",
            m.kind === "opt" && !m.children.length && "dead",
          ].filter(Boolean).join(" ");
          const eyebrow = m.kind === "root" ? "question" : m.kind === "art" ? "article" : m.multi ? "answer · pick any" : "answer";
          const body = (
            <>
              <div className="eyebrow">{eyebrow}</div>
              <h3>{m.label}</h3>
              {m.sub && <p>{m.sub}</p>}
            </>
          );
          return (
            <div
              key={id}
              ref={(el) => { el ? nodeEls.current.set(id, el) : nodeEls.current.delete(id); }}
              className={cls}
              style={{ width: W, height: m.h }}
              onPointerDown={(e) => startDrag(e, id)}
              onPointerEnter={() => lit(id, true)}
              onPointerLeave={() => lit(id, false)}
            >
              {m.kind === "art" ? (
                <a
                  className="cn-card"
                  href={`${basePath}/${m.code}`}
                  title={m.code}
                  draggable={false}
                  onClick={(e) => { if (suppressClick.current) { e.preventDefault(); suppressClick.current = false; } }}
                >
                  {body}
                </a>
              ) : (
                <div
                  className="cn-card"
                  role={m.kind === "opt" ? "button" : undefined}
                  tabIndex={m.kind === "opt" ? 0 : undefined}
                  aria-expanded={m.kind === "opt" && m.children.length ? isOpen : undefined}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), activate(id))}
                >
                  {body}
                </div>
              )}
              {m.kind === "opt" && m.children.length > 0 && (
                <span className="child-badge">{isOpen ? "▾" : "▸"} {m.children.length}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* <div id="legend" className="cn-hud">
        <div className="row"><span className="dot core" /> question</div>
        <div className="row"><span className="dot content" /> answer</div>
        <div className="row"><span className="dot utility" /> article</div>
        <div className="hint">drag background to pan · scroll to zoom · click a node to open its branch · drag nodes to rearrange</div>
      </div> */}

      <div className="cn-hud cn-controls">
        <div id="panel" className={`cn-panel${panelOpen ? "" : " is-hidden"}`}>
          <div className="cn-row">
            <button type="button" onClick={() => zoomBy(1 / 1.25)} aria-label="Zoom out">−</button>
            <span ref={zoomEl} id="zoom-label">100%</span>
            <button type="button" onClick={() => zoomBy(1.25)} aria-label="Zoom in">+</button>
          </div>
          <button type="button" onClick={fit}>Fit view</button>
          <button type="button" onClick={startOver}>Start over</button>
          <label className="cn-slider">
            <span>Line thickness</span>
            <input type="range" min={1} max={8} step={0.5} value={edgeW} onChange={(e) => setEdgeW(Number(e.target.value))} />
          </label>
        </div>
        <button type="button" className="cn-toggle" aria-expanded={panelOpen} aria-controls="panel" onClick={() => setPanelOpen((v) => !v)}>
          {panelOpen ? "Hide controls" : "Controls"}
        </button>
      </div>
    </div>
  );
}