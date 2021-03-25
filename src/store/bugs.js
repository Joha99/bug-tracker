import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      const idx = state.findIndex((bug) => bug.id === action.payload.id);
      state[idx].resolved = true;
    },
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const idx = state.findIndex((bug) => bug.id === bugId);
      state[idx].userId = userId;
    },
  },
});
console.log(slice);

export default slice.reducer;
export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;

// selectors
const getBugs = (state) => state.entities.bugs;

export const getUnresolvedBugs = createSelector(getBugs, (bugs) =>
  bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
