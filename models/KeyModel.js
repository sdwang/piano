//Defines a backbone model class for the key model
var KeyModel = Backbone.Model.extend({
  
  initialize: function(note, keyType) {
    this.set('note', note);
    this.set('keyType', keyType);
  },

  triggerPress: function() {
    //TODO: highlight key (or put highlight key in key view)
    console.log('Key ' + this.get('note') + 'was pressed');

    this.trigger('press', this);
  },


});
