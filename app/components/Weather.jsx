var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  //stateデフォルト値のセット
  getInitialState: function() {
    return{
      isLoading: false
    }
  },
  handleSearch: function(location) {
    //受け取った値をセットする
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });

  },
  render: function() {
    //Stateのオブジェクト値をセット
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    //プロパティへhandleセット(propsで呼び出し可能)
    //例：this.props.onSearch(WeatherForm.jsx内にて)
    //プロパティへ値をセット(temp,location)
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
