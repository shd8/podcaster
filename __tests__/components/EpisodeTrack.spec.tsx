import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import EpisodeTrack from '../../src/components/EpisodeTrack';
import { IEpisode } from '../../src/types'

describe('EpisodeTrack', () => {

    const episode = {
        episodeUrl: '/URL',
        trackName: 'Track name',
        collectionName: 'Collection name',
        artistName: 'Artist name',
        description: 'Description'
    } as Partial<IEpisode>

    it('Should render with props', () => {
       const { container } = render(<EpisodeTrack episode={episode}/>)

        const name = screen.getByText('Collection name - Track name')
        const description = screen.getByText('Description')
        const link = container.getElementsByTagName('source')[0]

        expect(name).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(link).toHaveAttribute('src', '/URL')
    })
})