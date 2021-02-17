import React from 'react'
import PropTypes from 'prop-types'
import darkLogoSvg from '../../assets/img/darkLogo.svg'
import lightLogoSvg from '../../assets/img/lightLogo.svg'
import { Link } from 'react-router-dom'
import './Logo.scss'

const Logo = ({type='dark'}) => {
    const logo = type === 'dark' ? darkLogoSvg  : lightLogoSvg
    return (
        <Link to="/" className="header__logo  logo">
            <img src={logo} alt="logo"/>
        </Link>
    )
}

Logo.propTypes = {
    type: PropTypes.string
}

export default Logo
