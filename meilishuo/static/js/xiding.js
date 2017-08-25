//获取元素
		var nav=document.getElementById('nav');
	//滚动事件
		window.onscroll=function(){
			//检测滚动条的值是否到了指定的位置
			console.log(document.body.scrollTop);
			var sT=document.body.scrollTop||document.documentElement.scrollTop;
			if(sT>=1101){
				//设置nav元素的高度为50px
				nav.style.height='60px';
				nav.style.display='block';
				
			}else{
				//移除过渡属性
				nav.style.height='0';
				nav.style.display='none';
				
			}
		}