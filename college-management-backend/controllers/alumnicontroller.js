
    // // Controller for Alumni entity

    // // Import necessary modules
    // const Alumni = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/alumni.js'); // Assuming you have a model for Alumni

    // // Controller actions for Alumni
    // const AlumniController = {
    //     // Create a new Alumni
    //     create: async (req, res) => {
    //         try {
    //             const newAlumni = await Alumni.create(req.body);
    //             res.status(201).json(newAlumni);
    //         } catch (err) {
    //             console.error('Error creating Alumni:', err);
    //             res.status(500).json({ error: 'Server error' });
    //         }
    //     },

    //     // Get all Alumni entries
    //     getAll: async (req, res) => {
    //         try {
    //             const allAlumni = await Alumni.find();
    //             res.status(200).json(allAlumni);
    //         } catch (err) {
    //             console.error('Error getting Alumni entries:', err);
    //             res.status(500).json({ error: 'Server error' });
    //         }
    //     },

    //     // Get Alumni by ID
    //     getById: async (req, res) => {
    //         try {
    //             const AlumniById = await Alumni.findById(req.params.id);
    //             if (!AlumniById) {
    //                 return res.status(404).json({ error: 'Alumni not found' });
    //             }
    //             res.status(200).json(AlumniById);
    //         } catch (err) {
    //             console.error('Error getting Alumni by ID:', err);
    //             res.status(500).json({ error: 'Server error' });
    //         }
    //     },

    //     // Update Alumni by ID
    //     updateById: async (req, res) => {
    //         try {
    //             const updatedAlumni = await Alumni.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //             if (!updatedAlumni) {
    //                 return res.status(404).json({ error: 'Alumni not found' });
    //             }
    //             res.status(200).json(updatedAlumni);
    //         } catch (err) {
    //             console.error('Error updating Alumni by ID:', err);
    //             res.status(500).json({ error: 'Server error' });
    //         }
    //     },

    //     // Delete Alumni by ID
    //     deleteById: async (req, res) => {
    //         try {
    //             const deletedAlumni = await Alumni.findByIdAndDelete(req.params.id);
    //             if (!deletedAlumni) {
    //                 return res.status(404).json({ error: 'Alumni not found' });
    //             }
    //             res.status(200).json({ message: 'Alumni deleted successfully' });
    //         } catch (err) {
    //             console.error('Error deleting Alumni by ID:', err);
    //             res.status(500).json({ error: 'Server error' });
    //         }
    //     }
    // };

    // module.exports = AlumniController;

    // Controller for Alumni entity
const Alumni = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/alumni.js');

const AlumniController = {
    // Create a new Alumni
    create: async (req, res) => {
        try {
            const newAlumni = await Alumni.create(req.body);
            res.status(201).json(newAlumni);
        } catch (err) {
            console.error('Error creating Alumni:', err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all Alumni entries
    getAll: (req, res) => {
        Alumni.getAll((err, allAlumni) => {
            if (err) {
                console.error('Error getting Alumni entries:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            res.status(200).json(allAlumni);
        });
    },

    // Get Alumni by ID
    getById: (req, res) => {
        const id = req.params.id;
        Alumni.getById(id, (err, AlumniById) => {
            if (err) {
                console.error('Error getting Alumni by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!AlumniById) {
                return res.status(404).json({ error: 'Alumni not found' });
            }
            res.status(200).json(AlumniById);
        });
    },

    // Update Alumni by ID
    updateById: (req, res) => {
        const id = req.params.id;
        const updatedAlumni = req.body;
        Alumni.update(id, updatedAlumni, (err, updatedAlumni) => {
            if (err) {
                console.error('Error updating Alumni by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!updatedAlumni) {
                return res.status(404).json({ error: 'Alumni not found' });
            }
            res.status(200).json(updatedAlumni);
        });
    },

    // Delete Alumni by ID
    deleteById: (req, res) => {
        const id = req.params.id;
        Alumni.delete(id, (err, deletedAlumni) => {
            if (err) {
                console.error('Error deleting Alumni by ID:', err);
                return res.status(500).json({ error: 'Server error' });
            }
            if (!deletedAlumni) {
                return res.status(404).json({ error: 'Alumni not found' });
            }
            res.status(200).json({ message: 'Alumni deleted successfully' });
        });
    }
};

module.exports = AlumniController;

    