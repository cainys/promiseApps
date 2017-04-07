/**
*Author:gsy
*date:2017-04-07
*des:弹窗模块
*/
define(function(require){
	var instance;
	function Dialog(config){
		this.title = config.title ? config.title : "提示";
		this.content = config.content ? content.content : "这里是类容";
		this.html = '<div class="dialog-dropback">' +
            '<div class="container">' +
                '<div class="head">'+ this.title +'</div>' +
                '<div class="content">'+ this.content +'</div>' +
                '<div class="footer">' +
                    '<button class="cancel">取消</button>' +
                    '<button class="confirm">确认</button>' +
                '</div>' +
            '</div>' +
        '</div>'
	}
	Dialog.prototype = {
		constructor:Dialog,
		show:function(){
			var _this = this;
			if(instance){
				this.destory();
			}
			$(this.html).appendTo($(document.body));
			instance = this;

			return new Promise(function(resolve,reject){
				$('.dialog-dropback .cancel').on('click',function(e){
					_this.hide();
					resolve(e);
				})
				$('.dialog-dropback .confirm').on('click',function(e){
					_this.hide();
					reject(e);
				})
			})
		},
        destory: function() {
            instance = null;
            $('.dialog-dropback .cancel').off('click');
            $('.dialog-dropback .confirm').off('click');
            $('.dialog-dropback').remove();
        },
        hide: function() {
            this.destory();
        }
	}
})