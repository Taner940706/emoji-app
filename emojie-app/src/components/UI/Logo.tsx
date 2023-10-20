import React from 'react';
import classes from './Logo.module.css';
import logo from './../../assets/images/emojie.png';


const Logo = () => {
  return <>
    <div className={classes.logo}>
      <img src={logo} alt="main logo" />
      <p>Emojie - search engine for emojies!</p>
      </div>
  </>
}

export default Logo;