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
          <span className="text">{this.props.todo.get("text")}</span>
        </li>
      );
    }
  });
})();