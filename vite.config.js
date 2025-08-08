import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte'],
					utils: ['src/lib/utils']
				}
			}
		},
		cssCodeSplit: true,
		sourcemap: false,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	},
	optimizeDeps: {
		include: ['svelte']
	}
});
