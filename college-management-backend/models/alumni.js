
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Alumni = {
  getAll: (callback) => {
    db.query('SELECT * FROM Alumni', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Alumni WHERE id = ?', [id], callback);
  },

  create: (newAlumni, callback) => {
    db.query('INSERT INTO Alumni SET ?', newAlumni, callback);
  },

  update: (id, updatedAlumni, callback) => {
    db.query('UPDATE Alumni SET ? WHERE id = ?', [updatedAlumni, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Alumni WHERE id = ?', [id], callback);
  }
};

module.exports = Alumni;
