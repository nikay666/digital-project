import React from 'react'
import PropTypes from 'prop-types'
import { useFetch } from '../hooks'


const url = '/data/projectExample.json'

const SinglePage = ({link}) => {
    const data  = useFetch(url)[0]
    return (
          <main className='container'>
              {
                  data && <>
                  <h1 className='h1'>{data.title_first}<br/><span className='h1__bold'>{data.title_second}</span></h1>
                  <div className="page__preview">
                          <img src="" alt=""/>
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
