import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";
import Header from "./Header";
const Video = ({ data }) => {
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    // Check if data is available
    if (data && data.length > 0) {
      setTimeout(()=>{
        setLoading(false); // Set loading to false once data is available

      },2000)
    }
  }, [data]); // Add data as a dependency for useEffect

  // Render spinner if loading, otherwise render videos
  return loading ? (
    <Spinner />
  ) : 
  (
   <>
    <Header/>
    <div className="videodiv">
      {data.map((value, index) => (
        <video controls width="100%" className="cardVideo" autoPlay key={index}>
          <source src={value.videoUrl} type="video/mp4" />
        </video>
      ))}
    </div>
   </>
  );
};

export default Video;
