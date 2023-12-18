import React, { useState } from 'react';
import video from "../data/video.js";
import VideoSection from "./VideoSection.js"
import CommentSection from "./CommentSection.js"

function App() {
  console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(true)

  function toggleComments() {
    setShowComments(prevShowComments => !prevShowComments)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoSection video={video} toggleComments={toggleComments} showComments={showComments}/>
      <CommentSection video={video} showComments={showComments}/>
    </div>
  );
}

export default App;