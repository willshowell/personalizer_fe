var React = require('react');

var UsernameField = require('./UsernameField');
var RadioGroup = require('./RadioGroup');

var tweetCountOptions = [10,100,1000];

module.exports = React.createClass({
  
  getInitialState: function() {
    return {
      username: '',
      tweetCount: tweetCountOptions[0],
      includeRetweets: false
    };
  },
  
  handleUsernameInput: function(newUsername) {
    this.setState({
      username: newUsername
    });
  },
  
  handleGo: function() {
    alert("Username: " + this.state.username + "; count: " + this.state.tweetCount +
          "; include: " + this.state.includeRetweets);
  },
  
  handleTweetCountInput: function(newTweetCount) {
    this.setState({
      tweetCount: newTweetCount
    });
  },
  
  handleIncludeRetweetsUpdate: function(newIncludeRetweets) {
    this.setState({
      includeRetweets: newIncludeRetweets
    });
  },

  render: function() {
    return (
      <div className="ui two column middle aligned very relaxed stackable grid">
        <div className="column">
          <div className="ui form">
            <UsernameField 
              username={this.state.username} 
              onTextChange={this.handleUsernameInput}
              onGo={this.handleGo} />
          </div>
        </div>
        <div className="ui vertical divider">
          <i className="twitter icon"></i>
        </div>
        <div className="left aligned column">
          <div className="ui form">
            <RadioGroup 
              options={tweetCountOptions} 
              groupLabel="Tweets to parse"
              selectedOption={this.tweetCount} 
              onNewSelection={this.handleTweetCountInput} />
          </div>
            <div className="ui form">
            <div className="grouped fields">
              <label>Include retweets?</label>
              <div className="field">
                <div className="ui toggle checkbox">
                  <input type="checkbox" name="public" />
                  <label></label>
                </div>
              </div>
            </div>                 
          </div>
        </div>
      </div>
    );
  }	
	
});