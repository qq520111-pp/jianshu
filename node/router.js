const article_list = require('./schema/ARTICLE.js');
const user = require('./schema/USER.js');
const crypto = require('crypto');
const { default: Item } = require('antd/lib/list/Item');
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
    // limit((index + 1) * size)
    article_list.find().then(res1 => {
        res1 = res1.reverse();
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
    user.find({
        _id: params.id
    }).then(res => {
        if (res) {
            article_list.create({
                title: params.title,
                content: params.content,
                fayang: 0,
                guanzhu: 0,
                zuanshi: 0,
                user_msg: res[0],
            }).then(res => {
                res1.send({ msg: '创建成功' });
            })
        } else {
            res1.send({ msg: '用户不存在' });
        }
    })
}

let getAuthor = function (req, res1) {
    user.find({}).then(res => {
        var filter_user = res.map(Item => {
            var obj = {
                user_name: Item.user_name,
                avatar: Item.avatar,
                guanzhu: Item.guanzhu
            }
            return obj
        })
        //随机选内容---代写

        res1.send(filter_user);
    })
}

module.exports = {
    index,
    register,
    login,
    createArticle,
    getAuthor
}