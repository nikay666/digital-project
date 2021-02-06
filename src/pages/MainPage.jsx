import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../components/Card'
import { Tasks } from '../components/Tasks'
import { MiniGallery } from '../components/MiniGallery'
import { useFetch } from '../hooks'
import { Form } from '../components/Form'

import imgContactForm from '../assets/img/form.jpg'

const galleeryUrl = '/data/gallery.json'
const tasksUrl  = '/data/task.json'
const cardUrl = '/data/mainCard.json'

const MainPage = () => {
    const galleryItems = useFetch(galleeryUrl)
    const tasks  = useFetch(tasksUrl)
    const card =  useFetch(cardUrl)

    return (
        <main className='main container'>
            <h1 className='h1'>PROJECT<br/><span className='h1__bold'>NURTOWN</span></h1>
            {
                (card.length > 0 ) &&
                <Card
                    title={card[0].title}
                    titleType={2}
                    text={card[0].text}
                    btnContent='читать'
                    media={card[0].media}
                />
            }
            <Tasks tasks={tasks} />
            <MiniGallery
                items={galleryItems}
            />
            <div className="columns">
                <div className="columns__col contact-form">
                    <h2 className="h2">Связаться с нами</h2>
                    <Form/>
                </div>
                <div className="columns__col">
                    <div className="wrap wrap--center">
                        <img src={imgContactForm} alt=""/>
                    </div>
                </div>
            </div>
        
        </main>
    )
}


MainPage.propTypes = {

}

export default MainPage
