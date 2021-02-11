import React from 'react'
import PropTypes from 'prop-types'

const Textarea = ({required, placeholder, name, onChange}) => {
    return (
        <textarea 
        name={name} 
        id={name} 
        placeholder={placeholder}
        className="textField__input"
        onChange={onChange}
        required={required}
    ></textarea>
    )
}

Textarea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default Textarea
