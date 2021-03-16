import React from 'react'
import PropTypes from 'prop-types'

const Select = ({placeholder, name, required, options, onChange}) => {
    return (
        <select 
            name={name} 
            className='textField__input textField__select'
            defaultValue="placeholder"
            onChange={onChange}
            required={required}
        >
            <option value="placeholder" disabled>{placeholder}</option>
            {
                options && options.map((item) => (
                    <option key={item.id} value={item.value}>{item.text}</option>
                ))
            }
        </select> 

    )
}

Select.propTypes = {
    placeholder: PropTypes.string, 
    name: PropTypes.string, 
    required: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func
}

export default Select
