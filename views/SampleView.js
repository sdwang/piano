//Defines a backbone view class for the sample view
var SampleView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  events: {
    'click': function() {
      this.model.triggerSample();
    }
  },

  attributes: function() {
    return {
      "data-sample": this.model.get('musicSheet')
    };
  },

  template: _.template('<button class="waves-effect waves-light btn"><%= songName %></button>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }

});