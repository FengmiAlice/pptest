$(function(){

	/*添加商品*/
	$(document).ready(function(){
  $(".listA_2").click(function(){
    $(".listC").append($(".listC_0:first").clone(true));
  });
  
});

// 删除商品
	$(document).on('click',' ul li .delete',function() {
		console.log($(this).parents('.listC_0'));
		$(this).parents('.listC_0').stop().slideUp(function() {
			$(this).remove();
		});
	});


});



/*数量的加减*/

// 加的点击事件
$(function() {
	$('.jia').click(function(event) {
		// input  里的value="1"
		var n = $(this).prev('.car_input').val();
		var num = parseInt(n)+1;
		// 单价
		var d = $(this).parents('.listC_5').prev().html();
		// 小计
		var nmoney = parseFloat(d)*num;
		
		if(num == 0){
			return;
		}
		$(this).prev().val(num);
		$(this).parents('.listC_5').next().html(nmoney);
		console.log($(this).parents('.listC_5').next().html(nmoney));
		var SUM = Number($('.list_num5 .jisuan').html());
				SUM = SUM +nmoney; 
				console.log(SUM);
				$('.list_num5 .jisuan').html(SUM);
	});

	// 减的点击事件
	$('.jian').click(function(event) {
		var n = $(this).next('.car_input').val();
		var num = parseInt(n)-1;
		var d = $(this).parents('.listC_5').prev().html();
		var money = parseFloat(d)*num;

		if(num == 0){
			return;
		}
		$(this).next().val(num);
		$(this).parents('.listC_5').next().html(money);
		console.log($(this).parents('.listC_5').next().html(money));
		var SUM = Number($('.list_num5 .jisuan').html());
				SUM = SUM-money; 
				console.log(SUM);
				$('.list_num5 .jisuan').html(SUM);
		// setTotal();
	});

			
			/*价钱总和*/
		var SUM = Number($('.list_num5 .jisuan').html());
			console.log(SUM);

			function SumPrice(){
		
			$('.listC_1 .inp2').click(function(event) {
				var smallSum = parseInt($(this).parents().find('.listC_4').html());
				console.log(smallSum);
				var num = Number(smallSum);
				console.log(num);
				console.log($(this)[0].checked);
				//按钮
				// if($(this)[0].checked){
				// 	SUM = SUM + num;
				// 	console.log(SUM);
				// 	$('.list_num5 .jisuan').html(SUM);
				// 	console.log(	$('.list_num5 .jisuan'));
				// }else{
				// 	SUM = SUM - num;
				// 	$('.list_num5 .jisuan').html(SUM);
				// }
			});
		}
		SumPrice();
	



});

