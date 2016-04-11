block('video')(
    js()(true),
    content()(function() {
        return [
            {
                elem: 'close',
                content: '×'
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
