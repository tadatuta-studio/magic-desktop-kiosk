block('textarea').attrs()(function() {
    var attrs = applyNext();
    attrs.maxlength = this.ctx.maxlength;
    return attrs;
});
