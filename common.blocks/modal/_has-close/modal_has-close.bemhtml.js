block('modal').mod('has-close', true).elem('content').content()(function() {
    return [
        {
            elem: 'close',
            content: '×'
        },
        applyNext()
    ];
});
