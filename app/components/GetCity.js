var React = require('react');
var PropTypes = React.PropTypes;

function Button(props) {
  return (
    <div>
      <button
        style={{margin: 10}}
        className="btn btn-block btn-success"
        onClick={props.onSubmitCity}>
          {props.children}
      </button>
    </div>
  )
}

function CitySearchBox(props) {
  return (
    <input
      className="form-control"
      placeholder="Flower Mound, Texas"
      onChange={props.onUpdateCity}
      type="text"
      value={props.cityName} />
  )
}

function getStyles(props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function GetCity(props) {
  return (
    <div style={getStyles(props)}>
      <CitySearchBox
        onUpdateCity={props.onUpdateCity}
        cityName={props.cityName} />
      <Button
        onSubmitCity={props.onSubmitCity}>
        Get Weather
      </Button>
    </div>
  )
}

GetCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  cityName: PropTypes.string.isRequired
}

module.exports = GetCity;
