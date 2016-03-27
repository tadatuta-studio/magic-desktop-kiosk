(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-15463046-4', 'magicdesktop.com');
ga('require', 'displayfeatures');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

modules.define('goal', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('click', function() {
            var params = this.params;

            if (params) {
                ga('send', 'event', 'LandingPageKiosk', 'click', params.target);
            }
        });
    }
}));

});
