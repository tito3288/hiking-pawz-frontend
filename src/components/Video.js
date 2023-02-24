import React from "react";

const Video = () => {
  return (
    <div style={{ display: "flex" }}>
      <video
        style={{ width: "100%", height: "1050px", marginTop: "8%" }}
        src="/videos/hiking-video2.mp4"
        autoPlay
        // loop
        muted
      ></video>
    </div>
  );
};

export default Video;
