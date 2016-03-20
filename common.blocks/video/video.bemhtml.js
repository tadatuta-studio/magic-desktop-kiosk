block('video')(
    js()(true),
    content()(function() {
        return [
            applyNext(),
            {
                elem: 'button'
            },
            {
                elem: 'player',
                url: this.ctx.url
            }
        ];
    }),
    elem('player')(
        tag()('iframe'),
        attrs()(function() {
            return {
                'data-src': this.ctx.url,
                allowfullscreen: 'allowfullscreen'
                // TODO: force HD
            };
        })
    )
);
