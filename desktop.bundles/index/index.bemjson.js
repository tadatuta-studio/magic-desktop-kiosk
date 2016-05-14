module.exports = {
    block: 'page',
    title: 'What is Magic Desktop?',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Magic Desktop 9 – The All-In-One Application For Kids!' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        [
            {
                block: 'section',
                mods: { type: 'main' },
                attrs: { id: 'main' },
                content: [
                    {
                        block: 'header',
                        content: [
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
                                block: 'link',
                                mods: { pseudo: true },
                                mix: [
                                    { block: 'header', elem: 'quote' },
                                    { block: 'section', elem: 'feedback' },
                                    { block: 'goal', js: { target: 'RequestAQuote' } }
                                ],
                                content: 'Request a quote'
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
                                content: [
                                    {
                                        tag: 'p',
                                        content:'World leading child desktop solution that develops young minds with expertly tailored content.'
                                    },
                                    {
                                        tag: 'p',
                                        content:'The safest way to educate and entertain your youngest visitors!'
                                    }
                                ]
                            },
                            {
                                elem: 'buttons',
                                content: [
                                    [
                                        {
                                            block: 'button',
                                            mods: { theme: 'md', action: 'video', size: 'l' },
                                            mix: [
                                                { block: 'section', elem: 'video-button' },
                                                { block: 'goal', js: { target: 'Watch' } },
                                            ],
                                            icon: {
                                                block: 'icon',
                                                mods: { ico : 'play' }
                                            },
                                            text: 'Watch video demo'
                                        },
                                        {
                                            block: 'button',
                                            mods: { theme: 'md', action: 'download', size: 'l', type: 'link' },
                                            mix: { block: 'goal', js: { target: 'Download' } },
                                            // url: 'http://www.magicdesktop.com/get',
                                            url: 'http://download.magicdesktop.com/MagicDesktopKiosk.exe',
                                            text: 'Get it now!'
                                        }
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        block: 'go',
                        mods: { dir: 'down' },
                        mix: { block: 'goal', js: { target: 'LearnMore' } }
                    },
                    {
                        block: 'video',
                        // url: 'https://www.youtube.com/embed/7pmPO95Y068?autoplay=1&rel=0&showinfo=0'
                        videoId: '7pmPO95Y068'
                    },
                    {
                        block: 'modal',
                        mods: { theme: 'islands', autoclosable: true, 'has-close': true },
                        mix: { block: 'section', elem: 'feedback' },
                        content: [
                            {
                                block: 'form',
                                // method: 'post',
                                // action: 'http://www.magicdesktop.com/en-US/Support',
                                mix: { block: 'section', elem: 'feedback-form' },
                                content: [
                                    {
                                        elem: 'title',
                                        content: 'Please, fill the form'
                                    },
                                    {
                                        elem: 'inner',
                                        content: [
                                            {
                                                block: 'input',
                                                mods: { theme: 'islands', size: 'xl', width: 'available' },
                                                maxlength: 100,
                                                name: 'Subject',
                                                placeholder: 'Subject'
                                            },
                                            {
                                                block: 'textarea',
                                                mods: { theme: 'islands', size: 'xl', width: 'available' },
                                                maxlength: 5000,
                                                name: 'Message',
                                                placeholder: 'Enter your message here...'
                                            },
                                            {
                                                block: 'input',
                                                mods: { theme: 'islands', size: 'xl', width: 'available' },
                                                maxlength: 50,
                                                name: 'Name',
                                                placeholder: 'Your name'
                                            },
                                            {
                                                block: 'input',
                                                mods: { theme: 'islands', size: 'xl', width: 'available' },
                                                maxlength: 150,
                                                name: 'Organization',
                                                placeholder: 'Your organization'
                                            },
                                            {
                                                block: 'input',
                                                mods: { theme: 'islands', size: 'xl', width: 'available' },
                                                maxlength: 100,
                                                name: 'Email',
                                                placeholder: 'Your email'
                                            },
                                            {
                                                block: 'button',
                                                mods: { theme: 'md', size: 'm', type: 'submit', disabled: true },
                                                mix: { block: 'form', elem: 'submit' },
                                                text: 'Send'
                                            },
                                            {
                                                elem: 'note',
                                                content: [
                                                    'All fields are required',
                                                    { tag: 'br' },
                                                    'Email must be valid'
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: 'section',
                                elem: 'thanks',
                                elemMods: { hidden: true },
                                content: {
                                    elem: 'thanks-inner',
                                    content: [
                                        {
                                            elem: 'thanks-main',
                                            content: 'Thanks for your message.'
                                        },
                                        {
                                            elem: 'thanks-sub',
                                            content: 'Please allow 1-2 business days for a response.'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                block: 'section',
                mods: { type: 'values' },
                attrs: { id: 'values' },
                content: [
                    {
                        block: 'go',
                        mods: { dir: 'up' }
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
