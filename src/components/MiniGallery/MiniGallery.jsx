import React from 'react'
import PropTypes from 'prop-types'
import './Gallery.scss'
import MiniGalleryItem from './MiniGalleryItem'
import { Button } from '../Button'


const MiniGallery = ({items}) => {
    return (
        <div className='mini-gallery'>
            <h2 className="h2 mini-gallery__title">Наши проекты</h2>
            <div className="mini-gallery__content">
                {
                    items.map(item => (
                        <MiniGalleryItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            url={item.media[0].url}
                            path={`/projects/${item.link}`}
                        />
                    ))
                }

                 <Button 
                    className="mini-gallery__show-all" 
                    icon='arrow-right'
                    path='/projects'
                    dark 
                    link

                >Все проекты</Button>
            </div>
           
        </div>
    )
}

MiniGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

export default MiniGallery
