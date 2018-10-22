'use strict';
module.exports = (sequelize, DataTypes) => {
  var BucketItem = sequelize.define('BucketItem', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: DataTypes.STRING,
    complete: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "Users",
        key: "id",
        as: "userId"
      }
    }
  }, {});
  BucketItem.associate = function(models) {
    BucketItem.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return BucketItem;
};
