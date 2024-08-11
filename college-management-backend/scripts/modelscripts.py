# List of table names
table_names = ['Alumni', 'Attendance', 'Courses', 'Department', 'Employee', 'Faculty', 'Management', 'Marks', 'Person', 'Project', 'Project_Review', 'Student', 'University']

# Function to generate model file content
def generate_model_content(table_name):
    model_name = table_name.lower() + '.js'
    content = f"""
const db = require('./db');

const {table_name} = {{
  getAll: (callback) => {{
    db.query('SELECT * FROM {table_name}', callback);
  }},

  getById: (id, callback) => {{
    db.query('SELECT * FROM {table_name} WHERE id = ?', [id], callback);
  }},

  create: (new{table_name}, callback) => {{
    db.query('INSERT INTO {table_name} SET ?', new{table_name}, callback);
  }},

  update: (id, updated{table_name}, callback) => {{
    db.query('UPDATE {table_name} SET ? WHERE id = ?', [updated{table_name}, id], callback);
  }},

  delete: (id, callback) => {{
    db.query('DELETE FROM {table_name} WHERE id = ?', [id], callback);
  }}
}};

module.exports = {table_name};
"""
    return content

# Function to write model file
def write_model_file(table_name):
    file_name = table_name.lower() + '.js'
    content = generate_model_content(table_name)
    with open(file_name, 'w') as file:
        file.write(content)
    print(f"Model file '{file_name}' created successfully.")

# Create model files for each table
for table_name in table_names:
    write_model_file(table_name)
