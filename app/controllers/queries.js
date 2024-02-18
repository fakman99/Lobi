const getAllUserQuery = 'SELECT * FROM users';
const getUserByIDQuery = 'SELECT * FROM users WHERE id = $1';
const removeUser = "DELETE FROM users WHERE id = $1";
const updatePicture = "UPDATE users SET picture = $2 WHERE id = $1";

const getAllActivityQuery = 'SELECT * FROM activities';
const getActivityByIDQuery = 'SELECT * FROM activities WHERE id = $1';
const getUserLobbyByIDQuery = 'SELECT lobbys FROM users WHERE id = $1';
const getUserRatingsByIDQuery = 'SELECT rating FROM users WHERE id = $1';




const getAllLobbyQuery = 'SELECT * FROM lobbys'
const getLobbyByIDQuery = 'SELECT * FROM lobbys WHERE id = $1';
module.exports = {
    getAllUserQuery,
    getUserByIDQuery,
    getAllActivityQuery,
    getActivityByIDQuery,
    getAllLobbyQuery,
    getLobbyByIDQuery,
    removeUser,
    updatePicture,
    getUserLobbyByIDQuery

}