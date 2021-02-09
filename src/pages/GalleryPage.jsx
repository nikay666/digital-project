import React from 'react'
import { useFetch } from '../hooks'
import { Slider } from '../components/Slider'


const url = '/data/galleryPage.json'

const GalleryPage = () => {
    const galleryItems = useFetch(url)

    return (
        <main className='main container'>
            <h1 className='h1'>ГАЛЕРЕЯ<br/><span className='h1__bold'>ФОТОГРАФИЙ</span></h1>
            {
                galleryItems &&  <Slider slidesType='gallery' slides={galleryItems}/>
            }
        </main>
    )
}

export default GalleryPage
