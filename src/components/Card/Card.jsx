import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from '../Button'
import './Card.scss'

const Card = ({title, titleType, text, media, link}) => {
    const titleHtml = ( 
        titleType === 2 
        ? <h2 className="h2 card__title">{title}</h2> 
        : <h3 className="h3 card__title">{title}</h3> 
        
    )

    return (
        <div className={classNames('card')}>
            {/* <div className="card__media"> */}
                {
                    media.length > 1 
                    ? (
                        <div className="card__media">
                            {
                                media.map(item => (
                                    <div key={item.id} className="card__img">
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
            {/* </div> */}
            <div className="card__content">
                {titleHtml}
                <p className="card__text">{text}</p>

                <Button 
                    link 
                    path={`/projects/${link}`} 
                    className='card__btn'
                    icon='arrow-right'
                >Смотреть</Button>
            </div>
        </div>
    )
}

Card.defaultProps = {
    titleType: 3,
    media: [],
}

Card.propTypes = {
    title: PropTypes.string,
    titleType: PropTypes.number,
    media: PropTypes.arrayOf(PropTypes.object),
    link: PropTypes.string
}

export default Card
