const webpack = require('webpack')
const buildInfo = require('./buildinfo.js')

module.exports = {
    env: {
        ...buildInfo
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'BritLitProject',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: buildInfo['description']},
            {hid: 'version', name: 'version', content: buildInfo['version']}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},

    modules: [
        'bootstrap-vue/nuxt'
    ],
    router: {
        base: '/BritLitProject/',
        mode: 'hash'
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
                config.devtool = 'eval-source-map'
            }
        }
    },

    generate: {
        dir: 'docs'
    }
}
