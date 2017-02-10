

$.getJSON("../data/1_index/index.json", function(json){
	 console.log(json);
//	 //导航图片
//	 $(".nav_buttom img").attr("src",json.theme[16].img)
	 //table主题
	 for(var i=0;i<8;i++){
	 	var theme = $(".theme").eq(i);
	 	$("<img />").attr("src",json.theme[i].img).appendTo(theme);
	 	
	 }
	 //keytheme关键主题
	 var keyname = -1;
	 for(var i=10;i<15;i++){
	 	keyname++;
	 	var keytheme = $(".keya").eq(keyname);
	 	$("<img />").attr("src",json.theme[i].img).css({width:219,height:220}).appendTo(keytheme);
	 }
	 //saleList出售列表
	 for(var i=0;i<12;i++){
	 	var saleList = $(".saleList img").eq(i);
	 	saleList.attr("src",json.NewArrivals[i].img);
	 }
	 
	 //saleList2出售列表2
	 for(var i=0;i<60;i++){
	 	var saleList2 = $(".saleList2 img").eq(i);
	 	saleList2.attr("src",json.BestItems[i].img);
	 }
	 
})

//移入显示图片遮罩
//第一张
	$(".shade").eq(0).mouseover(over);
	$(".shade").eq(0).mouseout(out);
		
	$(".none").eq(0).mouseover(over);
	$(".none").eq(0).mouseout(out);
	$(".nonein").eq(0).mouseover(over);
	$(".nonein").eq(0).mouseout(out);

function over(){
		$(".none").eq(0).css("display","block")
		$(".nonein").eq(0).css("display","block")
	}
function out(){

	$(".none").eq(0).css("display","none")
	$(".nonein").eq(0).css("display","none")
}
//第二张	
	$(".shade").eq(1).mouseover(over1);
	$(".shade").eq(1).mouseout(out1);
	
	$(".none").eq(1).mouseover(over1);
	$(".none").eq(1).mouseout(out1);
	$(".nonein").eq(1).mouseover(over1);
	$(".nonein").eq(1).mouseout(out1);

function over1(){
		$(".none").eq(1).css("display","block")
		$(".nonein").eq(1).css("display","block")
	}
function out1(){

	$(".none").eq(1).css("display","none")
	$(".nonein").eq(1).css("display","none")
}
//第三张	
	$(".shade").eq(2).mouseover(over2);
	$(".shade").eq(2).mouseout(out2);
		
	$(".none").eq(2).mouseover(over2);
	$(".none").eq(2).mouseout(out2);
	$(".nonein").eq(2).mouseover(over2);
	$(".nonein").eq(2).mouseout(out2);

function over2(){
		$(".none").eq(2).css("display","block")
		$(".nonein").eq(2).css("display","block")
	}
function out2(){

	$(".none").eq(2).css("display","none")
	$(".nonein").eq(2).css("display","none")
}
//第四张	
	$(".shade").eq(3).mouseover(over3);
	$(".shade").eq(3).mouseout(out3);
		
	$(".none").eq(3).mouseover(over3);
	$(".none").eq(3).mouseout(out3);
	$(".nonein").eq(3).mouseover(over3);
	$(".nonein").eq(3).mouseout(out3);

function over3(){
		$(".none").eq(3).css("display","block")
		$(".nonein").eq(3).css("display","block")
	}
function out3(){

	$(".none").eq(3).css("display","none")
	$(".nonein").eq(3).css("display","none")
}
//第五张
	$(".shade").eq(4).mouseover(over4);
	$(".shade").eq(4).mouseout(out4);
		
	$(".none").eq(4).mouseover(over4);
	$(".none").eq(4).mouseout(out4);
	$(".nonein").eq(4).mouseover(over4);
	$(".nonein").eq(4).mouseout(out4);

function over4(){
		$(".none").eq(4).css("display","block")
		$(".nonein").eq(4).css("display","block")
	}
function out4(){

	$(".none").eq(4).css("display","none")
	$(".nonein").eq(4).css("display","none")
}
//第六张
	$(".shade").eq(5).mouseover(over5);
	$(".shade").eq(5).mouseout(out5);
		
	$(".none").eq(5).mouseover(over5);
	$(".none").eq(5).mouseout(out5);
	$(".nonein").eq(5).mouseover(over5);
	$(".nonein").eq(5).mouseout(out5);

function over5(){
		$(".none").eq(5).css("display","block")
		$(".nonein").eq(5).css("display","block")
	}
function out5(){

	$(".none").eq(5).css("display","none")
	$(".nonein").eq(5).css("display","none")
}

