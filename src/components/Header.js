import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { LocaleConsumer } from '../contexts/LocaleContext';

function Header({ logout, name }) {
    return (
        <LocaleConsumer>
            {
                ({ locale, toggleLocale}) => {
                    return (
                        <header>
                            <div className='header-name'>
                                <h1>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h1>
                            </div>
                            <div className='nav-bar'>
                                <ul>
                                    <li><Link to='/' className='navBar'>{locale === 'id' ? 'Rumah' : 'Home'}</Link></li>
                                    <li><Link to='/archive' className='navBar'>{locale === 'id' ? 'Arsip' : 'Archive'}</Link></li>
                                    <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                                    <li><button className='profile-btn' onClick={logout}><FaSignOutAlt /> {name}</button></li>
                                </ul>
                            </div>
                        </header>
                    )
                }
            }
        </LocaleConsumer>
    )
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default Header;