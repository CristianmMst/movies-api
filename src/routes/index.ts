import { Router } from "express";

import userRoutes from "./auth";
import moviesRoutes from "./movies";

const router = Router();

router.use(moviesRoutes);
router.use("/auth", userRoutes);

export default router;
