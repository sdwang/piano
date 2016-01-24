//Defines a backbone view class for the keys collection view
var CommentsView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {

    var html;

    this.$el.html(html);

    this.$el.find('ul').append(this.collection.map(function(key) {
      return new KeyView({model: key}).render();
    }));

    return this.$el;
  }
});
