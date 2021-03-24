import configureStore from "./store/configureStore";
import * as bugActions from "./store/bugs";
import * as projectActions from "./store/projects"; 

const store = configureStore();
console.log(store);

// subscribe to store to detect changes
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// dispatch actions to store
store.dispatch(bugActions.bugAdded({ description: "Bug 1" }));
store.dispatch(bugActions.bugAdded({ description: "Bug 2" }));
store.dispatch(bugActions.bugAdded({ description: "Bug 3" }));
store.dispatch(bugActions.bugResolved({ id: 1 }));
store.dispatch(projectActions.projectAdded({name: "Project 1"}));

unsubscribe();
