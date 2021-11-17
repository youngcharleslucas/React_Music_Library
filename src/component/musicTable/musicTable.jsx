import React, { Component } from 'react';
import axios from 'axios';

class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    songList = () => {
        
        let musicItem = this.props.music.map(item => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.artist}</td>
                    <td>{item.album}</td>
                    <td>{item.genre}</td>
                    <td>{item.release_date}</td>
                </tr>
            )
        });
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
                 {musicItem}
             </table>
          );
    }

    render() { 
        return (
            <div>
                {this.songList()}
            </div>
        )
    }
}
 
export default MusicTable;