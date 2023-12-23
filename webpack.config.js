const config = {
    mode: 'production',
    entry: {
        index: './local/templates/main/components/bitrix/news.detail/page.services/src/js/index.js',
        // contacts: ''
    },
    output: {
        filename:'[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}

module.exports = config;