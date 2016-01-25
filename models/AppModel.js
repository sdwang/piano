//Defines a backbone model class for the entire piano app
var AppModel = Backbone.Model.extend({
  
  initialize: function() {
    //Listen to key clicks and on click
      //log to log
    //listen to input field submit
      //click keys

    var keyList = [
        new KeyModel('C', 'white-key', 0),
        new KeyModel('Csharp', 'black-key', 0),
        new KeyModel('D', 'white-key', 1)];

    this.set('piano', new PianoCollection(keyList));
    this.set('log', new LogModel());
    this.set('input', new InputModel());

    this.get('piano').on('press', function(key) {
      this.get('log').addToLog(key.get('note'));
    }, this);

    this.get('input').on('change', function(input) {
      this.playInputtedNotes(input.get('inputtedNotes'));
    }, this);
  },

  playInputtedNotes: function(input) {
    var notesArray = input.split(',');

    var clickKey = function(i, notes) {
      $('.' + notes[i].trim()).click();
      i++;
      if(i < notes.length) {
        setTimeout(clickKey.bind(this, i, notes), 1000);
      }
    };

    clickKey(0, notesArray);
  }

});
