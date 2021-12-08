const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {

      return res.sendStatus(403);
      
    }
    next()
    // Even more logic goes here
  };

  module.exports = authorization