
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Marks = {
  getAll: (callback) => {
    db.query('SELECT * FROM Marks', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Marks WHERE student_id = ?', [id], callback);
  },

  create: (newMarks, callback) => {
    db.query('INSERT INTO Marks SET ?', newMarks, callback);
  },

  update: (id, updatedMarks, callback) => {
    db.query('UPDATE Marks SET ? WHERE id = ?', [updatedMarks, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Marks WHERE id = ?', [id], callback);
  }
};

module.exports = Marks;
