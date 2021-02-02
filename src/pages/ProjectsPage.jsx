import React from 'react'
import PropTypes from 'prop-types'

import school from '../assets/img/projects/school.jpg' 
import { Card } from '../components/Card'

const  projects = [
    {
        title: 'Общеобразовательная школа',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut officia, architecto expedita nostrum magnam explicabo eos delectus illo. Dicta error, consequatur facere recusandae nisi voluptates ex repellendus exercitationem odio!',
        btnContent: 'смотреть',
        media: [
            {
                url: school,
                alt: 'school'
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
