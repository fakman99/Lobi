const getAllUserQuery = 'SELECT * FROM Lobi.Users';
const getUserByIDQuery = 'SELECT * FROM Lobi.Users WHERE Users.Id = $1';
const checkEmailExists = "SELECT s FROM Users s WHERE S.email = $1";
const addUsersQuery = "INSERT INTO Users (name, email)VALUES ($1,$2)";
module.exports = {
    getAllUserQuery,
    getUserByIDQuery,
    checkEmailExists,
    addUsersQuery

}