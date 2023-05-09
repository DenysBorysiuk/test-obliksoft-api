import { useNotes } from '../App';
import { FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Wrap, Button } from './ControlBar.styled';

const ControlBar = () => {
  const { activeNote, handleAddNote, setShowModal } = useNotes();
  return (
    <Wrap>
      <Button onClick={handleAddNote}>
        <FaPlus />
      </Button>
      {/* <Button disabled={!activeNote} onClick={() => handleDeleteNote(activeNote)}> */}
      <Button disabled={!activeNote} onClick={() => setShowModal(true)}>
        <FaRegTrashAlt />
      </Button>
      <Button disabled={!activeNote}>
        <FaRegEdit />
      </Button>
    </Wrap>
  );
};

export default ControlBar;
