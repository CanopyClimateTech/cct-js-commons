const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './build/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: {
            type: 'commonjs2'
        }
    },
    resolve: {
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            path: require.resolve('path-browserify'),
            fs: false,
            dns: false,
            net: false,
            tls: false
        },
        extensions: ['.js']
    },
    module: {
        rules: [{}]
    },
    plugins: [
        // enable to troubleshoot large bundle sizes
        // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)()
        new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
    ],
    externals: {
        // AWS SDK v3 is only available in the nodejs18.x+ runtime
        '@aws-sdk/client-secrets-manager': '@aws-sdk/client-secrets-manager',
        crypto: 'crypto'
    },
    target: 'node18.0'
};
