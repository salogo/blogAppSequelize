'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    body: DataTypes.STRING,
    category: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    models.Post.hasMany(models.Review, { as: 'reviews', foreignKey: 'post_id'})
  };
  return Post;
};