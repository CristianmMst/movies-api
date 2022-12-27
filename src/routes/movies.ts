import { Router } from "express";

const router = Router();

router.get("/favorites", (_, res) => {
  res.send("hola");
});

export default router;
