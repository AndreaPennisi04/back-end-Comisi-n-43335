import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index"); // solo renderizamos la vista, no pasamos ningun objeto
});

export default router;
