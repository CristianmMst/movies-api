import { Router } from "express";
import * as userControllers from "../controllers/auth";

const router = Router();

router
  .post("/signin", userControllers.registerNewUser)
  .post("/login", userControllers.loginUser);

export default router;
