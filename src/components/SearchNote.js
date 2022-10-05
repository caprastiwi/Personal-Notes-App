import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

function SearchNote({ keyword, keywordChange }) {
    return(
        <div className='note-search'>
            <FaSearch className='searchIcon'/>
            <input
                type='text'
                placeholder='Search by title...'
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
        </div>
    )
}

SearchNote.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchNote;