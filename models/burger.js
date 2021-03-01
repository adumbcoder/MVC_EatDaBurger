const orm = require('../config/orm.js')

const burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res));
    },
    create(name, cb) {
        orm.create('burgers', name, (res) => cb(res));
    },
    update(id, cb) {
        orm.update('burgers', id, (res) => cb(res));
    }
};

module.exports = burger;
