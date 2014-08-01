"use strict";

var React = require("react");
var Input = require("./input");
var List = require("./list");
var Todo = require("../stores/todo");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    };
  },
  
  componentDidMount: function() {
    Todo.subscribe(function() {
      this.setState({
        todos: Todo.all()
      });
    }.bind(this));
  },
  
  render: function() {
    return (
      <div>
        <Input onSave={this.onSave} model={Todo} />
        <List todos={this.state.todos} />
      </div>
    );
  },
  
  onSave: function(text) {
    Todo.create(text);
  }
});