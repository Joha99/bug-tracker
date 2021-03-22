import store from "./store";
import * as actions from "./actions";

// subscribe to store to detect changes
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

// dispatch action to store
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugResolved(1)); 

unsubscribe();
