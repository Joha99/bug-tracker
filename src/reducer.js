import * as actions from './actionTypes'; 

// store: [{bug objects w/ id, description, resolved}]
// action: {type, payload:{}}
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === actions.BUG_REMOVE) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else {
    return state; 
  }
}
