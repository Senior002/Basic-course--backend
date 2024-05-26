const {
    byGroupStudent,
    byGroupPrice
} = require("./report.controller")

const router = require('express').Router()
const authorization = require("../util/auth")



router.use(authorization)

router.route("/group").get(byGroupStudent)

router.route("/groupPrice").get(byGroupPrice)


module.exports = router