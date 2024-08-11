
const express = require('express');
const router = express.Router();
const projectcontroller = require('../controllers/projectcontroller');

router.get('/projects', projectcontroller.getAllProject);
// Define other routes similarly

module.exports = router;
