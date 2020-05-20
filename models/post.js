'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    body: DataTypes.STRING,
    category: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};