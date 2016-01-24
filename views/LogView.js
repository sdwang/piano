//Defines a backbone view class for the log view
var LogView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  template: _.template('<div><%= logDisplay %></div>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }

});
