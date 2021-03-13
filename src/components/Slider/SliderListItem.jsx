import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SliderListItem = ({widthSlide, activeItem, img, title}) => {
    const [fullImg, setFullImg] = useState(false)

    const handlerClick = () => {
        setFullImg(!fullImg)
    }

    return (
        <div 
            onClick={handlerClick}
            style={{width: `${widthSlide}%`}}
            className={classNames('slider__slide', 
                {'active':  activeItem},
                {'full-img': fullImg})
            }
        >   
            {
                fullImg && 
                <div   
                    className="full-img__substrate"
                    onClick={handlerClick} 
                />
            }
            <img 
                onClick={ fullImg ? handlerClick : null}
                className={classNames('slider__img full-img__img',{'active': fullImg})} 
                src={img} 
                alt={title}
            />
        </div>
    )
}

SliderListItem.propTypes = {
    widthSlide: PropTypes.number,
    activeItem: PropTypes.bool, 
    img: PropTypes.string,
    title: PropTypes.string
}

export default SliderListItem
