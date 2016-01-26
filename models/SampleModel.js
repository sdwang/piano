//Defines a backbone model class for the sample model
var SampleModel = Backbone.Model.extend({
  
  initialize: function(songName, musicSheet) {
    this.set('songName', songName);
    this.set('musicSheet', musicSheet);
  },

  triggerSample: function() {
    this.trigger('sample', this);
  }

});
