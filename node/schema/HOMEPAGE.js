/*
 * @author 哈哈哈
 * @time 2020-07-20
 * @description 首页表
 *
 */

var mongoose = require('mongoose');
var user = require('./USER.js');

var article_list_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user_msg: {
        type: Object,
        required: true
    },
    fayang: {
        type: Number
    },
    guanzhu: {
        type: Number
    },
    zuanshi: {
        type: Number
    }
})

var article_list = mongoose.model('articleList', article_list_schema);

module.exports = article_list