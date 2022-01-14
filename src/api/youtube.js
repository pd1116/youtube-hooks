import axios from 'axios'
const KEY = 'AIzaSyBnFy7gnoIyykQaiUyWpUxR8tRGnP20c04';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        /* headers: {
            Authorization: 'Client-ID cFYaVRlhITru8mcmG8TesC0qcN2erm31S8g__afjg5U'
        } */
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY
        }
    }
)


// Client Id :- 286821711979-i8k74d27v6bm7jmu3otmcvuq879viqtp.apps.googleusercontent.com