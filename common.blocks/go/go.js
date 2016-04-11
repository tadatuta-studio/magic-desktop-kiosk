modules.define('go', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('click', function() {
            this.emit('go', { dir: this.getMod('dir') });
        });
    }
}));

});
