import { useState } from "react";
import Cookies from "universal-cookie";

import youtube from '../../api/youtube';
import Header from "../../components/header/header"
import SearchBar from "../../components/searchBar/searchBar"
import VideoList from "../videoList/videoList";
import Video from "../../components/models/models";
import Canvas from "../../components/canvas/canvas";

const MainPage = () => {

    const [videos, setVideos] = useState<Video[]>([]);
    const cookies = new Cookies();

    const handleSubmit = async (username: string) => {
        const response: any = youtube.get('/search', {
            params: {
                channelId : username
            }
        }).then((response: any) => setVideos(response.data.items))
        .catch((error) => console.log(error));
        console.log(response);

        // cookies
        cookies.set('lastFoundedChannel', username, { path: '/' });
        // localStorage
        localStorage.clear();
        localStorage.setItem('lastFoundedChannel', username);
    }

    return (
        <>
            <Header />
            <SearchBar handleFormSubmit={handleSubmit} />
            <VideoList videos={videos}/>
            <Canvas />
        </>
    )
}

export default MainPage;