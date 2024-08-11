// Controller for Courses entity
const Courses = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/courses.js');

const CoursesController = {
    // Create a new Course
    create: async (req, res) => {
        try {
            const newCourse = await Courses.create(req.body);
            res.status(201).json(newCourse);
        } catch (err) {
            console.error('Error creating Course:', err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all Courses
    getAll: (req, res) => {
        Courses.getAll((err, allCourses) => {
            if (err) {
                console.error('Error getting Courses:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            res.status(200).json(allCourses);
        });
    },

    // Get Course by ID
    getById: (req, res) => {
        const id = req.params.id;
        Courses.getById(id, (err, CourseById) => {
            if (err) {
                console.error('Error getting Course by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!CourseById) {
                return res.status(404).json({ error: 'Course not found' });
            }
            res.status(200).json(CourseById);
        });
    },

    // Update Course by ID
    updateById: (req, res) => {
        const id = req.params.id;
        const updatedCourse = req.body;
        Courses.update(id, updatedCourse, (err, updatedCourse) => {
            if (err) {
                console.error('Error updating Course by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!updatedCourse) {
                return res.status(404).json({ error: 'Course not found' });
            }
            res.status(200).json(updatedCourse);
        });
    },

    // Delete Course by ID
    deleteById: (req, res) => {
        const id = req.params.id;
        Courses.delete(id, (err, deletedCourse) => {
            if (err) {
                console.error('Error deleting Course by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!deletedCourse) {
                return res.status(404).json({ error: 'Course not found' });
            }
            res.status(200).json({ message: 'Course deleted successfully' });
        });
    }
};

module.exports = CoursesController;


    