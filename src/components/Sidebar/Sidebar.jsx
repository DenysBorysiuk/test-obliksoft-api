import { useNotes } from '../App';
import ListItem from '../ListItem/ListItem';
import { List } from './Sidebar.styled';

const Sidebar = () => {
  const { getVisibleNotes } = useNotes();
  const notes = getVisibleNotes();
  return (
    <List>
      {notes.length === 0 ? (
        <p>List is empty</p>
      ) : (
        notes.map(({ id, values: { text, lastModified } }) => (
          <ListItem key={id} id={id} text={text} lastModified={lastModified} />
        ))
      )}
    </List>
  );
};

export default Sidebar;
