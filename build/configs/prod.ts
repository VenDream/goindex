/**
 * Prod config
 * @author VenDream
 * @since 2020-4-20
 */

import path from 'path';
import webpack from 'webpack';
import getLoaders from '../loaders';

const srcDir = path.resolve(__dirname, '../../src');
const distDir = path.resolve(__dirname, '../../dist');

const prodConfig: webpack.Configuration = {
  mode: 'production',
  name: 'goindex',
  target: 'web',
  entry: path.resolve(srcDir, 'index.ts'),
  devtool: false,
  output: {
    path: distDir,
    filename: 'worker.js',
  },
  resolve: {
    modules: ['node_modules', srcDir],
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: getLoaders(true),
  },
  plugins: [],
  stats: {
    maxModules: 0,
    children: false,
  },
  optimization: {
    minimize: true,
  },
};

export default prodConfig;
