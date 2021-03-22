// ACTION TYPES
//////////////////////////////////////////
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

// ACTION CREATORS
//////////////////////////////////////////
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id,
  },
});

// REDUCER
//////////////////////////////////////////
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case BUG_RESOLVED:
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
