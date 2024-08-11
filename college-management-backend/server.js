//server.js
const express = require('express');
const cors = require('cors');
const app = express();
//const bodyParser = require('body-parser');

//Middleware
 //app.use(bodyParser.json());
 app.use(cors());

// Import route files
const alumniRoutes = require('/Users/swatea/Developer/college_management_system/routes/alumniRoutes.js');
const attendanceRoutes = require('/Users/swatea/Developer/college_management_system/routes/attendanceRoutes.js');
const coursesRoutes = require('/Users/swatea/Developer/college_management_system/routes/coursesRoutes.js');
const departmentRoutes = require('/Users/swatea/Developer/college_management_system/routes/departmentRoutes.js');
// const employeeRoutes = require('/Users/swatea/Developer/college_management_system/routes/employeeRoutes.js');
// const facultyRoutes = require('/Users/swatea/Developer/college_management_system/routes/facultyRoutes.js');
// const managementRoutes = require('/Users/swatea/Developer/college_management_system/routes/managementRoutes.js');
const marksRoutes = require('/Users/swatea/Developer/college_management_system/routes/marksRoutes.js');
// const personRoutes = require('/Users/swatea/Developer/college_management_system/routes/personRoutes.js');
// const projectRoutes = require('/Users/swatea/Developer/college_management_system/routes/projectRoutes.js');
// const project_reviewRoutes = require('/Users/swatea/Developer/college_management_system/routes/project_reviewRoutes.js');
const studentRoutes = require('/Users/swatea/Developer/college_management_system/routes/studentRoutes.js');
// const universityRoutes = require('/Users/swatea/Developer/college_management_system/routes/universityRoutes.js');

// Mount routes
app.use('/api', alumniRoutes);
app.use('/api', attendanceRoutes);
app.use('/api', coursesRoutes);
app.use('/api', departmentRoutes);
// app.use('/api', employeeRoutes);
// app.use('/api', facultyRoutes);
// app.use('/api', managementRoutes);
 app.use('/api', marksRoutes);
// app.use('/api', personRoutes);
// app.use('/api', projectRoutes);
// app.use('/api', project_reviewRoutes);
app.use(express.json())
app.use('/api', studentRoutes);
// app.use('/api', universityRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
