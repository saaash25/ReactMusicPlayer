import React from "react";

function PlayerDetails(props) {
  return (
    <div className="music-player--details">
      <div className="details-img">
        <img
          className="details-img--image"
          src={props.song.img_src}
          alt={props.song.title}
          style={{width:'300px',height:'300px'}}
        />
      </div>
      <div class="range"></div>
      <div className="artist-info">
        <h5 className="details-title" style={{color:'orange'}}>{props.song.title}</h5>
        <p className="details-artist">{props.song.artist}</p>
        <div class="line"></div>
      </div>
    </div>
  );
}

export default PlayerDetails;