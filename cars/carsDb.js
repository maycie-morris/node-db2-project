const db = require('../data/db-config');

const find = () => {
    return db('cars')
};

const findById = (id) => {
    return db('cars')
        .where({ id })
};

const insert = (car) => {
    return db('cars')
        .insert(car)
        .then(ids => {
            return findById(ids[0])
        })
};

const update = (id, changes) => {
    return db('cars')
        .where({ id })
        .update(changes)
};

const remove = (id) => {
    return db('cars')
        .where('id', id)
        .del();
};


module.exports = {
    find,
    findById,
    insert,
    update,
    remove
};