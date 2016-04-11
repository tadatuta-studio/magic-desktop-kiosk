modules.define('video', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        playing: {
            'true': function() {
                var player = this.elem('player');
                player.attr('src', player.attr('data-src'));
            },
            '': function() {
                this.elem('player').attr('src', '');
            }
        }
    }
}, {
    live: function() {
        this.liveBindTo('click', function() {
            this.delMod('playing');
        });
    }
}));

});
