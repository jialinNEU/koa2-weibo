const Sequelize = require('sequelize');
const { MYSQL_CONF } = require('../conf/db');
const { isProd, isTest } = require('../utils/env');

const { host, user, password, database } = MYSQL_CONF;
const conf = {
  host,
  dialect: 'mysql', // 连接的数据库类型
};

if (isTest) {
  conf.logging = () => {};
}

if (isProd) {
  conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0,
    idle: 10000, // 如果一个连接池 10s 内没有被使用会被释放
  };
}

const seq = new Sequelize(database, user, password, conf);

module.exports = seq;
