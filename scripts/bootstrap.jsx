/**
 * @jsx React.DOM
 */
var App = App || {};

(function() {
  "use strict";

  var Input = App.Input;
  var List = App.List;

  var Bootstrap = React.createClass({
    componentDidMount: function() {
      this.props.todos.on("add remove change", this.forceUpdate.bind(this, null));
      this.props.todos.fetch();
    },

    render: function() {
      return (
        <div className="container">
          <h1>Todo List</h1>
          <h2>React and Exoskeleton</h2>
          <Input onSave={this.onSave} />
          <List todos={this.props.todos} />
        </div>
      );
    },

    onSave: function(text) {
      this.props.todos.create({
        text: text
      });
    }
  });

  React.renderComponent(<Bootstrap todos={App.Todos} />, document.getElementById("todos"));
})();
