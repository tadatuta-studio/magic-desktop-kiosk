modules.define('form', ['i-bem__dom', 'events'], function(provide, BEMDOM, events) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('submit', function(e) {
            var event = new events.Event('submit');

            this.emit(event);
            event.isDefaultPrevented() && e.preventDefault();
        });
    }
}));

});
