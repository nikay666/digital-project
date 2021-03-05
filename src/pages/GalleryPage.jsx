import React from 'react'
import { useFirebase } from '../hooks'
import { Slider } from '../components/Slider'


const GalleryPage = () => {
    const galleryItems = useFirebase('/gallery')


    return (
        <main className='main container'>
            <h1 className='h1'>ГАЛЕРЕЯ<br/><span className='h1__bold'>ФОТОГРАФИЙ</span></h1>
            {
                galleryItems &&  <Slider slidesType='gallery'  slides={galleryItems}/>
            }
        </main>
    )
}

export default GalleryPage
