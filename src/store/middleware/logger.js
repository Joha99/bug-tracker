const logger = (state) => (next) => (action) => {
  console.log(state, next, action);
};

export default logger;
