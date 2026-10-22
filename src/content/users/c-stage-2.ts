import { resourceContent } from '../home'

export const content = {
    "stage-2": {
        // managing-the-mental-load
        heading1: {
            stageNum: `2`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-2"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-2"].data['0'].content,
            main: {
                x: {
                    subheading: '-',
                    body: [
                        `🚧 This page is still under development`,
                        // {
                        //     items: [
                        //         'item'
                        //     ]
                        // },
                    ],
                    link: '#',
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage-2/staying-grounded-through-it-all", current: true }
        },        
        // body-care-that-builds-you-up
        heading2: {
            stageNum: `1`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-2"].data['1'].heading,
            label: `Body Care That Builds You Up`,
            description: resourceContent.contentByCategory["stage-2"].data['1'].content,
            main: {
                KegelIntro: {
                    subheading: 'Kegel Exercise',
                    description:`Kegel exercises are a simple, no-equipment way to boost bladder control and support prostate recovery—just a few squeezes a day can make a big difference.`,
                    kegelImage:"/assets/s1/s1h2-kegel-steps.jpg",
                    alt:"https://my.clevelandclinic.org/-/scassets/images/org/health/articles/kegel-exercises-for-men",
                    thumbnail: '/assets/s1/s1h2-kegel-vid-thumbnail.JPG',
                    link: 'https://youtu.be/XWpRg0mgsTI',
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage-2/body-care-that-builds-you-up", current: true }
        },
        // your-body-your-needs
        heading3: {
            stageNum: `2`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["stage-2"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-2"].data['2'].content,
            main: {
                x: {
                    subheading: '-',
                    body: [
                        `🚧 This page is still under development`,
                        // {
                        //     items: [
                        //         'item'
                        //     ]
                        // },
                    ],
                    link: '#',
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage-2/your-body-your-needs", current: true }
        },
    },
};