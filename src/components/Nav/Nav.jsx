import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Nav.scss'
import { Link } from 'react-router-dom'


const Nav = ({list, type, classes, onClickLink}) => {
    return (
        <nav className={classNames("nav", `nav--${type}`, classes)}>
        <ul className='nav__list'>
            {
                list.map((item) => (
                    <li key={item.id} className="nav__item">
                        <Link 
                            onClick={onClickLink}
                            to={item.path} 
                            className="nav__link"
                        >{item.title}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>
    )
}

Nav.defaultProps = {
    list: {},
    type: 'header',
    classes: ''
}

Nav.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string,
    classes: PropTypes.string
}

export default Nav
