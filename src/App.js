import { useEffect, useState } from "react";
import { fetchSongs, fetchTopAlbums, fetchNewAlbums } from "./api/api";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { data1 } from "./mockData/mockData";
import Section from "./components/Section/Section";

 
function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData =  (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }

    const res =  songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateSongsData(value);
  },[value]);

  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
     
    } catch (e) {
      console.log(e);
    }
  };

  const generateNewData = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewData(res);
     
    } catch (e) {
      console.log(e);
    }
  };

  const generateAllSongData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (e) {
      console.log(e);
    }
  };

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  useEffect(() => {
    generateData();
    generateNewData();
    generateAllSongData();
  }, []);

  return (
    <>
      <Navbar
       data={data}
       newData={newData}
       songsData={songsData}
       setData={setData} 
       setNewData={setNewData} 
       setSongsData={setSongsData} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          type="album"
          title="Top Albums"
          data={data}
          filteredDataValues={data}
        />
        <Section
          type="album"
          title="New Albums"
          data={newData}
          filteredDataValues={newData}
        />
        {/* {console.log("songsData", songsData)}; */}
        <Section
          type="song"
          title="Songs"
          data={data}
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
