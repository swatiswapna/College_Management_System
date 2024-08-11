
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Project_Review = {
  getAll: (callback) => {
    db.query('SELECT * FROM Project_Review', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Project_Review WHERE id = ?', [id], callback);
  },

  create: (newProject_Review, callback) => {
    db.query('INSERT INTO Project_Review SET ?', newProject_Review, callback);
  },

  update: (id, updatedProject_Review, callback) => {
    db.query('UPDATE Project_Review SET ? WHERE id = ?', [updatedProject_Review, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Project_Review WHERE id = ?', [id], callback);
  }
};

module.exports = Project_Review;
