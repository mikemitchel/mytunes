// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('queue')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // this.model.on('add', function(model) {
    //   this.playerView.setSong(model.get('currentSong'));
    // }, this);




  },



  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
    ]);
  }

});


// a click in the library, sets the current song to that song
// and enques it to the queue list
// that AppView detects the change in current song, and calls
// the setSong function from the player view, play begins
// when play ends (current time matches end time of element)
// then dequeue from the queue, and set current song to next
// queue item


// setTimeinter

// setInterval(function() {if (mediaElement.currentTime < mediaElement.seekable.end(0)) {console.log('still playing')}}, 3000);
