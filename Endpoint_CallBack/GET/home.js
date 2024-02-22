
const myHandler = (load) => (req, res) => {
  res.send(`Load: ${load}`);
};

module.exports = myHandler;
