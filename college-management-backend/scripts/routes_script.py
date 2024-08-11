import os

# List of table names
table_names = ['Alumni', 'Attendance', 'Courses', 'Department', 'Employee', 'Faculty', 'Management', 'Marks', 'Person', 'Project', 'Project_Review', 'Student', 'University']

# Function to generate route file content
def generate_route_content(table_name):
    route_name = table_name.lower() + 'Routes.js'
    content = f"""
const express = require('express');
const router = express.Router();
const {table_name.lower()}controller = require('../controllers/{table_name.lower()}controller');

router.get('/{table_name.lower()}s', {table_name.lower()}controller.getAll{table_name});
// Define other routes similarly

module.exports = router;
"""
    return content

# Function to write route file
def write_route_file(table_name):
    file_name = table_name.lower() + 'Routes.js'
    content = generate_route_content(table_name)
    with open(file_name, 'w') as file:
        file.write(content)
    print(f"Route file '{file_name}' created successfully.")

# Create route files for each table
for table_name in table_names:
    write_route_file(table_name)
