//Defines a backbone model class for the log model
var LogModel = Backbone.Model.extend({

  initialize: function() {
    this.set('logDisplay', '');
  },

  addToLog: function(note) {
    if(this.get('logDisplay').length === 0) {
      this.set('logDisplay', note);
    } else {
      this.set('logDisplay', this.get('logDisplay') + ', ' + note);      
    }
  }

});
