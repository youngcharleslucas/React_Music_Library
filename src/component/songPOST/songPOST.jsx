import React, { Component } from 'react';
import axios from 'axios';

class SongPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title :'',
            artist : '',
            album : '',
            genre : '',
            release_date : '',
         }
    }

// export default ;
// handleSubmit = (event) => {
//     event.preventDefault()
// }

// deleteSong(songID, event){
//     console.log(songID)
//     this.handleSubmit(event)
//     axios.delete(`http://localhost:8000/music/${songID}/`)
//     .then (response =>
//         console.log("Deleted", response)
//         )
    
// }


    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.songPOST(this.state)
    }
       
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            {/* <form onSubmit={(event) => this.props.songPOST(this.state, event)}> */}
                {/* <label>{id}</label> */}
                <label>Song Title</label>
                <input name='title' onChange={this.handleChange} value={this.state.title}/>
                <label>Artist</label>
                <input name='artist' onChange={this.handleChange} value={this.state.artist}/>
                <label>Album</label>
                <input name='album' onChange={this.handleChange} value={this.state.album}/>
                <label>Genre</label>
                <input name='genre' onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label>
                <input name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
                <button type='submit'>Add Song</button>
            </form>
        );
    }
}

export default SongPost;