import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

function AddNoteBtn() {
  return (
    <>
        <Link
            to='/notes/new'
            className='addBtn'>
                <FaPlus />
                <span>Add note</span>
        </Link>
    </>
    )
}

export default AddNoteBtn;