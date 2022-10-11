import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { LocaleConsumer } from '../contexts/LocaleContext';

function AddNoteBtn() {
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <>
                            <Link
                                to='/notes/new'
                                className='addBtn'>
                                <FaPlus />
                                <span>{locale === 'id' ? 'Tambah note' : 'Add note'}</span>
                            </Link>
                        </>
                    )
                }
            }
        </LocaleConsumer>
    )
}

export default AddNoteBtn;