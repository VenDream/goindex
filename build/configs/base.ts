/**
 * Base webpack config
 * @author VenDream
 * @since 2020-4-24
 */

import path from 'path';
import webpack from 'webpack';

const srcDir = path.resolve(__dirname, '../../src');
const distDir = path.resolve(__dirname, '../../dist');

const baseConfig: webpack.Configuration = {
  name: 'goindex',
  target: 'web',
  entry: {
    app: path.resolve(srcDir, 'app.ts'),
    workder: path.resolve(srcDir, 'worker.ts'),
  },
  devtool: false,
  output: {
    path: distDir,
    filename: '[name].js',
  },
  resolve: {
    modules: ['node_modules', srcDir],
    extensions: ['.js', '.ts'],
  },
  stats: {
    maxModules: 0,
    children: false,
  },
};

export default baseConfig;
