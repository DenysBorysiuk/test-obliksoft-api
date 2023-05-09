import { useNotes } from '../App';
import ListItem from '../ListItem/ListItem';
import { List } from './Sidebar.styled';

const Sidebar = () => {
  const { getVisibleNotes } = useNotes();
  const visibleNotes = getVisibleNotes();
  const sortedNotes = visibleNotes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <List>
      {sortedNotes.length === 0 ? (
        <p>List is empty</p>
      ) : (
        sortedNotes.map(({ id, text, lastModified }) => (
          <ListItem key={id} id={id} text={text} lastModified={lastModified} />
        ))
      )}
    </List>
  );
};

export default Sidebar;
