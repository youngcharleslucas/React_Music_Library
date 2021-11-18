import React, { Component } from 'react';
import axios from 'axios';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // id: '',
            // title :'',
            // artist : '',
            // album : '',
            // genre : '',
            // release_date : '',
         }
    }

    
    // handleChange = (event) => {
    //     console.log(event.target.value)
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     let filteredList = this.filterSong(this.state, this.props.music)
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.filterSong(this.state, this.props.music)
    // }
    // filterSong = (searchSong, songList) => {
    //     let filter = songList.map((songInList)=> {
    //         let idMatch = '';
    //         let titleMatch = '';
    //         let artistMatch = '';
    //         let albumMatch = '';
    //         let genreMatch = '';
    //         let release_dateMatch = '';
    //         searchSong.id == songInList.id ? idMatch = searchSong : null;
    //         idMatch.title == songInList.title ? titleMatch = searchSong : null;
    //         titleMatch.artist == songInList.artist ? artistMatch = searchSong : null;
    //         artistMatch.album == songInList.album ? albumMatch = searchSong : null;
    //         albumMatch.genre == songInList.genre ? genreMatch = searchSong : null;
    //         genreMatch.release_date == songInList.release_date ? release_dateMatch = searchSong : null;
    //         return release_dateMatch; 
    //     })
    //     console.log(filter)
    // }

    // filterSong = (searchSong, songList) => {
    //     let idFilter = songList.filter(function(el){
    //         if (el.id == searchSong.id){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     })
    //     console.log(idFilter)
    //     return idFilter;
    // }
    // filterID = (searchID, songList) => {
    //     let idFilter = songList.filter(function(el){
    //         if (el.id == searchID.id){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     })
    //     console.log(idFilter)
    //     return idFilter;
    // }
    // filterTitle = (searchTitle, songList) => {
    //     let titleFilter = songList.filter(function(el){
    //         if (el.title == searchTitle.title){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     })
    //     console.log(titleFilter)
    //     return titleFilter;
    // }
    // filterArtist = (searchArtist, songList) => {
    //     let artistFilter = songList.filter(function(el){
    //         if (el.artist == searchArtist.artist){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     })
    //     console.log(artistFilter)
    //     return artistFilter;
    // }
    // filterAlbum = (searchAlbum, songList) => {
    //     let albumFilter = songList.filter(function(el){
    //         if (el.album == searchAlbum.album){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     })
    //     console.log(albumFilter)
    //     return albumFilter;
    // }

    // filterGenre = (searchGenre, songList) => {
    //     let genreFilter = songList.filter(function(el){
    //         if (el.genre == searchGenre.genre){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     })
    //     console.log(genreFilter)
    //     return genreFilter;
    // }

    // filterRelease_date = (searchRelease_date, songList) => {
    //     let release_dateFilter = songList.filter(function(el){
    //         if (el.release_date == searchRelease_date.release_date){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     })
    //     console.log(release_dateFilter)
    //     return release_dateFilter;
    // }

    // filterSong = (serachedSong, songList) => {
    //     let filteredList = songList;
    //     if ( serachedSong.id !== "" || serachedSong.id !== null){
    //         filteredList = this.filterID(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.title !== "" || serachedSong.title !== null){
    //         filteredList = this.filterTitle(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.artist !== "" ||  serachedSong.artist !== null){
    //         filteredList = this.filterArtist(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.album !== "" || serachedSong.album !== null){
    //         filteredList = this.filterAlbum(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.genre !== "" || serachedSong.genre !== null){
    //         filteredList = this.filterGenre(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.released_date !== "" || serachedSong.released_date !== null){
    //         filteredList = this.filterRelease_date(serachedSong, filteredList)
    //     };
    //     console.log(filteredList)
    //     return filteredList;
    // }
    // filterSong = (id, title, artist, album, genre, release_date, serachedSong, songList) => {
    //     let filteredList = songList;
    //     if ( serachedSong.id !== "" | serachedSong.id !== null){
    //         filteredList = id(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.title !== "" | serachedSong.title !== null){
    //         filteredList = title(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.artist !== "" |  serachedSong.artist !== null){
    //         filteredList = artist(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.album !== "" | serachedSong.album !== null){
    //         filteredList = album(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.genre !== "" | serachedSong.genre !== null){
    //         filteredList = genre(serachedSong, filteredList)
    //     };
    //     if ( serachedSong.released_date !== "" | serachedSong.released_date !== null){
    //         filteredList = release_date(serachedSong, filteredList)
    //     };
    //     console.log(filteredList)
    //     return filteredList;
    // }

    // filterSongList = () => {
        
    //     let musicItem = this.props.music.map(item => {
    //         return (
    //             <tr>
    //                 <td>{item.id}</td>
    //                 <td>{item.title}</td>
    //                 <td>{item.artist}</td>
    //                 <td>{item.album}</td>
    //                 <td>{item.genre}</td>
    //                 <td>{item.release_date}</td>
    //                 <td><button onClick={(event) => this.deleteSong(item.id, event)}>Delete Song</button></td>
    //             </tr>
    //         )
    //     });
   
    //     return ( 
    //         <table>
    //             <tr>
    //                 <th>ID</th>
    //                 <th>Song Title</th>
    //                 <th>Artist</th>
    //                 <th>Album</th>
    //                 <th>Genre</th>
    //                 <th>Release Date</th>
    //             </tr>
    //             {musicItem}
    //         </table>
    //     );
    // }


    render() { 
        return ( 
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>Song ID</label>
                    <input name='id' onChange={this.handleChange} value={this.state.id}/>
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
                    <button type='submit'>Find Song</button>
                </form>
                {this.filterSongList()} */}
                <input type='text' onChange={this.props.handleChange} value={this.props.userinput}/>
            </div>
            
         );
    }
}
 
export default Filter;