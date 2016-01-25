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
        new KeyModel('D', 'white-key', 1),
        new KeyModel('Dsharp', 'black-key', 1),
        new KeyModel('E', 'white-key', 2),
        new KeyModel('F', 'white-key', 3),
        new KeyModel('Fsharp', 'black-key', 3),
        new KeyModel('G', 'white-key', 4),
        new KeyModel('Gsharp', 'black-key', 4),
        new KeyModel('A', 'white-key', 5),
        new KeyModel('Asharp', 'black-key', 5),
        new KeyModel('B', 'white-key', 6),        
        ];

    this.set('piano', new PianoCollection(keyList));
    this.set('input', new InputModel());
    this.set('log', new LogModel());

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
