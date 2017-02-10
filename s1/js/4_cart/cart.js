console.log(JSON.parse($.cookie("cart")));

var cart = JSON.parse($.cookie("cart"));
//添加商品
//for(var i=0;i<cart.length;i++){
//	$(".cart_item").eq(i).css("display","block");
//	if(cart[i].name == "Feather Printed Frill Sleeve Blouse"){
//		$(".goods_img").eq(i).attr("src","../img/4_cart/1_1.jpg");
//		$(".goods_detail").find("em").eq(i).html(cart[i].name);
//		$(".table_cell").find("b").eq(i).html(cart[i].gcolor+" / "+cart[i].size+" SIZE");
//		$(".gray").eq(i).html(cart[i].pric);
//		$(".pric").eq(i).html(cart[i].pric);
//		$(".goods_emoney").find("p").eq(i).html(cart[i].inte);
//		$(".goods_qty").find("input").eq(i).val(cart[i].gqty);
//	}
//	if(cart[i].name == "Sleeveless Dress"){
//		$(".goods_img").eq(i).attr("src","../img/4_cart/1_3.jpg");
//		$(".goods_detail").find("em").eq(i).html(cart[i].name);
//		$(".table_cell").find("b").eq(i).html(cart[i].gcolor+" / "+cart[i].size+" SIZE");
//		$(".gray").eq(i).html(cart[i].pric);
//		$(".pric").eq(i).html(cart[i].pric);
//		$(".goods_emoney").find("p").eq(i).html(cart[i].inte);
//		$(".goods_qty").find("input").eq(i).val(cart[i].gqty);
//	}
//}
//新增框架添加商品
for(var i=0;i<cart.length;i++){
	
	var cart_item = $("<div></div>").addClass("cart_item").addClass("clear");
	cart_item.appendTo("#cart_body");
	
	var goods_detail = $("<div></div>").addClass("goods_detail");
	var goods_price = $("<div></div>").addClass("goods_price");
	var goods_emoney = $("<div></div>").addClass("goods_emoney");
	var goods_qty = $("<div></div>").addClass("goods_qty");
	var goods_sum = $("<div></div>").addClass("goods_sum");
	
	goods_detail.appendTo(cart_item);
	goods_price.appendTo(cart_item);
	goods_emoney.appendTo(cart_item);
	goods_qty.appendTo(cart_item);
	goods_sum.appendTo(cart_item);
	
	//第一块区域goods_detail
	var goods_detail_inp = $("<input type='checkbox' checked='' value='1'>")
	var goods_detail_a = $("<a href='javascript:;'></a>");
	var goods_title = $("<div></div>").addClass("goods_title");
	
	goods_detail_inp.appendTo(goods_detail);
	goods_detail_a.appendTo(goods_detail);
	goods_title.appendTo(goods_detail);
	
	var goods_img = $("<img />").addClass("goods_img").attr("src",cart[i].img);
	goods_img.appendTo(goods_detail_a);
	
	var p1 = $("<p class='table_cell'></p>");
	p1.appendTo(goods_title);
	var p1_em = $("<em></em>").html(cart[i].name);
	var p_br = $("<br />");
	var p1_b = $("<b></b>").html(cart[i].gcolor +" / " + cart[i].size + " SIZE♥♥♥♥♥♥♥♥♥♥♥");
	var p1_a1 = $("<a href='javascript:;' title='修改' class='cart_edit'></a>");
	var p1_a2 = $("<a href='javascript:;' title='收藏' class='cart_fav'></a>");
	var p1_a3 = $("<a href='javascript:;' title='删除' class='cart_del'></a>");
	
	p1_em.appendTo(p1);
	p_br.appendTo(p1);
	p1_b.appendTo(p1);
	p_br.appendTo(p1);
	p1_a1.appendTo(p1);
	p1_a2.appendTo(p1);
	p1_a3.appendTo(p1);
	
	//第二块局域goods_price
	var p2 = $("<p class='table_cell'></p>");
	p2.appendTo(goods_price);
	var p2_span = $("<span></span>");
	p2_span.appendTo(p2);
	var p2_span_span = $("<span class='gray'></span>").html(cart[i].pric);
	var p2_span_strong = $("<strong></strong>");
	
	p2_span_span.appendTo(p2_span);
	p_br.appendTo(p2_span);
	p2_span_strong.appendTo(p2_span);
	
	var strong_span = $("<span></span>").html("瑪瑙会员 0% :");
	var strong_pric = $("<span class='pric'></span>").html(cart[i].pric);
	strong_span.appendTo(p2_span_strong);
	strong_pric.appendTo(p2_span_strong);
	
	//第三块区域goods_emoney
	var p3 = $("<p class='table_cell'></p>").html(cart[i].inte);
	p3.appendTo(goods_emoney);
	
	//第四块区域goods_qty
	var p4 = $("<p class='table_cell'></p>");
	p4.appendTo(goods_qty);
	var p4_a1 = $("<a class='reduce reduce1'></a>");
	var p4_inp = $("<input type='text' maxlength='3' />").val(cart[i].gqty);
	var p4_a2 = $("<a class='add add1'></a>");
	p4_a1.appendTo(p4);
	p4_inp.appendTo(p4);
	p4_a2.appendTo(p4);
	
	//第五块区域goods_sum
	var p5 = $("<p class='table_cell'></p>");
	p5.appendTo(goods_sum);
	var p5_strong = $("<strong>¥ </strong>");
	p5_strong.appendTo(p5);
	var p5_strong_span = $("<span class='account'></span>");
	p5_strong_span.appendTo(p5_strong);
}

