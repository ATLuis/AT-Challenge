import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants";

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export function signToken(payload: string | object | Buffer) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}
