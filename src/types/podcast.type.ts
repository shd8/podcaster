export interface IPodcastImage {
    attributes: {
        height: string
    },
    label: string
}

export interface IPodcast {
    category: {
        attributes: {
            'im:id' : string,
            label: string,
            scheme: string,
            term: string
        },
    },
    id: {
        attributes: { 
            'im:id': string 
        },
        label: string
    },
    'im:artist': {
        attributes: {
            href: string
        },
        label: string
    },
    'im:conentType': {
        attributes: {
            term: string,
            label: string
        }
    },
    'im:image': IPodcastImage[],
    'im:name': {
        label: string
    },
    'im:price': {
        attributes: {
            amount: string,
            currency: string
        },
        label: string
    },
    'im:releaseDate': {
        attributes: {
            label: string
        },
        label: string
    },
    link: {
        attributes: {
            href: string,
            rel: string,
            type: string
        }
    },
    rights: {
        label: string
    },
    summary: {
        label: string
    },
    title: {
        label: string
    }
}

export interface IPodcastApiResponse {
    feed: {
        entry: IPodcast[]
    }
}