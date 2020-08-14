/*
 * @author 哈哈哈
 * @time 2020-07-20
 * @description 首页表
 *
 */

var mongoose = require('mongoose');

var user_schema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_phone: {
        type: String,
        required: true
    },
    user_pass: {
        type: String,
        required: true
    },
    user_article: {
        type: String,
        default: '暂无关联'
    },
    user_details: {
        type: String,
        default: '就这点东西还想有用户详情????'
    },
    guanzhu: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
        default: '/static/logo192.png'
    }
})

var user_schemas = mongoose.model('user_schemas', user_schema);

module.exports = user_schemas