//Defines a backbone view class for the input view
var InputView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  events: {
    'click .submit': function() {
      this.model.set('inputtedNotes', $('.input-field').val());
      $('.input-field').val('');
      this.model.submit();
    }
  },

  attributes: {
    class: "input-form row"
  },

  template: _.template('<input class="input-field col s6" placeholder="Enter notes to play"></input><button class="submit waves-effect waves-light btn">Play</button>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }

});
