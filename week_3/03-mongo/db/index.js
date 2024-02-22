import { Schema, model } from 'mongoose';
import { connect } from 'mongoose';
// Connect to MongoDB
const DB_NAME = 'course_selling_app';
connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

const AdminSchema = new Schema({
    username: String,
    password: String
});

const UserSchema = new Schema({
    username: String,
    password: String,
    purchasedCousee:[{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number,
});

const Admin = model('Admin', AdminSchema);
const User = model('User', UserSchema);
const Course = model('Course', CourseSchema);

export {
    Admin,
    User,
    Course
}
