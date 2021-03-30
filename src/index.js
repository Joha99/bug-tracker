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

const action = {
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
};

store.dispatch(action);

unsubscribe();
