var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  'fullPageBg': {
    backgroundImage: 'url("app/images/pattern.svg")',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}

function Home(props) {
  return (
    <div style={styles.fullPageBg}>
      <h1>Hello from Home</h1>
      <GetCityContainer />
    </div>
  )
}

module.exports = Home;
