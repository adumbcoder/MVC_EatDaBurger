const connection = require('./connection.js');
const connect = require ('./connection.js');


const orm = {
all(tableInput, cb) {
    const query = `SELECT * FROM ${tableInput}`;
    connection.query(query, (err, result) => {
        if(err) {
            throw err;
        }
        cb(result)
    })
}, 
create(table, name, cb) {
    let query = `INSERT INTO ${table}(burger_name) VALUES (?)`;
    connection.query(query, [name], (err, result) => {
        if(err) {
            throw err;
        }
        cb(result);
    }) 
}, 
update(table, id, cb) {
    let query = `UPDATE ${table} SET devoured = true WHERE id = ?`;
    connection.query(query, [id], (err, result) => {
        if(err) {
            throw err;
        }
        cb(result);
    })
}
}

module.exports = orm;