
    // Controller for Marks entity

    // Import necessary modules
    const Marks = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/marks.js'); // Assuming you have a model for Marks

    // Controller actions for Marks
    const MarksController = {
        // Create a new Marks
        create: async (req, res) => {
            try {
                const newMarks = await Marks.create(req.body);
                res.status(201).json(newMarks);
            } catch (err) {
                console.error('Error creating Marks:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get all Marks entries
        getAll:(req, res) => {
            
                Marks.getAll((err, allMarks) => {
                if (err) {
                    console.error('Error getting Mark entries:', err);
                    return res.status(500).json({ error: 'Server error' });
                }
                res.status(200).json(allMarks);
            });
        },

        // Get Marks by ID
        getById: async (req, res) => {
            try {
                const MarksById = await Marks.findById(req.params.id);
                if (!MarksById) {
                    return res.status(404).json({ error: 'Marks not found' });
                }
                res.status(200).json(MarksById);
            } catch (err) {
                console.error('Error getting Marks by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Update Marks by ID
        updateById: async (req, res) => {
            try {
                const updatedMarks = await Marks.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedMarks) {
                    return res.status(404).json({ error: 'Marks not found' });
                }
                res.status(200).json(updatedMarks);
            } catch (err) {
                console.error('Error updating Marks by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Delete Marks by ID
        deleteById: async (req, res) => {
            try {
                const deletedMarks = await Marks.findByIdAndDelete(req.params.id);
                if (!deletedMarks) {
                    return res.status(404).json({ error: 'Marks not found' });
                }
                res.status(200).json({ message: 'Marks deleted successfully' });
            } catch (err) {
                console.error('Error deleting Marks by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        }
    };

    module.exports = MarksController;
    