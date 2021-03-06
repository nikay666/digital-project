import React from 'react'
import { Card } from '../components/Card'
import { useFirebase } from '../hooks'

const ProjectsPage = () => {
    const projects = useFirebase('/projectList') 
    
    return (
        <main className='main container main--projects'>
            <h1 className='h1'>НАШИ<br/><span className='h1__bold'>ПРОЕКТЫ</span></h1>
            <div className="projects">
                {
                    projects.length !== 0 && projects.map(item => (
                        <Card
                            key={item.id}
                            title={item.title}
                            titleType={3}
                            text={item.text}
                            link={`projects/${item.link}`}
                            media={item.media}
                            className="projects"
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default ProjectsPage
