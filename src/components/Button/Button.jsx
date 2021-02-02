import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.scss'
import { Link } from 'react-router-dom'

const Button = ({icon, dark, path, link, fullWidth, border, children}) => {
    const classes = classNames(
        'btn',  
        {'btn--dark': dark},
        {'btn--icon': icon},
        {'btn--border': border},
        {'btn--fullWidth': fullWidth},
        {'btn--text-icon': children && icon}
    )
        const iconContent = (icon && <FontAwesomeIcon className="btn__icon" icon={icon} />)
        const textCotent = ( children && children)

    return (
        <>     
        {
        link ?
        <Link to={path} className={classes}>
            {textCotent}{iconContent}
        </Link>
        : <button  className={classes}>
            {textCotent}{iconContent}
        </button>
        }
        </>
    )
}
Button.defaultProps = {
    dark: false,
    icon: '',
    border: false,
    fullWidth: false,
    link: false,
    path: '/'
}

Button.propTypes = {
    dark: PropTypes.bool,
    icon: PropTypes.string,
    border: PropTypes.bool,
    fullWidth: PropTypes.bool,
    link: PropTypes.bool,
    path: PropTypes.string
}

export default Button
