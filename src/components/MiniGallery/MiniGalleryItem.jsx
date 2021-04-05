import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { ScrollToTop } from '../ScrollToTop'

const MiniGalleryItem = ({id, title, url, path}) => {
    return (
        <Link  className="cover" to={path}>
                <img className='cover__img' src={url} alt={title}/>
                <p className="cover__title">{title}</p>
                <ScrollToTop>
                    <Button 
                        icon='arrow-right' 
                        className='cover__btn' 
                        noPaddig
                        whiteText
                    >подробнее</Button>
                </ScrollToTop>
        </Link>
    )
}

MiniGalleryItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string
}

export default MiniGalleryItem
