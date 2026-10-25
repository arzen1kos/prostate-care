import { defineConfig } from 'astro/config';
// import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
import icon from 'astro-icon';
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
            // viteStaticCopy({
            //     targets: [{
            //         src:'./src/**/*', // copy all files under src
            //         dest: './' // place at root of dist/
            //     }]
            // })
        ]
    },
    integrations: [react(), icon()],
    devToolbar: {
        enabled: false
    },
    // adapter: netlify(),
    publicDir: './public',
    outDir: './dist',
    redirects: {
        // '/[...slug]': {
            // status: 302,
            // destination: '/404'
        // }
    }
});