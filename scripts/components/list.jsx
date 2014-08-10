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
          <ListItem key={todo.id} todo={todo} onDestroy={todo.destroy.bind(todo)} />
        );
      });

      var total = this.props.todos.length;
      var s = total <= 1 ? '' : 's';

      return (
        <div>
          <p className="total">{total} <small>Task{s}</small></p>
          <ul className="list">
            {items}
          </ul>
        </div>
      );
    }
  });
}());
