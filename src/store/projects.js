import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = [];
let lastId = 0;

// create actions & reducers
const projectSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    projectAdded: (state, action) => {
      state.push({ id: ++lastId, name: action.payload.name });
    },
  },
});

// export as default the reducer
export default projectSlice.reducer;

// export actions
export const { projectAdded } = projectSlice.actions;
