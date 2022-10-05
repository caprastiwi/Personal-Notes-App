import React from 'react';
import { showFormattedDate } from '../utils/data';
import PropTypes from 'prop-types';

function NoteDetail({ title, createdAt, body }) {
    return (
        <div className='detailItem-content'>
            <h2 className='detailItem-title'>{title}</h2>
            <p className='detailItem-date'>{showFormattedDate(createdAt)}</p>
            <p className='detailItem-body'>{body}</p>
        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

export default NoteDetail;