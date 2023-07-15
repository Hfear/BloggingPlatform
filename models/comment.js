'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {

    static associate(models) {

    this.belongsTo(models.User);
    this.belongsTo(models.Post);
    }
  }
  comment.init({
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
    tableName:"comments"
  });
  return comment;
};