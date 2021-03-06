import React from 'react'
import PropTypes from 'prop-types'
import { useFirebase } from '../hooks'
import { useParams } from 'react-router'


const SinglePage = () => {
    const link = useParams()
    const data = useFirebase(`/projects/${link.link}`)

    return (
          <main className='container page'>
              {
                  data.length !== 0 && <>
                  <h1 className='h1'>{data.title_first}<br/><span className='h1__bold'>{data.title_second}</span></h1>
                  <div className="page__preview">
                          <img src={data.preview.src} alt={data.preview.alt}/>
                  </div>
                  <div className="page__content">
                      <p className="page__text">{data.text}</p>
                      {
                          data.imgs.map((img, index) => (
                              <div className="page__img" key={`index--${index}`}>
                                  <img src={img.src} alt={img.alt}/>
                              </div>
                          ))
                      }
                  </div>
                  </>
              }

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
