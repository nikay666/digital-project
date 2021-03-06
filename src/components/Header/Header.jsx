import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Header.scss'
import { Nav } from '../Nav'
import { Logo } from '../Logo'
import classNames from 'classnames'
import { BurgerBtn } from '../BurgerBtn'
import { useMedia } from '../../hooks'

const Header = ({list}) => {
    const [activeBtn, setActiveBtn ] = useState(false)
    const activeMedia = useMedia('tablet') 

    useEffect(() => {
        setActiveBtn(false)
    }, [activeMedia])

    const burgerMenuhandler = () => {
        setActiveBtn(!activeBtn)
    }
    return (
        <header  className="header container">
            <Logo type='dark' />
            <Nav 
                type='header'
                classes={classNames('header__nav', {'active': activeBtn})}  
                list={list}
                onClickLink={burgerMenuhandler}
            />  
            <BurgerBtn
                onClick={burgerMenuhandler}
                active={activeBtn}
                className='header__btn'
            />
            
          
        </header>
    )
}

Header.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

export default Header
