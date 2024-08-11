
    // Controller for Project_Review entity

    // Import necessary modules
    const Project_Review = require('../models/Project_Review'); // Assuming you have a model for Project_Review

    // Controller actions for Project_Review
    const Project_ReviewController = {
        // Create a new Project_Review
        create: async (req, res) => {
            try {
                const newProject_Review = await Project_Review.create(req.body);
                res.status(201).json(newProject_Review);
            } catch (err) {
                console.error('Error creating Project_Review:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get all Project_Review entries
        getAll: async (req, res) => {
            try {
                const allProject_Review = await Project_Review.find();
                res.status(200).json(allProject_Review);
            } catch (err) {
                console.error('Error getting Project_Review entries:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get Project_Review by ID
        getById: async (req, res) => {
            try {
                const Project_ReviewById = await Project_Review.findById(req.params.id);
                if (!Project_ReviewById) {
                    return res.status(404).json({ error: 'Project_Review not found' });
                }
                res.status(200).json(Project_ReviewById);
            } catch (err) {
                console.error('Error getting Project_Review by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Update Project_Review by ID
        updateById: async (req, res) => {
            try {
                const updatedProject_Review = await Project_Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedProject_Review) {
                    return res.status(404).json({ error: 'Project_Review not found' });
                }
                res.status(200).json(updatedProject_Review);
            } catch (err) {
                console.error('Error updating Project_Review by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Delete Project_Review by ID
        deleteById: async (req, res) => {
            try {
                const deletedProject_Review = await Project_Review.findByIdAndDelete(req.params.id);
                if (!deletedProject_Review) {
                    return res.status(404).json({ error: 'Project_Review not found' });
                }
                res.status(200).json({ message: 'Project_Review deleted successfully' });
            } catch (err) {
                console.error('Error deleting Project_Review by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        }
    };

    module.exports = Project_ReviewController;
    