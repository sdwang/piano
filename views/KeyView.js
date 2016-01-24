//Defines a backbone view class for the key view
var KeyView = Backbone.View.extend({
  
  initialize: function() {
  },

  events: {
    'click': function() {
      this.pressKey();
    }
  },

  template: _.template('<div><%= note %></div>'),

  render: function() {
    this.$el.addClass(this.model.get('keyType'));
    this.$el.addClass(this.model.get('note'));
    return this.$el.html(this.template(this.model.attributes));
  },

  pressKey: function() {
    //TODO: Handle highlighting of key view

    this.model.triggerPress();
  }

});
