import axios from 'axios';
import { store } from './Store.js';

export function getSpotifyToken() {
  axios.get('https://review-a-record.herokuapp.com/spotify/access-token')
    .then((res) => {
      store.dispatch({type: "CHANGE_DATA", field: "spotifytoken", payload: res.data.access_token});
    })
    .catch((err) => {
      console.log(err);
    });
}

export function searchArtist(search){
  let url = 'https://api.spotify.com/v1/search?q=' + search + '&type=Artist&market=FI';
  let token = localStorage.getItem("spotifytoken");
 
  axios.get(url,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
  .then(function(res) {
    store.dispatch({type: "LOAD_ARTIST", field: "artists", payload: res.data.artists });
  })
  .catch(function(err) {
    console.log(err);
  })
}