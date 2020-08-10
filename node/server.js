const express = require('express');
const mongoose = require('mongoose');
const router = require('./router.js');
const bodyParser = require('body-parser');

const app = express();

// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

app.all('*', function (req, res, next) {
    //  cors 跨域处理 allow control origin
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', "Content-Type");

    // if (req.method === 'OPTIONS') {
    //     next();
    // } 

    next();
})

app.post('/', router.index);
// app.post('/createArticle', router.createArticle)
app.post('/register', router.register);
app.post('/login', router.login);


app.listen(8853, function () {
    console.log('8853端口开启')
    mongoose.connect('mongodb://localhost:27017/jianshu', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) {
            console.log('articleList连接失败');
        } else {
            console.log('连接成功');
        }
    })
})