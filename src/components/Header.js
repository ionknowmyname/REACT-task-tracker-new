// import React from 'react'  // only needed for class components
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {


    return (
        <header className='header'>
            <h1>Testing {title}</h1>
            <Button color={showAdd ? 'red' :'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            {/* if showAdd is true, the text would be Close & color red */}
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
