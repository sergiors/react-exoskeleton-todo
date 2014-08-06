var App = App || {};

(function() {
  "use strict";
  
  var Todos = Backbone.Collection.extend({
    model: App.Todo,
    localStorage: new Backbone.LocalStorage("todos")
  });
  
  App.Todos = new Todos;
})();