module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define('publisher', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      required: true
    }
  });
  return Publisher;
};