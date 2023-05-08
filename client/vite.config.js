import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    define: {
      __VITE_REACT_APP_BASE_URL__: `"${process.env.VITE_REACT_APP_BASE_URL}"`, // wrapping in "" since it's a string
    },
  plugins: [react()],
})