var total_price = 0;//总价格
//初始化页面价格
for(var i=0;i<$(".account").length;i++){
	var quantity = $(".goods_qty").find("input").eq(i).val();
	var price =  $(".gray").eq(i).html().replace("¥","")-0;
	
	sum = quantity * price;
//	console.log(sum);
	$(".account").eq(i).html(sum);
	
	total_price += ($(".account").eq(i).html()-0);
//	console.log($(".account").eq(i).html())
	$("#sp_totgoodamount_k").html(total_price);
	$("#sp_settleamount_k").html(total_price);
}
if($(".cart_item").length == 0){
	$(".cart_no").css("display","block");
}

//减少按钮
$(".reduce1").click(function(){
	var quantity = $(this).next("input").val();
	var price = $(this).parent().parent().siblings().find(".gray").html().replace("¥","")-0;
	var name = $(this).parent().parent().siblings().find("em").html();
	console.log(price)
	quantity--
	if(quantity<1){
		quantity++
		alert("数量不能小于1")
	}else{
		$(this).next("input").val(quantity)
		var sum = quantity * price;
		$(this).parent().parent().next().find("span").html(sum);
		var check = $(this).parent().parent().siblings().find("input").is(":checked");
		if(check){
			//判断购物车
			for(var i=0;i<cart.length;i++){
				if(cart[i].name == name){
					cart[i].gqty--;
				}
			}
			$.cookie("cart", JSON.stringify(cart), {expires:7, path:"/"});
			console.log(JSON.parse($.cookie("cart")));
			var cart_index = JSON.parse($.cookie("cart"));
			var cart_number = 0;
			for(var i=0;i<cart_index.length;i++){
				var gqty = cart_index[i].gqty -0;
				cart_number+=gqty;
			}
			$("#header_CartCnt").html(cart_number);
			//判断价格
			total_price-=price;
			$("#sp_totgoodamount_k").html(total_price); 
			$("#sp_settleamount_k").html(total_price);
		}
	}
})
//增加按钮
$(".add1").click(function(){
	var quantity = $(this).prev("input").val();
	var price = $(this).parent().parent().siblings().find(".gray").html().replace("¥","")-0;
	var name = $(this).parent().parent().siblings().find("em").html();
	var gqty = $(this).parent().parent().next().find("span").html();
	quantity++
	if(quantity>0){
		$(this).prev("input").val(quantity)
		var sum = quantity * price;
		$(this).parent().parent().next().find("span").html(sum);
		var check = $(this).parent().parent().siblings().find("input").is(":checked");
		if(check){
			//判断购物车
			for(var i=0;i<cart.length;i++){
				if(cart[i].name == name){
					cart[i].gqty++
				}
			}
			$.cookie("cart", JSON.stringify(cart), {expires:7, path:"/"});
			console.log(JSON.parse($.cookie("cart")));
			var cart_index = JSON.parse($.cookie("cart"));
			var cart_number = 0;
			for(var i=0;i<cart_index.length;i++){
				var gqty = cart_index[i].gqty -0;
				cart_number+=gqty;
			}
			$("#header_CartCnt").html(cart_number)
			//判断价格
			total_price+=price;
			$("#sp_totgoodamount_k").html(total_price); 
			$("#sp_settleamount_k").html(total_price);
			
		}
	}
})
//关闭修改
$("#popCartClose").click(function(){
	$("#popCart").css("display","none");
	$("#global_shade").css("display","none");
})
//打开修改
$(".cart_edit").click(function(){
	$("#popCart").css("display","block");
	$("#global_shade").css("display","block");
	var src = $(this).parent().parent().parent().find("img").attr("src");
	var name = $(this).siblings("em").html();
	var pric = $(this).parent().parent().parent().next().find(".gray").html();
	var inte = $(this).parent().parent().parent().next().next().find("p").html();
	var gqty = $(this).parent().parent().parent().siblings(".goods_qty").find("input").val();
	$("#pop_img").attr("src",src);
	$("#pop_CnickName").html(name);
	if($("#pop_CnickName").html() == 'Feather Printed Frill Sleeve Blouse'){
		$("#pop_Gcodytext").html("秋天适合穿 ♥ 夏天穿很适合OK");
	}
	if($("#pop_CnickName").html() == 'Sleeveless Dress'){
		$("#pop_Gcodytext").html("百搭风格 ★ 吊带罗纹连衣裙");
	}
	$("#pop_Gamount").html(pric);
	$("#pop_Gemoney").html(inte);
	$(".sell_content input").val(gqty);
	//修改页面减少按钮
	var gqt = $(".sell_content input").val() -0;
	console.log(gqt);
	$("#pop_reduce").click(function(){
		gqt--
		if(gqt<1){
			gqt++;
			alert("商品数量不能低于1");
		}else{
			var prc = pric.replace("¥","")-0;
			total_price -= prc;
			$(".sell_content input").val(gqt)
		}
	})
	//修改页面增加按钮
	$("#pop_plus").click(function(){
		gqt++
		var prc = pric.replace("¥","")-0;
			total_price += prc;
		$(".sell_content input").val(gqt)
	})
	//提交按钮
	$("#popCartOk").click(function(){

		var gname = $("#pop_CnickName").html();
		var gqty = $(".sell_content input").val() -0;
		var gcolor = $("#Gcolor option:selected").html();
		var gsize = $("#Gsize option:selected").html();
		var prc = pric.replace("¥","")-0;
		var sum = prc * gqty;
		for(var i=0;i<$(".cart_item").length;i++){
			var name = $(".goods_detail").find("em").eq(i).html();
			if(name == gname){
				$(".goods_qty").find("input").eq(i).val(gqty);
				$(".table_cell").find("b").eq(i).html(gcolor+" / "+gsize+"♥♥♥♥♥♥♥♥♥♥♥");
				$(".goods_sum").find("span").eq(i).html(sum);
				$("#sp_totgoodamount_k").html(total_price); 
				$("#sp_settleamount_k").html(total_price);
				$("#popCart").css("display","none");
				$("#global_shade").css("display","none");
			}
		}
	})
	//取消按钮
	$("#popCartCancel").click(function(){
		$("#popCart").css("display","none");
		$("#global_shade").css("display","none");
	})
})

