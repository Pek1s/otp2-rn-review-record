import axios from 'axios';

export function removeReview(userID, reviewID, token) {
  return axios.post('http://review-a-record.herokuapp.com/secure/reviews/delete-review',
    {
      user_id: userID,
      reviewid: reviewID,
      token
    })
    .then((res) => {
      if(res.data === 'please send token') {
        alert("Not logged in!");
      }
    })
    .catch(err => console.log(err));
}