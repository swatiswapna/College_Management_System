
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const University = {
  getAll: (callback) => {
    db.query('SELECT * FROM University', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM University WHERE id = ?', [id], callback);
  },

  create: (newUniversity, callback) => {
    db.query('INSERT INTO University SET ?', newUniversity, callback);
  },

  update: (id, updatedUniversity, callback) => {
    db.query('UPDATE University SET ? WHERE id = ?', [updatedUniversity, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM University WHERE id = ?', [id], callback);
  }
};

module.exports = University;
