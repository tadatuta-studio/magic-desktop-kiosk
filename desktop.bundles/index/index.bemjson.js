module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    // mods: { theme: 'islands' },
    content: [
        [
            {
                block: 'section',
                mods: { type: 'main' },
                content: [
                    {
                        block: 'header',
                        content: [
                            {
                                block: 'link',
                                url: '#',
                                mix: { block: 'header', elem: 'quote' },
                                content: 'Request a quote'
                            },
                            {
                                block: 'logo',
                                content: [
                                    {
                                        elem: 'main',
                                        content: 'Magic Desktop 9'
                                    },
                                    {
                                        elem: 'sub',
                                        content: 'it’s like windows for kids!'
                                    }
                                ]
                            },
                            {
                                elem: 'badge'
                            }
                        ]
                    },
                    {
                        block: 'call-for-action',
                        content: [
                            {
                                elem: 'title',
                                content: 'Ideal solution for computers in public spaces and community centers.'
                            },
                            {
                                elem: 'subtitle',
                                content: 'World leading child desktop solution that develops young minds with expertly tailored content. The safest way to educate and entertain your youngest visitors!'
                            },
                            {
                                elem: 'buttons',
                                content: [
                                    [
                                        {
                                            block: 'button',
                                            mods: { theme: 'md', action: 'video', size: 'm' },
                                            text: 'Watch video demo'
                                        },
                                        {
                                            block: 'button',
                                            mods: { theme: 'md', action: 'download', size: 'm' },
                                            text: 'Get it now!'
                                        }
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                block: 'section',
                mods: { type: 'values' },
                content: [
                    {
                        block: 'link',
                        url: '#',
                        mix: {
                            block: 'go',
                            mods: { dir: 'up' }
                        }
                    },
                    {
                        block: 'heading',
                        mods: { level: 1 },
                        content: 'Main values for Public Libraries:'
                    },
                    {
                        block: 'dl',
                        mix: { block: 'section', elem: 'values' },
                        content: [
                            {
                                elem: 'definition',
                                elemMods: { type: 'cost' },
                                term: 'Cost Effective',
                                definition: 'Save up to 10x compared to competition while still getting more content'
                            },
                            {
                                elem: 'definition',
                                elemMods: { type: 'content' },
                                term: 'Superior Content',
                                definition: 'Over 50,000 learning activities, games and videos professionally curated'
                            },
                            {
                                elem: 'definition',
                                elemMods: { type: 'safe' },
                                term: 'Child-safe Internet',
                                definition: 'Custom browser ensures approved content'
                            },
                            {
                                elem: 'definition',
                                elemMods: { type: 'simple' },
                                term: 'Simple Setup',
                                definition: 'Minimal administrative effort'
                            },
                            {
                                elem: 'definition',
                                elemMods: { type: 'support' },
                                term: 'We Support',
                                definition: 'Windows XP through Windows 10, computers stay clean and protected'
                            }
                        ]
                    }
                ]
            }
        ]
    ]
};
