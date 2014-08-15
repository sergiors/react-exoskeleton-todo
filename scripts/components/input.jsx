/**
 * @jsx React.DOM
 */
var App = App || {};

(function() {
  "use strict";

  App.Input = React.createClass({
    getInitialState: function() {
      return {
        text: ""
      }
    },
    
    render: function() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} autoFocus={true} />
          <button type="submit">Add</button>
        </form>
      );
    },
    
    onChange: function(e) {
      this.setState({
        text: e.target.value
      });
    },

    handleSubmit: function(e) {
      e.preventDefault();
      
      var text = this.state.text.trim();

      if (!text) {
        return false;
      }

      this.props.onSave(text);
      this.setState({
        text: ""
      });
    },
  });
})();
