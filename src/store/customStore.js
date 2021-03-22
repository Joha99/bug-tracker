import reducer from './reducer';

// reducer: function that returns the changed store 
function createStore(reducer) {
  //  internal state
  let state;
  let listeners = []; 

  function getState() {
    return state;
  }

  function dispatch(action) {
    // call reducer to get new state 
    state = reducer(state, action);
    // notify subscribers 
    for (let i = 0; i < listeners.length; i++) {
      listeners[i](); 
    }
  }

  function subscribe(listener) {
    listeners.push(listener()); 
  }

  return { getState, dispatch, subscribe };
}

export default createStore(reducer);
