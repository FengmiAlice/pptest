// 获取元素
	var pro=document.getElementById('pro');
	var city=document.getElementById('city');
	var county=document.getElementById('county');

	var pro_str='<option value="">请选择</option>';
	for(var i in address[0]){
		pro_str+='<option value="0,'+i+'">'+address[0][i]+'</option>';
	}
	//给pro进行赋值操作
		pro.innerHTML=pro_str;
    //设置pro省份的onchange事件
		pro.onchange=function(){
			//获取当前省份对应的市
			//知道当前是哪个省
			county.style.display='none';
			if(!this.value){
				//城市隐藏
				city.style.display='none';
				//终止程序
				return;
			}
			city.style.display='inline-block';
			

			//定义城市的初始化字符串
			var city_str='<option value="">请选择</option>';
			//便利对应的市
			for(var i in address[this.value]){
				city_str+='<option value="'+this.value+','+i+'">'+address[this.value][i]+'</option>';
			}
			//给城市赋值
			city.innerHTML=city_str;
		}
		//城市的onchange事件
		city.onchange=function(){


			if(!this.value){
				county.style.display='none';
				return;
			}
   
			county.style.display='inline-block';
         //定义县的初始化字符串
			var county_str='<option value="">请选择</option>';
			//遍历县
			for(var i in address[this.value]){
				county_str+='<option value="">'+address[this.value][i]+'</option>';
			}
			//赋值
			county.innerHTML=county_str;

		}