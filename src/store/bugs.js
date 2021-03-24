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
  },
});
console.log(slice);

export default slice.reducer;
export const { bugAdded, bugResolved } = slice.actions;

// selectors
const bugsSelector = (state) => state.entities.bugs;
export const unresolvedBugsSelector = createSelector(bugsSelector, (bugs) =>
  bugs.filter((bug) => !bug.resolved)
);
