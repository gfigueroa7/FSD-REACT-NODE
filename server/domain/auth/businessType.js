const sequelize = require('../../config/config');
const { DataTypes, Model } = require('sequelize');

class BusinessType extends Model {}

BusinessType.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'BusinessType',
        createdAt: false,
        updatedAt: false,
        tableName: 'business_type'
    }
)

module.exports = BusinessType;