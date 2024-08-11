
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

 const Student = {
  getAll: (callback) => {
    db.query('SELECT * FROM NewStudent', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM NewStudent WHERE new_student_id = ?', [id], callback);
  },

  create: (newStudent, callback) => {
    const { first_name, last_name, date_of_birth, gender, phone_no, major } = newStudent;
    const sql = 'INSERT INTO NewStudent (first_name, last_name, date_of_birth, gender, phone_no, major) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [first_name, last_name, date_of_birth, gender, phone_no, major];

    db.query(sql, values, callback);
  },

  update: (id, updatedStudent, callback) => {
    const { first_name, last_name, date_of_birth, gender, phone_no, major } = updatedStudent;
    const sql = 'UPDATE NewStudent SET first_name = ?, last_name = ?, date_of_birth = ?, gender = ?, phone_no = ?, major = ? WHERE new_student_id = ?;';
    const values = [first_name, last_name, date_of_birth, gender, phone_no, major, id];

    db.query(sql, values, callback);
},


  delete: (id, callback) => {
    db.query('DELETE FROM NewStudent WHERE new_student_id = ?', [id], callback);
  }
};

module.exports = Student;
