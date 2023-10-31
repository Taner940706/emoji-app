import React, {useState, useRef, FormEvent} from 'react';
import classes from './SearchBar.module.css';

const SearchBar: React.FC<{onSearch: (searchQuery: string) => void}> = (props) => {

  const searchText = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onSearch(searchText.current!.value);
    setSearchQuery('');

  }
  return <>
  <form data-testid="search-form" className={classes.form} onSubmit={onSubmitHandler}>
    <div className={classes.searchBar}>
      <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} ref={searchText} />
      <button type='submit'>Search</button>
      </div>
      </form>
  </>
}

export default SearchBar;