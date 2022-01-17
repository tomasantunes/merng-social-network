module: {
    rules: [
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.s[a|c]ss$/,
            loader: 'sass-loader!style-loader!css-loader'
        },
        {
            test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }
    ]
}