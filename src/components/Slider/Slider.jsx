import React, {  useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getGroups, sliderTemplates } from './sliderUtil'
import './Slider.scss'
import { useMedia } from '../../hooks'
import { NUM_IMG_IN_GAL, NUM_IMG_IN_GAL_MD, NUM_IMG_IN_GAL_SM } from '../../constants'

const Slider = ({slides, className, slidesType, slidesCount, children}) => {
    const [active, setActive] = useState(0)
    const [count, setCount] = useState(NUM_IMG_IN_GAL)
    const phoneMedia = useMedia('phone')
    const tabletMedia  = useMedia('tablet')
    const groups = getGroups(slidesType, slides, count)

    useEffect(() =>  {
        setCount(NUM_IMG_IN_GAL)
        if(tabletMedia) setCount(NUM_IMG_IN_GAL_MD)
        if(phoneMedia) setCount(NUM_IMG_IN_GAL_SM)
    }, [phoneMedia, tabletMedia])

    
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
