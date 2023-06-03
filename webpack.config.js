const webpack = require("@nativescript/webpack");

module.exports = (env) => {
    webpack.init(env);

    webpack.chainWebpack((config) => {
        config.module.rules
            .get('vue')
            .uses.get('vue-loader')
            .loader(require.resolve('vue-loader'))
            .tap((options) => {
                return {
                    ...options,
                    defineModel: true
                };
            });
    });

    return webpack.resolveConfig();
};
