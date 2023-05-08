import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    define: {
      __VITE_REACT_APP_BASE_URL__: `"${process.env.VITE_REACT_APP_BASE_URL}"`, // wrapping in "" since it's a string
    },
    build: {
      rollupOptions: {
          output:{
              manualChunks(id) {
                  if (id.includes('node_modules')) {
                      return id.toString().split('node_modules/')[1].split('/')[0].toString();
                  }
              }
          }
      }
  },
  plugins: [react()],
})