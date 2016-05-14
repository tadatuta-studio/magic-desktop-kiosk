modules.define('video', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        playing: {
            'true': function() {
                this.api ?
                    this.__self.isTouchDevice() || this.api.playVideo() :
                    this.init();

                this.bindToWin('click hashchange', this.teardown);
            },
            '': function() {
                this.api.stopVideo();
                this.unbindFromWin('click hashchange', this.teardown);
            }
        }
    },
    init: function() {
        var _this = this;

        // must be global
        // see: https://developers.google.com/youtube/iframe_api_reference#Getting_Started
        window.onYouTubeIframeAPIReady = function() {
            _this.api = new YT.Player('player', {
                videoId: _this.params.videoId,
                events: {
                    onReady: function(e) {
                        _this.__self.isTouchDevice() || e.target.playVideo();
                    }
                }
            });
        }

        $('head').append('<script src="https://www.youtube.com/iframe_api"></script>');
    },
    teardown: function() {
        this.delMod('playing');
    }
}, {
    isTouchDevice: function() {
      return 'ontouchstart' in window        // works on most browsers
          || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    }
}));

});
