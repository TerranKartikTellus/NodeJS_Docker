
const myHandler = (load) => (req, res) => {
  res.send(`Hi Sir, Load: ${load}`);
  load+=1
};

module.exports = myHandler;
