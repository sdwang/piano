//Defines a backbone view class for the piano collection view
var PianoView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.append(this.collection.map(function(key) {
      return new KeyView({model: key}).render();
    }));
  }

});
