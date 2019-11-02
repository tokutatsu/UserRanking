'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ranking = sequelize.define('Ranking', {
    user_name: DataTypes.STRING,
    user_score: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Ranking.associate = function (models) {
    // associations can be defined here
  };
  return Ranking;
};