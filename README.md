# Koa2 Weibo

npm install -g koa-generator
koa2 -e koa2-weibo (-e 使用ejs）

app.js是业务app，bin/www是真正的纯server

koa-bodyparser和koa-json用于解析post的json数据（还有koa-body解析。。。）

koa-static将某个目录静态化（作为静态资源的目录）

koa-views注册ejs模板文件目录

debug库 更加区分前缀的console log

koa-router

- router.get('/profile/:userName', async (ctx, next) => {
    // ...
  });

ejs

- 通过ctx.render(ejsFile, {
    variable1: '',
    variable2: '',
  }) 渲染

- 通过koa-views注册
- 通过 locals.varName 可以避免报错

- if/else
  <% if (blogData.isEmpty) { %>
    <div></div>
  <% } else { %>
    <div></div>
  <% } %>

- 引用组件
  <%- include('widgets/component-name', {
    propName: value
  }) %>

- 可以在ejs文件下面增加script标签来实现js逻辑


MySQL

- select * from users order by id desc;
- select count(*) as `count` from users;
- select count(id) as `count` from users;
- select * from users order by id desc limit 2 offset 2; // 跳过两行，再查两行
- delete from users where id = 1;

MySQL 外键

- select * from blogs inner join users on users.id = blogs.userid; // 连表查询
- select blogs.*, users.username, users.nickname
    from blogs inner join users on users.id = blogs.usersid
    where users.usernmae = 'zhangsan';

Sequelize (ORM，对象关系映射)

- 通过对象关系，映射到数据库；通过操作对象，达到操作数据库的目的
- 建模 && 同步到数据库
  * 数据表，用JS中的class或对象代替
  * 多条记录，用JS中的数组代替
  * SQL语句，用对象方法代替

连接池

- 多个连接的集合，这个集合是稳定存在的，集合中的连接可以通过相关配置进行设置


Redis

- 是内存数据库，比硬盘数据库访问更快、性能更好，mysql是硬盘数据库
- 用户信息、微博广场适合redis缓存