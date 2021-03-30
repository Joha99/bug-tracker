import axios from "axios";

// handle actions that make api calls
const api = ({ dispatch }) => (next) => (action) => {
  if (action.type !== "apiCallBegan") {
    return next(action);
  }

  const { url, method, data, onSuccess, onError } = action.payload;

  // make api call
  axios
    .request({
      baseURL: "http://localhost:9001/api",
      url,
    })
    .then((res) => {
      // handle success
      console.log(res.data)
      dispatch({ type: onSuccess, payload: res.data });
    })
    .catch((error) => {
      // handle error
      dispatch({ type: onError, payload: error });
    });
};

export default api;
