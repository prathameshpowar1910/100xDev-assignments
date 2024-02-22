import { Router } from 'express';
import userMiddleware from '../middleware/user.js';
import { User, Course } from '../db/index.js';
import mongoose from 'mongoose';
const router = Router();

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.create({
        username,
        password,
    });
    if (!user) {
        res.status(400).json({
            message: 'User not created',
        });
    }

    res.json({
        message: 'User created successfully',
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find().then((courses) => {
        res.json(courses);
    });
    if (!courses) {
        res.status(400).json({
            message: 'Courses not found',
        });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    // const user = await User.findOne({
    //     username
    // });
    // const course = await Course.findById(courseId);
    // if (!course) {
    //     res.status(400).json({
    //         message: 'Course not found',
    //     });
    // }
    // user.purchasedCourses.push(course);
    // await user.save();

    const course = await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    if (!course) {
        res.status(400).json({
            message: 'Course not found',
        });
    }
    res.json({
        message: 'Course purchased successfully',
    });
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user =  await User.findOne({
        username
    })
    const courses = await Course.find({ _id: { $in: user.purchasedCourses} });
    if (!courses) {
        res.status(400).json({
            message: 'Courses not found',
        });
    }
    res.json(courses);
});

export default router;