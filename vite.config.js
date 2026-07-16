import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
    // Load .env so REACT_APP_BACKEND_URL can be passed to code that still
    // expects `process.env.REACT_APP_BACKEND_URL` (kept for compatibility).
    const env = loadEnv(mode, process.cwd(), ['REACT_APP_', 'VITE_']);

    return {
        plugins: [
            react({
                // Allow JSX inside .js files (preserves Emergent-style filenames).
                include: /\.(js|jsx)$/,
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        // Parse JSX from .js files during dependency optimisation as well.
        optimizeDeps: {
            esbuildOptions: {
                loader: { '.js': 'jsx' },
            },
        },
        esbuild: {
            loader: 'jsx',
            include: /src\/.*\.(js|jsx)$/,
            exclude: [],
        },
        define: {
            // Backwards-compat: expose REACT_APP_* as process.env for existing imports.
            'process.env.REACT_APP_BACKEND_URL': JSON.stringify(
                env.REACT_APP_BACKEND_URL || env.VITE_BACKEND_URL || ''
            ),
        },
        server: {
            host: '0.0.0.0',
            port: 3000,
            strictPort: true,
            allowedHosts: true,
        },
        preview: {
            host: '0.0.0.0',
            port: 3000,
            strictPort: true,
            allowedHosts: true,
        },
        build: {
            outDir: 'build',
            sourcemap: false,
            chunkSizeWarningLimit: 1200,
        },
    };
});
