
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Faculty = {
  getAll: (callback) => {
    db.query('SELECT * FROM Faculty', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Faculty WHERE id = ?', [id], callback);
  },

  create: (newFaculty, callback) => {
    db.query('INSERT INTO Faculty SET ?', newFaculty, callback);
  },

  update: (id, updatedFaculty, callback) => {
    db.query('UPDATE Faculty SET ? WHERE id = ?', [updatedFaculty, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Faculty WHERE id = ?', [id], callback);
  }
};

module.exports = Faculty;
