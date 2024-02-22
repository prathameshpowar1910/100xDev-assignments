import { Router } from "express";
import adminMiddleware from "../middleware/admin.js";
import { Admin, Course } from "../db/index.js";

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

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  const course = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

    if (!course) {
        res.status(400).json({
        message: "Course not created",
        });
    }

    res.json({
        message: "Course created successfully",courseId: course._id,
    });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find().then((courses) => {
    res.json(courses);
  });

    if (!courses) {
        res.status(400).json({
        message: "Courses not found",
        });
    }
});

export default router;
