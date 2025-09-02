import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // this gives us { id: ... }
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
}

// This is basically for the JWT authentication middleware
