//移动变色
$("#js_goods_nav_list>a").hover(function(){
	$(this).children("span").addClass("cc3333");
},function(){
	$(this).children("span").removeClass("cc3333");
})
//点击
$("#js_goods_nav_list a").click(function(){
	var index = $(this).index();
	$(this).children("span").css("color","#cc3333");
	$(this).siblings().children("span").removeAttr("style");
	
	if(index == 2){
		index=1;
	}
	if(index == 4){
		index =2;
	}
	if(index == 6){
		index =3;
	}
	if(index ==8){
		index =4;
	}
	$("#goods_detail_list>li").eq(index).css("display","block");
	$("#goods_detail_list>li").eq(index).siblings("li").css("display","none");
	console.log(index)
})
//留言
$("#review_btn").click(function(){
	
})

//增加减少按钮
var number_Gqty = $("#Gqty").val();
$("#Gqty").change(function(){
	number_Gqty = $("#Gqty").val();
})
$("#reduce").click(function(){
	number_Gqty--;
	console.log(number_Gqty)
	if(number_Gqty<1){
		alert("数量不能小于1!");
	}
	if(number_Gqty>0){
		$("#Gqty").val(number_Gqty);
	}
})
$("#increase").click(function(){
	number_Gqty++;
	console.log(number_Gqty)
		$("#Gqty").val(number_Gqty);
})

//加入购物车
$("#buy_cart_btn").click(cartBtn_click)
function cartBtn_click(){
	var name = $("#goods_name").html();
	var c_name = $("#China_name").html();
	var price = $("#goods_price").html().replace(/\s+/g,"");
	var integral = $("#goods_integral").html().replace(/\s+/g,"");
	var gcolor = $("#gcolor  option:selected").html();
	var size = $("#size  option:selected").html();
	var Gqty = $("#Gqty").val() -0;
	var img = $(".good_img").attr("src");
	if(gcolor == "请选择颜色"){
		alert("请选择颜色")
	}else if(size == "请选择尺寸"){
		alert("请选择尺寸")
	}else{
		//	console.log(goods_cart)
		var goodsArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : []; 
		var isExist = false;//表示是否存在
		for (var i=0; i<goodsArr.length; i++) {
			//存在相同的商品
			if (name == goodsArr[i].name) {
				goodsArr[i].gqty+=Gqty; //把数量++
				isExist = true; //存在
			}
		}
		
		//不存在,则添加新的商品
		if (!isExist) {
			//使用对象保存
			var goodsObj = {
				name:name,
				pric:price,
				inte:integral,
				gcolor:gcolor,
				size:size,
				gqty:Gqty,
				c_name:c_name,
				img:img
			}
			goodsArr.push(goodsObj);
		}
		
		//保存到cookie中(加入购物车)
		$.cookie("cart", JSON.stringify(goodsArr), {expires:7, path:"/"});
		console.log( $.cookie("cart") );
		//判断购物数量
		var cart_index = JSON.parse($.cookie("cart"));
		var cart_number = 0;
		for(var i=0;i<cart_index.length;i++){
			var gqty = cart_index[i].gqty -0;
			cart_number+=gqty;
		}

$("#header_CartCnt").html(cart_number)
	
		//	console.log($.cookie("cart"));
		$("#global_shade").css("display","block");
		$("#pop_cart").css("display","block");
		//加入购物车弹出页面	
		$("#introduce1").html(name);
		$("#introduce2").html(c_name);
		$("#cart_color").html(gcolor);
		$("#cart_size").html(size);
		$("#cart_cnt").html(Gqty);	
	}
}

$("#cancel_btn").click(function(){
	$("#global_shade").css("display","none");
	$("#pop_cart").css("display","none");
})

