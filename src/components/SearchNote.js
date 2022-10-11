import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

function SearchNote({ keyword, keywordChange }) {
    return(
        <LocaleConsumer>
            {
                ({ locale, toggleLocale}) => {
                    return (
                        <div className='note-search'>
                            <FaSearch className='searchIcon'/>
                            <input
                                type='text'
                                placeholder={locale === 'id' ? 'Search by title...' : 'Cari berdasarkan judul...'}
                                value={keyword}
                                onChange={(event) => keywordChange(event.target.value)}
                            />
                        </div>
                    )
                }
            }
        </LocaleConsumer>
    )
}

SearchNote.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchNote;