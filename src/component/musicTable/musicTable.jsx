import React, { Component } from 'react';
import axios from 'axios';

class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    songList = (props) => {
        let 
    }
    render() { 
        return ( 
           <table>
                <tr>
                    <th>ID</th>
                    <th>Song Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
                <tr>
                    <td>{this.state.id}</td>
                    <td>{this.state.title}</td>
                    <td>{this.state.artist}</td>
                    <td>{this.state.album}</td>
                    <td>{this.state.genre}</td>
                    <td>{this.state.release_date}</td>
                </tr>
            </table>
         );
    }
}
 
export default MusicTable;