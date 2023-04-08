const pkg = require('./package');

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
    module: {
      rules: [
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            type: 'asset/resource',
        },
      ],
    },
  },
  navigations: {
    'advfront.main': '/advfront',
  },
  features: {
    advfront: {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value',
  },
};
