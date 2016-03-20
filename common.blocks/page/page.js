modules.define('page', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this
                    .checkScreen()
                    // TODO: throttle
                    .bindToWin('resize', this.checkScreen, this);
            }
        }
    },
    checkScreen: function() {
        var width = BEMDOM.win.width(),
            height = BEMDOM.win.height();

        return this.setMod('wide', width / height > 1.94);
    }
}));

});
