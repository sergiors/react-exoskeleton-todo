"use strict";

var React = require("react");

module.exports = React.createClass({
  render: function() {
    return (
      <li>
        <span className="text">{this.props.text}</span>
      </li>
    );
  }
});