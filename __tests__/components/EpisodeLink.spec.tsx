import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import EpisodeLink from '../../src/components/EpisodeLink';
import { IEpisode } from '../../src/types'

describe('EpisodeLink', () => {

    const episode = {
        trackId: 3,
        releaseDate: 'Fri Feb 17 2023 19:42:12 GMT+0100',
        trackTimeMillis: 1000,
        trackName: 'Track name',
        collectionName: 'Collection name'
    } as Partial<IEpisode>

    it('Should render with props', () => {
       render(
            <EpisodeLink 
                episode={episode}
                podcastId='000'
            />
        )

        const name = screen.getByText('Track name - Collection name')
        const duration = screen.getByText('0:1')
        const date = screen.getByText('2/17/2023')
        const link = screen.getByRole('link')

        expect(name).toBeInTheDocument()
        expect(duration).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/podcast/000/episodes/3')
    })
})