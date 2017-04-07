/**
*Author:gsy
*date:2017-04-07
*des:处理数据
*/
define(function(require){
	var request = require('request');
	request.getTypeInfo().then(function(res){
		console.log(res);
	})
	//ajax的请求与数据处理分开使代码便于维护
})