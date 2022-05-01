const sequelize = require('../../config/config');
const { DataTypes, Model } = require('sequelize');
const BusinessType = require('./businessType');

class Auth extends Model {}

Auth.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rol: {
            type: DataTypes.SMALLINT,
            defaultValue: 2,
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
        modelName: 'Auth',
        createdAt: false,
        updatedAt: false,
        tableName: 'user'
    }
)

BusinessType.hasMany(Auth, {
    foreignKey: {
      name: 'business_type_id'
    }
});
Auth.belongsTo(BusinessType, {
    foreignKey: {
      name: 'business_type_id'
    }
});

module.exports = Auth;