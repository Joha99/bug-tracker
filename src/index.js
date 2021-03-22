import store from "./store";

console.log(store);

// subscribe to store to detect changes
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
}); 

// dispatch action to store
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "bug-1",
  },
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

unsubscribe(); 
