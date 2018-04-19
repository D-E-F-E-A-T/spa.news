const { injectBabelPlugin: RewireInject } = require('react-app-rewired');
const RewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
    /* eslint-disable no-param-reassign */

    // Only load Components that are actually being used.
    config = RewireInject(['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }], config);

    // treat "~" as an alias for the src folder (root imports)
    config = RewireInject(['root-import', {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
    }], config);

    // Enable CSS-modules (using sass)
    config = RewireCssModules(config, env);

    return config;
    /* eslint-enable no-param-reassign */
};
