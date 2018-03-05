import axios from 'axios';
import { store } from './Store.js';

function getSpotifyToken() {
  axios.get('https://review-a-record.herokuapp.com/spotify/access-token')
    .then((res) => {
      store.dispatch({type: "CHANGE_DATA", field: "spotifytoken", payload: res.data.access_token});
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchArtist(search){
  let url = 'https://api.spotify.com/v1/search?q=' + search + '&type=Artist&market=FI';
  let token = store.getState().spotifytoken

  axios.get(url,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
  .then(function(res) {
    store.dispatch({type: "CHANGE_DATA", field: "artists", payload: res.data.artists });
  })
  .catch(function(err) {
    console.log(err);
  })
}

function searchAlbum(search){
  let url = 'https://api.spotify.com/v1/search?q=' + search + '&type=Album&market=FI';
  let token = store.getState().spotifytoken

  axios.get(url,
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
  .then(function(res) {
    store.dispatch({type: "CHANGE_DATA", field: "albums", payload: res.data.albums });
  })
  .catch(function(err) {
    console.log(err);
  })
}

function getArtistAlbums(spotifyid) {
  let url = `https://api.spotify.com/v1/artists/${spotifyid}/albums?album_type=album&market=FI`;
  let token = store.getState().spotifytoken

  axios.get(url,
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
  .then(function(res) {
    console.log(res.data);
    store.dispatch({type: "CHANGE_DATA", field: "artistalbums", payload: res.data });
  })
  .catch(function(err) {
    console.log(err);
  })
}

export function getSeveralAlbums(spotifyids) {
  let url = `https://api.spotify.com/v1/albums/?ids=${spotifyids}`
  let token = store.getState().spotifytoken
  axios.get(url,
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
  .then(function(res) {
    store.dispatch({type: "CHANGE_DATA", field: "recentreviews", payload: res.data });
  })
  .catch(function(err) {
    console.log(err);
  })
}

module.exports = {
  getSpotifyToken,
  searchArtist,
  searchAlbum,
  getArtistAlbums,
  getSeveralAlbums
}