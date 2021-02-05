import React from 'react'
import PropTypes from 'prop-types'
import { useFetch } from '../hooks'
import { Gallery } from '../components/Gallery'


const url = '/data/galleryPage.json'

const GalleryPage = () => {
    const galleryItems = useFetch(url)

    return (
        <main className='main container'>
            <h1 className='h1'>ГАЛЕРЕЯ<br/><span className='h1__bold'>ФОТОГРАФИЙ</span></h1>
            {
                galleryItems && <Gallery items={galleryItems} />
            }
        </main>
    )
}

GalleryPage.propTypes = {

}

export default GalleryPage
