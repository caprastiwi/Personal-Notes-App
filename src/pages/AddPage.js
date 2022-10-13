import React from 'react';
import { addNote } from '../utils/api';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import { LocaleConsumer } from '../contexts/LocaleContext';

function AddPage() {
    const navigate = useNavigate();
    
    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }
    
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <div className='note-add'>
                            <div className='noteAdd-header'>
                                <FaPlus />
                                <h2>{locale === 'id' ? 'Tambah catatan baru' : 'Add new note'}</h2>
                            </div>
                            <NoteInput addNote={onAddNoteHandler} />
                        </div>
                    )
                }
            }
        </LocaleConsumer>
    )
}
 
export default AddPage;