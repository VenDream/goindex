module.exports = function getBabelConfig(api) {
  api.cache.using(() => process.env.NODE_ENV === 'development');

  return {
    presets: [
      [
        '@babel/env',
        {
          corejs: 3,
          loose: true,
          debug: false,
          modules: false,
          useBuiltIns: 'usage',
        },
      ],
    ],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-export-default-from',
    ],
  };
};
