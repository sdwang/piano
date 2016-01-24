//Defines a backbone view class for the entire piano app
var AppView = Backbone.View.extend({
  
  initialize: function() {
    this.pianoView = new PianoView({collection: this.model.get('piano')});
    this.logView = new LogView({model: this.model.get('log')});
    this.inputView = new InputView({model: this.model.get('input')});
  },

  render: function() {
    return this.$el.html([
      this.pianoView.$el,
      this.logView.$el,
      this.inputView.$el
      ]);
  }

});
