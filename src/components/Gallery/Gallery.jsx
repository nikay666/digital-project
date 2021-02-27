import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import GalleryCard from './GalleryCard'
import './Gallery.scss'


const Gallery = ({items, className=''}) => {

    return (
        <div className={classNames("gallery", className)}>
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
    items: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string
}

export default Gallery
