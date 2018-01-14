module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define('publisher', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    name: {
      type: DataTypes.STRING,
      required: true
    }
  }, { 
    underscored: true,
    timestamps: false,
  } 
);
  console.log('Checking the publisher attributes', Object.keys(Publisher.rawAttributes));
  return Publisher;
};
