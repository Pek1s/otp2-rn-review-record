import { AsyncStorage } from 'react-native';
import axios from 'axios';

export function getAccessToken() {
  axios.get('https://review-a-record.herokuapp.com/spotify/access-token')
    .then(async (response) => {
      try {
        await AsyncStorage.setItem('spotifytoken', responseJSON.access_token);
      }
      catch(error) {
        console.log(error);
      }
    })
    .catch(error) {
      console.log(error);
    }
  })
}

export function searchArtist(search){
  let url = 'https://api.spotify.com/v1/search?q=' + search + '&type=Artist&market=FI';

  getToken((token) => {
    axios.get(url,
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then(function(res) {
      alert(token);
    })
    .catch(function(err) {
      console.log(err);
    })
  }
})

async function getToken(cb) {
  const token = await AsyncStorage.getItem('spotifytoken');
  cb(token);
}