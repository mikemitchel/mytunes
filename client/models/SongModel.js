// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // play: function(){
  //   // Triggering an event here will also trigger the event on the collection
  //   this.trigger('play', this);
  // },

  enqueue: function() {
    this.trigger('enqueue', queue.add(this));
    // console.log('Length:', queue.length);
    if (queue.models[0] === this) {
    app.set('currentSong', this);
    }
  },

  dequeue: function() {
    this.trigger('dequeue', queue.remove(this));
    console.log("I'm Finished!!!")
  }

});
