// Imported by: components/Markdown.astro,
// // components/about/ImageComparison.astro,
// components/about/MainContent.astro,
// components/common/ChatBox.astro,
// components/common/ContextAlert.astro,
// components/common/EdgeFunctionExplainer.astro,
// components/common/Logo.astro,
// components/common/Markdown.astro,
// components/home/FoundationSection.astro,
// components/home/HeroSection.astro,
// components/home/InfoSection.astro,
// components/home/ServicesSection.astro,
// components/icons/Icon.astro,
// components/layout/Footer.astro,
// components/layout/Header.astro,
// components/navigation/MainNav.astro,
// components/navigation/NavItem.astro,
// components/shared/NavIcons.astro,
// components/shared/PixelRibbon.astro,
// components/ui/ColorPalette.astro,
// components/ui/PixelRibbon.astro,
// components/ui/Section.astro,
// content.config.ts, layouts/BaseLayout.astro,
// layouts/FullPageLayout.astro,
// layouts/Layout.astro,
// lib/utils/helpers.ts, lib/utils/highlighter.ts, pages/about.astro,
// pages/api/blob.ts, pages/api/blobs.ts, pages/api/blobs/[key].ts, pages/api/revalidate.ts, pages/blobs/_components/NewShape.tsx, pages/blobs/_components/ShapeEditor.tsx, pages/blobs/_components/ShapePreview.tsx, pages/blobs/_components/StoredShapes.tsx, pages/blobs/index.astro,
// pages/bluenode/d3-version.astro,
// pages/bluenode/index.astro,
// pages/design-system.astro,
// pages/get-involved/index.astro,
// pages/help/index.astro,
// pages/index.astro,
// pages/information-and-support/index.astro,
// pages/news/index.astro,
// pages/newsletter.astro,
// pages/research/index.astro,
// pages/settings/index.astro,
// pages/shop/index.astro
import type { APIRoute } from 'astro';
import { getStore } from '@netlify/blobs';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
    try {
        const key = params.key;
        if (!key) {
            return new Response(
                JSON.stringify({
                    error: 'Missing key parameter'
                }),
                { status: 400 }
            );
        }

        const blobStore = getStore({ name: 'shapes', consistency: 'strong' });
        const data = await blobStore.getJSON(key);
        
        return new Response(
            JSON.stringify(data)
        );
    } catch (e) {
        console.error(e);
        return new Response(
            JSON.stringify({
                error: 'Failed fetching blob'
            }),
            { status: 404 }
        );
    }
};
