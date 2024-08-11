
    // Controller for Department entity


    // Controller for Department entity
const Department = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/department.js');

const DepartmentController = {
    // Create a new Department
    create: async (req, res) => {
        try {
            const newDepartment = await Department.create(req.body);
            res.status(201).json(newDepartment);
        } catch (err) {
            console.error('Error creating Department:', err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all Department entries
    getAll: (req, res) => {
        Department.getAll((err, allDepartments) => {
            if (err) {
                console.error('Error getting Department entries:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            res.status(200).json(allDepartments);
        });
    },

    // Get Department by ID
    getById: (req, res) => {
        const id = req.params.id;
        Department.getById(id, (err, departmentById) => {
            if (err) {
                console.error('Error getting Department by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!departmentById) {
                return res.status(404).json({ error: 'Department not found' });
            }
            res.status(200).json(departmentById);
        });
    },

    // Update Department by ID
    updateById: (req, res) => {
        const id = req.params.id;
        const updatedDepartment = req.body;
        Department.update(id, updatedDepartment, (err, updatedDepartment) => {
            if (err) {
                console.error('Error updating Department by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!updatedDepartment) {
                return res.status(404).json({ error: 'Department not found' });
            }
            res.status(200).json(updatedDepartment);
        });
    },

    // Delete Department by ID
    deleteById: (req, res) => {
        const id = req.params.id;
        Department.delete(id, (err, deletedDepartment) => {
            if (err) {
                console.error('Error deleting Department by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!deletedDepartment) {
                return res.status(404).json({ error: 'Department not found' });
            }
            res.status(200).json({ message: 'Department deleted successfully' });
        });
    }
};

module.exports = DepartmentController;
