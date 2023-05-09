import { useNotes } from '../App';
import { Item, ModifiedDate } from './ListItem.styled';

const ListItem = ({ id, text, lastModified }) => {
  const { activeNote, setActiveNote } = useNotes();
  return (
    <Item activeNote={activeNote} id={id} onClick={() => setActiveNote(id)}>
      <p>{text.length > 0 ? text.slice(0, 15) : 'Untitled note'}</p>
      <ModifiedDate>
        {'Last Modified:'} {new Date(lastModified).toLocaleDateString('en-GB')}
      </ModifiedDate>
    </Item>
  );
};

export default ListItem;
