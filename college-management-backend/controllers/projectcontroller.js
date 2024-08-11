
    // Controller for Project entity

    // Import necessary modules
    const Project = require('../models/Project'); // Assuming you have a model for Project

    // Controller actions for Project
    const ProjectController = {
        // Create a new Project
        create: async (req, res) => {
            try {
                const newProject = await Project.create(req.body);
                res.status(201).json(newProject);
            } catch (err) {
                console.error('Error creating Project:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get all Project entries
        getAll: async (req, res) => {
            try {
                const allProject = await Project.find();
                res.status(200).json(allProject);
            } catch (err) {
                console.error('Error getting Project entries:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get Project by ID
        getById: async (req, res) => {
            try {
                const ProjectById = await Project.findById(req.params.id);
                if (!ProjectById) {
                    return res.status(404).json({ error: 'Project not found' });
                }
                res.status(200).json(ProjectById);
            } catch (err) {
                console.error('Error getting Project by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Update Project by ID
        updateById: async (req, res) => {
            try {
                const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedProject) {
                    return res.status(404).json({ error: 'Project not found' });
                }
                res.status(200).json(updatedProject);
            } catch (err) {
                console.error('Error updating Project by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Delete Project by ID
        deleteById: async (req, res) => {
            try {
                const deletedProject = await Project.findByIdAndDelete(req.params.id);
                if (!deletedProject) {
                    return res.status(404).json({ error: 'Project not found' });
                }
                res.status(200).json({ message: 'Project deleted successfully' });
            } catch (err) {
                console.error('Error deleting Project by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        }
    };

    module.exports = ProjectController;
    