/**
 * @jsx React.DOM
 */
var App = App || {};

(function() {
  "use strict";
  
  var ListItem = App.ListItem;

  App.List = React.createClass({
    render: function() {
      
      var items = this.props.todos.map(function(todo) {
        return (
          <ListItem todo={todo} onDestroy={todo.destroy.bind(todo)} />
        );
      });
      
      return (
        <ul className="list">
          {items}
        </ul>
      );
    }
  });
}());