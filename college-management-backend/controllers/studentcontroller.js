
    // // Controller for Student entity

    // // Import necessary modules
    // const Student = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/student.js'); // Assuming you have a model for Student

    // const StudentController = {
    //     create: async (req, res) => {
    //         try {
    //             const { person_id, major } = req.body;
    
    //             // // Check if student_id is present in the request body
    //             // if (!student_id) {
    //             //     return res.status(400).json({ error: 'student_id is required' });
    //             // }
    
    //             // Create new student using Student model
    //             const newStudent = await Student.create({ person_id, major });
    
    //             // Send response with created student
    //             res.status(201).json(newStudent);
    //         } catch (err) {
    //             console.error('Error creating student:', err);
    //             res.status(500).json({ error: 'Server error' });
    //         }
        
    //     },
    // //     // Create a new student
    // //     create: async (req, res) => {
    // //         try {
    // //             const newStudent = await Student.create(req.body);
    // //             res.status(201).json(newStudent);
    // //         } catch (err) {
    // //             console.error('Error creating student:', err);
    // //             res.status(500).json({ error: 'Server error' });
    // //         }
    // //     },

    
    //     // Get all students
    //     getAll: (req, res) => {
    //         Student.getAll((err, allStudents) => {
    //             if (err) {
    //                 console.error('Error getting students:', err);
    //                 return res.status(500).json({ error: 'Server error' });
    //             }
    //             res.status(200).json(allStudents);
    //         });
    //     },
    
    //     // Get student by ID
    //     getById: (req, res) => {
    //         const id = req.params.id;
    //         Student.getById(id, (err, studentById) => {
    //             if (err) {
    //                 console.error('Error getting student by ID:', err);
    //                 return res.status(500).json({ error: 'Server error' });
    //             }
    //             if (!studentById) {
    //                 return res.status(404).json({ error: 'Student not found' });
    //             }
    //             res.status(200).json(studentById);
    //         });
    //     },
    
    //     // Update student by ID
    //     updateById: (req, res) => {
    //         const id = req.params.id;
    //         const updatedStudent = req.body;
    //         Student.update(id, updatedStudent, (err, updatedStudent) => {
    //             if (err) {
    //                 console.error('Error updating student by ID:', err);
    //                 return res.status(500).json({ error: 'Server error' });
    //             }
    //             if (!updatedStudent) {
    //                 return res.status(404).json({ error: 'Student not found' });
    //             }
    //             res.status(200).json(updatedStudent);
    //         });
    //     },
    
    //     // Delete student by ID
    //     deleteById: (req, res) => {
    //         const id = req.params.id;
    //         Student.delete(id, (err, deletedStudent) => {
    //             if (err) {
    //                 console.error('Error deleting student by ID:', err);
    //                 return res.status(500).json({ error: 'Server error' });
    //             }
    //             if (!deletedStudent) {
    //                 return res.status(404).json({ error: 'Student not found' });
    //             }
    //             res.status(200).json({ message: 'Student deleted successfully' });
    //         });
    //     }
    // };

    // module.exports = StudentController;
    // Import necessary modules
const NewStudent = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/student.js');

const NewStudentController = {
    create: async (req, res) => {
        try {
            const { first_name, last_name, date_of_birth, gender, phone_no, major } = req.body;

            // Create new student using NewStudent model
            const newStudent = await NewStudent.create({ first_name, last_name, date_of_birth, gender, phone_no, major });

            // Send response with created student
            res.status(201).json(newStudent);
        } catch (err) {
            console.error('Error creating new student:', err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all students
    getAll: (req, res) => {
        NewStudent.getAll((err, allStudents) => {
            if (err) {
                console.error('Error getting students:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            res.status(200).json(allStudents);
        });
    },

    // Get student by ID
    getById: (req, res) => {
        const id = req.params.id;
        NewStudent.getById(id, (err, studentById) => {
            if (err) {
                console.error('Error getting student by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!studentById) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.status(200).json(studentById);
        });
    },

    // Update student by ID
    updateById: (req, res) => {
        const id = req.params.id;
        const updatedStudent = req.body;
        NewStudent.update(id, updatedStudent, (err, updatedStudent) => {
            if (err) {
                console.error('Error updating student by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!updatedStudent) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.status(200).json(updatedStudent);
        });
    },

    // Delete student by ID
    deleteById: (req, res) => {
        const id = req.params.id;
        NewStudent.delete(id, (err, deletedStudent) => {
            if (err) {
                console.error('Error deleting student by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!deletedStudent) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.status(200).json({ message: 'Student deleted successfully' });
        });
    }
};

module.exports = NewStudentController;
