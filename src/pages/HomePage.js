import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { showFormattedDate, getActiveNotes, deleteNote, archiveNote, editNote } from '../utils/data';
import NoteList from '../components/NoteList';
import AddNoteBtn from '../components/AddNoteBtn';
import SearchNote from '../components/SearchNote';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      }
    })
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      }
    })
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <div className='home-page'>
        <SearchNote
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <AddNoteBtn />
        <h2>Active Notes</h2>
        <NoteList
          notes={notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onEdit={editNote}
          createdAt={showFormattedDate}
        />
      </div>
    )
  }
}

export default HomePageWrapper;