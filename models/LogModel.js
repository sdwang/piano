//Defines a backbone model class for the log model
var LogModel = Backbone.Model.extend({

  initialize: function() {
    this.set('logDisplay', ' ');
  },

  addToLog: function(note) {
    this.set('logDisplay', this.get('logDisplay') + note + ' ');
  }

});
