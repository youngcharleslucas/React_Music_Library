import React, { Component } from "react";
import axios from "axios";
import './musicTable.css'

class MusicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  deleteSong(songID, event) {
    console.log(songID);
    this.handleSubmit(event);
    axios.delete(`http://localhost:8000/music/${songID}/`)
      .then((response) => console.log("Deleted", response));
  }

  songList = () => {
    let musicItem = this.props.music.map((item) => {
      return (
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.artist}</td>
            <td>{item.album}</td>
            <td>{item.genre}</td>
            <td>{item.release_date}</td>
            <td>
                <button onClick={(event) => this.deleteSong(item.id, event)}>
                Delete Song
                </button>
            </td>
        </tr>
        );
    });
    return (
      <table id="musicTable">
          <thead>
            <tr>
                <th>ID</th>
                <th>Song Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {musicItem}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <div id="div">
        <ul>
          {this.props.music.map((song) =>
            this.props.userinput.toUpperCase() === song.artist.toUpperCase() ||
            this.props.userinput.toUpperCase() === song.title.toUpperCase() ||
            this.props.userinput.toUpperCase() === song.album.toUpperCase() ||
            this.props.userinput.toUpperCase() === song.genre.toUpperCase() ||
            this.props.userinput === song.release_date ? (
              <li>{song.title}&nbsp;&nbsp;{song.artist}&nbsp;&nbsp;{song.album}&nbsp;&nbsp;{song.genre}&nbsp;&nbsp;{song.release_date}</li>
            ) : null
          )}
        </ul>
        {this.songList()}
      </div>
    );
  }
}

export default MusicTable;
