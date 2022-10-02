import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { showFormattedDate, getArchivedNotes, deleteNote, unarchiveNote, editNote } from '../utils/data';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            archiveNotes: getArchivedNotes(),
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
            archiveNotes: getArchivedNotes(),
          }
        })
      }
    
      onArchiveHandler(id) {
        unarchiveNote(id);
    
        this.setState(() => {
          return {
            archiveNotes: getArchivedNotes(),
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
        const archiveNotes = this.state.archiveNotes.filter((note) => {
          return note.title.toLowerCase().includes(
            this.state.keyword.toLowerCase()
          );
        });
        
        return (
          <div className='archive-page'>
            <SearchNote
              keyword={this.state.keyword}
              keywordChange={this.onKeywordChangeHandler}
            />
            <h2>Archive Notes</h2>
            <NoteList
              notes={archiveNotes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
              onEdit={editNote}
              createdAt={showFormattedDate}
            />
          </div>
      );
    }
  }

export default ArchivePageWrapper;