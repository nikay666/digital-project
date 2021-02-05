import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

const MiniGalleryItem = ({id, title, url, path}) => {
    return (
        <Link  className="cover" to={path}>
                <img className='cover__img' src={url} alt={title}/>
                <p className="cover__title">{title}</p>
                <Button 
                    icon='arrow-right' 
                    className='cover__btn' 
                    noPaddig
                    whiteText
                >подробнее</Button>
    </Link>
    )
}

MiniGalleryItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string
}

export default MiniGalleryItem
