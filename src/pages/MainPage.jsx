import React from 'react'
import { Card } from '../components/Card'
import { Tasks } from '../components/Tasks'
import { MiniGallery } from '../components/MiniGallery'
import { useFetch, useFirebase } from '../hooks'
import { Form } from '../components/Form'

import imgContactForm from '../assets/img/form.jpg'
import { Slider } from '../components/Slider'

const galleeryUrl = '/data/gallery.json'
const tasksUrl  = '/data/task.json'
const sliderUrl  = '/data/mainSlider.json'

const MainPage = () => {
    const galleryItems = useFetch(galleeryUrl)
    const tasks  = useFetch(tasksUrl)
    const card =  useFirebase('/main-card')
    // const slides = useFetch(sliderUrl)
    const slides = useFirebase('/projectList')

    return (
        <main className='main container'>
    
            <Slider
                type='imgs'
                slides={slides}
                className='main-slider'
                slidesType='col'
            />
                

            {
                (card.length > 0 ) &&
                <Card
                    title={card[0].title}
                    titleType={2}
                    text={card[0].text}
                    btnContent='читать'
                    media={card[0].media}
                    link='contacts'
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
                <div className="columns__col hide-mobile">
                    <div className="wrap wrap--center">
                        <img src={imgContactForm} alt=""/>
                    </div>
                </div>
            </div>
        
        </main>
    )
}



export default MainPage
