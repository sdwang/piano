//Defines a backbone view class for the key view
var KeyView = Backbone.View.extend({
  
  initialize: function() {
    this.model.on('click', this.pressKey, this);
  },

  render: function() {
    
  },

  pressKey: function() {
    //TODO: Handle highlighting of key view

    this.model.triggerPress();
  }

});
