import { useNotes } from '../App';
import ListItem from '../ListItem/ListItem';
import { List } from './Sidebar.styled';

const Sidebar = () => {
  const { getVisibleNotes } = useNotes();
  const notes = getVisibleNotes();
  const sortedNotes = notes.sort((a, b) => b.values.lastModified - a.values.lastModified);
  return (
    <List>
      {sortedNotes.length === 0 ? (
        <p>List is empty</p>
      ) : (
        sortedNotes.map(({ id, values: { text, lastModified } }) => (
          <ListItem key={id} id={id} text={text} lastModified={lastModified} />
        ))
      )}
    </List>
  );
};

export default Sidebar;
