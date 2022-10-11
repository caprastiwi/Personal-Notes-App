import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/api';
import NoteList from '../components/NoteList';
import AddNoteBtn from '../components/AddNoteBtn';
import SearchNote from '../components/SearchNote';
import { LocaleConsumer } from '../contexts/LocaleContext';

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
      notes: [],
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();
    
    this.setState(() => {
      return {
        notes: data,
      }
    })
  }

  async onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data,
      }
    })
  }

  async onArchiveHandler(id) {
    await archiveNote(id);
    
    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data,
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
      <LocaleConsumer>
        {
          ({ locale }) => {
            return (
              <div className='home-page'>
                <SearchNote
                  keyword={this.state.keyword}
                  keywordChange={this.onKeywordChangeHandler}
                />
                <AddNoteBtn />
                <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
                <NoteList
                  notes={notes}
                  onDelete={this.onDeleteHandler}
                  onArchive={this.onArchiveHandler}
                  createdAt={showFormattedDate}
                />
              </div>
            )
          }
        }
      </LocaleConsumer>
    )
  }
}

export default HomePageWrapper;