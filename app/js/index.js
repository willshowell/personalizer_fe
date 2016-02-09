var React = require('react');
var ReactDOM = require('react-dom');

var SearchBox = require('./SearchBox');

var App = React.createClass({
  
  render: function() {
    return <SearchBox />;
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('react-container')             
);