import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from '../Pagination'
import { Gallery } from '../Gallery'
import classNames from 'classnames'


const SliderGallery = ({handlerClick, active, count, slides}) => {
    return (
        <div className="slider__content">
            <div className="slider__gallery">
                {
                    slides.map((group, index) => (
                        <Gallery
                            className={classNames('slider__slide', {'active': active === index})}
                            items={group} 
                            key={index}
                        />
                    ))
                }
  
            </div>
            <Pagination 
                onClick={handlerClick}
                thisPage={active + 1}
                totalPage={slides.length}
                count={count}
            />
        </div>
    )
}

SliderGallery.propTypes = {
    handlerClick: PropTypes.func, 
    active: PropTypes.number, 
    count: PropTypes.number, 
    slides: PropTypes.arrayOf(PropTypes.object)
}

export default SliderGallery
