import React from 'react'
import PropTypes from 'prop-types'

const GalleryCard = ({img, text}) => {
    return (
        <div className="gallery__card g-card">
            <img className='g-card__img' src={img} alt={text}/>
            <div className="g-card__desc">
                <p className="g-card__text">{text}</p>
            </div>
        </div>
    )
}

GalleryCard.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string
}

export default GalleryCard
