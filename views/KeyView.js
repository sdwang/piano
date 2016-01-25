//Defines a backbone view class for the key view
var KeyView = Backbone.View.extend({
  
  initialize: function() {
  },

  events: {
    'mousedown': function() {
      this.pressKey();
    },
    'mouseup': function() {
      this.releaseKey();
    }
  },

  attributes: function() {
    return {
      'data-order': this.model.get('keyOrder'),
      class: this.model.get('keyType') + ' ' + this.model.get('note')
    };
  },

  template: _.template('<div class="note-name"><% if(keyType === \'white-key\') { %> <%= note %> <% } %></div>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  pressKey: function() {
    this.$el.addClass('pressed-key');
    this.model.triggerPress();
  },

  releaseKey: function() {
    this.$el.removeClass('pressed-key');
  }

});
