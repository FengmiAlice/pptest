
//获取元素
	var show=document.getElementById('show');
//左右箭头
	var left = document.getElementById('left');
	var right= document.getElementById('right');
	//获取li
	var lis = show.children[0].children;
	console.log(lis);
	//获取所有圆点的li
	var lists =document.getElementById('circlelist').children[0].children;
	
//定义索引index，标志要显示的图片的索引
		var index=0;
		//定义变量run,就是定时器是否运行的标志
		var run;
		//定义轮播图自动显示轮显函数autoRun()
		function autoRun(){
			//定时器叠加问题：多个定时器同时触发，定时器一次只启动一个
			if(run){
				//终止程序
				return;
			}
			//设置定时器
			run = setInterval(function(){
				//轮播图的核心理论：当前图片隐藏，下一张显示
				lis[index].removeAttribute('class');
				//圆点切换
				lists[index].removeAttribute('class');
				//索引自增++
				index++;

				//临界值判断
				if(index==lis.length){
					//重置为0
					index=0;
				}
				//下一张要显示
				lis[index].setAttribute('class','active');
				lists[index].setAttribute('class','listactive');
			},2000);
		}
		//当页面第一次进入时自动调用轮播图函数
		autoRun();

		//当鼠标移入show容器时，停止定时器	
		show.onmouseover = function(){
     //停止
			clearInterval(run);
			//将标志run重新赋值为空
			run = undefined;
			//左右箭头显示
			left.style.display = 'block';
			right.style.display ='block';
		}
		//鼠标离开show容器时
		show.onmouseout = function(){
			//调用轮播函数
			autoRun();
			//隐藏左右箭头
			left.style.display = 'none';
			right.style.display ='none';
		}
		
		//左右箭头的单击事件
		left.onclick = function(){
			//对于轮播图本身
			//当前元素隐藏
			lis[index].removeAttribute('class');
			lists[index].removeAttribute('class');
			//从当前索引-1
			index--;
			//最小值临界判定
			if(index<0){
				//赋值为最大值=长度-1
				index= lis.length-1;
			}
			lis[index].setAttribute('class','active');
			lists[index].setAttribute('class','listactive');
		}
		//右侧箭头
		right.onclick=function(){
			//当前隐藏
			lis[index].removeAttribute('class');
			lists[index].removeAttribute('class');
			//索引++
			index++;
			if(index==lis.length){
				index=0;
			}
			//下一张显示
			lis[index].setAttribute('class','active');
			lists[index].setAttribute('class','listactive');

		}

//圆点li的移入移出事件
for(var i=0;i<lists.length;i++){
    lists[i].setAttribute('data-index',i);
    //移入事件
    lists[i].onmouseover = function(){
    	//将之前显示的元素移除class
    	lis[index].removeAttribute('class');
    	lists[index].removeAttribute('class');

    	//知道我是第几张
    	//获取该元素身上的data-index的值
    	index = this.getAttribute('data-index');
    	//当前图片、圆点显示
    	lis[index].setAttribute('class','active');
    	lists[index].setAttribute('class','listactive');
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
