"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book }) {
      // define association here
      Student.belongsTo(Book, { foreignKey: "bookId", as: "book" });
    }
  }

  Student.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      semester: { type: DataTypes.INTEGER, allowNull: false },
      bookId: {
        type: DataTypes.INTEGER,
      },
      issue_date: DataTypes.DATE,
      return_date: DataTypes.DATE,
    },

    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
