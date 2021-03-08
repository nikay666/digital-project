import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from '../Pagination'
import { Button } from '../Button'
import classNames from 'classnames'


const SliderCol = ({handlerClick, active, slides, count}) => {
    const sliderTitles = (
        slides.map((slide, index) => {
            const title = slide.title.split(' ')
            const firstTitle = title.shift()
            const lastTitle = title.join(' ')
            return <h1 
                key={index}
                className={classNames('h1 slider__title', {'active': active === index})}
                >{firstTitle}
                <br/><span className='h1__bold'>{lastTitle}</span>
            </h1>
        })
    )

    return (
        <div className="slider__content">
    
            <div className="slider__col">
                {sliderTitles}
                <Pagination 
                    type='col'
                    onClick={handlerClick}
                    thisPage={active + 1}
                    totalPage={slides.length}
                    count={count}
                />
            </div>
            <div className="slider__col">
                {
                    slides.map((slide, index) =>  (
                        <div 
                           key={slide.id} 
                           className={classNames('slider__slide', {'active': active === index})}
                        >
                           {
                               slide.media.map((img, index) => (
                                   <img key={index} className='slider__img' src={img.url} alt={img.alt}/>
                               ))
                           }
                           <Button 
                               link
                               path={slide.url} 
                               icon='arrow-right'
                               className="slider__btn"
                           >Взглянуть</Button>
                        </div>
                    ))
                }
            </div>
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
