import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <div className='header-name'>
                <h1>Notes App</h1>
            </div>
            <div className='nav-bar'>
                <ul>
                    <li><Link to='/' className='navBar'>Home</Link></li>
                    <li><Link to='/archive' className='navBar'>Archive</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;