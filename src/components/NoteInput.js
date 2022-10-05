import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        
        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
    
    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <input
                    className='noteInput-title'
                    type='text'
                    placeholder='Put a title'
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea
                    className='noteInput-body'
                    type='text'
                    placeholder='Write what you think'
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                />
                <button
                    className='noteInput-action'
                    type='submit'>
                        <FaCheck />
                        Submit
                </button>
            </form>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;