const logger = (param) => (state) => (next) => (action) => {
  console.log("logging to: ", param);
  next(action);
};

export default logger;
