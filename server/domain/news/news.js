const sequelize = require('../../config/config');
const { DataTypes, Model } = require('sequelize');

class News extends Model {}

News.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            defaultValue: 'assets/ejemplo.png'
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'News',
        createdAt: false,
        updatedAt: false,
        tableName: 'news'
    }
)

module.exports = News;