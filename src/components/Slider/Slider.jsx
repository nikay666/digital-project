import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Pagination } from '../Pagination'
import './Slider.scss'
import { Button } from '../Button'

const Slider = ({slides, type, className, children}) => {
    const [active, setActive] = useState(0)
    const handlerClick = (n) => {
        if(active + n > slides.length - 1){
            setActive(0)
        }else if(active + n < 0){
            setActive(slides.length - 1)
        }else{
            setActive(active + n)
        }
    }

    const slideList = (
        slides.map((slide, index) =>  (
            <div 
                key={slide.id} 
                className={classNames('slider__slide', {'active': active === index})}
            >
                <img className='slider__img' src={slide.img} alt=""/>
            <Button 
               to={slide.url} 
                icon='arrow-right'
               className="slider__btn"
            >Взглянуть</Button>
            </div>
        ))
    )

    return (
        <div className={(classNames('slider', `slider--${type}`, className))}>
            <div className="slider__content">
                {
                    children && <div className="slider__col">
                        {children}
                        <Pagination 
                            type='col'
                            onClick={handlerClick}
                            thisPage={active + 1}
                            totalPage={slides.length}
                        />
                    </div>
                }
                {
                    children 
                    ? <div className="slider__col">{slideList}</div>
                    : slideList
                }
            </div>
            {
                !children && <Pagination 
                    type='col'
                    onClick={handlerClick}
                    thisPage={active + 1}
                    totalPage={slides.length}
                />
            }
        </div>
    )
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string,
    className: PropTypes.string
}

export default Slider
