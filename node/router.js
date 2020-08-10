const article_list = require('./schema/HOMEPAGE.js');
const user = require('./schema/USER.js');
const crypto = require('crypto');
//加密过程
function aesEncrypt(data, key = 'Password') {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
// 解密过程
function aesDecrypt(encrypted, key = 'Password') {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

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
        var pass = aesEncrypt(params.pass);
        var phone = aesEncrypt(params.phone);
        //查找注册名字
        if (res.length) {
            res1.send({ status: 0, msg: '该用户名已被占用' });
        } else {
            user.find({
                user_phone: phone,
            }).then(res => {
                //查找注册
                if (res.length) {
                    res1.send({ status: 0, msg: '该手机号已被占用' });
                } else {

                    user.create({
                        user_name: params.name,
                        user_phone: phone,
                        user_pass: pass
                    }, function (err) {
                        console.log(err);
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
    //加密
    var pass = aesEncrypt(params.pass);
    var phone = aesEncrypt(params.phone);

    user.find({
        user_phone: phone
    }).then(res => {
        //查找登录手机号
        if (!res.length) {
            res1.send({ status: 0, msg: '账号不存在' });
        } else {
            user.find({
                user_phone: phone,
                user_pass: pass,
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


let createArticle = function (req, res1) {
    var params = req.body;

    // user.find({
    //     _id: id
    // }).then(res => {
    //     if (res) {
    //         article_list.create({
    //             title: '哈哈哈测试数据',
    //             content: '杨丽萍徒弟水月和同性女人结婚，上了热搜，也抢了我的眼球。在中国，同性恋可以领证吗？合法吗？啥时可以同性恋结婚了？ 在中国，同性恋是不可以领证的。...',
    //             fayang: 400,
    //             guanzhu: 102,
    //             zuanshi: 63,
    //             user_msg: res[0],
    //         }).then(res1 => {
    //             res.send({ msg: '创建成功' });
    //         })
    //     } else {
    //         res.send({ msg: '用户不存在' });
    //     }
    // })
}



module.exports = {
    index,
    register,
    login
}