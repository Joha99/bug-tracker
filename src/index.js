import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

// subscribe to store to detect changes
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// dispatch functions
store.dispatch((dispatch, getState) => {
  // call an API
  // when promise is resolved, dispatch()
  dispatch({ type: "bugReceived", bugs: [1, 2, 3] });
  // if promise is rejected, dispatch()
});

store.dispatch({ type: "error", payload: { message: "An error occurred." } });

unsubscribe();
