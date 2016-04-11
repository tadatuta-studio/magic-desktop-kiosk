block('input').elem('control').attrs()(function() {
    var attrs = applyNext();
    attrs.maxlength = this.maxlength;
    return attrs;
});
