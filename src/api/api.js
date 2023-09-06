import axios from 'axios';


 const topAlbums_endpoint = "https://qtify-backend-labs.crio.do/albums/top";
 const newAlbums_endpoint = "https://qtify-backend-labs.crio.do/albums/new";
 const allSongs_endpoint = "https://qtify-backend-labs.crio.do/songs";


export const fetchTopAlbums = async() => {
    try{
const res = await axios.get(topAlbums_endpoint);
console.log(res);
return res.data;
    }catch(error){
        console.log(error)
    }
}

export const fetchNewAlbums = async() => {
    try{
const res = await axios.get(newAlbums_endpoint);
console.log(res);
return res.data;
    }catch(error){
        console.log(error)
    }
}

export const fetchSongs = async() => {
    try{
const res = await axios.get(allSongs_endpoint);
console.log(res);
return res.data;
    }catch(error){
        console.log(error)
    }
}