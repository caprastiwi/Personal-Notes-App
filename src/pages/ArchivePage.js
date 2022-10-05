import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/api';
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
            archiveNotes: [],
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
      }

      async componentDidMount() {
        const { data } = await getArchivedNotes();
        
        this.setState(() => {
          return {
            archiveNotes: data,
          }
        })
      }
    
      async onDeleteHandler(id) {
        await deleteNote(id);
        
        const { data } = await getArchivedNotes();
        this.setState(() => {
          return {
            archiveNotes: data,
          }
        })
      }
    
      async onArchiveHandler(id) {
        await unarchiveNote(id);
    
        const { data } = await getArchivedNotes();
        this.setState(() => {
          return {
            archiveNotes: data,
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
              createdAt={showFormattedDate}
            />
          </div>
      );
    }
  }

export default ArchivePageWrapper;