import React from 'react'
import PropTypes from 'prop-types'
import classNames  from 'classnames'
import  './BurgerBtn.scss'

const BurgerBtn = ({onClick, active, className}) => {
    const handlerClick  = () => {
        onClick()
    }
    return (
        <button 
            className={classNames('burger-btn', className, {'active': active})}
            onClick={handlerClick}
        >
            <span className='burger-btn__line'></span>
        </button>
    )
}

BurgerBtn.propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool, 
    className: PropTypes.string
}

export default BurgerBtn
