var App = App || {};

(function() {
  "use strict";

  App.Todo = Backbone.Model.extend({
    defaults:{
      text: "",
      done: false
    }
  });

})();