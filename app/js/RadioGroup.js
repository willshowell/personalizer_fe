var React = require('react');


module.exports = React.createClass({
  
  
  handleSelectionChange: function(e) {
    console.log(e);
    console.log("selection tried to change to "+e.currentTarget);
  },
  
  render: function() {
    var optionFields = this.props.options.map( function(option) {
      var isChecked = (option == this.props.selectedOption) ? "checked" : null;
      console.log(this.props.selectedOption);
      return (
        <div className="field" key={option}>
          <div className="ui radio checkbox">
            <input type="radio" 
              name="options"
              value={option}
              defaultChecked={isChecked}
              onClick = {this.handleSelectionChange}
              className="hidden" />
            <label>{option}</label>
          </div>
        </div>     
      );
    }, this);    
    
    return (
      <div className="grouped fields">
        <label htmlFor="options">{this.props.groupLabel}</label>
        {optionFields}      
      </div> 
    );
  }	
	
});