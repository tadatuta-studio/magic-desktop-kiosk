modules.define('form', ['i-bem__dom', 'events'], function(provide, BEMDOM, events) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('submit', function(e) {
            var event = new events.Event('submit');

            this.emit(event);
            event.isDefaultPrevented() && e.preventDefault();
        });
    },
    validateEmail: function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}));

});
