
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Project = {
  getAll: (callback) => {
    db.query('SELECT * FROM Project', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Project WHERE id = ?', [id], callback);
  },

  create: (newProject, callback) => {
    db.query('INSERT INTO Project SET ?', newProject, callback);
  },

  update: (id, updatedProject, callback) => {
    db.query('UPDATE Project SET ? WHERE id = ?', [updatedProject, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Project WHERE id = ?', [id], callback);
  }
};

module.exports = Project;
