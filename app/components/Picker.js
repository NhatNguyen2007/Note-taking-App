import { createContext, useState } from 'react';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const updateNote = (id, note) => {
    const index = notes.findIndex((n) => n.id === id);
    const newNotes = [...notes];
    newNotes[index] = { ...newNotes[index], ...note };
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext };
export default NoteProvider;
