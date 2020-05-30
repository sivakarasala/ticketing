import express from "express";

const router = express.Router();

router.post("/api/users/signup", (req, res) => {
  res.send("Aum Namah Sivaya");
});

export { router as signupRouter };
