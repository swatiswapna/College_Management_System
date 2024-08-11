
const express = require('express');
const router = express.Router();
const project_reviewcontroller = require('../controllers/project_reviewcontroller');

router.get('/project_reviews', project_reviewcontroller.getAllProject_Review);
// Define other routes similarly

module.exports = router;
