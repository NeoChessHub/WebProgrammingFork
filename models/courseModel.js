// models/courseModel.js

const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "front-end",
      "back-end",
      "data science",
      "AI",
      "cyber security",
      "testing",
    ],
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
});


const Courses = mongoose.model("Courses", CoursesSchema, "Courses");

module.exports = Courses;
