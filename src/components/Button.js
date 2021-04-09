// import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {  // you can also destructure props ({ color, text, onClick })
    

    return <button onClick={props.onClick} style={{backgroundColor: props.color}} className='btn'>{props.text}</button>   
    // if you destructure, then its just {text}, not {props.text}; same with color & props
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
