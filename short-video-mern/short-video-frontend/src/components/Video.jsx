import "./Video.css";

import { useRef, useState } from "react";

import { VideoFooter } from "./VideoFooter";
import { VideoSidebar } from "./VideoSidebar";

export const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <div className="video">
        <video
          src={url}
          className="video__player"
          loop
          ref={videoRef}
          onClick={handleVideoPress}
        ></video>
        <VideoFooter song={song} channel={channel} description={description} />
        <VideoSidebar shares={shares} likes={likes} messages={messages} />
      </div>
    </>
  );
};
