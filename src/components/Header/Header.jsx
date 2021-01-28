import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'
import { Nav } from '../Nav'
import { Logo } from '../Logo'

const Header = ({list}) => {
    return (
        <header className="header container">
            <Logo type='dark' />
            <Nav 
                type='header'
                classes='header__nav'  
                list={list}
            />
        </header>
    )
}

Header.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

export default Header
