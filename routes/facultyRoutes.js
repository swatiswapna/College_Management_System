
const express = require('express');
const router = express.Router();
const facultycontroller = require('/Users/swatea/Developer/college_management_system/college-management-backend/controllers/facultycontroller.js');

router.get('/facultys', facultycontroller.getAllFaculty);
// Define other routes similarly
router.post('/', (req, res) => {
    res.status(404).send('Not found');
  });

module.exports = router;
