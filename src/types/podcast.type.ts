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

export interface IEpisode {
    artistsIds?: string[]
    artistId: number,
    artistName: string,
    artistViewUrl: string,
    artworkUrl30: string,
    artworkUrl60: string,
    artworkUrl100: string,
    artworkUrl600: string,
    collectionCensoredName: string,
    collectionExplicitness: string,
    collectionHdPrice: number,
    collectionId: number,
    collectionName: string,
    collectionPrice: number,
    collectionViewUrl: string,
    contentAdvisoryRating: string,
    country: string,
    currency: string,
    description?: string,
    episodeUrl?: string,
    feedUrl: string,
    genreIds: number[],
    genres: string[],
    kind: string,
    primaryGenreName: string,
    releaseDate: string,
    shortDescription?: string,
    trackCensoredName: string,
    trackCount: number,
    trackExplicitness: string,
    trackId: number,
    trackName: string,
    trackPrice: number,
    trackTimeMillis: number,
    trackViewUrl: string,
    wrapperType: "track" | "artist"
}

export interface IEpisodeResponse {
    results: IEpisode[]
}

