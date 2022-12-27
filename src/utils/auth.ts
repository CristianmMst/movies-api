import jwt from "jsonwebtoken";
import { User } from "../types";
import { compare, hash } from "bcryptjs";

export const createToken = ({ email }: User) => {
  return jwt.sign({ email }, process.env.JWT_SECRET!);
};

export const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 8);
  return passwordHash;
};

export const verified = async (password: string, passwordHash: string) => {
  const isCorrect = await compare(password, passwordHash!);
  return isCorrect;
};
