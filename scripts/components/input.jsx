"use strict";

var React = require("react");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    }
  },
  
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.text} />
        <button type="submit">Add</button>
      </form>
    );
  },
  
  onChange: function(e) {
    this.setState({
      text: e.target.value
    });
  },
  
  handleSubmit: function(e) {
    e.preventDefault();
    
    this.props.onSave(this.state.text);
    this.setState({
      text: ""
    });
  },
});