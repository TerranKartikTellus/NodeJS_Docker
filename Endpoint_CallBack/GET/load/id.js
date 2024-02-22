
const myHandler = (req, res) => {
  const id = req.params.id;
  res.send(`Id: ${id}`);
};

module.exports = myHandler;
