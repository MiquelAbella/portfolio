import React from "react";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

export const Video = ({ handleToggleVideo, videoUrl }) => {
  return (
    <div className="video-container animate__animated animate__fadeIn">
      <h1 onClick={handleToggleVideo} className="close-btn">
        x
      </h1>
      <Player
        fluid={false}
        width={800}
        height={370}
        playsInline
        src={videoUrl}
      />
    </div>
  );
};
