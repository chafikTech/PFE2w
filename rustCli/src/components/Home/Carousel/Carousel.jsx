import food from "../../../assets/fode30.jpg";
import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <img src={food} alt="food" />
      <div className="content">
        <h1>Welcome to My Site</h1>
        <p>Enjoy the video background!</p>
      </div>
    </div>
  );
};

export default VideoBackground;
