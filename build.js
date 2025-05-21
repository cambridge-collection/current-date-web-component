const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/currentDate.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/currentDate.min.js',
  format: 'iife'
}).catch(() => process.exit(1));
