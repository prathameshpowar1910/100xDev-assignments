import { Schema, model } from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb+srv://ppowar1910:UTPO*123@cluster0.gfdfpf2.mongodb.net/');

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

export default {
    Admin,
    User,
    Course
}