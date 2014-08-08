/**
 * @jsx React.DOM
 */
var App = App || {};

(function() {
  "use strict";

  App.ListItem = React.createClass({
    render: function() {
      return (
        <li>
          <span>{this.props.todo.get("text")}</span>
          <span className="destroy" onClick={this.props.onDestroy}>&times;</span>
        </li>
      );
    }
  });
})();