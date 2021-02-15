import VideoItem from "../videoItem/videoItem";
import Video from '../../components/models/models';
import "./videoList.css";

const VideoList = ({videos}: {videos: Video[]}) => {
    const renderedVideos = videos.map((video: Video) => {
        return <VideoItem key={video.id.videoId} video={video} />
    })
    return <div className="video_list border border-danger rounded">{renderedVideos}</div>
}

export default VideoList;