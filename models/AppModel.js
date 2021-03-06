//Defines a backbone model class for the entire piano app.
//This model handles all the logic that connects the different components
var AppModel = Backbone.Model.extend({
  
  initialize: function(params) {
    var keys = [];
    var sampleButtons = [];

    for(var i = 0; i < params.keyList.length; i++) {
      keys.push(new KeyModel(params.keyList[i].note, params.keyList[i].keyType, params.keyList[i].keyOrder, params.keyList[i].url));
    }

    for(var i = 0; i < sampleList.length; i++) {
      sampleButtons.push(new SampleModel(params.sampleList[i].songName, params.sampleList[i].musicSheet));
    }

    this.set('piano', new PianoCollection(keys));
    this.set('samples', new SampleCollection(sampleButtons));
    this.set('input', new InputModel());
    this.set('log', new LogModel());

    this.get('piano').on('press', function(key) {
      this.get('log').addToLog(key.get('note'));
    }, this);

    this.get('samples').on('sample', function(button) {
      $('.input-field').val(button.get('musicSheet'));
    });

    this.get('input').on('submit', function(input) {
      this.playInputtedNotes(input.get('inputtedNotes'));
    }, this);
  },

  playInputtedNotes: function(input) {
    var notesArray = input.split(',');

    var clickKey = function(i, notes) {
      if(i > 0) {
        $('.' + notes[i - 1].trim()).mouseup();
      }
      if(i < notes.length) {
        $('.' + notes[i].trim()).mousedown();
      }
      i++;
      if(i <= notes.length) {
        setTimeout(clickKey.bind(this, i, notes), 1000);
      }
    };

    clickKey(0, notesArray);
  }

});
