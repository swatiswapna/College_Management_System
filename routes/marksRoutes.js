
const express = require('express');
const router = express.Router();
const markscontroller = require('/Users/swatea/Developer/college_management_system/college-management-backend/controllers/markscontroller.js');

router.get('/marks', markscontroller.getAll);
// Define other routes similarly

module.exports = router;
