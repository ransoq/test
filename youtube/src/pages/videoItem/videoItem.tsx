import VideoList from "../videoList/videoList"
import Video from '../../components/models/models';
import './videoItem.css';

const VideoItem = ({video}: {video: Video}) => {
    const url: string = "https://www.youtube.com/embed/";
    const watch: string = "https://www.youtube.com/watch?v=";
    return (
        <div className="video_item">
            <a href={watch+video.id.videoId}>
                <p>{video.snippet.title}</p>
            </a>
            <iframe width="800" height ="400" src={url+video.id.videoId}>
            </iframe>
        </div>
    )
}

export default VideoItem;