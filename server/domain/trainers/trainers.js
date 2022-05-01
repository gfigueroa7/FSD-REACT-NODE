const sequelize = require('../../config/config');
const { DataTypes, Model } = require('sequelize');
const User = require('../auth/auth');

class Trainers extends Model {}

Trainers.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING
        },
        crown: {
            type: DataTypes.STRING
        },
        crown_order: {
            type: DataTypes.SMALLINT,
            defaultValue: 4,
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
            allowNull: false
        },
        people: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Trainers',
        createdAt: false,
        updatedAt: false,
        tableName: 'trainer'
    }
)

User.hasMany(Trainers, {
    foreignKey: {
      name: 'user_id'
    }
});
Trainers.belongsTo(User, {
    foreignKey: {
      name: 'user_id'
    }
});

module.exports = Trainers;