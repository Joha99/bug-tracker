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

// dispatch actions to store
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 2 }));

const getBugsAssignedToUser2 = getBugsByUser(2);
console.log(
  "Bugs assigned to User 2: ",
  getBugsAssignedToUser2(store.getState())
);

unsubscribe();
