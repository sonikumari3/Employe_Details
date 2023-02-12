const router = require('express').Router();

const employeeRoute = require('./Employee');


router.use('/employee', employeeRoute);


module.exports = router;