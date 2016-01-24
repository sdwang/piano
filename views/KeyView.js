//Defines a backbone view class for the key view
var KeyView = Backbone.View.extend({
  
  initialize: function() {
    this.model.on('click', this.pressKey, this);
  },

  template: _.template('<div><%= note %></div>'),

  render: function() {
    this.$el.addClass(this.model.get('keyType'));
    return this.$el.html(this.template(this.model.attributes));
  },

  pressKey: function() {
    //TODO: Handle highlighting of key view

    this.model.triggerPress();
  }

});
