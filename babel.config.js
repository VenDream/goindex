module.exports = function getBabelConfig(api) {
  api.cache.using(() => process.env.NODE_ENV === 'development');

  return {
    presets: [
      [
        '@babel/env',
        {
          corejs: 3,
          loose: true,
          debug: true,
          modules: false,
          useBuiltIns: 'usage',
          exclude: [
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-transform-async-to-generator',
          ],
        },
      ],
    ],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-export-default-from',
      // Uncomment the following lines to transform async/await to promise
      // [
      //   'module:fast-async',
      //   {
      //     spec: true,
      //     compiler: {
      //       promises: true,
      //       generators: false,
      //     },
      //   },
      // ],
    ],
  };
};
