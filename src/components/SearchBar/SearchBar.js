import React from 'react';
import styles from "./Search.module.css";
import SearchIcon  from '../../assets/search-icon.png';

const SearchBar = ({placeholder, data}) => {

  return (
    <>
    <form className={styles.wrapper}>
     <input className={styles.search} placeholder={placeholder} />
     <button className={styles.searchButton} type='submit'>
     <img src={SearchIcon} alt="Search" />
     </button>
    </form>
      
    </>
  )
}

export default SearchBar
