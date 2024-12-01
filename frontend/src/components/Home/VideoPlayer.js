import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ url }) {
  return <ReactPlayer url={url} controls />;
}

export default VideoPlayer;

