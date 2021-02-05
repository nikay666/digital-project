import React from 'react'
import PropTypes from 'prop-types'

import './Gallery.scss'
import GalleryCard from './GalleryCard'

const Gallery = ({items}) => {
    return (
        <div className="gallery">
        {
              items.map(item => (
                <GalleryCard
                    key={item.id}
                    img={item.url}
                    text={item.text}
                />
            ))
        }
        </div>
    )
}

Gallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

export default Gallery
