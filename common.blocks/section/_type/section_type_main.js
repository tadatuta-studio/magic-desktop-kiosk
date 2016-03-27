modules.define('section', ['i-bem__dom', 'button', 'modal', 'jquery'],
    function(provide, BEMDOM, Button, Modal, $) {

provide(BEMDOM.decl({ block: this.name, modName: 'type', modVal: 'main' }, {
    onSetMod: {
        js: {
            inited: function() {
                this
                    ._initVideo()
                    ._initFeedback();
            }
        }
    },
    _initFeedback: function() {
        var feedbackLink = this.findBlockOn(this.elem('feedback'), 'link'),
            modal = this.findBlockOn(this.elem('feedback'), 'modal'),
            form = modal.findBlockInside('form'),
            feedbackForm = this.elem('feedback-form'),
            thanks = this.elem('thanks');

        feedbackLink.on('click', function() {
            modal.setMod('visible');
        });

        form.on('submit', function(e) {
            e.preventDefault();

            console.log(form.domElem.serializeArray());

            $.post('http://www.magicdesktop.com/en-US/Support', form.domElem.serializeArray())
                .done(function() {
                    console.log('success', arguments);
                })
                .fail(function(err) {
                    console.log('err', err);
                });
            // method: 'post',
            // action: 'http://www.magicdesktop.com/en-US/Support',

            this
                .setMod(feedbackForm, 'hidden')
                .delMod(thanks, 'hidden');
        }, this);

        modal.on({ modName: 'visible', modVal: '' }, function() {
            var _this = this;

            setTimeout(function() {
                _this
                    .delMod(feedbackForm, 'hidden')
                    .setMod(thanks, 'hidden');
            }, 500);

        }, this);

        return this;
    },
    _initVideo: function() {
        var modal = this.findBlockOn(this.elem('video-modal'), 'modal'),
            video = modal.findBlockInside('video'),
            videoButton = this.elem('video-button');

        Button.on(videoButton, 'click', function() {
            modal.setMod('visible');
            video.setMod('playing');
        });

        modal.on({ modName: 'visible', modVal: '' }, function() {
            video.delMod('playing');
        });

        return this;
    }
}));

});
