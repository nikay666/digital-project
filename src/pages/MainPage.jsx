import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../components/Card'
import { Tasks } from '../components/Tasks'
import { Gallery } from '../components/Gallery'
import { useFetch } from '../hooks'


const galleeryUrl = '/data/gallery.json'
const tasksUrl  = '/data/task.json'
const cardUrl = '/data/mainCard.json'

const MainPage = props => {
    const galleryItems = useFetch(galleeryUrl)
    const tasks  = useFetch(tasksUrl)
    const card =  useFetch(cardUrl)

    return (
        <div className='container'>
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
            <Gallery
                items={galleryItems}
            />
        </div>
    )
}


MainPage.propTypes = {

}

export default MainPage
