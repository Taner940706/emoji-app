import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/UI/Logo';
import Emojies from './components/Emojies';
import SearchBar from './components/UI/SearchBar';

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <Emojies />
    </div>
  );
}

export default App;
