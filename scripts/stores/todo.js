var model = require("model");

var todos = [];
var changes = [];

var emitChange = function() {
  changes.forEach(function(callback) {
    callback();
  });
};

module.exports =  {
  all: function() {
    return todos;
  },
  
  create: function(text) {
    var id = Date.now();
  
    todos.push({
      id: id,
      text: text
    });
    
    emitChange();
    
    return true;
  },
  
  subscribe: function(callback) {
    changes.push(callback);
  }
};