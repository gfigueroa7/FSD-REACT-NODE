const sequelize = require('../../config/config');
const { DataTypes, Model } = require('sequelize');
const Stores = require('./stores');

class StoresDetail extends Model {}

StoresDetail.init(
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
        modelName: 'StoresDetail',
        createdAt: false,
        updatedAt: false,
        tableName: 'storeDetail'
    }
)

Stores.hasMany(StoresDetail, {
    foreignKey: {
      name: 'store_id'
    }
});
StoresDetail.belongsTo(Stores, {
    foreignKey: {
      name: 'store_id'
    }
});

module.exports = StoresDetail;