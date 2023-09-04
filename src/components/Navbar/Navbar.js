import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Search1 from '../SearchBar/Search1';
const Navbar = ({data}) => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <SearchBar placeholder='Search a song of your choice' data={data} />
        {/* <Search1 data={data} /> */}
      <Button children="Give Feedback"/>
    </nav>
  )
}

export default Navbar
