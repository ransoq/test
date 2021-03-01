import axios from "axios";

const API_KEY: string = 'AIzaSyCPROi3C3N7duwjXC1CnnK-ARtKaZsXhJ4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
        order: 'date',
        type: 'video'
    }
});