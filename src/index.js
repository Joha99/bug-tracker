import store from "./store";

console.log(store);

// subscribe to store to detect changes
store.subscribe(() => {
  console.log("Store changed", store.getState());
}); 

// dispatch action to store
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "bug-1",
  },
});

console.log(store.getState());

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
