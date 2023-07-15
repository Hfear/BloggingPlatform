'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {

    static associate(models) {
      // define association here
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