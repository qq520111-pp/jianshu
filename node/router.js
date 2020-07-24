const article_list = require('./schema/HOMEPAGE.js');
const user = require('./schema/USER.js');

let index = function (req, res) {
    var arr = [1, 2, 3, 4, 5, 6];
    article_list.create({
        list: [11, 22, 33, 44, 55, 66]
    })
    res.send(arr);
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