var company = {
	width : v.getInner().width
};

//城市联动菜单
(function(){
	if (!v.id("Region1")) {return};
	city(v.id("Region1"),v.id("Region2"));
	
}());

//提交留言
(function(){
	if (!v.id("tijiao")) {return};
	var tijiao = v.id("tijiao"),invests = document.getElementsByName('invests'),invest,times = document.getElementsByName('time'),time;
	tijiao.onclick = function(){
		if(Linker.value === "") {alert("还没填写联系人");return} 
		if(Phone.value === "") {alert("还没填写电话");return}
		if(Content.value === "") {alert("还没有留言");return}
		if(Region1.selectedIndex === 0) {alert("请选择省份");return}
		for (var i = 0; i < times.length; i++) {
			if(times[i].checked) {time = times[i].value;break;}
		};
		for (var i = 0; i < invests.length; i++) {
			if(invests[i].checked) {invest = invests[i].value;break;}
		};
	

		v.ajax("/company/AddIntention.ashx",function(msg){
			if (msg === "1") {
				var iframe = document.createElement("iframe");
				iframe.src= "/post.html";
				iframe.style.display = "none";
				document.body.appendChild(iframe);
				alert("恭喜您！留言成功！");
				setTimeout(function(){location.reload();},1000);
			}
            else if(msg=="0"){
                    alert("留言失败！")
            }
             else if(msg=="IP"){
                    alert("你今天留言已经达到最大条数！")
                    location.reload();
            }
              else if(msg=="2"){
                    alert("你的名字不在百家姓里面的，请认清填写哦！谢谢合作！")
                    location.reload();
            }
              else if(msg=="3"){
                    alert("你的IP已被禁止！")
                    location.reload();
            }
              else if(msg=="4"){
                    alert("仔细看完项目后在留言，先歇息一会吧!")
                    location.reload();
            }
             else if(msg=="-2"){
                    alert("验证码错误")
            }
            else {
				alert("服务器打个盹，请稍后再试~");
			};
		},[
			"CompanyId=" + CompanyId.value, 
		 	"CompanyName=" + CompanyName.value, 
		 
		 	"Linker=" + Linker.value, 
		 	"Phone=" + Phone.value,

		 	"ReplyTime=" + time, 
		 	"Invest=" + invest, 
		 	"Content=" + Content.value, 
		 	"Region1=" + Region1.options[Region1.selectedIndex].value, 
		 	"Region2=" + Region2.options[Region2.selectedIndex].value 
		]);
	};
             
}());

//分页

(function(){
	if (!v.id("get_page_on")) {return};
	getPage(v.id("get_page_on"),v.id("cpjj_con"));
} ());

//分页

(function(){
	if (!v.id("get_page_on1")) {return};
	getPage(v.id("get_page_on1"),v.id("cpjj_con1"));
}());

//分页

(function(){
	if (!v.id("get_page_on2")) {return};
	getPage(v.id("get_page_on2"),v.id("cpjj_con2"));
}());


//分页

(function(){
	if (!v.id("get_page_on3")) {return};
	getPage(v.id("get_page_on3"),v.id("cpjj_con3"));
}());


//分页

(function(){
	if (!v.id("get_page_on4")) {return};
	getPage(v.id("get_page_on4"),v.id("cpjj_con4"));
}());

//分页

(function(){
	if (!v.id("get_page_on5")) {return};
	getPage(v.id("get_page_on5"),v.id("cpjj_con5"));
} ());

//分页

(function(){
	if (!v.id("get_page_on6")) {return};
	getPage(v.id("get_page_on6"),v.id("cpjj_con6"));
}());

//分页

(function(){
	if (!v.id("get_page_on7")) {return};
	getPage(v.id("get_page_on7"),v.id("cpjj_con7"));
}());

//分页

(function () {
    if (!v.id("get_page_on8")) { return };
    getPage(v.id("get_page_on8"), v.id("cpjj_con8"));
} ());

//分页

(function () {
    if (!v.id("get_page_on9")) { return };
    getPage(v.id("get_page_on9"), v.id("cpjj_con9"));
} ());

//换一批

(function () {
	if (!v.id("get_page_on9")) { return };
	getPage(v.id("get_page_on9"), v.id("cpjj_con9"));
} ());