//连贯操作
(function(a){
    var Z =function(select){
        return new Z.prototype.init(select);
    }
    Z.prototype = {
        init:function(select){ 
            if (typeof select == "object") {
                this.e = select;
            }else{
	        if (document.getElementById(select)) {
		this.e = document.getElementById(select);
	        }else{
		return false;
	        }
            };
            return this; 
        },
        classname:function(vaule){
            if (vaule) {
                this.e.className = vaule;
                return this;
            }else{
                return this.e.className;
            };
        },
        css:function(attr,vaule){
            if (!vaule) {
                return this.e.style[attr];
            };
            this.e.style[attr] = vaule;
            return this;
        },
        height:function(v){
            if (!v) {return this.e.offsetHeight;}
            this.e.style.height = v;
            return this;
        },
        width:function(v){
            if (!v) {return this.e.offsetWidth;}
            this.e.style.width = v;
            return this;
            
        },
        html:function(v){
            if (!v) {return this.e.innerHTML;}
            this.e.innerHTML = v;
            return this;
        },
        addclass:function(v){
            this.e.className = this.e.className + " " + v;
            return this;
            
        },
        removeclass:function(v){
            var c = this.e.className.split(" ");
            var arr = [];
            for (var i = 0; i < c.length; i++) {
                if (c[i] != v && c[i].replace(/[ ]/g,"") != "") {
                    arr.push(c[i]);
                };
            };
            this.e.className = arr.join(" "); 
            return this;
        },
       hasclass : function(c){
       	var p = this.e.className.indexOf(c);
       	if (p > -1) {
       		return p;
       	}else{
       		return false;
       	};
       },
       //鼠标滚轮事件 （传入的对象，当鼠标往下时的事件，鼠标网上滚的事件）
       mousewheel : function(fn1,fn2){ 
       	if( this.e.addEventListener)     //鼠标滚轮事件初始化
		 this.e.addEventListener('DOMMouseScroll', move, false);
		 this.e.onmousewheel = move;
	 function move(event){   
	        　　var delta = 0;
	        　　if (!event) event = window.event;
	               event.wheelDelta ? delta = -event.wheelDelta : delta = event.detail ;
	                if (delta>0) {
	                 fn1();
	                }else if(delta<0){
	                 fn2();
	                };
               };
            return this;
       },
       // .selectno {  -moz-user-select:none;  -webkit-user-select:none;  user-select:none;  }
       mousemove : function(fn1,fn2,fn3){    //鼠标拖动滚动条事件 (点击事件，拖动事件（移动X轴的距离，移动Y轴的距离），结束事件)
       	this.e.onmousedown = function(e){
	 	var move = true;
	 	var e=e || window.event;
	 	var mouseY = e.clientY;
	 	var mouseX = e.clientX;
	 	Z(document.body).addclass("selectno");
	 	fn1();
	 	document.body.onselectstart = function(){return false};
	 	document.body.onmousemove = function(e){
	 		var e=e || window.event;
	 		if (!move) {
	 			document.body.onselectstart = null;
	 			document.body.onmousemove = null;
	 			document.body.onmouseup = null ;
	 			Z(document.body).removeclass("selectno");
	 			fn3(e.clientX - mouseX,e.clientY - mouseY);
	 		};
	 		fn2(e.clientX - mouseX,e.clientY - mouseY);
	 	}
	 	document.body.onmouseup = function(){
	 		move = false;
	 	}	 	
       	}
            return this;
         },
          //鼠标选择 (点击事件，结束事件（选择的内容）)
         mouseselect : function(fn1,fn2){
	        var mouseX = 0;
	        var mouseY = 0;
	       this.e.onmousedown = function(e){   
	          var event=e || window.event;
	          mouseX = event.clientX;
	          mouseY = event.clientY;
	          fn1();
	        }
	       this.e.onmouseup = function(e){
	          var event=e || window.event;
	          if(event.clientX == mouseX && event.clientY == mouseY){return;}
	          if (window.getSelection) {
	            var selected = window.getSelection().toString();
	          }else{
	            var selected = window.document.selection.createRange().text
	          }
	          if (selected.length < 1) { return};
	            fn2(selected,e);
	        };
            return this;
         },
         //鼠标滑过的事件
         hover : function(fn1,fn2){
         	v.addEvent(this.e,"mouseenter",fn1)
         	if(fn2){
         		v.addEvent(this.e,"mouseleave",fn2)
         	}
         },
         click : function(fn1,fn2){
         	var a = 1;
         	v.addEvent(this.e,"click",function(){
         		if (a) {
         			fn1(this);
         			if (fn2) a = 0;
         		}else {
		 	fn2(this);
			 a= 1;
         		};
         	});
         },
         //删除
          del : function(){
	 this.e.parentNode.removeChild(this.e);
	 return true;
           }

    };
    Z.prototype.init.prototype = Z.prototype ;
    a.Z = Z;
})(window);


