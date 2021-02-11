import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getGroups, sliderTemplates } from './sliderUtil'
import './Slider.scss'

const Slider = ({slides, className, slidesType, slidesCount, children}) => {
    const [active, setActive] = useState(0)
    const groups = getGroups(slidesType, slides)
    
    const handlerClick = (n) => {
        if(active + n > groups.length - 1){
            setActive(0)

        }else if(active + n < 0){
            setActive(groups.length + n )

        }else{
            setActive(active + n)
        }
    }
 
    const contentOfType = () => { 
        return sliderTemplates[slidesType]({
            handlerClick: handlerClick,
            active: active,
            slides: groups,
            count: slidesCount,
            children: children
        })
    }

    return (
        <div className={(classNames('slider', `slider--${slidesType}`, className))}>
            {contentOfType()}
        </div>
    )
}

Slider.defaultProps = {
    slides: [],
    type: '',
    slidesType: 'list',
    slidesCount: 1,
    count:  1
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string,
    className: PropTypes.string,
    slidesType: PropTypes.string,
    slidesCount: PropTypes.number,
    count: PropTypes.number
}

export default Slider
