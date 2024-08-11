
const express = require('express');
const router = express.Router();
const departmentcontroller = require('/Users/swatea/Developer/college_management_system/college-management-backend/controllers/departmentcontroller.js');

router.get('/departments', departmentcontroller.getAll);
// Define other routes similarly
router.post('/', (req, res) => {
    res.status(404).send('Not found');
  });

module.exports = router;
