import os

# List of table names
table_names = ['Alumni', 'Attendance', 'Courses', 'Department', 'Employee', 'Faculty', 'Management', 'Marks', 'Person', 'Project', 'Project_Review', 'Student', 'University']

# Function to generate controller file content
def generate_controller_content(table_name):
    controller_name = table_name.lower() + 'controller.js'
    content = f"""
    // Controller for {table_name} entity

    // Import necessary modules
    const {table_name} = require('../models/{table_name}'); // Assuming you have a model for {table_name}

    // Controller actions for {table_name}
    const {table_name}Controller = {{
        // Create a new {table_name}
        create: async (req, res) => {{
            try {{
                const new{table_name} = await {table_name}.create(req.body);
                res.status(201).json(new{table_name});
            }} catch (err) {{
                console.error('Error creating {table_name}:', err);
                res.status(500).json({{ error: 'Server error' }});
            }}
        }},

        // Get all {table_name} entries
        getAll: async (req, res) => {{
            try {{
                const all{table_name} = await {table_name}.find();
                res.status(200).json(all{table_name});
            }} catch (err) {{
                console.error('Error getting {table_name} entries:', err);
                res.status(500).json({{ error: 'Server error' }});
            }}
        }},

        // Get {table_name} by ID
        getById: async (req, res) => {{
            try {{
                const {table_name}ById = await {table_name}.findById(req.params.id);
                if (!{table_name}ById) {{
                    return res.status(404).json({{ error: '{table_name} not found' }});
                }}
                res.status(200).json({table_name}ById);
            }} catch (err) {{
                console.error('Error getting {table_name} by ID:', err);
                res.status(500).json({{ error: 'Server error' }});
            }}
        }},

        // Update {table_name} by ID
        updateById: async (req, res) => {{
            try {{
                const updated{table_name} = await {table_name}.findByIdAndUpdate(req.params.id, req.body, {{ new: true }});
                if (!updated{table_name}) {{
                    return res.status(404).json({{ error: '{table_name} not found' }});
                }}
                res.status(200).json(updated{table_name});
            }} catch (err) {{
                console.error('Error updating {table_name} by ID:', err);
                res.status(500).json({{ error: 'Server error' }});
            }}
        }},

        // Delete {table_name} by ID
        deleteById: async (req, res) => {{
            try {{
                const deleted{table_name} = await {table_name}.findByIdAndDelete(req.params.id);
                if (!deleted{table_name}) {{
                    return res.status(404).json({{ error: '{table_name} not found' }});
                }}
                res.status(200).json({{ message: '{table_name} deleted successfully' }});
            }} catch (err) {{
                console.error('Error deleting {table_name} by ID:', err);
                res.status(500).json({{ error: 'Server error' }});
            }}
        }}
    }};

    module.exports = {table_name}Controller;
    """
    return content


# Function to write controller file
def write_controller_file(table_name):
    file_name = table_name.lower() + 'controller.js'
    content = generate_controller_content(table_name)
    with open(file_name, 'w') as file:
        file.write(content)
    print(f"Controller file '{file_name}' created successfully.")

# Create controller files for each table
for table_name in table_names:
    write_controller_file(table_name)
