import React from 'react'
import PropTypes from 'prop-types'
import classNames from  'classnames'
import './Pagination.scss'
import { Button } from '../Button'

const formatPaginationNumber = (num) => {
    const res = Math.round(num) 
    if(res < 10) return `0${res}`
    return res
}

const Pagination = ({thisPage, totalPage, type, count, onClick}) => {
    const setNext = () => {
        onClick(count)
    }
    const setPrev = () => {
        onClick(-count)
    }
    return (
       <div className={classNames('pagination', {[`pagination--${type}`]: type})}>
             <div className="pagination__btns">
                <Button
                    onClick={setPrev}
                    icon='arrow-left'
                    border
                /> 
                <Button
                    onClick={setNext}
                    icon='arrow-right'
                    border
                />  
            </div>
            <p className="pagination__numbers">
                <span className="active">{formatPaginationNumber(thisPage)}</span>
                /
                <span className="">{formatPaginationNumber(totalPage)}</span>
            </p>
       </div>
    )
}

Pagination.defaultProps = {
    thisPage: 1,
    totalPage: 1,
    type: '',
}

Pagination.propTypes = {
    thisPage: PropTypes.number, 
    totalPage: PropTypes.number,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default Pagination
