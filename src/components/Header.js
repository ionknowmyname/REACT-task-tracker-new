// import React from 'react'  // only needed for class components
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()   
    // so you can choose where to add the button and where not, like in about page, don't want add button there

    return (
        <header className='header'>
            <h1>Testing {title}</h1>
            {location.pathname === '/' && (
                <Button color={showAdd ? 'red' :'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            )}
            {/* if showAdd is true, the text would be Close & color red */}
            {/* if path is / then show the button else dont */}
        </header>
    )
}


// when there is no props
Header.defaultProps = {  
    title: 'Task tracker default'
}

Header.propTypes = {
    title: PropTypes.string,
}



export default Header
