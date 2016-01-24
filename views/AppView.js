//Defines a backbone view class for the entire piano app
var AppView = Backbone.View.extend({
  
  initialize: function() {
    this.pianoView = new PianoView({collection: this.model.get('piano')});
  },

  render: function() {
    return this.$el.html([
      this.pianoView.$el
      ]);
  }

});
