
const express = require('express');
const router = express.Router();
const alumnicontroller = require('/Users/swatea/Developer/college_management_system/college-management-backend/controllers/alumnicontroller.js');



router.get('/alumnis', alumnicontroller.getAll);
router.post('/', (req, res) => {
    res.status(404).send('Not found');
  });

module.exports = router;
