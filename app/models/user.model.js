module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    lobbys: {
      type: Sequelize.ARRAY(Sequelize.UUID), // Assuming lobby IDs are stored as UUIDs
      defaultValue: []
    },
    rating: {
      type: Sequelize.JSONB, // Using JSONB for flexible storage
      defaultValue: []
    },
    description: {
      type: Sequelize.STRING
    },
    profilPicture: {
      type: Sequelize.STRING
    }
  });

  return User;
};
