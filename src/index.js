import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();
console.log(store);

// subscribe to store to detect changes
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

// dispatch actions to store
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 3"));
store.dispatch(actions.bugResolved(1)); 

unsubscribe();
