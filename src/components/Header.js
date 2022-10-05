import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import ToggleTheme from './ToggleTheme';

function Header({ logout, name }) {
    return(
        <header>
            <div className='header-name'>
                <h1>Notes App</h1>
            </div>
            <div className='nav-bar'>
                <ul>
                    <li><Link to='/' className='navBar'>Home</Link></li>
                    <li><Link to='/archive' className='navBar'>Archive</Link></li>
                    <li><ToggleTheme /></li>
                    <li><button className='profile-btn' onClick={logout}><FaSignOutAlt /> {name}</button></li>
                </ul>
            </div>
        </header>
    )
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default Header;