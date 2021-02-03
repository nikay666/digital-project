import React from 'react'
import PropTypes from 'prop-types'

const Task = ({number, text}) => {
    return (
        <div className="tasks__task">
        <p className="tasks__number">{number}</p>
        <p className="tasks__text">
            {text}
        </p>
    </div>
    )
}

Task.propTypes = {
    number: PropTypes.number,
    text: PropTypes.string
}

export default Task
