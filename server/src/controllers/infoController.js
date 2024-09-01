const terms = require('./terms.json');


const index = async (req, res) => {
  let { term } = req.body;
  result = terms[term]
  try {
    res.json({ 
      "result":result
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching site data" });
  }
};

module.exports = {
  index,
};
