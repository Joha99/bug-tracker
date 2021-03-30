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
const api = (store) => (next) => (action) => {
  if (action.type !== "apiCallBegan") {
    return next(action); 
  } 

  // make api call 

  // handle success and error cases 
};

export default api;
