modules.define('section', ['i-bem__dom', 'button', 'modal'], function(provide, BEMDOM, Button, Modal) {

provide(BEMDOM.decl({ block: this.name, modName: 'type', modVal: 'main' }, {
    onSetMod: {
        js: {
            inited: function() {
                var modal = this.findBlockInside('modal');

                Button.on('click', function() {
                    modal.setMod('visible');
                });
            }
        }
    }
}));

});
