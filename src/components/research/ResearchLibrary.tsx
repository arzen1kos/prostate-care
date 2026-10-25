import { useMemo, useState } from 'react';
import styles from '@styles/research_lib.module.css';

export interface ResearchRecord {
  document_id: string;
  title: string;
  publish_year: number | null;
  document_type: string;
  journal_or_publisher: string | null;
  authors: string | null;
  tags: string[];
  classification_confidence: 'high' | 'medium' | 'low';
}

interface Topic {
  id: string;
  label: string;
}

interface Props {
  entries: ResearchRecord[];
  topics: Topic[];
}

function displayTitle(title: string) {
  return title.replace(/\.pdf$/i, '').replaceAll('_', ' ').replace(/\s+/g, ' ').trim();
}

export default function ResearchLibrary({ entries, topics }: Props) {
  const [query, setQuery] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [year, setYear] = useState('');
  const [sort, setSort] = useState('newest');

  const years = useMemo(
    () => [...new Set(entries.flatMap(({ publish_year }) => publish_year ?? []))].sort((a, b) => b - a),
    [entries],
  );
  const topicCounts = useMemo(
    () => new Map(topics.map(({ id }) => [id, entries.filter(({ tags }) => tags.includes(id)).length])),
    [entries, topics],
  );

  const visibleEntries = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    const filtered = entries.filter((entry) => {
      const searchFields = [
        entry.title,
        entry.authors,
        entry.journal_or_publisher,
        ...entry.tags.map((tag) => topics.find((topic) => topic.id === tag)?.label ?? tag),
      ].filter(Boolean).join(' ').toLocaleLowerCase();
      return (!search || searchFields.includes(search))
        && (!year || (year === 'undated' ? entry.publish_year === null : entry.publish_year?.toString() === year))
        && (!selectedTopics.length || selectedTopics.some((topic) => entry.tags.includes(topic)));
    });

    return filtered.sort((left, right) => {
      if (sort === 'title') return displayTitle(left.title).localeCompare(displayTitle(right.title));
      return (right.publish_year ?? 0) - (left.publish_year ?? 0);
    });
  }, [entries, query, selectedTopics, sort, topics, year]);

  const toggleTopic = (id: string) => {
    setSelectedTopics((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]);
  };

  const resetFilters = () => {
    setQuery('');
    setSelectedTopics([]);
    setYear('');
    setSort('newest');
  };

  return (
    <section className={styles.library} aria-labelledby="research-library-heading">
      <div className={styles.intro}>
        <h2 id="research-library-heading">Browse journal articles and research</h2>
        <p>Search this collection by title, author, research topic, or publication year.</p>
      </div>
      
      <div className={styles.layout}>
        <aside className={styles.filters} aria-label="Research filters">
          <div className={styles.filterHeading}>
            <h3>Filters</h3>
            <button type="button" onClick={resetFilters}>Clear all</button>
          </div>
          <details open>
            <summary>Research topics</summary>
            <div className={styles.topicList}>
              {topics.map(({ id, label }) => (
                <label className={styles.checkRow} key={id}>
                  <input
                    type="checkbox"
                    checked={selectedTopics.includes(id)}
                    onChange={() => toggleTopic(id)}
                  />
                  <span>{label}</span>
                  <small>{topicCounts.get(id) ?? 0}</small>
                </label>
              ))}
            </div>
          </details>
          <label className={styles.yearFilter}>
            Published year
            <select value={year} onChange={(event) => setYear(event.currentTarget.value)}>
              <option value="">All years</option>
              {years.map((item) => <option key={item} value={item}>{item}</option>)}
              {entries.some((entry) => entry.publish_year === null) && <option value="undated">Year unavailable</option>}
            </select>
          </label>
          <p className={styles.sourceNote}>Records link to source documents. Summaries are not yet published.</p>
        </aside>

        <div className={styles.results}>
          <div className={styles.resultToolbar}>
            <p aria-live="polite"><strong>{visibleEntries.length}</strong> results</p>
            <label>
              Sort by
              <select value={sort} onChange={(event) => setSort(event.currentTarget.value)}>
                <option value="newest">Newest</option>
                <option value="title">Title</option>
              </select>
            </label>
          </div>
          {visibleEntries.length > 0 ? (
            <ul className={styles.resultList}>
              {visibleEntries.map((entry) => {
                const title = displayTitle(entry.title);
                const labels = entry.tags
                  .map((id) => topics.find((topic) => topic.id === id))
                  .filter((topic): topic is Topic => Boolean(topic));
                return (
                  <li key={entry.document_id}>
                    <article className={styles.card}>
                      <div className={styles.cardBody}>
                        <p className={styles.eyebrow}>
                          {entry.document_id} <span aria-hidden="true">|</span> {entry.publish_year ?? 'Year unavailable'}
                        </p>
                        <h3><a href={`/research-hub/${encodeURIComponent(entry.document_id)}`}>{title}</a></h3>
                        <p className={styles.publication}>
                          {entry.journal_or_publisher ?? 'Publication details awaiting verification'}
                          {entry.authors && <span> · {entry.authors}</span>}
                        </p>
                        <div className={styles.tags}>
                          {labels.map(({ id, label }) => <span key={id}>{label}</span>)}
                        </div>
                        {entry.classification_confidence !== 'high' && (
                          <p className={styles.review}>Topic classification needs review</p>
                        )}
                      </div>
                      <a
                        className={styles.cardLink}
                        href={`/research-hub/${encodeURIComponent(entry.document_id)}`}
                        aria-label={`View research record: ${title}`}
                      >
                        View record <span aria-hidden="true">→</span>
                      </a>
                    </article>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className={styles.empty} role="status">No articles match these filters. Clear a filter or try a different search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
