const router = require('express').Router();

const { fnAddEmployee, fnGetEmployee, fnUpdateEmployee, fnDeleteEmployee} = require('../Controller/Employee');



router.post('/add-employee', fnAddEmployee);
router.get('/get-employee', fnGetEmployee);
router.put('/update-employee', fnUpdateEmployee);
router.delete('/delete-employee', fnDeleteEmployee);

module.exports = router;