//向下滚动出现导航栏
$(window).scroll(function(){
	var _scrollTop = $(window).scrollTop()//滚动条隐藏高度 
	var _height = $("#fixed_top_nav").css("height");//导航栏高度
	if (_scrollTop>=parseInt(_height)){
		$("#fixed_top_nav").css("display","block");//显示顶部导航栏
		$("#fixed_right_nav").css("top",40)//右导航向上
		$("#promise").css("height",220);//底部promise元素变高
		
	}else{
		$("#fixed_top_nav").css("display","none");//返回隐藏状态
		$("#fixed_right_nav").css("top",126)//返回原先位置
		$("#promise").css("height",134)//返回原先高度
	}
})

//收起打开右导航栏
var speed = 10;//速度
var right = 0;//
var stop = true;//判断如何运动
$("#navbuttom").click(move)
function move(){
	var timer = setInterval(function(){
		if(stop){
			right-=speed;
			if(right<-100){
				clearInterval(timer);
				stop = false;
			}
			$("#fixed_right_nav").css("right",right);
			
		}
		if(!stop){
			right+=speed;
			if(right>=0){
				clearInterval(timer);
				stop = true;
			}
			$("#fixed_right_nav").css("right",right);
			
		}
//		console.log(right);
	},50);
	if(!stop){
		$("#navbuttom a").html("＞");
	}else{
		$("#navbuttom a").html("＜");
	}
}

//返回顶部
$("#topbuttom").click(scrollMove)
function scrollMove(){
	$("html, body").stop().animate({scrollTop: 0}, 500);
}

//关闭公告栏，勾选后一天内不再弹出
$("#close").click(_close)
if($('#checked').is(':checked')) {
    //添加cookie
	$.cookie("close", "close", {expires:1, path:"/"});
}
function _close(){
	$(".notice").css("display","none");
}
//获取cookie
if($.cookie("close") == "close"){
	$(".notice").css("display","none");
}

//显示注册页面
$(".show").click(show_click);
function show_click(){
	$("#login").css("display","block");
	$("#global_shade").css("display","block");
	$("#register").css("display","none");
}

//点击隐藏遮罩global_shade
$("#global_shade").click(dis_none);
function dis_none(){
	$(this).css("display","none");
	$("#login").css("display","none");
	$("#register").css("display","none");
}

//注册login
var checkout = true;//验证码是否输入正确
//初始化普通用户表单
$("input[name=email]").val("电子邮箱");
$("input[name=password]").val("您的密码");
$("input[name=password2]").val("再次输入确认密码");
$("input[name=user]").val("用户名");
$("input[name=cell]").val("手机号码");
$("input[name=code]").val("验证码");
//获得焦点
$("input[name=email]").focus(["电子邮箱"],input_focus);
$("input[name=password]").focus(["您的密码","password"],input_focus);
$("input[name=password2]").focus(["再次输入确认密码","password"],input_focus);
$("input[name=user]").focus(["用户名"],input_focus);
$("input[name=cell]").focus(["手机号码"],input_focus);
$("input[name=code]").focus(["验证码"],input_focus);
//失去焦点
$("input[name=email]").blur(["电子邮箱","电子邮箱不能为空！"],input_blur);
$("input[name=password]").blur(["您的密码","密码不能为空！","text"],input_blur);
$("input[name=password2]").blur(["再次输入确认密码","密码不能为空！","text"],input_blur);
$("input[name=user]").blur(["用户名","用户名不能为空！"],input_blur);
$("input[name=cell]").blur(["手机号码","手机号码不能为空！"],input_blur);
$("input[name=code]").blur(["验证码","验证码不能为空！"],input_blur);
//判断表单
var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var pass = /^\w{8,11}$/;
var user = /^\w{2,11}$/;
var cell = /^1+\d{10}$/
$("input[name=email]").change([email,"您的邮箱有误!","邮箱正确!"],input_change);
$("input[name=password]").change([pass,"您的密码有误！","密码可用！"],input_change);
$("input[name=password2]").change(["password2","密码不相同，请重新输入！","密码相同！"],input_change);
$("input[name=user]").change([user,"您的用户名有误！","用户名可用！"],input_change);
$("input[name=cell]").change([cell,"您的电话号码有误！","电话号码可用！"],input_change);
//获得焦点函数
function input_focus(e){
	if($(this).val() == e.data[0]){
		$(this).val("").css("color","blue");
	}
	if(e.data[1]){
		$(this).attr("type",e.data[1]);
	}
}
//失去焦点函数
function input_blur(e){
	if($(this).val() == ""){
		$(this).val(e.data[0]).css("color","#bbbbbb");
		$("#emailverify").html(e.data[1]).css("color","red");
	}
	if(e.data[2] && $(this).val() == "再次输入确认密码" || $(this).val() == "您的密码"){
		$(this).attr("type",e.data[2]);
	}
}
//修改文本后失去焦点函数
function input_change(e){
	var this_val = $(this).val();
	var password_val = $("input[name=password]").val();
//	console.log(password_val);
//	console.log(this_val);
	if(e.data[0]=="password2"){
		if( password_val != this_val){
			$("#emailverify").html(e.data[1]).css("color","red");
		}else{
			$("#emailverify").html(e.data[2]).css("color","green");
		}
	}
	else if( !e.data[0].test(this_val) ){
		$("#emailverify").html(e.data[1]).css("color","red");
	}else{
		$("#emailverify").html(e.data[2]).css("color","green");
	}
}


