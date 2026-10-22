import { resourceContent } from '../home'

export const content = {
    "researcher": {
        // structured-understanding-statistics
        heading1: {
            stageNum: `research`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["researcher"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["researcher"].data['0'].content,
            main: {
                x: {
                    subheading: '-',
                    body: [
                        `🚧 This page is still under development`,
                        // `p`,
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
            breadcrumbs: { link: "/research/structured-understanding-statistics", current: true }
        },
        // trials-treatment-innovation
        heading2: {
            stageNum: `research`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["researcher"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["researcher"].data['1'].content,
            main: {
                x: {
                    subheading: '-',
                    body: [
                        `🚧 This page is still under development`,
                        // `p`,
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
            breadcrumbs: { link: "/research/trials-treatment-innovation", current: true }
        },
        // tools-grants-collaboration
        heading3: {
            stageNum: `research`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["researcher"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["researcher"].data['2'].content,
            main: {
                x: {
                    subheading: '-',
                    body: [
                        `🚧 This page is still under development`,
                        // `p`,
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
            breadcrumbs: { link: "/research/tools-grants-collaboration", current: true }
        },

    },
}

export const researchCategories = [
    {
        title: "Clinical Trials",
        description: "Information about ongoing and completed clinical trials, including eligibility criteria and results.",
        icon: "flask"
    },
    {
        title: "Scientific Publications",
        description: "Peer-reviewed research papers and scientific publications from our research team and partners.",
        icon: "document"
    },
    {
        title: "Research Projects",
        description: "Current research initiatives and projects funded by BluePrintNZ and our partners.",
        icon: "microscope"
    },
    {
        title: "Research Grants",
        description: "Information about our research grant program and how to apply for funding.",
        icon: "money"
    }
];