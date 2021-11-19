import axios from 'axios';
import './App.css';
import React, { Component } from 'react';
import MusicTable from './musicTable/musicTable';
import SongPost from './songPOST/songPOST';
import Filter from './filter/filter';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      music: [],
      userinput: '',
     }
  }

  componentDidMount(){
    this.getMusic();
  }

  async getMusic(){
    let response = await axios.get("http://127.0.0.1:8000/music/")
    console.log(response);
    this.setState({
      music: response.data
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
        userinput : event.target.value,
    })
  }


  // songPost = (newSong) => {
  //   console.log('From the songPost on App component', newSong);

  // }
  // async songPost = (newSong) => {
  //   let response = 
  //   console.log('From the songPost on App component', newSong)
    
  // }
  // handleSubmit = (event) => {
  //   event.preventDefault()
  // }

  // deleteSong(songID, event){
  //   console.log(songID)
  //   this.handleSubmit(event)
  //   axios.delete(`http://localhost:8000/music/${songID}/`)
  //   .then (response =>
  //       console.log("Deleted", response)
  //       )    
  // }

  songPOST(newSong){
    axios.post(`http://localhost:8000/music/`, newSong)
    .then (response =>
        console.log("Post", response)
    )    
  }

  render() { 
    console.log(this.state.music[0])
    return ( 
      
      <div className="container-fluid">
        <MusicTable music = {this.state.music} deleteSong = {this.deleteSong} userinput = {this.state.userinput}/>
        <SongPost songPOST = {this.songPOST}/>
        {/* <Filter music = {this.state.music}/> */}
        {/* <Filter handleChange = {this.handleChange} userinput = {this.state.userinput} songPOST = {this.songPOST}/> */}
        <Filter songPOST = {this.songPOST}/>

      </div>
     );
  }
}
 
export default App;