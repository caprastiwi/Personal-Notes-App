import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';
import PropTypes from 'prop-types';

function NoteItemContent({ id, title, createdAt, body }) {
  return (
    <div className='noteItem-content'>
      <h3 className='noteItem-title'>
        <Link to={`/notes/${id}`} className='noteTitle'>{title}</Link>
      </h3>
      <p className='noteItem-date'>{showFormattedDate(createdAt)}</p>
      <p className='noteItem-body'>{body}</p>
    </div>
  );
}

NoteItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NoteItemContent;