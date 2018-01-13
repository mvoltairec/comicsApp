
module.exports = (sequelize, DataTypes) => {
 const Comic = sequelize.define('comic', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    publisher_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      required: true
    },
    volume_number: {
      type: DataTypes.STRING
    },
    issue_number: {
      type: DataTypes.STRING
    },
    release_Date: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.STRING(500)
    }
  },
 {
  underscored: true
});
return Comic;
};