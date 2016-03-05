
$(function(){
 //购物车下拉
 $(".gouwu").hover(function(){
	$(this).next(".gouwuxiala").slideDown();
},function(){
	$(this).next(".gouwuxiala").slideUp();
})
//nav下拉菜单的实现
$(".navyiji").hover(function(){
	$('.navyiji ul').stop();
	$(this).children("ul").slideDown();
},function(){
	$('.navyiji ul').stop();
	$(this).children("ul").hide();
})

//nav right 搜索框的实现
$(".searchbox").focus(function(){
	$(".nav_right_hidden").show();
	$(".nav_rightinput").css({border:"1px solid red"})
	$(".searchbox").css({borderRight:"1px solid red"})
 	$(".shouhuan").hide();
	$(".xiaomishouji4").hide();
})
$(".searchbox").blur(function(){
	$(".nav_right_hidden").hide();
	$(".nav_rightinput").css({border:"1px solid #ccc"})
	$(".searchbox").css({borderRight:"1px solid #ccc"})
  	$(".shouhuan").show();
	$(".xiaomishouji4").show();
})
$(".searchbox").hover(function(){
	if($(".nav_right_hidden").css("display")=="none"){
		$(".searchbox").css({borderRight:"1px solid #333"})
		$(".nav_rightinput").css({border:"1px solid #333"})
	}
 },function(){
	if($(".nav_right_hidden").css("display")=="none"){
		$(".searchbox").css({borderRight:"1px solid #ccc"})
		$(".nav_rightinput").css({border:"1px solid #ccc"})
	}
	
})
$(".nav_right_hidden li").hover(function(){
 	$(this).css({background:"#FAFAFA"})
 },function(){
	$(this).css({background:"none"})
}) 

 //sidebar的实现  banner左侧
$(".mainmenu").hover(function(){
	$(this).children(".side-hidden").show();
 },function(){
	$(this).children(".side-hidden").hide();
 })
//banner轮播的实现
var imgs=$(".mainimgs img");
var circle=$(".circle");
var index=0;
function move(type){
	if(type=="r"){
		index++;
		if(index>imgs.length-1){
			index=0;
		}
	}if(type=="l"){
		index--;
		if(index<0){
			index=imgs.length-1;
		}
	}
	imgs.hide();
	imgs.eq(index).fadeIn();
	circle.css("background","#666");
	circle.eq(index).css("background","#fff");
}
$(".main").hover(function(){
	clearInterval(t);
	},function(){
		t=setInterval(function(){
			move("r");
		},3000)
})
$(".zuo").click(function(){
  		move("l");
 })

$(".you").click(function(){
 	move("r");
})

var t=setInterval(function(){
	move("r");
},3000)
$(".circle").click(function(){
 	var index1=$(this).index();
 	imgs.hide();
	imgs.eq(index1).fadeIn();
	circle.css({background:"#666"});
	circle.eq(index1).css({background:"#fff"});
 	index=$(this).index();
}) 

//小米明星单品轮播的实现
function movedp(){
	var left=$(".danpin_mainbox").position().left;
 	if(left==-1240){//盒子向右
		$(".danpin_mainbox").animate({left:0},600);
		$(".a2").css({color:"#b0b0b0"})
		$(".a1").css({color:"#e0e0e0"})
		
	}else{	//盒子向左
		$(".danpin_mainbox").animate({left:-1240},600);
		$(".a1").css({color:"#b0b0b0"})
		$(".a2").css({color:"#e0e0e0"})
 	}
}
var tdp=setInterval(movedp,3000);
$(".danpin_mainbox").hover(function(){
	clearInterval(tdp);
},function(){
	tdp=setInterval(movedp,3000);
})
$(".a1").hover(function(){
	clearInterval(tdp);
},function(){
	tdp=setInterval(movedp,3000);
})
$(".a2").hover(function(){
	clearInterval(tdp);
},function(){
	tdp=setInterval(movedp,3000);
})

$(".a1").click(function(){
	if($(".danpin_mainbox").position().left==-1240){
		movedp();
	} 
 })
$(".a2").click(function(){
	if($(".danpin_mainbox").position().left==0){
		movedp();
	}
})
//每个楼层的小块的显示
//var left=$(".danpin_mainbox").position().left;
var top=$(".hidden").position().top;
$(".danpin_main1").hover(function(){
  	 $(this).children(".hidden").animate({top:225},600); 
  	//$(this).children(".hidden").show();
},function(){
	 $(this).children(".hidden").animate({top:330},600); 
	//$(this).children(".hidden").hide();
})









})