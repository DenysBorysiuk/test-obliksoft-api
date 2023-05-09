import { createContext, useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getAllNotes, saveNote, deleteNote, updateNote } from '../services/db';
import Sidebar from './Sidebar/Sidebar';
import Workspace from './Workspace/Workspace';
import SearchBox from './SearchBox/SearchBox';
import ControlBar from './ControlBar/ControlBar';
import { Modal } from './Modal/Modal';
import { createPortal } from 'react-dom';
import { Header, Wrap, Container } from './App.styled';

const NotesContext = createContext();
export const useNotes = () => useContext(NotesContext);

export const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      const result = await getAllNotes();
      setNotes(result);
    }
    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    const newNote = { id: nanoid(), text: '', lastModified: Date.now() };
    await saveNote(newNote);
    setNotes(prevState => [newNote, ...prevState]);
    setActiveNote(newNote.id);
  };

  const handleDeleteNote = async id => {
    await deleteNote(id);
    setNotes(notes.filter(note => note.id !== id));
    setActiveNote(null);
    setShowModal(false);
  };

  const handleUpdateNote = async updatedNote => {
    await updateNote(updatedNote);
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  const handleChange = evt => {
    setSearchTerm(evt.target.value);
  };

  const getVisibleNotes = () => {
    const normalizedFilter = searchTerm.toLowerCase();

    return notes.filter(note => note.text.toLowerCase().includes(normalizedFilter));
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        handleAddNote,
        handleDeleteNote,
        handleUpdateNote,
        activeNote,
        setActiveNote,
        getActiveNote,
        setSearchTerm,
        getVisibleNotes,
        handleChange,
        setShowModal,
      }}
    >
      <Container>
        <Header>
          <ControlBar />
          <SearchBox />
        </Header>
        <Wrap>
          <Sidebar />
          <Workspace />
        </Wrap>
        {showModal && createPortal(<Modal onClose={() => setShowModal(false)} />, document.body)}
      </Container>
    </NotesContext.Provider>
  );
};

export default App;
