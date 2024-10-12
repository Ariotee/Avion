import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	alias: {
		'~': path.resolve(__dirname, './src'),
		'@widgets': path.resolve(__dirname, './src/widgets'),
	},
	plugins: [react()],
})
