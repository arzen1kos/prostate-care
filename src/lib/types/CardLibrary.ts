export const resourceCardConfig = {
    icon: {
        name: ['chevron-right','chevron-right','chevron-right'],//'chevron-right',
        class: 'card-icon', // optional utility class
        textColor: 'var(--color-palette-five)',
        bgColor: 'background: var(--color-palette-one)',
    },
    textClass: {
        setVariant: 'card-rsc-item',
        heading: 'card-heading', // optional utility class
        content: 'card-content', // optional utility class
    },
    color: {
        heading: 'var(--color-palette-one)',
        cardBg: 'bg-[var(--color-palette-accent)]',
    },
    extraConfig: {
        hoverFx: true,
        layout: 'px-5 py-8 h-70 md:h-125 lg:30'
    },
};

export const blueCardConfig = {
    icon: {
        name: [
            'blueguide',
            'bluenode',
            'bluestats',
            'bluebeacon',
        ],
        class: 'card-icon', // optional utility class
        textColor: 'var(--color-palette-five)',
        bgColor: 'background: var(--color-palette-one)',
    },
    textClass: {
        setVariant: 'card-blue-item w-65',
        heading: 'card-blue-heading', // optional utility class
        content: 'card-blue-content px-10', // optional utility class
    },
    color: {
        heading: 'var(--color-palette-one)',
        cardBg: 'bg-[var(--color-palette-four)] hover:bg-[var(--color-palette-five)]',
    },
    extraConfig: {
        hoverFx: false,
        layout:'px-7 md:px-5 py-6 md:mt-1 w-100 md:w-80 min-h-[35rem] max-h-[32rem] rounded-lg shadow-md flex flex-col items-center justify-start gap-6',
        image: 'w-auto object-cover rounded-md mb-4 mr-3 sm:h-full md:h-45',
    },
};