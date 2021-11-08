import React from 'react'
import PropTypes from 'prop-types'


function Button({ color, text, onClick, className = 'btn', style }) {
    return (
        <button onClick={onClick} style={{...style, backgroundColor: color}}
            className={className}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
