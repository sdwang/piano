//Defines a backbone view class for the sample collection view
var SampleCollectionView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  attributes: {
    class: "sample-buttons row"
  },

  render: function() {
    //this.$el.addClass('sample')
    this.$el.append(this.collection.map(function(sampleButton) {
      return new SampleView({model: sampleButton}).render();
    }));
  }

});
