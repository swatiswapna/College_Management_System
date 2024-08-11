
const express = require('express');
const router = express.Router();
const attendancecontroller = require('/Users/swatea/Developer/college_management_system/college-management-backend/controllers/attendancecontroller.js');

router.get('/attendances', attendancecontroller.getAll);

router.post('/', (req, res) => {
    res.status(404).send('Not found');
  });

module.exports = router;
