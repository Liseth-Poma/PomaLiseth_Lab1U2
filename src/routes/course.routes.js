const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");

router.post("/course", courseController.createCourse);
router.get("/course", courseController.getCourses);
router.get("/course/:id", courseController.getCourseById);
router.put("/course/:id", courseController.updateCourse);
router.delete("/course/:id", courseController.deleteCourse);

module.exports = router;
