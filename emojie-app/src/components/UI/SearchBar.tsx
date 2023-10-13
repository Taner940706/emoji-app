import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
  return <>
    <div className={classes.seachBar}>
      <input type="text" placeholder="Search" />
      <button>Search</button>
      </div>
  </>
}

export default SearchBar;