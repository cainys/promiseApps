/**
*Author:gsy
*date:2017-04-07
*des:入口文件
*/
requirejs.config({
	baseUrl:'./',
	paths:{
		jquery:'./libs/jquery-3.2.0.min',
		API:'./libs/API',
		request:'./libs/request',
		calendar:'./components/calendar',
		imageCenter:'./components/imageCenter',
		dialog:'./components/dialog'
	}
})
define(function(require){
    var $ = require('jquery');
    require('dialog');
	require('./components/button');
    require('calendar');
    var imageCenter = require('imageCenter');
    var imageWrapList = document.querySelectorAll('.img-center');
    imageCenter(imageWrapList,'wspectFill')
})