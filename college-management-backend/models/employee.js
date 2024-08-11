
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Employee = {
  getAll: (callback) => {
    db.query('SELECT * FROM Employee', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Employee WHERE id = ?', [id], callback);
  },

  create: (newEmployee, callback) => {
    db.query('INSERT INTO Employee SET ?', newEmployee, callback);
  },

  update: (id, updatedEmployee, callback) => {
    db.query('UPDATE Employee SET ? WHERE id = ?', [updatedEmployee, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Employee WHERE id = ?', [id], callback);
  }
};

module.exports = Employee;
