import { useNotes } from '../App';
import { Input } from './SearchBox.styled';

const SearchBox = props => {
  const { handleChange } = useNotes();

  return <Input type="text" placeholder="Search" onChange={handleChange} />;
};

export default SearchBox;
