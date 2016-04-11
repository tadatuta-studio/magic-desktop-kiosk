modules.define('page', ['i-bem__dom', 'scroll', 'go', 'video'],
    function(provide, BEMDOM, Scroll, Go, Video) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;

                this.sectionIds = ['main', 'values'];
                this._sections = this.findBlocksInside('section');
                this._scroll = new Scroll(document.body);

                var hash = window.location.hash.substr(1) || 'main';
                this._currentSectionIdx = this.sectionIds.indexOf(hash);

                this._scrollY = this.getScrollY();
                // TODO: тротлинг
                this.bindToWin('scroll', this._onScroll);

                Go.on(this.domElem, 'go', function(e, data) {
                    _this.scrollToDir(data.dir);
                });

                // block scrolling while video is playing
                Video.on(this.domElem, { modName: 'playing', modVal: '*' }, function(e, data) {
                    if (data.modVal) {
                        this.unbindFromWin('scroll', this._onScroll);
                        this.bindToWin('scroll', this._disableScroll);
                        return;
                    }

                    this.unbindFromWin('scroll', this._disableScroll);
                    this.bindToWin('scroll', this._onScroll);
                }, this);
            }
        }
    },
    getScrollY: function() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },
    scrollToDir: function(dir) {
        var _this = this;

        this._scrollY = this.getScrollY();

        this._currentSectionIdx = dir === 'down' ?
            this._currentSectionIdx + 1 : this._currentSectionIdx - 1;

        if (this._currentSectionIdx >= this._sections.length)  {
            this._currentSectionIdx = this._sections.length - 1;
            return;
        } else if (this._currentSectionIdx < 0) {
            this._currentSectionIdx = 0;
            return;
        }

        this.unbindFromWin('scroll', this._onScroll);

        var nextSection = this._sections[this._currentSectionIdx].domElem[0];

        this._scroll.toElement(nextSection, { duration: 500 }).then(function() {
            window.location.hash = _this.sectionIds[_this._currentSectionIdx];
            _this.bindToWin('scroll', _this._onScroll);
        });
    },
    _onScroll: function() {
        var currentY = this.getScrollY();

        this.scrollToDir(currentY - this._scrollY > 0 ? 'down' : 'up');
    },
    _disableScroll: function() {
        window.scrollTo(0, 0);
    }
}));

});
