var React = require('react');


module.exports = React.createClass({
  
  handleTextChange: function() {
    this.props.onTextChange(
      this.refs.usernameInput.value                      
    );  
  },
  
  handleGo: function() {
    this.props.onGo();
  },
  
  render: function() {
    return (
      <div className="field">
        <div className="ui left icon action input">
          <input type="text" 
            value={this.props.username} 
            onChange={this.handleTextChange}
            placeholder="username" 
            ref="usernameInput" />
          <i className="at icon"></i>
          <button className="ui blue button" onClick={this.handleGo}>Go</button>
        </div>
      </div>
    );
  }	
	
});