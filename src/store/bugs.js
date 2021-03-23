import { createAction } from "@reduxjs/toolkit";

// ACTION CREATORS
//////////////////////////////////////////
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// REDUCER
//////////////////////////////////////////
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);

    case bugResolved.type:
      return state.map((bug) => {
        if (bug.id === action.payload.id) {
          // create a copy of the bug instance rather than changing the bug itself
          return {
            ...bug,
            resolved: true,
          };
        }
        return bug;
      });

    default:
      return state;
  }
}
