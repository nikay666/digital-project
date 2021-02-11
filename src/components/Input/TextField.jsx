import React from 'react'
import PropTypes from 'prop-types'
import { getTypeTemplate } from './getTypeTemplate'
import './TextField.scss'

const TextField = ({typeField, type, required, placeholder, name, onChange, errors, options}) => {
    return (
        <div className='textField'>
            <label 
                htmlFor={name} 
                className="textField__label"
            >{placeholder}</label>
            {
                getTypeTemplate(typeField, type, required, placeholder, name, onChange, options)
            }
            {
                errors &&  <span className="textField__error">{errors}</span>
            }

        </div>
    )
}
TextField.defaultProps = {
    required: false,
    typeField: 'input'
}

TextField.propTypes = {
    typeField: PropTypes.string,
    type: PropTypes.string, 
    placeholder: PropTypes.string, 
    name: PropTypes.string,
    errors: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func
}

export default TextField
