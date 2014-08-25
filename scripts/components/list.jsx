/**
 * @jsx React.DOM
 */
var App = App || {};

(function() {
  "use strict";

  var ListItem = App.ListItem;

  App.List = React.createClass({
    render: function() {

      var tasks = {
        done: 0,
        left: 0
      };

      var items = this.props.todos.map(function(todo) {

        todo.get("done") ? tasks.done++ : tasks.left++;

        return (
          <ListItem
            key={todo.id}
            todo={todo}
            onSave={todo.save.bind(todo)}
            onDestroy={todo.destroy.bind(todo)} />
        );
      });

      return (
        <div>
          <p className="tasks">
            <span className="tasks-done"><strong>{tasks.done}</strong> tasks Done</span>
            <span className="tasks-left"><strong>{tasks.left}</strong> tasks Left</span>
          </p>
          <ul className="list">
            {items}
          </ul>
        </div>
      );
    }
  });
})();
