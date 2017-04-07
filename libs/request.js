/**
*Author:gsy
*date:2017-04-07
*des:数据请求
*/
define(function(require){
	var API = require('API');
	//获取当天信息
	getDayInfo = function(){
		return $.get(API.dayInfo);
	}
	//获取type信息
	getTypeInfo = function(){
		return $.get(API.typeInfo);
	}
	return {
		getDayInfo : getDayInfo,
		getTypeInfo : getTypeInfo
	}

})