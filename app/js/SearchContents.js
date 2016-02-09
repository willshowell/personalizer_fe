var React = require('react');

var SearchContentsTwitter = require('./SearchContentsTwitter');
var SearchContentsMedium = require('./SearchContentsMedium');

module.exports = React.createClass({

  render: function() {
    var searchContents;
    if (this.props.menuItem == 'twitter') {
    	searchContents = <SearchContentsTwitter />;
    } else if (this.props.menuItem == 'medium') {
    	searchContents = <SearchContentsMedium />;
    } else {
    	searchContents = <div>Uh oh</div>;
    }
    
    return <div className="ui bottom attached segment">
        {searchContents}
      </div>
  }	
	
});