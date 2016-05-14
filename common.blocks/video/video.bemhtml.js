block('video')(
    js()(function() {
        return {
            videoId: this.ctx.videoId
        };
    }),
    content()(function() {
        return [
            {
                elem: 'close',
                content: '×'
            },
            {
                elem: 'player',
                attrs: { id: 'player' }
            }
        ];
    })
);
