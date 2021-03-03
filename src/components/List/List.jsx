import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './List.scss'

const List = ({list, icons=false, color='light', type='col'}) => {
    return (
        <ul 
            className={classNames(
                'list', 
                `list--${color}`,
                `list--${type}`,
                {'list--icons': icons}, 

            )}
        >
        {
       
            list && list.map((item) => (
                <li className='list__item' key={item.id}>
                    <a 
                        href={item.link} 
                        target='_blank'
                        rel="noreferrer"
                        className='list__link'
                    >
                    {
                        icons && <FontAwesomeIcon className='list__icon' icon={item.icon} />
                    }
                       {item.text}
                    </a>
                    
                </li>
            ))
        }
        </ul>
    )
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    icons:  PropTypes.bool,
    color: PropTypes.string
}

export default List