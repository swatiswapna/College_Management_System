
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Courses = {
  getAll: (callback) => {
    db.query('SELECT * FROM Courses', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Courses WHERE course_id = ?', [id], callback);
  },

  create: (newCourses, callback) => {
    db.query('INSERT INTO Courses SET ?', newCourses, callback);
  },

  update: (id, updatedCourses, callback) => {
    db.query('UPDATE Courses SET ? WHERE course_id = ?', [updatedCourses, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Courses WHERE course_id = ?', [id], callback);
  }
};

module.exports = Courses;
