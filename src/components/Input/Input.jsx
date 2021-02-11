import React from 'react'
import PropTypes from 'prop-types'

const Input = ({type, required, placeholder, name, onChange, options}) => {
    return (
        <input 
            id={name}
            name={name}
            type={type}
            className="textField__input"
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
    )
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool, 
    onChange: PropTypes.func
}

export default Input