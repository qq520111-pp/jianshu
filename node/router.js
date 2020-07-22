const article_list = require('./schema/HOMEPAGE.js');
const user = require('./schema/USER.js');

let index = function (req, res) {
    var arr = [1, 2, 3, 4, 5, 6];
    article_list.create({
        list: [11, 22, 33, 44, 55, 66]
    })
    res.send(arr);
}

let register = function (req, res) {
    var params = req.body;
    user.create({
        user_name: params.name,
        user_phone: params.phone,
        user_pass: params.pass
    }, function (err) {
        if (err) {
            res.send({ status: 0, msg: '用户创建失败' });
        } else {
            res.send({ status: 1, msg: '用户创建成功' });
        }
    })
}


module.exports = {
    index,
    register
}