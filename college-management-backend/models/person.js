
const db = require('/Users/swatea/Developer/college_management_system/college-management-backend/models/db.js');

const Person = {
  getAll: (callback) => {
    db.query('SELECT * FROM Person', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Person WHERE id = ?', [id], callback);
  },

  create: (newPerson, callback) => {
    db.query('INSERT INTO Person SET ?', newPerson, callback);
  },

  update: (id, updatedPerson, callback) => {
    db.query('UPDATE Person SET ? WHERE id = ?', [updatedPerson, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Person WHERE id = ?', [id], callback);
  }
};

module.exports = Person;
