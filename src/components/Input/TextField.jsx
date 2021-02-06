import React from 'react'
import PropTypes from 'prop-types'
import { getTypeTemplate } from './getTypeTemplate'
import './TextField.scss'

const TextField = ({type, required, placeholder, name, value}) => {
    
    return (
        <div className='textField'>
            <label 
                htmlFor={name} 
                className="textField__label"
            >{placeholder}</label>
            {
                getTypeTemplate(type, required, placeholder, name, value)
            }
     
 
        </div>
    )
}

TextField.propTypes = {
    type: PropTypes.string, 
    placeholder: PropTypes.string, 
    name: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.object),
    required: PropTypes.bool
}

export default TextField
