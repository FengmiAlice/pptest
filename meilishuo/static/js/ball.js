      var ball=document.getElementById('ball');
		var close=document.getElementById('close');
      
		var stepX=1;
		var stepY=1;
		var run;
		function autoRun(){
			run=setInterval(function(){
		//获取当前可视区域的宽度和高度
		var cW=document.documentElement.clientWidth;
		var cH=document.documentElement.clientHeight;
		//元素当前的left偏移值+步径=新的left值
		var newLeft = ball.offsetLeft+stepX;
		//元素当前的top+步径=newTop
		var newTop=ball.offsetTop+stepY;
		//遇到边界需要反向运动
		//判断小球右侧运动的最大值
		if(newLeft>=(cW-ball.offsetWidth)){
			//赋值为最大值
				newLeft=cW-ball.offsetWidth;
				//动画反向经典运用*-1反向
				stepX *= -1;
				bian(ball);

		}
		//左侧最小值判定
		if(newLeft<=0){
			newLeft=0;
			//反向
			stepX *= -1;
			bian(ball);
		}
		//垂直方向top最大值
		if(newTop>=(cH-ball.offsetHeight)){
				newTop=cH-ball.offsetHeight;
				stepY *= -1;
				bian(ball);

		}
		//垂直方向最小值
		if(newTop<=0){
			newTop=0;
			stepY *= -1;
			bian(ball);
		}
		//赋值操作
		ball.style.left=newLeft+'px';
		ball.style.top=newTop+'px';

	},20);
//定义小球变色的函数
function bian(obj){
	//小球变色
	obj.style.background = 'rgb(' +rand(0,255)+ ',' +rand(0,255)+ ','  +rand(0,255)+ ')';
}

  function rand(m,n){
  	return Math.floor(Math.random()*(n-m+1))+m;
       }
  		
	}
		autoRun();
		ball.onmouseover=function(){
  			clearInterval(run);
  			run=undefined;
  		   ball.style.display='block';

  		}
       ball.onmouseout=function(){
       		autoRun();		
       	     
       }
        close.onclick=function(){
        	ball.style.display='none';
        }
        