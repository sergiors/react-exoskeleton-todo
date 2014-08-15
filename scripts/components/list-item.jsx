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
      
      return (
        <li className={classes}>
          <label onDoubleClick={this.handleEdit}>
            {this.props.todo.get("text")}
          </label>
          <span className="destroy" onClick={this.props.onDestroy}>&times;</span>
          <input type="text" value={this.state.text} onChange={this.onChange} onKeyDown={this.handleKeyDown} />
        </li>
      );
    },
      
    onChange: function(e) {
      this.setState({
        text: e.target.value
      });
    },
 
    handleEdit: function() {
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