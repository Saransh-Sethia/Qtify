import React, { useState } from 'react';
import styles from "./Search.module.css";
import SearchIcon  from '../../assets/search-icon.png';

const SearchBar = ({placeholder, data}) => {

  const [val, setVal] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
    const res = data.filter((item)=>item.title.includes(e.target.value))
  }

  return (
    <>
    <form className={styles.wrapper} onSubmit={onSubmit}>
     <input className={styles.search} placeholder={placeholder} required value={val} onChange={changeHandler} />
     <button className={styles.searchButton} type='submit'>
     <img src={SearchIcon} alt="Search" />
     </button>
    </form>
      {val?<></>:null}
    </>
  )
}

export default SearchBar
