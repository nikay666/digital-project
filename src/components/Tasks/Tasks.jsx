import React from 'react'
import PropTypes from 'prop-types'
import './Tasks.scss'
import Task from './Task'


const Tasks = ({tasks}) => {
    return (
        <div className="tasks">
        <h2 className="h2 tasks__title">Основные задачи</h2>
        <div className="tasks__content">
            {
                tasks.map((task, index) => (
                    <Task  
                        key={`id-${index}`}
                        number={index+1}
                        text={task}
                    />
                ))
            }
        </div>
    </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.string)
}

export default Tasks
