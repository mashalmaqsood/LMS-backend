const express = require("express")
const router =express.Router()
const { createStudent, getAllStudents, getStudentById, deleteStudent, updateStudent} = require("../controllers/student")

router.post("/createStudent",createStudent)
router.get("/getAllStudents",getAllStudents)
router.get("/getStudentById/:id",getStudentById)
router.delete("/deleteStudent/:id",deleteStudent)
router.put("/updateBook/:id",updateStudent)

module.exports=router;