import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt, FaArchive } from 'react-icons/fa';
import { LocaleConsumer } from '../contexts/LocaleContext';

function NoteItemAction({ id, onDelete, onArchive, onEdit }) {
  return (
    <LocaleConsumer>
            {
                ({ locale, toggleLocale}) => {
                    return (
    <div className='noteItem-action'>
      <button
        className='noteItem-btn delete'
        onClick={() => {
          if (window.confirm(locale === 'id' ? 'Anda yakin ingin menghapus catatan ini?' : 'Are you sure you want to delete this note?'))
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
    }
    </LocaleConsumer>
  )
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default NoteItemAction;