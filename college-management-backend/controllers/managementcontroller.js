
    // Controller for Management entity

    // Import necessary modules
    const Management = require('../models/Management'); // Assuming you have a model for Management

    // Controller actions for Management
    const ManagementController = {
        // Create a new Management
        create: async (req, res) => {
            try {
                const newManagement = await Management.create(req.body);
                res.status(201).json(newManagement);
            } catch (err) {
                console.error('Error creating Management:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get all Management entries
        getAll: async (req, res) => {
            try {
                const allManagement = await Management.find();
                res.status(200).json(allManagement);
            } catch (err) {
                console.error('Error getting Management entries:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get Management by ID
        getById: async (req, res) => {
            try {
                const ManagementById = await Management.findById(req.params.id);
                if (!ManagementById) {
                    return res.status(404).json({ error: 'Management not found' });
                }
                res.status(200).json(ManagementById);
            } catch (err) {
                console.error('Error getting Management by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Update Management by ID
        updateById: async (req, res) => {
            try {
                const updatedManagement = await Management.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedManagement) {
                    return res.status(404).json({ error: 'Management not found' });
                }
                res.status(200).json(updatedManagement);
            } catch (err) {
                console.error('Error updating Management by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Delete Management by ID
        deleteById: async (req, res) => {
            try {
                const deletedManagement = await Management.findByIdAndDelete(req.params.id);
                if (!deletedManagement) {
                    return res.status(404).json({ error: 'Management not found' });
                }
                res.status(200).json({ message: 'Management deleted successfully' });
            } catch (err) {
                console.error('Error deleting Management by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        }
    };

    module.exports = ManagementController;
    