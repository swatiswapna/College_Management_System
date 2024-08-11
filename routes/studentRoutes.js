
const express = require('express');

const router = express.Router();
const studentcontroller = require('/Users/swatea/Developer/college_management_system/college-management-backend/controllers/studentcontroller.js');

// Get all students
router.get('/students', studentcontroller.getAll);

// Get student by ID
router.get('/students/:id', studentcontroller.getById);

// Create a new student
router.post('/students', studentcontroller.create);

// Update student by ID
router.put('/students/:id', studentcontroller.updateById);

// Delete student by ID
router.delete('/students/:id', studentcontroller.deleteById);


module.exports = router;
