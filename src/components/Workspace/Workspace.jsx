import { useNotes } from '../App';
import { Wrap, Time } from './Workspace.styled';
import { DebounceInput } from 'react-debounce-input';

const Workspace = () => {
  const { getActiveNote, handleUpdateNote } = useNotes();
  const activeNote = getActiveNote();

  const onChange = (field, value) => {
    const date = new Date();
    handleUpdateNote({
      ...activeNote,
      values: { [field]: value, lastModified: date.toLocaleDateString() },
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
        <Time>{new Date().toLocaleDateString('en-GB', options)}</Time>
        <DebounceInput
          element="textarea"
          debounceTimeout={300}
          type="text"
          id="text"
          placeholder="Write your note here..."
          value={activeNote.values.text}
          onChange={e => onChange('text', e.target.value)}
          autoFocus
        />
      </Wrap>
    )
  );
};

export default Workspace;
