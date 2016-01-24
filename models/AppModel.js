//Defines a backbone model class for the entire piano app
var AppModel = Backbone.Model.extend({
  
  initialize: function() {
    //Listen to key clicks and on click
      //log to log
    //listen to input field submit
      //click keys

    var keyList = [
        new KeyModel('C', 'white'),
        new KeyModel('C#', 'black'),
        new KeyModel('D', 'white')];

    this.set('piano', new PianoCollection(keyList));
    this.set('log', new LogModel());
    //TODO: set input field

    this.get('piano').on('press', function(key) {
      this.get('log').addToLog(key.get('note'));
    }, this);
  }

});
