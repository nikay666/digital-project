import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../components/Card'
import { useFetch } from '../hooks'


const url = '/data/projects.json'

const ProjectsPage = props => {
    const projects = useFetch(url)
    return (
        <div className='container'>
            <h1 className='h1'>НАШИ<br/><span className='h1__bold'>ПРОЕКТЫ</span></h1>
            <div className="projects">
                {
                    projects && projects.map(item => (
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
