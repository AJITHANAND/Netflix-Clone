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
      const data = res.data.results;
      console.log(data);
      const nameRegex = /Official Trailer/gi;
      if (res.data.results.length !== 0) {
        const ytId = data.filter((obj) => obj.type === "Trailer" || nameRegex.test(obj.name));
        // console.log("official trailer ")
        // console.log(ytId[0].key);
        console.log(ytId);
        if (ytId.length > 0) {
          setID(ytId[0].key);
        } else {
          setID(res.data.results[0].key);
        }
      } else {
        alert("Sorry for the inconvenience,Unable to find the Trailer");
      }
    }).catch((err) => alert("Sorry for the inconvenience,Trailer information not available"));
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0, // no related item
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map(
          (obj, index) =>
            obj.backdrop_path && (
              <img
                key={index}
                onClick={(e) => playTrailer(e.target.id)}
                className={props.isSmall ? "smallPoster" : "poster"}
                id={obj.id}
                src={`${IMAGE_URL + obj.poster_path}`}
                alt="poster"
              />
            )
        )}
      </div>
      {id && (
        <YouTube
          videoId={id}
          onPause={() => setID("")}
          onEnd={() => setID("")}
          onError={() => setID("")}
          opts={opts}
        />
      )}
    </div>
  );
}

export default RowPost;
