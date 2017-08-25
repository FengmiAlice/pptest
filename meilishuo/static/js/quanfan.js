//获取元素
  var button=document.getElementsByTagName('button');
  var inp2=document.getElementsByClassName('inp2');







$(function(){
				//全选
				$('button').eq(0).click(function(event){
					//$(':checkbox').checked=true;
					//为每一个checkbox执行一次匿名函数
					//该函数内的this指向当前的某个checkbox(DOM)对象
					$('.inp2').each(function(){
						this.checked=true;

					});

				});
				//全不选
				$('button').eq(1).click(function(event){
					$('.inp2').each(function(){
						this.checked=false;
					});

				});
				//反选
				
					$('button').eq(2).click(function(event){
						$('.inp2').each(function(){
							// if(this.checked){
							// 	this.checked=false;
							// }else{
							// 	this.checked=true;
							// }
					  this.checked=!this.checked;

						});
					});

				});
