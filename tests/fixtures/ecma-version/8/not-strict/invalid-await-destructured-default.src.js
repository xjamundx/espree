async function wrap() {
  ({a = await b} = obj) => a
};