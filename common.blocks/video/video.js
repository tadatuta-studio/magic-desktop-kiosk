modules.define('video', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        loaded: {
            'true': function() {
                var player = this.elem('player');
                player.attr('src', player.attr('data-src'));
                this.__self.liveUnbindFrom('click');
            }
        }
    }
}, {
    live: function() {
        this.liveBindTo('click', function() {
            ga('send', 'event', 'LandingPageNew', 'click', 'Watch');
            this.setMod('loaded');
        });
    }
}));

});
