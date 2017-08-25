var bottom1=document.getElementsByClassName('bottom1');
window.onscroll=function(){
// console.log(document.body.scrollTop||document.documentElement.scrollTop);

	var sT=document.body.scrollTop||document.documentElement.scrollTop;

	if(sT<=37){
		// bottom1.style.height='50px';
		bottom1[0].style.display='block';

	}else{
		// bottom1.style.height='0';
		bottom1[0].style.display='none';
	}
}

// $(function() {
	
// 	function onScroll() {
// 		// 视口的高度
// 		var vpHeight = $(window).height();
// 		var balance = $('#xd').offset().top;
// 		var st = $(this).scrollTop();
// 		var top = balance - st;
// 		if (top >= vpHeight){
// 			$('.bottom1').stop().show();
// 		}else{
// 			$('.bottom1').stop().hide();
// 		}
// 	};
// 	 $(window).scroll(onScroll);
// });