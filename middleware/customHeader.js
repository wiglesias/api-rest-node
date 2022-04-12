const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "nikita-01") {
      next()
    } else {
      res.status(403);
      res.send({error: "API_KEY is not correct"});
    }
  } catch (error) {
    res.status(403);
    res.send({error: "oops! Something happened in the custom header"});
  }
};

module.exports = customHeader;