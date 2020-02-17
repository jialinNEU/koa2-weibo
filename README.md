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