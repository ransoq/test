import { useState } from "react";
import youtube from '../../api/youtube';
import Header from "../../components/header/header"
import SearchBar from "../../components/searchBar/searchBar"
import VideoList from "../videoList/videoList";
import Video from "../../components/models/models";
import Canvas from "../../components/canvas/canvas";

const MainPage = () => {

    const [videos, setVideos] = useState<Video[]>([]);


    const handleSubmit = async (username: string) => {
        const response = await youtube.get('/search', {
            params: {
                channelId : username
            }
        });
        console.log(response);
        setVideos(response.data.items);
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