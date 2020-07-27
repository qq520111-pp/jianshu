const article_list = require('./schema/HOMEPAGE.js');
const user = require('./schema/USER.js');

let index = function (req, res) {
    var params = req.body;

    var index = params.index || 0;
    var size = 10;

    article_list.find().limit((index + 1) * size).then(res1 => {
        var arr = res1.slice(index * size);
        res.send(arr);
    })
}

let register = function (req, res1) {
    var params = req.body;

    user.find({
        user_name: params.name
    }).then(res => {
        //查找注册名字
        if (res.length) {
            res1.send({ status: 0, msg: '该用户名已被占用' });
        } else {
            user.find({
                user_phone: params.phone,
            }).then(res => {
                //查找注册
                if (res.length) {
                    res1.send({ status: 0, msg: '该手机号已被占用' });
                } else {

                    user.create({
                        user_name: params.name,
                        user_phone: params.phone,
                        user_pass: params.pass
                    }, function (err) {
                        if (err) {
                            res1.send({ status: 0, msg: '用户创建失败' });
                        } else {
                            res1.send({ status: 1, msg: '用户创建成功' });
                        }
                    })
                }
            })
        }
    })
}


let login = function (req, res1) {
    var params = req.body;

    user.find({
        user_phone: params.phone
    }).then(res => {
        console.log(res);
        //查找登录手机号
        if (!res.length) {
            res1.send({ status: 0, msg: '账号不存在' });
        } else {
            user.find({
                user_phone: params.phone,
                user_pass: params.pass,
            }).then(res => {
                //查找登录密码
                if (!res.length) {
                    res1.send({ status: 0, msg: '密码错误' });
                } else {
                    res1.send({
                        status: 1,
                        msg: '登录成功',
                        data: res[0]
                    });
                }
            })
        }
    })
}

module.exports = {
    index,
    register,
    login
}