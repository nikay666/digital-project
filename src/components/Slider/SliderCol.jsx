import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from '../Pagination'
import { Button } from '../Button'
import classNames from 'classnames'

const SliderCol = ({handlerClick, active, slides, count, children}) => {
    const slideList = (
        slides.map((slide, index) =>  (
            <div 
                key={slide.id} 
                className={classNames('slider__slide', {'active': active === index})}
            >
                <img className='slider__img' src={slide.img} alt=""/>
                <Button 
                    link
                    path={slide.url} 
                    icon='arrow-right'
                    className="slider__btn"
                >Взглянуть</Button>
            </div>
        ))
    )
    return (
        <div className="slider__content">
            <div className="slider__col">
                {children}
                <Pagination 
                    type='col'
                    onClick={handlerClick}
                    thisPage={active + 1}
                    totalPage={slides.length}
                    count={count}
                />
            </div>
            <div className="slider__col">{slideList}</div>
            
        </div>
    )
}

SliderCol.propTypes = {
    handlerClick: PropTypes.func,
    active: PropTypes.number,
    slides: PropTypes.arrayOf(PropTypes.object),
    count: PropTypes.number,
}

export default SliderCol
