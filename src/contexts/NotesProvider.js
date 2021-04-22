import React, { useState, useEffect } from 'react';
import API_SERVICE from '../services/api';

export const NotesContext = React.createContext(null);
NotesContext.displayName = 'NotesContext';

function NotesProviderComponent({ children }) {
  const [noteList, setNoteList] = useState([
    {
      description: 'description',
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      description: 'description',
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
    {
      description: 'description',
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false,
    },
    {
      description: 'description',
      id: 7,
      title: 'illo expedita consequatur quia in',
      completed: false,
    },
  ]);

  const loadNoteList = async () => {
    const lst = await API_SERVICE.getNoteListAsync({ start: 57, limit: 15 });
    setNoteList(lst);
  };

  useEffect(() => {
    loadNoteList();
  }, []);

  const addNewNote = (newNote) => {
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
  };

  const onNoteItemClick = (noteId) => {
    const noteIndex = noteList.findIndex((n) => n.id === noteId);
    const updatedNoteList = [
      ...noteList.slice(0, noteIndex),
      {
        ...noteList[noteIndex],
        completed: true,
      },
      ...noteList.slice(noteIndex + 1),
    ];

    setNoteList(updatedNoteList);
  };

  return (
    <NotesContext.Provider
      value={{
        noteList,
        setNoteList,
        addNewNote,
        onNoteItemClick,
        nextId: noteList[noteList.length - 1] ? noteList[noteList.length - 1].id + 1 : 1,
      }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProviderComponent;
