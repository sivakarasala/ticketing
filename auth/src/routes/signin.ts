import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  res.send("Aum Namah Sivaya");
});

export { router as signinRouter };
