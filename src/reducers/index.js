import {  combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { tilte: 'No Scrubs', duration: '4:05' },
        { tilte: 'Macarena', duration: '3:05' },
        { tilte: 'All Stars', duration: '2:05' },
        { tilte: 'I Want It That Way', duration: '1:05' },
    ]
}

const selectedSongReducer = (selectedSong = null , action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})