//删除商品
$(".cart_del").click(function(){
	$(this).parent().parent().parent().parent().remove();
	var s = $(this).parent().parent().parent().siblings(".goods_sum").find("span").html()-0;
	var check = $(this).parent().parent().siblings("input").is(":checked");
	var name = $(this).siblings("em").html();
	if(check){
		//判断购物车
		for(var i=0;i<cart.length;i++){
			if(cart[i].name == name){
				cart.splice(i,1);//删除该条数据
			}
		}
		$.cookie("cart", JSON.stringify(cart), {expires:7, path:"/"});
		console.log(JSON.parse($.cookie("cart")));
		var cart_index = JSON.parse($.cookie("cart"));
		var cart_number = 0;
		for(var i=0;i<cart_index.length;i++){
			var gqty = cart_index[i].gqty -0;
			cart_number+=gqty;
		}
		$("#header_CartCnt").html(cart_number);
		total_price -= s;
		$("#sp_totgoodamount_k").html(total_price); 
		$("#sp_settleamount_k").html(total_price);	
	}
	if($(".cart_item").length == 0){
		$(".cart_no").css("display","block");
	}
	
})
//全选按钮
$("#SelectAll_K").click(function(){
	var check = $(this).is(":checked");
	console.log(check)
	if(!check){
		$("#sp_totgoodamount_k").html(0);
		$("#sp_settleamount_k").html(0);
		$(".goods_detail").find("input").prop("checked",false);
	}
	if(check){
		$("#sp_totgoodamount_k").html(total_price);
		$("#sp_settleamount_k").html(total_price);
		$(".goods_detail").find("input").prop("checked",true);
	}
})
//商品选择按钮
$(".goods_detail").find("input").click(function(){
	var check = $(this).is(":checked");
	if(!check){
		var price = $(this).parent().siblings().last().find("span").html() -0;
		total_price -= price;
		console.log(total_price);
		$("#sp_totgoodamount_k").html(total_price);
		$("#sp_settleamount_k").html(total_price);
	}else{
		var price = $(this).parent().siblings().last().find("span").html() -0;
		total_price += price;
		console.log(total_price);
		$("#sp_totgoodamount_k").html(total_price);
		$("#sp_settleamount_k").html(total_price);
	}
})


















