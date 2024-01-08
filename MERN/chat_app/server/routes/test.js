const router= require('express').Router()

const {conTest ,registerUser} = require('../controller/conTest')


router.get("/", conTest);


module.exports = router