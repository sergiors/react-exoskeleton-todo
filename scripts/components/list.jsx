"use strict";

var React = require("react");
var ListItem = require("./list-item");

module.exports = React.createClass({
  render: function() {
    var todos = this.props.todos.map(function(todo) {
      return (<ListItem text={todo.text} />);
    });
    
    return (
      <ul className="list">
        {todos}
      </ul>
    );
  }
});