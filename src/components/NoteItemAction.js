import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt, FaArchive } from 'react-icons/fa';

function NoteItemAction({ id, onDelete, onArchive, onEdit }) {
  return (
    <div className='noteItem-action'>
      <button
        className='noteItem-btn delete'
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this note?'))
            onDelete(id)
          }
        }>
          <FaTrashAlt />
      </button>
      <button
        className='noteItem-btn archive'
        onClick={() => onArchive(id)}>
          <FaArchive />
      </button>
    </div>
  )
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default NoteItemAction;