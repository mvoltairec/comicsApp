var db = require('../config/db');

module.exports = (sequelize, DataTypes) => {
 const Comic = sequelize.define('comic', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
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
  },{ 
    underscored: true,
    timestamps: false,
  } 
  );
console.log('Checking the Comic attributes', Object.keys(Comic.rawAttributes));
return Comic;
};