
    // Controller for University entity

    // Import necessary modules
    const University = require('../models/University'); // Assuming you have a model for University

    // Controller actions for University
    const UniversityController = {
        // Create a new University
        create: async (req, res) => {
            try {
                const newUniversity = await University.create(req.body);
                res.status(201).json(newUniversity);
            } catch (err) {
                console.error('Error creating University:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get all University entries
        getAll: async (req, res) => {
            try {
                const allUniversity = await University.find();
                res.status(200).json(allUniversity);
            } catch (err) {
                console.error('Error getting University entries:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get University by ID
        getById: async (req, res) => {
            try {
                const UniversityById = await University.findById(req.params.id);
                if (!UniversityById) {
                    return res.status(404).json({ error: 'University not found' });
                }
                res.status(200).json(UniversityById);
            } catch (err) {
                console.error('Error getting University by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Update University by ID
        updateById: async (req, res) => {
            try {
                const updatedUniversity = await University.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedUniversity) {
                    return res.status(404).json({ error: 'University not found' });
                }
                res.status(200).json(updatedUniversity);
            } catch (err) {
                console.error('Error updating University by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Delete University by ID
        deleteById: async (req, res) => {
            try {
                const deletedUniversity = await University.findByIdAndDelete(req.params.id);
                if (!deletedUniversity) {
                    return res.status(404).json({ error: 'University not found' });
                }
                res.status(200).json({ message: 'University deleted successfully' });
            } catch (err) {
                console.error('Error deleting University by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        }
    };

    module.exports = UniversityController;
    