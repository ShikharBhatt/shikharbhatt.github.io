import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

// Transform .js files that contain JSX (legacy CRA structure)
function jsxInJs() {
  return {
    name: 'jsx-in-js',
    async transform(code, id) {
      if (!id.match(/src\/.*\.js$/)) return null;
      return transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic',
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    jsxInJs(),
    react(),
  ],
  base: '/',
  build: {
    outDir: 'build',
    sourcemap: true,
  },
});
