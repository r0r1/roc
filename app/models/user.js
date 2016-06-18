var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    remember_token: {
      type: DataTypes.STRING,
      unique: true
    },
    avatar: {
      allowNull: true,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    instanceMethods: {
      setPassword: function(password, done) {
        return bcrypt.genSalt(10, function(err, salt) {
          return bcrypt.hash(password, salt, function(error, encrypted) {
            this.password = encrypted;
            this.salt = salt;
            return done();
          });
        });
      },
      verifyPassword: function(password, done) {
        return bcrypt.compare(password, this.password, function(err, res) {
          return done(err, res);
        });
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
