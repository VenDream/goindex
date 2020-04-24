/**
 * Dev config
 * @author VenDream
 * @since 2020-4-24
 */

import webpackMerge from 'webpack-merge';
import baseConfig from './base';
import getPlugins from '../plugins';
import getLoaders from '../loaders';

const devConfig = webpackMerge(baseConfig, {
  mode: 'development',
  module: {
    rules: getLoaders(true),
  },
  plugins: getPlugins(true),
  optimization: {
    minimize: false,
  },
});

export default devConfig;
