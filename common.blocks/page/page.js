modules.define('page', ['i-bem__dom', 'scroll'], function(provide, BEMDOM, Scroll) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.sectionIds = ['main', 'values'];
                this._sections = this.findBlocksInside('section');
                this._scroll = new Scroll(document.body);

                var hash = window.location.hash.substr(1) || 'main';
                this._currentSectionIdx = this.sectionIds.indexOf(hash);

                this._scrollY = this.getScrollY();
                // TODO: тротлинг
                this.bindToWin('scroll', this._onScroll);
            }
        }
    },
    getScrollY: function() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },
    _onScroll: function() {
        var _this = this,
            currentY = this.getScrollY(),
            isMovingDown = currentY - this._scrollY > 0;

        this._scrollY = currentY;
        this._currentSectionIdx = isMovingDown ? this._currentSectionIdx + 1 : this._currentSectionIdx - 1;

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
    }
}));

});
