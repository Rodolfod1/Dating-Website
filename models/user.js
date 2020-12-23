module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            len: [1, 30],
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            len: [1, 30],
            allowNull: false
        },
        personalStatement: {
            type: DataTypes.STRING,
            len: [1, 250],
            allowNull: true
        },
        hobby1id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hobby2id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hobby3id: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return User;
}