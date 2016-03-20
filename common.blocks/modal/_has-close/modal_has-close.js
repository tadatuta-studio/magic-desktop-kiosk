modules.define('modal', function(provide, Modal) {

provide(Modal.decl({ modName: 'has-close', modVal: true }, {}, {
    live: function() {
        this.liveBindTo('close', 'click', function() {
            this.delMod('visible');
        });
    }
}
));

});
