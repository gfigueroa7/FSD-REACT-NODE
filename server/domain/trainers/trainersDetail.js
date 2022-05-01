const sequelize = require('../../config/config');
const { DataTypes, Model } = require('sequelize');
const Trainers = require('./trainers');

class TrainersDetail extends Model {}

TrainersDetail.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        week: {
            type: DataTypes.STRING,
        },
        saturday: {
            type: DataTypes.STRING,
        },
        sunday: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        map_img: {
            type: DataTypes.STRING
        },
        map_url: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'TrainersDetail',
        createdAt: false,
        updatedAt: false,
        tableName: 'trainerDetail'
    }
)

Trainers.hasMany(TrainersDetail, {
    foreignKey: {
      name: 'trainer_id'
    }
});
TrainersDetail.belongsTo(Trainers, {
    foreignKey: {
      name: 'trainer_id'
    }
});

module.exports = TrainersDetail;