import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'unit-conversion',
  favicon: 'https://scumon.gitee.io/unit-conversion/scumon.jpeg',
  logo: 'https://scumon.gitee.io/unit-conversion/scumon.jpeg',
  outputPath: 'docs-dist',
  base: isProd ? '/unit-conversion/' : '/',
  publicPath: isProd ? '/unit-conversion/' : '/',
});
