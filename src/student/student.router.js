const {
    addStudent,
    getStudents,
    getStudent,
    editStudent,
    getStudentGroup,
    deleteStudent
} = require("./student.controller")

const router = require('express').Router()
const authorization = require("../util/auth")



router.use(authorization)

router.route("/").post(addStudent)


router.route("/").get(getStudents)

router.route("/groups/:id").get(getStudentGroup)

router.route("/:id").get(getStudent)


router.route("/:id").put(editStudent)

router.route("/:id").delete(deleteStudent)


module.exports = router