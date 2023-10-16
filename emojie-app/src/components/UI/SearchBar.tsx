import React, {useState, useRef, FormEvent} from 'react';
import classes from './SearchBar.module.css';

const SearchBar: React.FC<{onSearch: (searchQuery: string) => void}> = (props) => {

  const searchText = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const searchTextValue = searchText.current!.value;
    console.log('handleSearch called with:', searchText);
    props.onSearch(searchTextValue);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onSearch(searchText.current!.value);

  }
  return <>
  <form onSubmit={onSubmitHandler}>
    <div className={classes.seachBar}>
      <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} ref={searchText} />
      <button type='submit'>Search</button>
      </div>
      </form>
  </>
}

export default SearchBar;