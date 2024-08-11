
    // Controller for Person entity

    // Import necessary modules
    const Person = require('../models/Person'); // Assuming you have a model for Person

    // Controller actions for Person
    const PersonController = {
        // Create a new Person
        create: async (req, res) => {
            try {
                const newPerson = await Person.create(req.body);
                res.status(201).json(newPerson);
            } catch (err) {
                console.error('Error creating Person:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get all Person entries
        getAll: async (req, res) => {
            try {
                const allPerson = await Person.find();
                res.status(200).json(allPerson);
            } catch (err) {
                console.error('Error getting Person entries:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Get Person by ID
        getById: async (req, res) => {
            try {
                const PersonById = await Person.findById(req.params.id);
                if (!PersonById) {
                    return res.status(404).json({ error: 'Person not found' });
                }
                res.status(200).json(PersonById);
            } catch (err) {
                console.error('Error getting Person by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Update Person by ID
        updateById: async (req, res) => {
            try {
                const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedPerson) {
                    return res.status(404).json({ error: 'Person not found' });
                }
                res.status(200).json(updatedPerson);
            } catch (err) {
                console.error('Error updating Person by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        },

        // Delete Person by ID
        deleteById: async (req, res) => {
            try {
                const deletedPerson = await Person.findByIdAndDelete(req.params.id);
                if (!deletedPerson) {
                    return res.status(404).json({ error: 'Person not found' });
                }
                res.status(200).json({ message: 'Person deleted successfully' });
            } catch (err) {
                console.error('Error deleting Person by ID:', err);
                res.status(500).json({ error: 'Server error' });
            }
        }
    };

    module.exports = PersonController;
    