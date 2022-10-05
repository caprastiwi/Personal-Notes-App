import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({
  notes,
  createdAt,
  onDelete,
  onArchive,
  onEdit
}) {
  if (!notes.length) {
    return <p className='emptyNote'>There's no note</p>;
  }

  return (
    <div className='note-list'>
      {
        notes.map((note) => (
          <NoteItem 
            key={note.id}
            id={note.id}
            createdAt={createdAt}
            onDelete={onDelete}
            onArchive={onArchive}
            onEdit={onEdit}
            isArchived={note.archived}
            {...note}
          />
        ))
      }
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default NoteList;