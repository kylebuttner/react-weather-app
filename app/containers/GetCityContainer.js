var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
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
    var cityName = this.state.cityName;
    this.setState({
      cityName: ''
    })
  },
  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        cityName={this.state.cityName}/>
    )
  }
});

module.exports = GetCityContainer;
