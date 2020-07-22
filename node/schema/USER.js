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
    }
})

var user_schemas = mongoose.model('user_schemas', user_schema);

module.exports = user_schemas