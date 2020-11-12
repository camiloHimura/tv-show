export default function messagesMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      console.log("messagesMiddleware", action);

      return next(action);
    };
  };
}
