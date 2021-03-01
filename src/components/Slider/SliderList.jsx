import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from '../Pagination'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const SliderList = ({handlerClick, active, count, slides}) => { 
    const widthSlide = 100 / count - 5
    const total =  Math.round(slides.length / count)
    const thisNum = active / count + 1


    return (
        <div className="slider__content">
            <div className="slider__list">
                {
                    slides.map((slide, index) =>  (
                        <Link 
                            to={slide.url} 
                            key={slide.id} 
                            style={{width: `${widthSlide}%`}}
                            className={classNames('slider__slide', 
                                {'active':  active <= index && active + count  > index})
                            }
                        >
                            <img 
                                className='slider__img' 
             
                                src={slide.img} 
                                alt={slide.title}
                            />
                        </Link>
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
