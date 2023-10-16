import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/UI/Logo';
import Emojies from './components/Emojies';
import SearchBar from './components/UI/SearchBar';

function App() {

  // const searchHandler = () =>{
  //   console.log("its works?")
  // }

 

  return (
    <div className="App">
      <Logo />
      {/* <SearchBar onSearch={handleSearch} /> */}
      <Emojies />
    </div>
  );
}

export default App;
