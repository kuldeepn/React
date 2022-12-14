const redux = require("redux");

const counterReducer = (state, action) => {
  //input should be old state+dispatched action
  return {
    counter: state.counter + 1,
  };
};

const store = redux.configureStore(counterReducer);
