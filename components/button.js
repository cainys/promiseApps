/**
*Author:gsy
*date:2017-04-11
*des:button
*/
define(function(require){
    var $ = require('jquery');
    var Dialog = require('dialog');

    $('button.aspect').on('click',function(){
        Dialog({
            title:'友情提示',
            content:'天气恶劣'
        }).show().then(function(){
            console.log('点击了确定按钮！');
        }).catch(function(){
            console.log('点击了取消按钮！')
        })
    })
})

