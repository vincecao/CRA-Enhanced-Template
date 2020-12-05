const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'module-resolver',
    {
      root: ['./'],
      alias: {
        '@components': './src/components',
        '@utils': './src/utils',
        '@contexts': './src/contexts',
        '@pages': './src/pages',
        '@services': './src/services',
        '~': './src',
      },
      transformFunctions: [
        'require',
        'require.resolve',
        'System.import',
        'jest.genMockFromModule',
        'jest.mock',
        'jest.unmock',
        'jest.doMock',
        'jest.dontMock',
      ],
    },
  ])
);
