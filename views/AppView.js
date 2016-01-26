//Defines a backbone view class for the entire piano app
var AppView = Backbone.View.extend({
  
  initialize: function() {
    this.pianoView = new PianoView({collection: this.model.get('piano')});
    this.inputView = new InputView({model: this.model.get('input')});
    this.sampleCollectionView = new SampleCollectionView({collection: this.model.get('samples')});
    this.logView = new LogView({model: this.model.get('log')});
  },

  render: function() {
    return this.$el.html([
      this.pianoView.$el,
      this.inputView.$el,
      this.sampleCollectionView.$el,
      this.logView.$el
      ]);
  }

});
