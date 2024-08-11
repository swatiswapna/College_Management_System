
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Department = {
  getAll: (callback) => {
    db.query('SELECT * FROM Department', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Department WHERE id = ?', [id], callback);
  },

  create: (newDepartment, callback) => {
    db.query('INSERT INTO Department SET ?', newDepartment, callback);
  },

  update: (id, updatedDepartment, callback) => {
    db.query('UPDATE Department SET ? WHERE id = ?', [updatedDepartment, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Department WHERE id = ?', [id], callback);
  }
};

module.exports = Department;
