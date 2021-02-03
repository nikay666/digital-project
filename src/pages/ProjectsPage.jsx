import React from 'react'
import PropTypes from 'prop-types'

import school from '../assets/img/projects/school.jpg' 
import parking from '../assets/img/projects/parking.jpg'
import office from '../assets/img/projects/parking.jpg'
import { Card } from '../components/Card'

const  projects = [
    {
        id: 0,
        title: 'Общеобразовательная школа',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut officia, architecto expedita nostrum magnam explicabo eos delectus illo. Dicta error, consequatur facere recusandae nisi voluptates ex repellendus exercitationem odio!',
        btnContent: 'смотреть',
        media: [
            {
                url: school,
                alt: 'school'
            },
        ]
    },
    {
        id: 1,
        title: 'Паркинг на 500 автомобилей',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut officia, architecto expedita nostrum magnam explicabo eos delectus illo. Dicta error, consequatur facere recusandae nisi voluptates ex repellendus exercitationem odio!',
        btnContent: 'смотреть',
        media: [
            {
                url: parking,
                alt: 'parking'
            },
        ]
    },
    {
        id: 2,
        title: 'Проект интерьера офиса',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut officia, architecto expedita nostrum magnam explicabo eos delectus illo. Dicta error, consequatur facere recusandae nisi voluptates ex repellendus exercitationem odio!',
        btnContent: 'смотреть',
        media: [
            {
                url: office,
                alt: 'office'
            },
        ]
    }
    
]

const ProjectsPage = props => {
    return (
        <div className='container'>
            <h1 className='h1'>НАШИ<br/><span className='h1__bold'>ПРОЕКТЫ</span></h1>
            <div className="projects">
                {
                    projects.map(item => (
                        <Card
                            key={item.id}
                            title={item.title}
                            titleType={3}
                            text={item.text}
                            btnContent={item.btnContent}
                            media={item.media}
                        />
                    ))
                }
            </div>

            
        </div>
    )
}

ProjectsPage.propTypes = {

}

export default ProjectsPage
