const { Student } = require("../models");
const createStudent = async (req, res) => {
  const { name, email, semester, issue_date, return_date, bookId } = req.body;
  try {
    if (!name) {
      return res.status(404).json({ message: "Required field!" });
    }
    const student = await Student.create({
      name,
      email,
      semester,
      issue_date,
      return_date,
      bookId,
    },
   );
    return res.json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    return res.json(students);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findOne({
      where: { id },
    });
    return res.json(student);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Student.findOne({
      where: { id },
    });
    await book.destroy();
    return res.json({ message: "Student deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Student.update(req.body, {
      where: { id },
    });
    return res.json({ message: "Student updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    deleteStudent,
    updateStudent,
};
