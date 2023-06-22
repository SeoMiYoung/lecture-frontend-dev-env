const path = require('path'); 

module.exports = {
  mode: 'development',
  entry: { // entry가 여러개일수도 있다
    main: './src/app.js' // 상대경로
  },
  output: {
    path: path.resolve('./dist'), // path는 절대경로로
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.resolve('./my-webpack-loader.js')
        ]
      }
    ]
  }
}