
const express = require('express');
const router = express.Router();
const managementcontroller = require('../controllers/managementcontroller');

router.get('/managements', managementcontroller.getAllManagement);
// Define other routes similarly

module.exports = router;
