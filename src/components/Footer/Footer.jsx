import React from 'react'
import PropTypes from 'prop-types'
import { Logo } from '../Logo'
import './Footer.scss'
import { Nav } from '../Nav'
import { List } from '../List'

const Footer = ({navList, contactList, socialList}) => {
    return (
        <footer className='footer'>
            <div className="footer__top container">
                <div className="footer__item">
                    <Logo type='light' />
                </div>
                <div className="footer__item">
                    <p className="footer__title">Информация</p>
                    <Nav list={navList} type='footer' />
                </div>
                <div className="footer__item">
                    <p className="footer__title">Контакты</p>
                    <List list={contactList} icons/>
                    
                </div>
                <div className="footer__item">
                    <p className="footer__title">Социальные сети</p>
                    <List list={socialList} icons type='list' />
                </div>
            </div>
            <div className="footer__bottom container">
                <p className="footer__copy">
                    © 2019 Digital Project. Все права защищены.
                </p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    navList: PropTypes.arrayOf(PropTypes.object),
    contactList: PropTypes.arrayOf(PropTypes.object),
    socialList: PropTypes.arrayOf(PropTypes.object),
}

export default Footer
