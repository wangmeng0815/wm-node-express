const express = require('express');
const bodyParser = require('body-parser');

const testRouter = require('./models/test');

const app = express();

// 中间件
app.use(bodyParser.json());

// 路由中间件
app.use('/test', testRouter);

// 监听
app.listen(4000, function(){
    console.log('wm node express start at port 4000 🎺');
});