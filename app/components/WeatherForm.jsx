var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    //イベント処理には必須となる処理(お約束のようなもの)
    e.preventDefault();

    //テキストボックスから値を取得
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      //値をWeatherのhandleSearchへと渡す
      this.props.onSearch(location);
    }
  },
  render: function() {
    //refから値を取得できる
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
