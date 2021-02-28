import React, { useState } from 'react'
import PropTypes from 'prop-types'
import  classNames from 'classnames'

const GalleryCard = ({img, text}) => {
    const [fullImg, setFullImg] = useState(false)

    const handlerClick = () => {
        setFullImg(!fullImg)
    }
    return (
        <div className={classNames("gallery__card g-card", {'g-card--full': fullImg})}>
            <div   
                className="g-card__substrate"
                onClick={handlerClick}
                
            />
            <img 
                onClick={handlerClick}
                className='g-card__img' 
                src={img} 
                alt={text}
            />
            {
                fullImg && <img 
                    onClick={handlerClick}
                    className='g-card__img full' 
                    src={img} 
                    alt={text}
                />
            }
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
