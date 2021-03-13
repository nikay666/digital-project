import React, { useState } from 'react'
import PropTypes from 'prop-types'
import  classNames from 'classnames'

const GalleryCard = ({img, text}) => {
    const [fullImg, setFullImg] = useState(false)

    const handlerClick = () => {
        setFullImg(!fullImg)
    }
    return (
        <div 
            onClick={handlerClick}
            className={classNames("gallery__card g-card", {'full-img': fullImg})}
        >
            {   fullImg && 
                <div    
                    className="g-card__substrate full-img__substrate"
                    onClick={handlerClick} 
                />
            }
            <img 
                onClick={fullImg ? handlerClick : null}
                className={classNames('g-card__img full-img__img', {'active': fullImg})} 
                src={img} 
                alt={text}
            />
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
