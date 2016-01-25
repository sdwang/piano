//Defines a backbone view class for the key view
var KeyView = Backbone.View.extend({
  
  initialize: function() {
  },

  events: {
    'click': function() {
      this.pressKey();
    }
  },

  attributes: function() {
    return {
      'data-order': this.model.get('keyOrder'),
      class: this.model.get('keyType') + ' ' + this.model.get('note')
    };
  },

  template: _.template('<div><%= note %></div>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  pressKey: function() {
    //TODO: Handle highlighting of key view

    this.model.triggerPress();
  }

});
