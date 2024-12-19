import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    historyApiFallback: true,
  },
  base: '/',
  define: {
    'process.env.GOOGLE_SHEET_ID': JSON.stringify(process.env.GOOGLE_SHEET_ID),
    'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY)
  }
})
