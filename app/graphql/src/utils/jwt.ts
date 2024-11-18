import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants";

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export function signToken(payload: string | object | Buffer) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}
export const authenticateJWT = (req:any, res:any, next:any) => {
  const { operationName,query } = req.body;
  console.log('operation name',req.body.operationName)
  if (
    operationName === 'login' 
    || operationName==="IntrospectionQuery"
    || (query+'').includes('login')) {
    return next(); // Skip JWT check for login mutation
  }
  const token = req.headers['authorization']?.split(' ')[1]; // Expecting format: "Bearer <token>"
  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required' });
  }
  jwt.verify(token,JWT_SECRET, (err:any, user:any) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next(); 
  });
};

