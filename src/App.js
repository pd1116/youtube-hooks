import React,{useState,useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './Components/SearchBar';
import VideoDetail from './Components/VideoDetail';
import VideoList from './Components/VideoList';
import useVideos from './hooks/useVideos';

const App=()=>{
  const [videos, search] = useVideos('cars');
  const [selectedVideo, setselectedVideo] = useState(null);

  useEffect(() => {
    setselectedVideo(videos[0]); // Default Search after loading of the app
  }, [videos]);
  
   return (
      <div style={{ marginTop: "30px" }} className="ui container" >
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={setselectedVideo} videos={videos} />
            </div>
          </div>
        </div>
      </div >
    );
}

export default App;
