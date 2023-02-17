import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistsDetails from '../../src/components/ArtistsDetails';
import '@testing-library/jest-dom'

describe('ArtistDetails', () => {

    it('Should render with props', () => {
       render(
            <ArtistsDetails 
                artist='Artist'
                image='/URL'
                shortDescription='Short description'
                title='Title'
            />
        )

        const artist = screen.getByText('by Artist')
        const title = screen.getByText('Title')
        const description = screen.getByText('Description:')
        const shortDescription = screen.getByText('Short description')
        const image = screen.getByRole('img')

        expect(artist).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(shortDescription).toBeInTheDocument()
        expect(image).toBeInTheDocument()
    })
})