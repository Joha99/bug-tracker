import * as actions from "./actionTypes";

// store: [{bug objects w/ id, description, resolved}]
// action: {type, payload:{}}
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
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
