import store from "./store";
import * as actions from "./actions";

console.log(store);

// subscribe to store to detect changes
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

// dispatch action to store
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugResolved(1)); 

unsubscribe();
