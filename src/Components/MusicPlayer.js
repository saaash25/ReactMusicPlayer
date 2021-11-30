import React, { useEffect, useState } from 'react';
import Player from './Player';
const MusicPlayer = () => {

    const [songs, setSongs] = useState([
        {
            "title": "Adyamay Kandanal",
            "artist": "Jesudas",
            "album": " Songs",
            "track": "Adyamay Kandanal",
            "year": "2000",
            "img_src": "./song_images/song_cover_image.jpeg",
            "src": "./songs/Aadyamay_kandanal.mp3"
        },
        {
            "title": "Alappuzha Pattanathil",
            "artist": "Unknown",
            "album": " Songs",
            "track": "Alappuzha Pattanathil",
            "year": "1995",
            "img_src": "./song_images/song_cover_image.jpeg",
            "src": "./songs/AALAPUZA.mp3"
        }
    ])
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex])
    return (
        <div className='container-fluid'>
            <div className="col-lg-12 col-md-12">
                <div className='row'>
                    <div className='col-lg-4 col-lg-4 bg-info shadow ' ><h1 className='text-light' style={{marginTop:'50%'}}>React Music Player</h1></div>
                    <div className='col-lg-8 col-lg-8'>
                        <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;