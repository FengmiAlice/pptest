

/*****获取元素*******/
var drop=document.getElementsByClassName('frop');
var down=document.getElementsByClassName('down');
var goucar=document.getElementsByClassName('goucar');
var emptycar=document.getElementsByClassName('emptycar');
var shopcar=document.getElementsByClassName('shopcar');

$(function(){
	$('.drop').mouseover(function(){
		$(this).children('.down').slideDown(600);
		
	});
	$('.drop').mouseleave(function(){
		$(this).children('.down').slideUp(600);
		
	});
	
	
});