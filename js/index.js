

$(function(){
//购物车的下拉菜单
 var gouwu=$(".gouwu")[0];
var gouwuxiala=$(".gouwuxiala")[0];
 hover(gouwu,function(){
 	gouwuxiala.style.display="block";
 },function(){
 	gouwuxiala.style.display="none";
})
 //nav的下拉菜单
var navyiji=$(".navyiji");
var naverji=$(".naverji");
for(var i=0;i<navyiji.length;i++){
	navyiji[i].index=i;
 	hover(navyiji[i],function(){
		var lis=$("li",naverji[this.index]);
		var h=lis[0].offsetHeight;
		animate(naverji[this.index],{height:lis.length*h},600,Tween.Linear);
 	},function(){
 		animate(naverji[this.index],{height:0},600,Tween.Linear);
 	})
}
//banner轮播图的实现
var zuo=$(".zuo")[0];
var you=$(".you")[0];
var mainimgs=$(".mainimgs")[0];
var imgs=$("img",mainimgs);
var circle=$(".circle");
var num=0;

function move(type){
	if(type=="r"){
		num++;
		if(num>=imgs.length){
			num=0;
		}
	}else if(type=="l"){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
	}
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.opacity=0;
 	}
	animate(imgs[num],{opacity:1});
	for(var i=0;i<circle.length;i++){
		circle[i].style.background="#8c8c8c";
	}
	circle[num].style.background="#fff";
 } 
zuo.onclick=function(){
	move("l");
}
you.onclick=function(){
	move("r");
} 
/*circle[i].index=i; 
circle[i].onmoveover=function(){
	move("r");
	num=this.index;
}  */
//sidebar的下拉菜单开始
var mainmenu=$(".mainmenu");
var sidehidden=$(".side-hidden");
for(var i=0;i<mainmenu.length;i++){
	mainmenu[i].index=i;
	hover(mainmenu[i],function(){
		sidehidden[this.index].style.display="block";
	},function(){
		sidehidden[this.index].style.display="none";
	})
}
//小米明星单品轮播的实现
var a1=$(".a1")[0];
var a2=$(".a2")[0];
var danpin_mainbox=$(".danpin_mainbox");
function moveLeft(){
	animate(danpin_mainbox,{left:-1226},600,Tween.Linear,function(){
		var first=getFirst(danpin_mainbox);
		var last=getLast(danpin_mainbox);
		danpin_mainbox.insertAfter(first,last);
		danpin_mainbox.style.left=0;
	});
}
 
var t=setInterval(moveLeft,2000);
//结束	
})