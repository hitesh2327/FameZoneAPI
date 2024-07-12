exports.getUser = (req, context) => {
  const resp = { resp: "Hello World" };
  return context(resp);
};
