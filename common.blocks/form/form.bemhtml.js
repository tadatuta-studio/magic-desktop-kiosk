block('form')(
    js()(true),
    tag()('form'),
    attrs()(function() {
        var ctx = this.ctx;

        return {
            action: ctx.action,
            method: ctx.method
        };
    })
);
