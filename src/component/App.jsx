import axios from 'axios';
import './App.css';
import React, { Component } from 'react';
import MusicTable from './musicTable/musicTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      music: []
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

  render() { 
    console.log(this.state.music[0])
    return ( 
      
      <div>
        message
        <MusicTable music = {this.state.music}/>
      </div>
     );
  }
}
 
export default App;