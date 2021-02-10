import React from 'react'
import PropTypes from 'prop-types'

const SinglePage = ({title, preview, imgs, text}) => {
    return (
        <main className='container'>
            <h1 className='h1'>ПАРКИНГ НА<br/><span className='h1__bold'>500 АВТОМОБИЛЕЙ</span></h1>
            <div className="page__preview">
                    <img src={preview} alt=""/>
            </div>
            <div className="page__content">
                <p className="page__text">{text}</p>
                {
                    imgs.map(img => (
                        <div className="page__img">
                            <img src={img.src} alt={img.alt}/>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

SinglePage.propTypes = {
    title: PropTypes.string, 
    preview: PropTypes.string, 
    imgs: PropTypes.array, 
    text: PropTypes.string
}

export default SinglePage
