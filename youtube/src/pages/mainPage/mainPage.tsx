import React, { useState } from "react";

import Cookies from "universal-cookie";
import Video from "../../components/models/models";

import Header from "../../components/header/header"
import SearchBar from "../../components/searchBar/searchBar"
import VideoList from "../videoList/videoList";
import Canvas from "../../components/canvas/canvas";
import youtube from '../../api/youtube';

const MainPage = () => {

    const [videos, setVideos] = useState<Video[]>([]);
    const cookies = new Cookies();

    const handleSubmit = async (username: string) => {
        const response: Promise<void> = youtube.get('/search', {
            params: {
                channelId : username
            }
        }).then((response: any) => setVideos(response.data.items))
        .catch(error => console.log(error));

        // cookies
        cookies.set('lastFoundedChannel', username, { path: '/' });

        // localStorage
        localStorage.setItem('lastFoundedChannel', username);
    }

    return (
        <>
            <Header />
            <SearchBar handleFormSubmit={handleSubmit}/>
            <VideoList videos={videos}/>
            <Canvas />
        </>
    )
}

export default MainPage;