import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/api';
import NoteList from '../components/NoteList';
import AddNoteBtn from '../components/AddNoteBtn';
import SearchNote from '../components/SearchNote';

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [initializing, setInitializing] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || ''
  });

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
  }

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
  }

  useEffect(() => {
    async function setActiveNotes() {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }
      setInitializing(false);
    }

    setActiveNotes();
  }, [notes]);

  if (initializing) {
    return null;
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

    return (
      <div className='home-page'>
        <SearchNote
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
        />
        <AddNoteBtn />
        <h2>Active Notes</h2>
        <NoteList
          notes={notes}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
          createdAt={showFormattedDate}
        />
      </div>
    )
  
}

export default HomePage;