//常用库
v = {
    cache : [],
    id : function(id){    //获取id   	
	return this.cache[id] || (this.cache[id] = document.getElementById(id)) || false;
    },
    name : function(ele,name){   //获取tagname   (对象，对象下的tag) 
    	return ele.getElementsByName(name) || false;
    },
    tag : function(ele,name){   //获取name    (对象，对象下的name) 
   	return ele.getElementsByTagName(name)  || false;
    },
   cl : function(listname,classname){   //传入一个数组，返回数组内class为classname的集合
	 list = [];
   	if (arguments.length>1) {
	      for (var i = 0; i < listname.length; i++) {
	        if (listname[i].className.indexOf(classname) != -1) {
		list[list.length] = listname[i];
	        };
	      };
	      return list;
   	}else{
   	      var a = document.getElementsByTagName('*');
	      for (var i = 0; i < a.length; i++) {
	        if (a[i].className.indexOf(listname) != -1) {
		list[list.length] = a[i];
	        };
	      };
	      return list;  		
   	}
     },
    isArray : function(obj) {    //判断是否为数组
        return Object.prototype.toString.call(obj) === '[object Array]'; 
    },
    isMobile : {   //是否为手机客户端
                Android: function() {
                    return navigator.userAgent.match(/Android/i) ? true : false;
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i) ? true : false;
                },
                any: function() {
                    return (this.Android() || this.BlackBerry() || this.iOS() || this.Windows());
                }
            },
    getJs : function(url,fn,e){   //动态加载 js  (url为网址,回掉函数[可选],对象[可选-把js加入到此对象的最底部])
	var o= document.createElement("script"),s = true,e = e||document.getElementsByTagName("head")[0]; 
	o.type = "text/javascript"; 
	o.src= url; 
	e.appendChild(o); 
	o.onload = o.onreadystatechange= function(e){
		s&&function(){
			s=false;
			fn();
		}();
	}
    },
    setCookie : function(name,value){
	var Days = 30; 
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000); 
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
      },

      //读取cookies 
      getCookie : function(name){ 
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|v)");
	    if(arr=document.cookie.match(reg))
	        return unescape(arr[2]); 
	    else 
	        return null; 
	} ,
      //删除cookies 
      delCookie :  function(name){ 
	    var exp = new Date(); 
	    exp.setTime(exp.getTime() - 1); 
	    var cval=v.getCookie(name); 
	    if(cval!=null) 
	        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
	},
	 /*
	 * 缓动算法
	 t: current time（已经运行的时间）；
	 b: beginning value（初始值）；
	 c: change in value（变化量）；
	 d: duration（总共持续时间）
	 */
	 tween : {
	 	Linear : function(t, b, c, d){ 
	 		return c*t/d + b;
	 	},
		sOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		bOut: function(t, b, c, d) {
		            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		backOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		}
        
	 },
	 /*
	 * 获取Element对象css属性值 
	 *a : 对象
	 *b : 属性值 
	 *c : 值 （可选，填写为设置，不填为获取）
	 */
	 css : window.getComputedStyle ? 
	 	function(a,b,c){
	 		if (c == undefined) {
	 			return window.getComputedStyle(a, false)[b];
	 		}else{
	 			a.style[b] = c;
	 		};
	 	}
	 	:function(a,b,c){
	 		if (c == undefined ) {
	 			if (b == "opacity") {
	 				return a.style.filter.indexOf("opacity=") >= 0 ? parseFloat(a.style.filter.match(/opacity=([^)]*)/)[1]) / 100 : "1";
	 			}else{
	 				 return a.currentStyle[b] == "auto" ? 0 : a.currentStyle[b];
	 			};
	 		}else{
	 			if (b == "opacity") {
	 				a.style.filter = (a.filter || "").replace(/alpha\([^)]*\)/, "") + "alpha(opacity=" + c * 100 + ")";
	 			}else{ a.style[b] = c };
	 		};
	 	},
	 //跨浏览器获取视口大小
	 getInner : function(){
		if (typeof window.innerWidth != 'undefined') {
			return {
				width : window.innerWidth,
				height : window.innerHeight
			}
		} else {
			return {
				width : document.documentElement.clientWidth,
				height : document.documentElement.clientHeight
			}
		}
	},
	//ajax
	/*
		两个参数的为GET url和回掉函数
		三个参数的为POST url和回掉函数和发送的数据 
		v.ajax("post.php",function(msg){
			console.log(msg)
		},[
			"CompanyId=" + CompanyId.value, 
		 	"CompanyName=" + CompanyName.value, 
		 	"CheckCode=" + CheckCode.value
		]);
	*/
	ajax : function(url,fn,data){
		var x = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'),text;
		if (data) {
			x.open("POST", url,true);
			x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			x.send(data.join("&"));
		}else{
			x.open("GET",url,true);
			x.send(null);
		};
		x.onreadystatechange = function(){
			if (x.readyState === 4){
				if (x.status== 200) {
					text = x.responseText
					fn && fn(x.responseText);
				}else{
					return false;
				};
			}
		}
	},
	//滑动门   触发事件的数组，被滑动的数组
	door : function(a,b,fn1,fn2){
		for (var i = 0; i < a.length; i++) {
			a.index = i ;
			a[i].onmouseenter = function(){
				show(a.index);
			}
			a[i].onmouseleave = function(){
				hide(a.index);
			}
		};
		function show(i){
			if (fn1) {fn1(i)};
		};
		function hide(i){
			if (fn2) {fn2(i)};
		};
	},
	//事件绑定 （对象，属性，事件）
	addEvent : function(obj,type,fn){
		if (obj.addEventListener) {
			obj.addEventListener(type,fn,false); //w3c写法
		}else{
			if (!obj.fn) obj.fn = {};
			if(!obj.fn[type]) {obj.fn[type] = []};
			obj.fn[type].push(fn);
			obj["on"+type] = function(){
				for(var i in obj.fn[type]){
					obj.fn[type][i].call(obj,window.event);
				}
			}
		};
	},
	//事件删除（对象，属性，事件）
	removeEvent : function(obj,type,fn){
		if (obj.removeEventListener) {
			obj.removeEventListener(type,fn,false);
		}else{
			var es = obj.fn[type];
			for(var i in es){
				if(es[i] == fn){
					delete obj.fn[type][i];
				}
			}
		};
	},
	//设置光标位置  (输入框对象,光标位置[可选，默认最后])
	textareaCursor : function(obj,v){
		if(!obj) return false;
		if(obj.setSelectionRange){  //兼容高级
			obj.focus();
			obj.setSelectionRange(v, v);
			return true;
		}else if(obj.createTextRange){   //兼容低级
			var range =obj.createTextRange();
			range.move('character', v);
			range.select();
			return true;
		}else {
			return false;
		}
	},

	Touch:function(obj,o){
		if (typeof document.createEvent !== 'function') return false;  //剔除低端浏览器
		// var box = this.e,
		var moveis = false, //是否移动
		moveDirection, //移动方向
		o = o || {},
		_this = this,
		TRESHOLD = o.SWIPE_TRESHOLD || 20,   //超过20的时候才算滑动
		PREDEF = o.PREDEF || [1,0],   //X轴移动是否取消默认，Y轴移动是否取消默认  （默认取消X轴的默认）
		currX, currY, cachedX, cachedY,
		msPointerEnabled = !!navigator.pointerEnabled || navigator.msPointerEnabled,  //判断是否为ie10和ie11的手势
		isTouch = 'ontouchstart' in window || msPointerEnabled, //判断是否支持手势
		msEventType = function(type) {   //区分ie10和ie11
			var lo = type.toLowerCase(),   //转换为全小写
				ms = 'MS' + type;   //ie10
			return navigator.msPointerEnabled ? ms : lo;  //判断是否ie10  ie10返回带ms的
		},
		touchevents = {   //对象
			touchstart: msEventType('PointerDown') + ' touchstart',
			touchend: msEventType('PointerUp') + ' touchend',
			touchmove: msEventType('PointerMove') + ' touchmove'
		},
		getPointerEvent = function(event) {   //统一各个浏览器之间的event的差异
			return event.targetTouches ? event.targetTouches[0] : event;  //判断如果是苹果和谷歌支持的触摸对象 返回它的触摸列表。否则ie的话直接返回列表 统一差异
		},
		setListener = function(elm, events, callback) {   //在document上设置监听			
			var eventsArray = events.split(' '),
				i = eventsArray.length;
			while (i--) {   //while循环 i===0的时候跳出  						
				elm.addEventListener(eventsArray[i], callback, false);  //循环设置上各种监听
			}
		},
		creatE = function(e,eventName,data){
			var eve = document.createEvent('Event'); 
			data = data || {};
			data.x = currX;
			data.y = currY;
			data.cachedX = cachedX;
			data.cachedY = cachedY;
			data.type = eventName;
			// data.direction = moveDirection ? moveDirection : eventName;
			data.e = e;
			// console.log(_this)
			_this[eventName] && _this[eventName](data);
		},
		unifyE = function(e){
			return e.touches ? e.touches[0] : e;
		},
		direction = function(tre){
			var tre = tre === undefined ? TRESHOLD : tre,events;
			if(Math.abs(cachedX - currX) >= Math.abs(cachedY - currY) ){
				cachedX - currX > tre ? events = "swipeleft" :
				cachedX - currX < -tre ? events = "swiperight" : events = "tap";
			}else{
				cachedY - currY > tre ? events = "swipetop" :
				cachedY - currY < -tre ? events = "swipedown" : events = "tap";
			}
			return events;
		},
		start = function(e){		
			moveis = true;
			ev = unifyE(e);	
			creatE(ev,"swipestart");	
			cachedX = currX = ev.clientX;
			cachedY = currY = ev.clientY;
			moveDirection = undefined;
			e.stopPropagation();
		},
		move = function(e){
			if (!moveis) return;  //判断是否可以移动
			ev = unifyE(e);
			currX = ev.clientX;
			currY = ev.clientY;
			if (moveDirection === undefined) {  
				moveDirection = direction(0).split("swipe")[1];
			};
			if (moveDirection === "left" || moveDirection === "right") {
	 			PREDEF[0] && e.preventDefault();  //阻止默认事件
				creatE(ev,"hold"+moveDirection);
			}else {
				PREDEF[1] && e.preventDefault();  //阻止默认事件
				creatE(ev,"hold"+moveDirection);
			}
			e.stopPropagation();
		},
		end = function(e){	
			creatE(e,"swipeend");	
			moveis = false;
			creatE(e,direction());
			e.stopPropagation()
		}


		//设置事件侦听器
		setListener(obj, touchevents.touchstart + (isTouch ? '' : ' mousedown'), start);
		setListener(obj, touchevents.touchend + (isTouch ? '' : ' mouseup'), end);
		setListener(obj, touchevents.touchmove + (isTouch ? '' : ' mousemove'), move);

	}
};







