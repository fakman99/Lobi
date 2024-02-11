const getAllUserQuery = 'SELECT * FROM Users';
const getUserByIDQuery = 'SELECT * FROM Users WHERE id = $1';
const checkEmailExists = "SELECT * FROM Users WHERE mail = $1";
const addUsersQuery = "INSERT INTO Users (name, email)VALUES ($1,$2)";
module.exports = {
    getAllUserQuery,
    getUserByIDQuery,
    checkEmailExists,
    addUsersQuery

}