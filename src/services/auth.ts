import { User } from "../types";
import userModel from "../models/user";
import { createToken, encrypt, verified } from "../utils/auth";

export const registerNewUser = async ({ username, email, password }: User) => {
  const existUser = await userModel.findOne({ email });
  if(existUser) return "Usuario ya registrado"

  const passwordHash = await encrypt(password);
  const registerNewUser = await userModel.create({
    username,
    email,
    password: passwordHash,
  });
  return registerNewUser;
};

export const LoginUser = async ({ email, password }: User) => {
  const user = await userModel.findOne({ email });
  if(!user) return "Usuario no registrado"
  if (user) {
    const isCorrectPassword = await verified(password, user.password);
    if (isCorrectPassword) {
      return { token: createToken(user) };
    }
    return "Contraseña Incorrecta";
  }
};
