
    // Controller for Employee entity

    // Import necessary modules
    const Employee = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/employee.js'); // Assuming you have a model for Employee

    // Controller actions for Employee
    const EmployeeController = {
        // Create a new Employee
        create: async (req, res) => {
            try {
                const newEmployee = await Employee.create(req.body);
                res.status(201).json(newEmployee);
            } catch (err) {
                console.error('Error creating Employee:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get all Employee entries
        getAll: async (req, res) => {
            try {
                const allEmployee = await Employee.find();
                res.status(200).json(allEmployee);
            } catch (err) {
                console.error('Error getting Employee entries:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get Employee by ID
        getById: async (req, res) => {
            try {
                const EmployeeById = await Employee.findById(req.params.id);
                if (!EmployeeById) {
                    return res.status(404).json({ error: 'Employee not found' });
                }
                res.status(200).json(EmployeeById);
            } catch (err) {
                console.error('Error getting Employee by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Update Employee by ID
        updateById: async (req, res) => {
            try {
                const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedEmployee) {
                    return res.status(404).json({ error: 'Employee not found' });
                }
                res.status(200).json(updatedEmployee);
            } catch (err) {
                console.error('Error updating Employee by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Delete Employee by ID
        deleteById: async (req, res) => {
            try {
                const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
                if (!deletedEmployee) {
                    return res.status(404).json({ error: 'Employee not found' });
                }
                res.status(200).json({ message: 'Employee deleted successfully' });
            } catch (err) {
                console.error('Error deleting Employee by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        }
    };

    module.exports = EmployeeController;
    