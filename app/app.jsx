//jsの設定ファイル読み込み
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//foundation用のcssファイル読み込み
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//cssファイルの読み込み
require('style!css!applicationStyles')

//メイン処理
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
