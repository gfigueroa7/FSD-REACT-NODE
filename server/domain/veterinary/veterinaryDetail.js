const sequelize = require('../../config/config');
const { DataTypes, Model } = require('sequelize');
const Veterinary = require('./veterinary');

class VeterinaryDetail extends Model {}

VeterinaryDetail.init(
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
        modelName: 'VeterinaryDetail',
        createdAt: false,
        updatedAt: false,
        tableName: 'veterinaryDetail'
    }
)

Veterinary.hasMany(VeterinaryDetail, {
    foreignKey: {
      name: 'veterinary_id'
    }
});
VeterinaryDetail.belongsTo(Veterinary, {
    foreignKey: {
      name: 'veterinary_id'
    }
});

module.exports = VeterinaryDetail;