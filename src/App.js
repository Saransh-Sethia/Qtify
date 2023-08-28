import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Card from "./Card/Card";

function App() {

  const [topAlbumData, setTopAlbumData] = useState([]);
  const generateTopAlbumData = async() => {

    try{
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    }catch(e){
console.log(e)
    }

  }

  useEffect(() => {
    generateTopAlbumData();
  },[])
 
  return (
    <>
<Navbar />
<Hero />
<Card data={topAlbumData[0]} type='album'/>
    </>
  );
}

export default App;
