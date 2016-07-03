var React = require('react');
var PropTypes = React.PropTypes;

function GetCity(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitCity}>
        <div className="form-group">
          <input
            placeholder="Flower Mound, Texas"
            onChange={props.onUpdateCity}
            type="text"
            value={props.cityName}/>
        </div>
        <div>
          <button
            className="btn btn-block btn-success">
            Get Weather
          </button>
        </div>
      </form>
    </div>
  )
}

GetCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  cityName: PropTypes.string.isRequired
}

module.exports = GetCity;