//点击切换验证码

$("#safecode").click(code_click);
function code_click(){
	var img_random = parseInt(Math.random()*9) + 1;//第几张图
	var img = "../img/1_index/6_safecode/safecode" + img_random + ".gif/";
	if($(this).attr("src") == img){
		if(img_random<9){
			img_random++;
		}else{
			img_random--;
		}
		img = "../img/1_index/6_safecode/safecode" + img_random + ".gif/";
	}
	console.log(img);
	$(this).attr("src",img);
}
//检验验证码
var code_attr = ["","5272","5300","2412","6314","2646","7708","5843","4743","9376"];
$("input[name=code]").change([code_attr,"验证码有误！","验证码正确！"],code_change)
function code_change(e){
	var src_number =  $("#safecode").attr("src");
	src_number = src_number.charAt(34);//获取字符串下标为34的数字
	if($(this).val() != e.data[0][src_number]){
		$("#emailverify").html(e.data[1]).css("color","red");
		checkout = false;
	}else{
		$("#emailverify").html(e.data[2]).css("color","green");
		checkout = true;
	}
}
//注册发送检验
$("#login_button").click(button_click);
function button_click(e){
	var check = $("#checkbox").is(":checked"); 
//	console.log(check);
	var input_email = $("input[name=email]").val();
	var input_pass = $("input[name=password]").val();
	var input_pass2 = $("input[name=password2]").val();
	var input_user = $("input[name=user]").val();
	var input_cell = $("input[name=cell]").val();
	var input_code = $("input[name=code]").val();
	
	//保存进cokie里
	var userArr = $.cookie("user") ? JSON.parse($.cookie("user")) : [];
	
	var isExist = false; //表示是否存在
	for (var i=0; i<userArr.length; i++) {
		//存在相同
		if (input_user == userArr[i].name) {
			isExist = true; //存在
		}
	}
	//不存在
	if(!isExist){
	//使用对象保存
		userObj = {};
		userObj.name = input_user;
		userObj.pass = input_pass;
		userArr.push(userObj);
	}
	if(email.test(input_email) && pass.test(input_pass) && input_pass2==input_pass && user.test(input_user) && cell.test(input_cell) && checkout && check ){
		$.cookie("user", JSON.stringify(userArr), {expires:7, path:"/"});
		console.log($.cookie("user"));
		alert("注册成功！");
		$("#login").css('display','none');
		$('#register').css('display','block');
	}else{
		alert("录入信息有误！");
	}
}
//关闭按钮login_close
$("#login_close").click(close_click);
function close_click(){
	$("#login").css("display","none");
	$("#global_shade").css("display","none");
}

//登录register
$(".register_show").click(register_show_click);
function register_show_click(){
	$("#register").css("display","block");
	$("#global_shade").css("display","block");
	$("#login").css("display","none");
}
//会员登录切换
$("#common_cut").on("click",common_click);
$("#advanced_cut").on("click",advanced_click);
function common_click(){
	$("#li_advanced").removeClass("bg_black");
	$("#advanced_cut").removeClass("color_f");
	$("#advanced_cut").addClass("hoverblue");
	$("#li_common").addClass("bg_black");
	$(this).addClass("color_f");
	$(this).removeClass("hoverblue");
	$("#alipay_register").removeClass("alipay_register");
}
function advanced_click(){
	$("#li_common").removeClass("bg_black");
	$("#common_cut").removeClass("color_f");
	$("#common_cut").addClass("hoverblue");
	$("#li_advanced").addClass("bg_black");
	$(this).addClass("color_f");
	$(this).removeClass("hoverblue");
	$("#alipay_register").addClass("alipay_register");
}
//初始化表单，函数是上面注册的函数
$("#r_email").val("电子邮箱");
$("#r_password").val("您的密码");
$("#r_email").focus(["电子邮箱"],input_focus);
$("#r_password").focus(["您的密码","password"],input_focus);
$("#r_email").blur(["电子邮箱","电子邮箱不能为空！"],input_blur);
$("#r_password").blur(["您的密码","密码不能为空！","text"],input_blur);

