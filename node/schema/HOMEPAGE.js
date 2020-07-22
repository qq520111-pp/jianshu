/*
 * @author 哈哈哈
 * @time 2020-07-20
 * @description 首页表
 *
 */

var mongoose = require('mongoose');

var article_list_schema = new mongoose.Schema({
    list: Array
})

var article_list = mongoose.model('articleList', article_list_schema);

module.exports = article_list