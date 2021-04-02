import axios from "axios";
import * as actions from "../api";

// handle actions that make api calls
const api = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.apiCallBegan.type) {
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
    .then((res) => {
      // handle general success
      dispatch(actions.apiCallSucess({ data: res.data }));

      // handle specific success
      if (onSuccess) dispatch({ type: onSuccess, payload: res.data });
    })
    .catch((error) => {
      // handle general error
      dispatch(actions.apiCallFailed({ error: error }));

      // handle specific error
      if (onError) dispatch({ type: onError, payload: error });
    });
};

export default api;
