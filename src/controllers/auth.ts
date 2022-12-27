import { Request, Response } from "express";
import * as userServices from "../services/auth";

export const registerNewUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = await userServices.registerNewUser(user);

    if (typeof newUser === "string") return res.status(400).send(newUser);
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const userLogin = await userServices.LoginUser(user);

    if (typeof userLogin === "string") return res.status(400).send(userLogin);
    return res.json(userLogin);
  } catch (error) {
    console.log(error);
  }
};
