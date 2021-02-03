import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

import img1 from '../assets/img/about/img1.jpg'
import img2 from '../assets/img/about/img2.jpg'
import img3 from '../assets/img/about/img3.jpg'
import { Tasks } from '../components/Tasks'

const  card = {
    title: 'О компании',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut officia, architecto expedita nostrum magnam explicabo eos delectus illo. Dicta error, consequatur facere recusandae nisi voluptates ex repellendus exercitationem odio!',
    btnContent: 'читать',
    media: [
        {
            url: img2,
            alt: 'img2'
        },
        {
            url: img1,
            alt: 'img1'
        },
    
        {
            url: img3,
            alt: 'img3'
        }
    ]
}
const tasks = [
    'Создание комфортных условий и повышение качества обслуживания клиентов',
    'Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке'
]


const MainPage = props => {
    return (
        <div className='container'>
            <h1 className='h1'>PROJECT<br/><span className='h1__bold'>NURTOWN</span></h1>
            <Card
                title={card.title}
                titleType={2}
                text={card.text}
                btnContent={card.btnContent}
                media={card.media}
            />
            <Tasks tasks={tasks} />
        </div>
    )
}


MainPage.propTypes = {

}

export default MainPage
