
const express = require('express');
const router = express.Router();
const coursescontroller = require('/Users/swatea/Developer/college_management_system/college-management-backend/controllers/coursescontroller.js');

router.get('/getcourses', coursescontroller.getAll);
// Define other routes similarly
router.post('/', (req, res) => {
    res.status(404).send('Not found');
  });

// Get course by ID
router.get('/courses/:id', coursescontroller.getById);

// Create a new course
router.post('/courses', coursescontroller.create);

// Update course by ID
router.put('/courses/:id', coursescontroller.updateById);

// Delete course by ID
router.delete('/courses/:id', coursescontroller.deleteById);

module.exports = router;
