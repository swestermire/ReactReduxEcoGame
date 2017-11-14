module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
 },
    devtool: "eval-source-map",
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
       }
     },
      {include: /\.json$/, loaders: ["json-loader"]}
    ]
 },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
 },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
 }
};
