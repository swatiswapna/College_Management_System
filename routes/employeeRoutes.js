
const express = require('express');
const router = express.Router();
const employeecontroller = require('/Users/swatea/Developer/college_management_system/college-management-backend/controllers/employeecontroller.js');

router.get('/employees', employeecontroller.getAllEmployee);
// Define other routes similarly
router.post('/', (req, res) => {
    res.status(404).send('Not found');
  });

module.exports = router;
