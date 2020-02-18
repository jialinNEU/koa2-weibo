const User = require('./User');
const Blog = require('./Blog');

// 外键关连
Blog.belongsTo(User, { // belongsTo: 多对一
  // 创建外键 Blog.userId -> User.userId
  foreignKey: 'userId',
});

User.hasMany(Blog, {
  foreignKey: 'userId',
});

module.exports = {
  User,
  Blog,
};
