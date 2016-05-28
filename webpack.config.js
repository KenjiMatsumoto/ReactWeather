module.exports = {
  //ビルドの起点となるファイルパスの指定
  //Arrayやobjectでの複数指定が可能
  entry: './app/app.jsx',
  output: {
    //出力先のファイルパスを指定
    path: __dirname,
    //出力ファイル名の設定
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    //ビルド対象に含めたい(requireしている)ファイルの拡張子を指定します
    extentions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        //事前にbabelを利用する場合は、以下のコマンドを実施して別途インストールが必要
        //npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
        loader: 'babel-loader',
        //
        query: {
          //loaderに渡したいクエリパラメータを指定します
          presets: ['react', 'es2015', 'stage-0']
        },
        //ビルドの対象ファイルを指定する(正規表現の利用が可能)
        test: /\.jsx?$/,
        //ビルドの除外対象ファイルを指定する(includeの場合はビルドに含むものを指定する)
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
