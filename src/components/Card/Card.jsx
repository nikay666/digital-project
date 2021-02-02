import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from '../Button'
import './Card.scss'

const Card = ({title, titleType, text, media, btnContent}) => {
    const titleHtml = ( 
        titleType === 2 
        ? <h2 className="h2 card__title">{title}</h2> 
        : <h3 className="h3 card__title">{title}</h3> 
        
    )

    return (
        <div className={classNames('card')}>
            <div className="card__media">
                {
                    media.length > 1 
                    ? (
                        <div className="card__imgs">
                            {
                                media.map(item => (
                                    <div className="card__img">
                                        <img  src={item.url} alt={item.alt}/>
                                    </div>
                                ))
                            }
                       </div>
                    )
                    : <div className="card__img">
                        <img  src={media[0].url} alt={media[0].alt}/>
                    </div>
                }
            </div>
            <div className="card__content">
                {titleHtml}
                <p className="card__text">{text}</p>
                <Button 
                    link 
                    path='/contacts' 
                    className='card__btn'
                    icon='arrow-right'
                >{btnContent}</Button>
            </div>
        </div>
    )
}

Card.defaultProps = {
    titleType: 3,
    btnContent: PropTypes.string,
    media: []
}

Card.propTypes = {
    title: PropTypes.string,
    titleType: PropTypes.number,
    btnContent: PropTypes.string,
    media: PropTypes.arrayOf(PropTypes.object)
}

export default Card
