import axios from "axios";

const action = {
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    method: "get",
    data: {},
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
};

// handle actions that make api calls
const api = (dispatch, getState) => (next) => (action) => {
  if (action.type !== "apiCallBegan") {
    return next(action);
  }

  const { url, method, data, onSuccess, onError } = action.payload;

  // make api call
  axios
    .request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    })
    .then(() => {
      // handle success
      dispatch({ type: onSuccess, payload: data });
    })
    .catch(() => {
      // handle error
      dispatch({ type: onError });
    });
};

export default api;
