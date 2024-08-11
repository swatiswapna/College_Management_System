
    // Controller for Faculty entity

    // Import necessary modules
    const Faculty = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/Faculty.js'); // Assuming you have a model for Faculty

    // Controller actions for Faculty
    const FacultyController = {
        // Create a new Faculty
        create: async (req, res) => {
            try {
                const newFaculty = await faculty.create(req.body);
                res.status(201).json(newFaculty);
            } catch (err) {
                console.error('Error creating Faculty:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get all Faculty entries
        getAll: async (req, res) => {
            try {
                const allFaculty = await Faculty.find();
                res.status(200).json(allFaculty);
            } catch (err) {
                console.error('Error getting Faculty entries:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get Faculty by ID
        getById: async (req, res) => {
            try {
                const FacultyById = await Faculty.findById(req.params.id);
                if (!FacultyById) {
                    return res.status(404).json({ error: 'Faculty not found' });
                }
                res.status(200).json(FacultyById);
            } catch (err) {
                console.error('Error getting Faculty by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Update Faculty by ID
        updateById: async (req, res) => {
            try {
                const updatedFaculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedFaculty) {
                    return res.status(404).json({ error: 'Faculty not found' });
                }
                res.status(200).json(updatedFaculty);
            } catch (err) {
                console.error('Error updating Faculty by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Delete Faculty by ID
        deleteById: async (req, res) => {
            try {
                const deletedFaculty = await Faculty.findByIdAndDelete(req.params.id);
                if (!deletedFaculty) {
                    return res.status(404).json({ error: 'Faculty not found' });
                }
                res.status(200).json({ message: 'Faculty deleted successfully' });
            } catch (err) {
                console.error('Error deleting Faculty by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        }
    };

    module.exports = FacultyController;
    