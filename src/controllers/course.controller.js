const Course = require("../models/course.model");

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    console.error("Error al crear el curso:", error);
    res.status(500).json({ error: error.message });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error("Error al obtener cursos:", error);
    res.status(500).json({ error: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    console.error("Error al obtener el curso:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      {
        numberOfTopics: req.body.numberOfTopics || 0,
        publishedAt: new Date(),
      },
      { new: true }
    );
    res.json(course);
  } catch (error) {
    console.error("Error al actualizar el curso:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Curso eliminado" });
  } catch (error) {
    console.error("Error al eliminar el curso:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
