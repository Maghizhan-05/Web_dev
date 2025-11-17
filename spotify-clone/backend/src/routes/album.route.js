import { Router } from "express";

const router = Router();

router.get("/callback", (req, res) => {
  res.send("Ablum route with GET method");
});

export default router;
