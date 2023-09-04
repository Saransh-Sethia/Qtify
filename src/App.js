import { useEffect, useState } from "react";
import { fetchSongs, fetchTopAlbums } from "./api/api";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { data } from "./mockData/mockData";
import Section from "./components/Section/Section";

 
function App() {
  const [data, setData] = useState([]);
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

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateSongsData(value);
  },[value]);

  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
      console.log("res",res);
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
    generateAllSongData();
  }, []);

  return (
    <>
      <Navbar data={data} />
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
          data={data}
          filteredDataValues={data}
        />
        {/* {console.log("songsData", songsData)}; */}
        <Section
          type="song"
          title="Songs"
          data={songsData}
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
