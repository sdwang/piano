//Defines a backbone model class for the key model
var KeyModel = Backbone.Model.extend({
  
  initialize: function(note, keyType, keyOrder, url) {
    this.set('note', note);
    this.set('keyType', keyType);
    this.set('keyOrder', keyOrder);
    this.set('url', url);
  },

  triggerPress: function() {
    this.trigger('press', this);
  },


});
