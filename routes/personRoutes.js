
const express = require('express');
const router = express.Router();
const personcontroller = require('../controllers/personcontroller');

router.get('/persons', personcontroller.getAllPerson);
// Define other routes similarly

module.exports = router;
