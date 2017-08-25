$(function(){
	var h=$('.lift').height();
	$('.lift').css('margin-top',-1*h/2);
	var vpHeight=$(window).height();
	var halfvpHeight=vpHeight/2;
	var floor1Top=$('#imggroup').offset().top;
	console.log(floor1Top);
	var floor2Top=$('#imggroup1').offset().top;
	var floor3Top=$('#imggroup2').offset().top; 

function onScroll(){
	var st=$(this).scrollTop();
	var t1=floor1Top-st;
	var t2=floor2Top-st;
	var t3=floor3Top-st;

if(t1<=halfvpHeight){
	$('.lift').stop().fadeIn();
	$('.lift li').eq(0).addClass('curr').siblings().removeClass('curr');
}else{
	$('.lift').stop().fadeOut();
}
if(t2<=halfvpHeight){
	
	$('.lift li').eq(1).addClass('curr').siblings().removeClass('curr');
}

if(t3<=halfvpHeight){
	
	$('.lift li').eq(2).addClass('curr').siblings().removeClass('curr');
   }


  }
$(window).scroll(onScroll);
$('.lift li').click(function(event){

$(window).off('scroll');
$(this).addClass('curr').siblings().removeClass('curr');
if($(this).index()===0){
          		//自定义动画，实现滚屏
          		$('html,body').stop().animate({'scrollTop':floor1Top},800,function(){
          			$(window).scroll(onscroll);
          		});
          	}
          	if($(this).index()===1){
          		//自定义动画，实现滚屏
          		$('html,body').stop().animate({'scrollTop':floor2Top},800,function(){
          			$(window).scroll(onscroll);
          		});
          	}
          	if($(this).index()===2){
          		//自定义动画，实现滚屏
          		$('html,body').stop().animate({'scrollTop':floor3Top},800,function(){
          			$(window).scroll(onscroll);
          		});
          	}
 });

 });