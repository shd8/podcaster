import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistDetails from '../../src/components/ArtistDetails';
import '@testing-library/jest-dom'

describe('ArtistDetails', () => {

    it('Should render with props', () => {
       render(
            <ArtistDetails 
                artist='Artist'
                image='/URL'
                shortDescription='Short description'
                title='Title'
                podcastId='id'
            />
        )

        const artist = screen.getByText('by Artist')
        const title = screen.getByText('Title')
        const description = screen.getByText('Description:')
        const shortDescription = screen.getByText('Short description')
        const image = screen.getByRole('img')
        const link = screen.getAllByRole('link')

        expect(artist).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(shortDescription).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(link).toHaveLength(2)
        expect(link[0]).toHaveAttribute('href', '/podcast/id')
    })
})