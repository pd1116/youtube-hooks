import {useState,useEffect} from 'react'
import youtube from '../api/youtube';


const useVideos=(defaultSearchTerm)=>{
  const [videos, setvideos] = useState([])

  useEffect((defaultSearchTerm) => {
    search(defaultSearchTerm); // Default Search after loading of the app
  }, [])

  const search = async text => {
    const response = await youtube.get('/search', {
      params: {
        q: text
      }
    })

    setvideos(response.data.items);
    //setselectedVideo(response.data.items[0])
  }

  
  return [videos, search];
   
}

export default useVideos