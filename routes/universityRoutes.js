
const express = require('express');
const router = express.Router();
const universitycontroller = require('../controllers/universitycontroller');

router.get('/universitys', universitycontroller.getAllUniversity);
// Define other routes similarly

module.exports = router;
