'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Student}){
      // define association here
      Book.hasOne(Student,{foreignKey:"bookId", as : "student" })
      
    }
  }
  Book.init({
    title:{
    type: DataTypes.STRING,  allowNull: false
    },
    author: DataTypes.STRING,
    price: DataTypes.INTEGER,
    language: DataTypes.STRING,
    published_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};