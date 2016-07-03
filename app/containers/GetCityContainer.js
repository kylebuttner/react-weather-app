var React = require('react');
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  getInitialState: function () {
    return {
      cityName: ''
    }
  },
  handleUpdateCity: function (e) {
    this.setState({
      cityName: e.target.value
    });
  },
  handleSubmitCity: function (e) {
    e.preventDefault();
    var cityName = this.state.cityName;
    this.setState({
      cityName: ''
    })
  },
  render: function () {
    return (
      <GetCity
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        cityName={this.state.cityName}/>
    )
  }
});

module.exports = GetCityContainer;
