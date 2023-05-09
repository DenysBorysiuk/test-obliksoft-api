import { useEffect } from 'react';
import { useNotes } from '../App';
import { Overlay, ModalContent, Wrap } from './Modal.styled';

export const Modal = () => {
  const { activeNote, setShowModal, handleDeleteNote } = useNotes();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <p>Are you sure you want to do this?</p>
        <Wrap>
          <button onClick={() => handleDeleteNote(activeNote)}>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </Wrap>
      </ModalContent>
    </Overlay>
  );
};
