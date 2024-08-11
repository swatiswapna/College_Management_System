// Controller for Attendance entity
const Attendance = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/attendance.js');

const AttendanceController = {
    // Create a new Attendance
    create: async (req, res) => {
        try {
            const newAttendance = await Attendance.create(req.body);
            res.status(201).json(newAttendance);
        } catch (err) {
            console.error('Error creating Attendance:', err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all Attendance entries
    getAll: (req, res) => {
        Attendance.getAll((err, allAttendance) => {
            if (err) {
                console.error('Error getting Attendance entries:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            res.status(200).json(allAttendance);
        });
    },

    // Get Attendance by ID
    getById: (req, res) => {
        const id = req.params.id;
        Attendance.getById(id, (err, attendanceById) => {
            if (err) {
                console.error('Error getting Attendance by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!attendanceById) {
                return res.status(404).json({ error: 'Attendance not found' });
            }
            res.status(200).json(attendanceById);
        });
    },

    // Update Attendance by ID
    updateById: (req, res) => {
        const id = req.params.id;
        const updatedAttendance = req.body;
        Attendance.update(id, updatedAttendance, (err, updatedAttendance) => {
            if (err) {
                console.error('Error updating Attendance by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!updatedAttendance) {
                return res.status(404).json({ error: 'Attendance not found' });
            }
            res.status(200).json(updatedAttendance);
        });
    },

    // Delete Attendance by ID
    deleteById: (req, res) => {
        const id = req.params.id;
        Attendance.delete(id, (err, deletedAttendance) => {
            if (err) {
                console.error('Error deleting Attendance by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!deletedAttendance) {
                return res.status(404).json({ error: 'Attendance not found' });
            }
            res.status(200).json({ message: 'Attendance deleted successfully' });
        });
    }
};

module.exports = AttendanceController;

    