import axios from "axios";

const API_KEY = 'AIzaSyCPROi3C3N7duwjXC1CnnK-ARtKaZsXhJ4';

export default axios.create({

    baseURL: 'GET https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, contentDetails, statistics',
        maxResults: 5,
        key: API_KEY
    }
});