import React, { useState } from 'react';
import styles from "./Search.module.css";
import SearchIcon  from '../../assets/search-icon.png';

const SearchBar = ({placeholder, data, newData, songsData, setData, setNewData, setSongsData}) => {

  const [val, setVal] = useState("");
  // console.log(val);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setVal(e.target.value )
    const res = data.filter((item)=>item.title.toLowerCase().includes(val));
    const res1 = newData.filter((item)=>item.title.toLowerCase().includes(val));
    const res2 = songsData.filter((item)=>item.title.toLowerCase().includes(val));
    setData(res);
    setNewData(res1);
    setSongsData(res2);
  }

  return (
    <>
    <form className={styles.wrapper} onSubmit={onSubmit}>
     <input 
     className={styles.search} 
     placeholder={placeholder} 
     required
     value={val} 
     onChange={changeHandler} 
     />
     <button className={styles.searchButton} type='submit'>
     <img src={SearchIcon} alt="Search" />
     </button>
    </form>
      {val?<></>:null}
    </>
  )
}

export default SearchBar
