block('dl')(
    tag()('dl'),
    content()(function() {
        return applyNext().map(function(item) {
            return [
                {
                    elem: 'dt',
                    elemMods: item.elemMods,
                    content: item.term
                },
                {
                    elem: 'dd',
                    content: item.definition
                }
            ];
        });
    }),
    elem('dt').tag()('dt'),
    elem('dd').tag()('dd')
);
