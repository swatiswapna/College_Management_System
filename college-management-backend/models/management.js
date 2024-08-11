
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Management = {
  getAll: (callback) => {
    db.query('SELECT * FROM Management', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Management WHERE id = ?', [id], callback);
  },

  create: (newManagement, callback) => {
    db.query('INSERT INTO Management SET ?', newManagement, callback);
  },

  update: (id, updatedManagement, callback) => {
    db.query('UPDATE Management SET ? WHERE id = ?', [updatedManagement, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Management WHERE id = ?', [id], callback);
  }
};

module.exports = Management;
