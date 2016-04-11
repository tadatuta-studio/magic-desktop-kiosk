block('input').match(function() { return this.ctx.maxlength; })(
    def()(function() {
        return applyNext({ maxlength: this.ctx.maxlength });
    })
);
