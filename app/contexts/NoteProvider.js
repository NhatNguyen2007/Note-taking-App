import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const NoteContext = createContext();
const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes');
    if (result !== null) setNotes(JSON.parse(result));
  };

  const searchNotes = async (keyword) => {
    const result = await AsyncStorage.getItem('notes');
    if (result !== null) {
      const parsedNotes = JSON.parse(result);
      const filteredNotes = parsedNotes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
        || note.content.toLowerCase().includes(keyword.toLowerCase())
      );
      setNotes(filteredNotes);
    }
  };

  useEffect(() => {
    findNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ notes, setNotes, findNotes, searchNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);

export default NoteProvider;
