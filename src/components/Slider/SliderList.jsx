import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from '../Pagination'
import SliderListItem from './SliderListItem'

const SliderList = ({handlerClick, active, count, slides}) => { 
    const widthSlide = 100 / count - 5
    const total =  Math.round(slides.length / count)
    const thisNum = active / count + 1

    return (
        <div className="slider__content">
            <div className="slider__list">
                {
                    slides.map((slide, index) =>  (
                        <SliderListItem
                            key={slide.id} 
                            widthSlide={widthSlide}
                            activeItem={active <= index && active + count  > index}
                            img={slide.img}
                            title={slide.title}
                        />
                    ))
                }
            </div>
            <Pagination 
                onClick={handlerClick}
                thisPage={thisNum}
                totalPage={total}
                count={count}
            />
        </div>
    )
}

SliderList.propTypes = {
    handlerClick: PropTypes.func,
    active: PropTypes.number,
    count: PropTypes.number,
    slides: PropTypes.arrayOf(PropTypes.object)
}

export default SliderList
