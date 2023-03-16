export interface OfferInfo {
    emoji: string,
    descriptionTKey: 'discount_1' | 'discount_2' | 'discount_3' | 'discount_4' | 'discount_5' | 'discount_6' | 'discount_7', //  description localization key of emoji
    discountType: number,
    fromIncluded?: number, // >= 0
    fromExcluded?: number, // > 0
    toIncluded?: number, // <= 10
    toExcluded?: number, // < 10
}

export const offersInfo: OfferInfo[] = [
    // First element is default 
    {
        emoji: '🤨',
        descriptionTKey: 'discount_4',
        discountType: 4,
    },
    {
        emoji: '☹️',
        descriptionTKey: 'discount_7',
        discountType: 7,
        fromIncluded: -100000000000,
        toExcluded: -15
    },
    {
        emoji: '😒',
        descriptionTKey: 'discount_6',
        discountType: 6,
        fromIncluded: -15,
        toIncluded: -5,
    },
    {
        emoji: '😐',
        descriptionTKey: 'discount_5',
        discountType: 5,
        fromExcluded: -5,
        toExcluded: -0.01,
    },
    {
        emoji: '👍',
        descriptionTKey: 'discount_3',
        discountType: 3,
        fromExcluded: 0.01,
        toExcluded: 5,
    },
    {
        emoji: '💸',
        descriptionTKey: 'discount_2',
        discountType: 2,
        fromIncluded: 5,
        toIncluded: 15,
    },
    {
        emoji: '🔥',
        descriptionTKey: 'discount_1',
        discountType: 1,
        fromIncluded: 5,
        toIncluded: 100000000000,
    },
]
