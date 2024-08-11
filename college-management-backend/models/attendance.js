
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Attendance = {
  getAll: (callback) => {
    db.query('SELECT * FROM Attendance', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Attendance WHERE id = ?', [id], callback);
  },

  create: (newAttendance, callback) => {
    db.query('INSERT INTO Attendance SET ?', newAttendance, callback);
  },

  update: (id, updatedAttendance, callback) => {
    db.query('UPDATE Attendance SET ? WHERE id = ?', [updatedAttendance, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Attendance WHERE id = ?', [id], callback);
  }
};

module.exports = Attendance;
