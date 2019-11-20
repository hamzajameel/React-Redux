import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
 if (!song) {
     return <div>Select A  Song</div>
 }

    return <div>
     <h3>Details for : </h3>
     <p>
         Title: { song.tilte } 
         <br/>
         Duration: { song.duration }
     </p>
     <audio controls>
<source src ={song.url}  type = "audio/mp3"/>

     </audio>
    </div>
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps) (SongDetails);