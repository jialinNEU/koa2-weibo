const seq = require('../seq');
const { STRING, INTEGER, TEXT } = require('../types');

// Blog 模型，数据表名字是 blogs
const Blog = seq.define('blog', {
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户 ID',
  },
  content: {
    type: TEXT,
    allowNull: false,
    comment: '微博内容',
  },
  image: {
    type: STRING,
    comment: '图片地址',
  }
});

module.exports = Blog;
