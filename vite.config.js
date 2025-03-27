import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Technoshop/',
  server: {
    port: 3000,
    host: true,
    strictPort: false,
    https: false,
    open: true,
    proxy: {},
    cors: true,
    force: true,
    hmr: {
      port: 3000,
      overlay: false
    }
  },
  build: {
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari13'],
    minify: 'terser',
    cssMinify: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          styles: ['bootstrap']
        }
      }
    }
  },
  css: {
    devSourcemap: true,
    modules: {
      scopeBehaviour: 'local'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          $mobile: 480px;
          $tablet: 768px;
          $desktop: 1024px;
        `
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@firebase/auth']
  }
})
