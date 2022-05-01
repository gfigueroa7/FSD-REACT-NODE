const sequelize = require('../../config/config');
const { DataTypes, Model } = require('sequelize');
const User = require('../auth/auth');

class Blog extends Model {}

Blog.init(
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
        view: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        modelName: 'Blog',
        createdAt: false,
        updatedAt: false,
        tableName: 'blog'
    }
)

User.hasMany(Blog, {
    foreignKey: {
      name: 'user_id'
    }
});
Blog.belongsTo(User, {
    foreignKey: {
      name: 'user_id'
    }
});

module.exports = Blog;