import React from 'react'
import PropTypes from 'prop-types'

const Select = ({placeholder, name, required, value}) => {
    return (
        <select 
            name={name} 
            className='textField__input'
            defaultValue="placeholder"
            required 
        >
            <option value="placeholder" disabled>{placeholder}</option>
            {
                value && value.map((item) => (
                    <option key={item.id} value={value}>{item.text}</option>
                ))
            }
        </select> 
    )
}

Select.propTypes = {
    placeholder: PropTypes.string, 
    name: PropTypes.string, 
    required: PropTypes.bool,
    value: PropTypes.arrayOf(PropTypes.object)
}

export default Select
