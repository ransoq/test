import VideoItem from "../videoItem/videoItem";
import PropTypes from 'prop-types';
import Video from '../../components/models/models';
import "./videoList.css";

const VideoList = ({videos}: {videos: Video[]}) => {
    const renderedVideos = videos.map((video: Video) => {
        return <VideoItem key={video.id.videoId} video={video} />
    })
    return <div className="video_list border border-danger rounded">{renderedVideos}</div>
}

export default VideoList;

VideoList.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.object)
}