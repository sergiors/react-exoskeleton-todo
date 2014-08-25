/**
 * @jsx React.DOM
 */
var App = App || {};

(function() {
  "use strict";

  var Input = App.Input;

  var ESCAPE_KEY = 27;
  var ENTER_KEY = 13;

  App.ListItem = React.createClass({
    getInitialState: function() {
      return {
        editing: false,
        text: ""
      }
    },

    render: function() {
      var classes = React.addons.classSet({
        active: this.state.editing
      });

      var isDone = React.addons.classSet({
        done: this.props.todo.get("done")
      });

      var id = "id_" + this.props.todo.id;

      return (
        <li className={classes}>
          <input className="done-update" type="checkbox"
            checked={this.props.todo.get("done")} onChange={this.onChangeCheckbox} />
          <div className="view">
            <label onDoubleClick={this.handleEdit.bind(this,id)} className={isDone}>
              {this.props.todo.get("text")}
            </label>
            <input className="text-update" ref={id} type="text"
              value={this.state.text} onChange={this.onChange}
              onKeyDown={this.handleKeyDown} />
          </div>
          <span className="destroy" onClick={this.props.onDestroy}>&times;</span>
        </li>
      );
    },

    onChangeCheckbox: function(e) {
      this.props.onSave({
        done: e.target.checked
      });
    },

    onChange: function(e) {
      this.setState({
        text: e.target.value
      });
    },

    handleEdit: function( id ) {
      console.log(id);
      this.refs[id].getDOMNode().focus();
      console.log(this.refs[id].getDOMNode());
      this.setState({
        editing: true,
        text: this.props.todo.get("text")
      });
    },

    handleKeyDown: function(e) {
      switch (e.which) {
        case ESCAPE_KEY:
          this.setState({editing: false});
          break;
        case ENTER_KEY:
          this.handleSubmit();
          break;
      }
    },

    handleSubmit: function() {
      var text = this.state.text.trim();

      if (!text) {
        return this.props.onDestroy();
      }

      this.props.onSave({
        text: text
      });
      this.setState({
        editing: false,
        text: ""
      });
    }
  });
})();