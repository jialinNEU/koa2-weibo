const seq = require('./seq');

require('./model/index');

// 测试连接

seq.authenticate().then(() => {
  console.log('ok');
}).catch(() => {
  console.log('error');
});

// 执行同步

seq.sync({ force: true }).then(() => { // force: true 重新建表
  process.exit();
});
