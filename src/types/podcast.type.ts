export interface PodcastImage {
    attributes: {
        height: string
    },
    label: string
}

export interface Podcast {
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
    'im:image': PodcastImage[],
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

export interface PodcastApiResponse {
    feed: {
        entry: Podcast[]
    }
}