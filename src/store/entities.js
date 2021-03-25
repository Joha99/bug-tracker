import { combineReducers } from "@reduxjs/toolkit";
import projectsReducer from "./projects";
import bugsReducer from "./bugs";
import usersReducer from "./users"; 

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer
});
