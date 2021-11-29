import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function PlayerControls(props) {
  return (
    <div className="music-player--controls" style={{justifyContent: 'space-around'}}>
      <button className="skip-btn btn btn-outline-info border  p-2  shadow m-2" style={{borderRadius:'40%'}} onClick={() => props.SkipSong(false)} >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn btn btn-outline-success border  p-3  shadow m-3" style={{borderRadius:'40%'}}
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn btn btn-outline-info border  p-2  shadow m-2" style={{borderRadius:'40%'}} onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default PlayerControls;