const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animals extends Model {}

Animals.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          animal_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // Need validation type to match existing animals db
                // isExisting() {
                //     if(animal_type ===)
                // }
            }
          }
    }
)