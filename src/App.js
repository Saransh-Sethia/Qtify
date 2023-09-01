import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import styles from './App.css';
import { data } from "./mockData/mockData";
import Section from "./components/Section/Section";
function App() {
  const [topAlbumData, setTopAlbumData] = useState(data);
  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
      <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>
    </>
  );
}

export default App;
