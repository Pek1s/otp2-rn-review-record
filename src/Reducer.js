const R = require("ramda");

const initialState = {
  artists: "",
  albums: "",
  artistalbums: "",
  jwttoken: "",
  userid: "",
  spotifytoken: "",
  reviews: "",
  writereview: "",
  redirectbutton: "false",
  recentreviews: "",
  loggedIn: "false",
  isAdmin: "false",
  user: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      const A = R.compose(R.assocPath([action.field], action.payload))(state);
      return A;

    default:
      return state;
  }
};

export { reducer };
