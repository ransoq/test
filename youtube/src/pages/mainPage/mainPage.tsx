import { useState } from "react";
import youtube from '../../api/youtube';
import Header from "../../components/header/header"
import SearchBar from "../../components/searchBar/searchBar"

const MainPage = () => {

    const [videos, setVideos] = useState([]);


    const handleSubmit = async (username: string) => {
        const response = await youtube.get('/search', {
            params: {
                channelId : username
            }
        });
        console.log(response);
    }

    return (
        <>
            <Header />
            <SearchBar handleFormSubmit={handleSubmit} />
        </>
    )
}

export default MainPage;