//点击加载按钮，加载到的此对象的下面并且获取第N页的这个对象的内容，
function getPage(on, box, title) {
    var title = title || on.title.split("|"), len = +title[1], url = title[0].split("{page}"), index = 1, html = on.innerHTML, div, tn;
    if (len == 1) { on.parentNode.style.display = "none" };
	if(on.classList.value.indexOf('huan')>-1||on.getAttribute('showtype')=="huan"){
		on.addEventListener("click", huan, false);
	}else{
		on.addEventListener("click", go, false);
	}
    function go() {
        div = document.createElement("div");
        on.innerHTML = "正在加载...";
        v.ajax(url[0] + (++index) + url[1], function (text) {
            div.innerHTML = text;
               
            div = div.getElementsByTagName('*');
            for (var i = 0; i < div.length; i++) {
                if (div[i].id === box.id) {
                    box.innerHTML += div[i].innerHTML;
                    break;
                }
            };
            on.innerHTML = html;

            if (index === len) {
                on.removeEventListener("click", go);
                on.innerHTML = "更有更多了";
                on.className = "hover";
            }

        });
    };
	function huan(){
		div = document.createElement("div");
		on.innerHTML = "正在加载...";
		v.ajax(url[0] + (++index) + url[1], function (text) {
			div.innerHTML = text;

			div = div.getElementsByTagName('*');
			for (var i = 0; i < div.length; i++) {
				if (div[i].id === box.id) {
					box.innerHTML = div[i].innerHTML;
					break;
				}
			};
			on.innerHTML = html;

			if (index === len) {
				on.removeEventListener("click", go);
				on.innerHTML = "更有更多了";
				on.className = "hover";
			}

		});
	}
};


//横向触摸滚动 (要执行的对象，最大移动的距离，回调函数1，回调函数2)
function touchLeftRight(obj,imgwidth,fn1,fn2){

	var imgtouch = new v.Touch(obj),left,tra,tep;
	imgtouch.swipestart = function(){
		left = obj.style.WebkitTransform ? obj.style.WebkitTransform : obj.style.transform ;
		left = left === "" || left === undefined ? 0 : -parseInt(left.split(/(\w+px)/)[1]) ;
		obj.style.transitionDuration = "0s";
		obj.style.WebkitTransitionDuration = "0s";
		fn1 && fn1();
	};
	imgtouch.holdleft = imgtouch.holdright = function(e){
		tra = Math.round(e.x-e.cachedX+left);
		tep = tra > 0 ? 0 : tra < -imgwidth ? -imgwidth : tra;
		obj.style.WebkitTransform = "translate3d("+tep+"px, 0px, 0px)";
		fn2 && fn2();
	};

};

