import React from 'react';
import PropTypes from 'prop-types';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({
  id,
  title,
  createdAt,
  body,
  isArchived,
  onDelete,
  onArchive,
  onEdit
}) {
  return (
    <div className='note-item'>
      <NoteItemContent
        id={id}
        title={title}
        createdAt={createdAt}
        body={body}
      />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        isArchived={isArchived}
        onEdit={onEdit}
      />
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default NoteItem;