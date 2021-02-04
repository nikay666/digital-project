import React from 'react'
import PropTypes from 'prop-types'
import './Gallery.scss'
import GalleryItem from './GalleryItem'
import { Button } from '../Button'

const Gallery = ({items}) => {
    return (
        <div className='gallery'>
            <h2 className="h2 galleery__title">Наши проекты</h2>
            <div className="gallery__content">
                {
                    items.map(item => (
                      <GalleryItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        url={item.url}
                        path={item.link}
                      />
                    ))
                }
                 <Button 
                    className="gallery__show-all" 
                    icon='arrow-right'
                    path='/projects'
                    dark 
                    link

                >Все проекты</Button>
            </div>
           
        </div>
    )
}

Gallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

export default Gallery
