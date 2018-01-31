import { AsyncStorage } from 'react-native';

export function getAccessToken() {
  fetch('https://review-a-record.herokuapp.com/spotify/access-token')
    .then((response) => response.json())
    .then(async (responseJSON) => {
      try {
        await AsyncStorage.setItem('spotifytoken', responseJSON.access_token);
      }
      catch(error) {
        console.log(error);
      }
    })
}

const checkToken = async function () {
  const token = await AsyncStorage.getItem('spotifytoken');
  console.log(token);
}