const getAllUserQuery = 'SELECT * FROM users';
const getUserByIDQuery = 'SELECT * FROM users WHERE id = $1';

const getAllActivityQuery = 'SELECT * FROM activities';
const getActivityByIDQuery = 'SELECT * FROM activities WHERE id = $1';

module.exports = {
    getAllUserQuery,
    getUserByIDQuery,
    getAllActivityQuery,
    getActivityByIDQuery
}