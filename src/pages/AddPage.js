import React from 'react';
import { addNote } from '../utils/data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
 
function AddPage() {
    const navigate = useNavigate();
    
    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/');
    }
    
    return (
        <div className='note-add'>
            <div className='noteAdd-header'>
                <FaPlus />
                <h2>Add new note</h2>
            </div>
            <NoteInput addNote={onAddNoteHandler} />
        </div>
    )
}
 
export default AddPage;