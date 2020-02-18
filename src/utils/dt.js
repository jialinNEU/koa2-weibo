const { format } = require('date-fns');

// 格式化时间
function timeFormat(str) {
  return format(new Date(str), 'MM.dd HH:mm');
}

module.exports = { timeFormat };
