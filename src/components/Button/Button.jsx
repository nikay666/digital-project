import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.scss'

const Button = ({icon, dark, fullWidth, border, children}) => {
    return (
        <button 
            className={classNames(
                'btn',  
                {'btn--dark': dark},
                {'btn--icon': icon},
                {'btn--border': border},
                {'btn--fullWidth': fullWidth},
                {'btn--text-icon': children && icon}
            )}
        >
            {children && children}
            {icon && <FontAwesomeIcon className="btn__icon" icon={icon} /> }
        </button>
    )
}
Button.defaultProps = {
    dark: false,
    icon: '',
    border: false,
    fullWidth: false,
}

Button.propTypes = {
    dark: PropTypes.bool,
    icon: PropTypes.string,
    border: PropTypes.bool,
    fullWidth: PropTypes.bool,
}

export default Button
