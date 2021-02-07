import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.scss'
import { Link } from 'react-router-dom'

const Button = ({icon, path, link, className, children, dark, whiteText, noPaddig, fullWidth, border, onClick, type}) => {
    const classes = classNames(
        'btn',  
        {'btn--dark': dark},
        {'btn--icon': icon},
        {'btn--text-icon': children && icon},
        {'btn--whiteText': whiteText},
        {'btn--border': border},
        {'btn--noPaddig': noPaddig},
        {'btn--fullWidth': fullWidth},
        className
    )
    const iconContent = (icon && <FontAwesomeIcon className="btn__icon" icon={icon} />)
    const textCotent = ( children && children)
    const handlerClick = (e) => {
        onClick && onClick(e)
    }

    return (
        <>     
        {
        link ?
        <Link onClick={handlerClick} to={path} className={classes}>
            {textCotent}{iconContent}
        </Link>
        : <button type={type} onClick={handlerClick} className={classes}>
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
    whiteText: false,
    path: '/',
    className: ''
}

Button.propTypes = {
    dark: PropTypes.bool,
    icon: PropTypes.string,
    border: PropTypes.bool,
    fullWidth: PropTypes.bool,
    link: PropTypes.bool,
    path: PropTypes.string,
    whiteText: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.string
}

export default Button
