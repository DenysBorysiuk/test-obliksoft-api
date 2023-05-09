import { useNotes } from '../App';
import { Wrap, Time, Text } from './Workspace.styled';

const Workspace = () => {
  const { getActiveNote, handleUpdateNote } = useNotes();
  const activeNote = getActiveNote();

  const onChange = (field, value) => {
    handleUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return (
    activeNote && (
      <Wrap>
        <Time>{new Date(activeNote.lastModified).toLocaleDateString('en-GB', options)}</Time>
        <Text
          type="text"
          id="text"
          placeholder="Write your note here..."
          value={activeNote.text}
          onChange={e => onChange('text', e.target.value)}
          autoFocus
        />
      </Wrap>
    )
  );
};

export default Workspace;
