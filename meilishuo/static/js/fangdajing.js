//获取元素
	var show=document.getElementById('show');
	var move=document.getElementById('move');
	var bigShow=document.getElementById('bigShow');

	var bigImg=document.getElementById('bigImg');
    var smallImg=document.getElementById('smallImg');
    var list=document.getElementById('list');

	//鼠标移入时元素显示
	show.onmouseover=function(){
		move.style.display='block';
		bigShow.style.display='block';
	}
   //鼠标移出时元素隐藏
	show.onmouseout=function(){
		move.style.display='none';
		bigShow.style.display='none';
	}
   //设置show的鼠标移动事件
	show.onmousemove=function(e){


	//计算move元素的left和top的值
      var newLeft=e.pageX-show.offsetLeft-move.offsetWidth/2;
      var newTop=e.pageY-show.offsetTop-move.offsetHeight/2;
//判断水平移动的最大值
    if(newLeft>=(show.offsetWidth-move.offsetWidth-1)){
    	//赋值最大值
    	newLeft=show.offsetWidth-move.offsetWidth-1;
    }
//水平方向左侧最小值
   if(newLeft<=0){
   	newLeft=0;
     }
//垂直方向最大值
     if(newTop>=(show.offsetHeight-move.offsetHeight-1)){
     	newTop=show.offsetHeight-move.offsetHeight-1;
     }
    //垂直方向的最小值
     if(newTop<=0){
     	newTop=0;
     }
   //赋值
     move.style.left = newLeft+'px';
     move.style.top=newTop+'px';
     //右侧大图的偏移left
    //左侧滑块的偏移left/show.width=大图的left/大图自身的宽度
    var newBigLeft=bigImg.offsetWidth*newLeft/show.offsetWidth;

    var newBigTop=bigImg.offsetHeight*newTop/show.offsetHeight;

    //move.width/show.width=bigShow.width/bigImg.width
    //?/400=400/1000
    //?/show.height=bigshow.height/bigImg.height


   //赋值
    bigImg.style.left= -newBigLeft+'px';
    bigImg.style.top = -newBigTop+'px';
	}



//获取所有图片的li列表
var lis=list.children[0].children;

for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		//将图片的地址赋值给左侧的show
		smallImg.src=this.children[0].src;
		bigImg.src=this.children[0].src;
	}
}