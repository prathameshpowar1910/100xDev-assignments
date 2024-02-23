// Middleware for handling auth
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  const words = token.split("");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, secret);
  if (!decodedValue.username) {
    return res.status(401).send("Unauthorized");
  }
  next();
}

export default adminMiddleware;
