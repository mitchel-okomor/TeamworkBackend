const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports= (req, res, next) => {
  
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const isAdmin = decodedToken.isAdmin;
    if (!isAdmin) {
      throw 'Unauthorized';
    } else {
      next();
    }
  } catch(error) {
    res.status(401).json({
      status: "error",
      error: "Access Denied"
    });
  }
  
};