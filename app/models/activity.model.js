module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activities", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      libelle: {
        type: Sequelize.STRING
      }
     
    });
  
    return Activity;
};
  