//登录按钮register_button
$("#register_button").click(register_click)
function register_click(){
	$.getJSON("../data/1_index/index.json", function(json){
		var email = $("#r_email").val();
		var pass = $("#r_password").val();
		if($("#li_common").is(".bg_black")){
			for(var i=0;i<json.common_user.length;i++){
				if(email == json.common_user[i].name){
					var index = json.common_user[i]
					if(pass == index.password){
						alert("登录成功！");
						$(".register_show").addClass("yinchang");
						$(".show").addClass("yinchang");
						$(".denglu").removeClass("yinchang");
						$(".tuichu").removeClass("yinchang");
						$("#register").css("display","none");
						$("#global_shade").css("display","none");
						$.cookie("denglu", "denglu", {expires:7, path:"/"});
						return;
					}else{
						alert("密码有误！");
						return;
					}
				}else{
					var cookie = JSON.parse($.cookie("user"));
					for(var i=0;i<cookie.length;i++){
						if(email == cookie[i].name){
							if(pass == cookie[i].pass){
								alert("登录成功！");
								$(".register_show").addClass("yinchang");
								$(".show").addClass("yinchang");
								$(".denglu").removeClass("yinchang");
								$(".tuichu").removeClass("yinchang");
								$("#register").css("display","none");
								$("#global_shade").css("display","none");
								$.cookie("denglu", "denglu", {expires:7, path:"/"});
								console.log($.cookie("denglu"));
								return;
							}
						}
					}
					alert("输入有误！");
					return;
				}
				
			}
		}else{
			for(var i=0;i<json.advanced_user.length;i++){
				if(email == json.advanced_user[i].name){
					var index = json.advanced_user[i]
					if(pass == index.password){
						alert("登录成功！");
						$(".register_show").addClass("yinchang");
						$(".show").addClass("yinchang");
						$(".denglu").removeClass("yinchang");
						$(".tuichu").removeClass("yinchang");
						$("#register").css("display","none");
						$("#global_shade").css("display","none");
						$.cookie("denglu", "denglu", {expires:7, path:"/"});
						return;
					}else{
						alert("密码有误！");
						return;
					}
				}else{
					alert("用户名错误！");
					return;
				}
			}
		}
	})
	if($("#saveid").is(":checked")){
		var user_1 = {};
		user_1.name = $("#r_email").val();
		user_1.pass = $("#r_password").val();
		$.cookie("user_1", JSON.stringify(user_1), {expires:7, path:"/"});
		console.log($.cookie("user_1"));
	}
}
if($.cookie("user")){
	var cookie_user = JSON.parse($.cookie("user"))
	var user_name = cookie_user.name;
	var user_pass = cookie_user.pass;
	$("#r_email").val(user_name).css("color","black");
	$("#r_password").val(user_pass).css("color","black").attr("type","password");
	$("#saveid").prop("checked",true);
}
//关闭按钮register_close
$("#register_close").click(register_close_click);
function register_close_click(){
	$("#register").css("display","none");
	$("#global_shade").css("display","none");
}

//通过cookie判断是否登录
if($.cookie("denglu") == "denglu"){
	$(".register_show").addClass("yinchang");
	$(".show").addClass("yinchang");
	$(".denglu").removeClass("yinchang");
	$(".tuichu").removeClass("yinchang");
}
//鼠标移入我的账户
$("#denglu").hover(function(){
	$("#header_account_pop").stop().slideDown(500);
},function(){
	$("#header_account_pop").stop().slideUp(500);
})
//点击退出
$(".tuichu").click(function(){
	$.cookie("denglu","tuichu", {expires:7, path:"/"})
	$(".register_show").removeClass("yinchang");
	$(".show").removeClass("yinchang");
	$(".denglu").addClass("yinchang");
	$(".tuichu").addClass("yinchang");
})
//判断购物数量
var cart_index = JSON.parse($.cookie("cart"));
var cart_number = 0;
for(var i=0;i<cart_index.length;i++){
	var gqty = cart_index[i].gqty -0;
	cart_number+=gqty;
}

$("#header_CartCnt").html(cart_number)




