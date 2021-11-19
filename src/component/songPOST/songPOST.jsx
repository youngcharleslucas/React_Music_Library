import React, { Component } from 'react';
import axios from 'axios';
import './songPOST.css'

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

    // handleError = () => {
    //     if (this.state.release_date != <=3000 + '-' + )
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.songPOST(this.state);
       
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.songPOST(this.state);
        this.props.refresh();       
    }
           

    render() { 
        return ( 
            // <div className="table">
            //     <form className="tr" onSubmit={this.handleSubmit}>
            //     {/* <form onSubmit={(event) => this.props.songPOST(this.state, event)}> */}
            //         {/* <label>{id}</label> */}
            //         <label>Song Title</label>
            //         <input name='title' onChange={this.handleChange} value={this.state.title}/>
            //         <label>Artist</label>
            //         <input name='artist' onChange={this.handleChange} value={this.state.artist}/>
            //         <label>Album</label>
            //         <input name='album' onChange={this.handleChange} value={this.state.album}/>
            //         <label>Genre</label>
            //         <input name='genre' onChange={this.handleChange} value={this.state.genre}/>
            //         <label>Release Date</label>
            //         <input name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
            //         <button type='submit'>Add Song</button>
            //     </form>
            // </div>
            // <div className="table">
            //     <div className="tr">
            //         <span class="th"><label>Song Title</label></span>
            //         <span class="th"><label>Artist</label></span>
            //         <span class="th"><label>Album</label></span>
            //         <span class="th"><label>Genre</label></span>
            //         <span class="th"><label>Release Date</label></span>
            //         <span class="th"><label></label></span>
            //     </div>
            //     <form className="tr" onSubmit={this.handleSubmit}>            
            //         <span class="td"><input name='title' onChange={this.handleChange} value={this.state.title}/></span>
            //         <span class="td"><input name='artist' onChange={this.handleChange} value={this.state.artist}/></span>
            //         <span class="td"><input name='album' onChange={this.handleChange} value={this.state.album}/></span>
            //         <span class="td"><input name='genre' onChange={this.handleChange} value={this.state.genre}/></span>
            //         <span class="td"><input name='release_date' onChange={this.handleChange} value={this.state.release_date}/></span>
            //         <span class="td"><button type='submit'>Add Song</button></span>
            //     </form>
            // </div>
        
            <div>
            <div className="grid-container">
                <span className="item1"><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Song Title</label></span>
                <span className="item2"><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Artist</label></span>
                <span className="item3"><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Album</label></span>
                <span className="item4"><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genre</label></span>
                <span className="item5"><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Release Date</label></span>
                <span className="item6"><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></span>
            </div>
            <form className="grid-container" onSubmit={this.handleSubmit}>            
                <span className="item1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name='title' onChange={this.handleChange} value={this.state.title}/></span>
                <span className="item2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name='artist' onChange={this.handleChange} value={this.state.artist}/></span>
                <span className="item3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name='album' onChange={this.handleChange} value={this.state.album}/></span>
                <span className="item4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name='genre' onChange={this.handleChange} value={this.state.genre}/></span>
                <span className="item5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name='release_date' type="date" placeholder='yyyy-mm-dd' onChange={this.handleChange} value={this.state.release_date}/></span>
                <span className="item6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type='submit'>Add Song</button></span>
            </form>
            </div>
        );
    }
}

export default SongPost;