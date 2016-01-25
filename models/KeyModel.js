//Defines a backbone model class for the key model
var KeyModel = Backbone.Model.extend({
  
  initialize: function(note, keyType, keyOrder) {
    this.set('note', note);
    this.set('keyType', keyType);
    this.set('keyOrder', keyOrder);
  },

  triggerPress: function() {
    //TODO: highlight key (or put highlight key in key view)
    this.trigger('press', this);
  },


});
