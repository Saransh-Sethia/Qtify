import axios from 'axios';
export const backend_endpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async() => {
    try{
const res = await axios.get(`${backend_endpoint}/albums/top`);
console.log(res);
return res.data;
    }catch(error){
        console.log(error)
    }
}