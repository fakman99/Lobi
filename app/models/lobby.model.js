module.exports = (sequelize, Sequelize) => {

  const Lobby = sequelize.define('lobbys', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    activite: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    libelle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    owner: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    usersList: {
      type: Sequelize.ARRAY(Sequelize.UUID),
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dateTime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    adresse: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    privacy: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING, // Assuming the password is stored as a string
      allowNull: true, // It can be null if the event is public
    },
  });
  return Lobby;
};

