import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        register: resolve(__dirname, 'src/pages/register.html'),
        govServices: resolve(__dirname, 'src/pages/govServices.html'),
        submitComplaint: resolve(__dirname, 'src/pages/submitComplaint.html'),
        trackComplaint: resolve(__dirname, 'src/pages/trackComplaint.html'),
      }
    }
  },
  server: {
    port: 8080,
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ]
      }
    }
  }
}
