import React from "react";
import "./RowPost.css";
import { useState, useEffect } from "react";
import axios from "../../config/axios";
import { API_KEY, IMAGE_URL, video } from "../../constants/constant";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [id, setID] = useState("");
  useEffect(() => {
    axios.get(`${props.fetchUrl + API_KEY}`).then((res) => {
      // console.log(res.data.results);
      setMovie(res.data.results);
    });
  }, [props.fetchUrl]);

  const playTrailer = (id) => {
    // console.log("id :", id);
    // console.log(url);
    axios.get(`${video(id, API_KEY)}`).then((res) => {
      // window.location.href = `https://www.youtube.com/watch?v=${key}`;
      console.log(res.data.results);
      if (res.data.results.length !== 0) {
        setID(res.data.results[0].key);
      }else{
        alert('trailer not available');
      }
    });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel:0, // no related item 
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj, index) => (
          obj.backdrop_path &&
          <img
            key={index}
            onClick={(e) => playTrailer(e.target.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            id={obj.id}
            src={`${IMAGE_URL + obj.poster_path}`}
            alt="poster"
          />
        ))}
      </div>
      {id && <YouTube videoId={id} onPause={() => setID("")} onEnd={() => setID("")} onError={() => setID("")} opts={opts} />}
    </div>
  );
}

export default RowPost;
