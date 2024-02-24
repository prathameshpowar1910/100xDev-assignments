import { Router } from "express";
import adminMiddleware from "../middleware/admin.js";
import { Admin } from "../db/index.js";
import jwt from "jsonwebtoken";
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.create({
    username,
    password,
  });

  if (!admin) {
    res.status(400).json({
      message: "Admin not created",
    });
  }

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.findOne({
    username,
    password,
  });

  if (!admin) {
    res.status(400).json({
      message: "Admin not found",
    });
  }

  const token = jwt.sign(
    {
      username,
    },
    process.env.JWT_SECRET
  );

  res.json({
    token,
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

export default router;
