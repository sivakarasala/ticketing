import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("Aum Namah Sivaya");
});

export { router as currentUserRouter };
