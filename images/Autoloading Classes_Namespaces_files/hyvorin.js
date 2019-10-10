"use strict";var hy=(function(){return function(selector){return new hyvorin.hy(selector);}})();var hyvorin=(function(){var deepExtend=function(destination,source){destination=destination||{};for(var property in source){if(source[property]&&source[property].constructor&&source[property].constructor===Object){destination[property]=destination[property]||{};deepExtend(destination[property],source[property]);}else{destination[property]=source[property];}}
return destination;}
var hy=function(pick,parent){if(isString(pick)){var idMatch=pick.match(/^:([a-z0-9A-Z$_-]+)$/);if(idMatch){var id=idMatch[1],thio=document.getElementById(id);return addElements.call(this,thio);}
var classMatch=pick.match(/^(.*)\.(.+)/);if(classMatch){var parent=parent||(classMatch[1]!==""?new hyvorin.hy(classMatch[1])[0]:document),name=classMatch[2],thios=ThiosByClass(name,parent);return addElements.call(this,thios);}
var newMatch=pick.match(/<(.*)>:?([0-9]*)/)
if(newMatch){var tagName=newMatch[1],number=newMatch[2]||1,thios=[];for(var i=0;i<number;i++){thios.push(document.createElement(tagName));}
return addElements.call(this,thios);}
if(pick==='window'){this[0]=window;this.length=1;return this;}}else if(isObject(pick)){if(pick.constructor===hy){return pick;}
return addElements.call(this,pick);}}
var protoExtend={each:function(func){for(var i=0,len=this.length;i<len;i++){func(this[i]);}},hy:function(pick){return new hyvorin.hy(pick,this[0]?this[0]:null);},css:function(name,value){return appearance.call(this,name,value,"CSS");},attr:function(name,value){return appearance.call(this,name,value,"ATTR");},removeAttr:function(name){this.each(function(thio){thio.removeAttribute(name);});return this;},html:function(lorem){return textEdit.call(this,lorem,"HTML");},value:function(lorem){return textEdit.call(this,lorem,"VALUE");},text:function(lorem){return textEdit.call(this,lorem,"TEXT");},data:function(data,value){if(isUndefined(value)){return this[0].dataset[data];}
this.each(function(thio){thio.dataset[data]=value;})
return this;},show:function(type){return this.css("display",isDefined(type)?type:"block");},hide:function(){return this.css("display","none");},appendTo:function(node){this.each(function(thio){if(node.length){node[0].appendChild(thio);}
else{node.appendChild(thio);}})
return this;},prependTo:function(node){if(node.length){node=node[0];}
this.each(function(thio){node.insertBefore(thio,node.length?node[0].firstChild:node.firstChild);})
return this;},insertBefore:function(parent,node){this.each(function(thio){if(parent.length){parent[0].insertBefore(thio,node.length?node[0]:node);}else{parent.insertBefore(thio,node.length?node[0]:node);}});return this;},fadeIn:function(time){return animate.call(this,"fadeIn",time,{delay:10});},fadeOut:function(time){return animate.call(this,"fadeOut",time);},zoomIn:function(time){return animate.call(this,"zoomIn",time)},zoomOut:function(time){return animate.call(this,"zoomOut",time,{delay:10});},fromLeft:function(time){return animate.call(this,"fromLeft",time);},fromTop:function(time){return animate.call(this,"fromTop",time);},fromRight:function(time){return animate.call(this,"fromRight",time);},fromBottom:function(time){return animate.call(this,"fromBottom",time);},by:function(time,func){var self=this;setTimeout(function(){func.call(self);},time);return this;},event:function(ev,func,returnRemove){var self=this;eventing.call(this,ev,func,"ADD");return returnRemove?(function(){return eventing.call(self,ev,func,"REMOVE");}):this;},removeEvent:function(ev,func){return eventing.call(this,ev,func,"REMOVE");},on:function(ev,func){this.each(function(thio){thio["on"+ev]=func;})
return this;},off:function(ev){this.each(function(thio){thio["on"+ev]=null;})},get:function(property){if(this&&this[0]){return this[0][property];}},offset:function(){return this&&this[0]?this[0].getBoundingClientRect():null;},kill:function(){this.each(function(thio){if(thio&&thio.parentElement){thio.parentElement.removeChild(thio);}})},killIn:function(time){this.by(time,function(){this.kill();})},focus:function(){if(this[0])this[0].focus();return this;},click:function(){if(this[0])this[0].click();return this;},parent:function(){return new hyvorin.hy(this[0].parentElement);},children:function(index){if(this[0]){if(isString(index)){if(index==="last"){var thios=this[0].children;return thios[thios.length-1];}else if(index==="first"){return thios[0];}}else if(isDefined(index)){return this[0].children[index];}
return this[0].children;}
return null;},next:function(){if(this[0]){return this[0].nextElementSibling;}},previous:function(){if(this[0]){return this[0].previousElementSibling;}},clone:function(param){return this[0]?new hyvorin.hy(this[0].cloneNode(param)):null;},cls:function(pick){if(isUndefined(pick)){return this[0]?this[0].className:"";}
return classing.call(this,pick);},addClass:function(pick){return classing.call(this,"+"+pick);},removeClass:function(pick){return classing.call(this,"-"+pick);},checkClass:function(pick){return classing.call(this,"?"+pick);},getThio:function(index){return this[index]?this[index]:null;}}
deepExtend(hy.prototype,protoExtend);var addElements=function(elements){if(!elements){return this.length=0;}
if(elements.length&&!elements.tagName){for(var i=0,len=elements.length;i<len;i++){this[i]=elements[i];}
this.length=len;}else{this[0]=elements;this.length=1;}
return this;}
var appearance=function(name,value,type){if(isString(name)&&isUndefined(value)){if(type==="CSS"){return this[0].style[vendorPrefix(name)];}else if(type==="ATTR"){return this[0].getAttribute(name)||this[0][name];}}else{this.each(function(thio){if(isRealObject(name)){var x;for(x in name){var parsed=parseCssProp(x,name[x])
if(type==="CSS"){thio.style[parsed.name]=parsed.value;}else if(type==="ATTR"){thio.setAttribute(x,name[x]);}}}else if(isString(name)&&isDefined(value)){if(type==="CSS"){var parsed=parseCssProp(name,value);thio.style[parsed.name]=parsed.value;}else if(type==="ATTR"){thio.setAttribute(name,value);}}});return this;}}
var textEdit=function(setTo,type){if(setTo!==undefined){this.each(function(thio){switch(type){case "HTML":thio.innerHTML=setTo;break;case "TEXT":thio.innerText=setTo;break;case "VALUE":thio.value=setTo;break;}});return this;}else{var result="";this.each(function(thio){switch(type){case "HTML":result+=thio.innerHTML;break;case "TEXT":result+=thio.innerText;break;case "VALUE":result+=thio.value;break;}});return result;}}
var parseCssProp=function(name,value){var match=name.match(/height|width|top|bottom|left|right|margin|marginTop|marginBottom|marginLeft|marginRight|borderRadius|borderTopLeftRadius|borderTopRightRadius|borderBottomLeftRadius|borderBottomRightRadius|padding|paddingRight|paddingLeft|paddingTop|paddingBottom|fontSize/);name=vendorPrefix(name);if(match&&isDefined(value)){value=String(value);var valueSplit=value.split(" "),returnValue="";for(var i=0,len=valueSplit.length;i<len;i++){var val=valueSplit[i];if(val.match(/^\d+$/)){returnValue+=val+"px";}}
value=returnValue||value;}
var webkitMatch=/borderRadius|borderTopLeftRadius|borderTopRightRadius|borderBottomLeftRadius|borderBottomRightRadius|transition|transform|/
return{name:name,value:value};}
var emptyStyles=document.createElement("DIV").style;var eventListener=typeof window.addEventListener==="function";var vendorPrefix=function(name){if(!(name in emptyStyles)){var vendor=["Webkit","Moz","ms"];for(var i=0,len=vendor.length;i<len;i++){var newName=vendor[i]+name.charAt(0).toUpperCase()+name.slice(1);if(newName in emptyStyles){return newName;}}}
return name;}
var animate=function(property,time,options){time=time||1000;var second=time/1000;var zoomBlock=function(){return{from:{transform:"",transition:second+"s transform",display:"block"},to:{transform:""},after:{transfomr:""}}}
var transformBlock=function(){return{from:{opacity:0,transform:"",transition:second+"s transform, "+second+"s opacity",display:"block",visibility:"visible"},to:{opacity:1,transform:""}}}
var table={fadeIn:{from:{opacity:0,display:"block",transition:second+"s opacity",visibility:"visible"},to:{opacity:1}},fadeOut:{from:{opacity:1,display:"block",transition:second+"s opacity"},to:{opacity:0},after:{opacity:1,display:"none"}},zoomIn:zoomModel(0,1),zoomOut:zoomModel(1,0,{transform:"",display:"none"}),fromLeft:transformModel("translateX(-100px)","translateX(0)"),fromRight:transformModel("translateX(100px)","translateX(0)"),fromTop:transformModel("translateY(-100px)","translateY(0)"),fromBottom:transformModel("translateY(100px)","translateY(0)")}
function zoomModel(start,end,after){var newZoomBlock=zoomBlock();newZoomBlock.from.transform="scale("+start+")";newZoomBlock.to.transform="scale("+end+")";newZoomBlock.after=after||{}
return newZoomBlock;}
function transformModel(start,end){var newFromBlock=transformBlock();newFromBlock.from.transform=start;newFromBlock.to.transform=end;return newFromBlock;}
this.css(table[property]['from']);var delay=(isDefined(options)&&isDefined(options.delay))?options.delay:0;this.by(delay,function(){this.css(table[property]['to']);});if(table[property]['after']){this.by(time+delay,function(){this.css(table[property]['after']);});}
return this;}
var eventing=function(ev,func,type){this.each(function(thio){if(eventListener){if(type==="ADD"){thio.addEventListener(ev,func);}else if(type==="REMOVE"){thio.removeEventListener(ev,func);}}else{if(type==="ADD"){thio.attachEvent("on"+ev,func);}else if(type==="REMOVE"){thio.detachEvent("on"+ev,func);}}});return this;}
var classing=function(pick){var plusMatch=pick.match(/^\+(.+)$/);if(plusMatch){var classes=plusMatch[1],splitted=classes.split(" ");this.each(function(thio){var thioCn=thio.className,cn="";var thioCnSplit=thioCn.split(" ");for(var i=0,len=splitted.length;i<len;i++){var addCn=splitted[i];if((function(){for(var x=0,leng=thioCnSplit.length;x<leng;x++){var exCn=thioCnSplit[x];if(addCn===exCn){return false;}}
return true;})()===true){cn+=cn===""?addCn:" "+addCn;}}
thio.className+=thio.className===""?cn:cn!==""?" "+cn:"";});return this;}
var minusMatch=pick.match(/-(.+)/);if(minusMatch){var classes=minusMatch[1],split=classes.split(" ");this.each(function(thio){for(var i=0,len=split.length;i<len;i++){var cn=split[i],regex=new RegExp("\\b"+cn+"\\b\\s*","i");thio.className=thio.className.replace(regex,"");}});return this;}
var questionMatch=pick.match(/\?([^\s]+)/);if(questionMatch){var cn=questionMatch[1],regex=new RegExp("\\b"+cn+"\\b");return this[0].className.match(regex)?true:false;}}
function ThiosByClass(name,parent){parent=parent||document;if('getElementsByClassName'in document){var thios=parent.getElementsByClassName(name);return thios[0]?thios:null;}else{var thios=parent.getElementsByTagName("*"),selectedThios=[],reg=new RegExp('^'+name+'$');for(var i=0,len=thios.length;i<len;i++){var thio=thios[i];if(thio.className.match(reg)){selectedThios.push(thio);}}
return selectedThios;}}
return{hy:hy,deepExtend:deepExtend}})();var isString=function(t){return typeof t==="string";}
var isObject=function(o){return o===Object(o);}
var isRealObject=function(o){return o.constructor&&o.constructor===Object;}
var isDefined=function(u){return u!==null&&typeof u!=="undefined";}
var isUndefined=function(u){return!isDefined(u);}
var isNull=function(n){return n===null;}
var isArray=function(a){return a&&a.constructor&&a.constructor===Array;}
var isFunction=function(f){return f&&typeof f==="function";}
var ajax=function(data){var dataSend=null;try{var http=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){}
if(!data.file)return;if(data.success||data.error){http.onreadystatechange=function(){if(this.readyState===4){if(this.status===200){if(data.success)data.success.call(http);}else{if(data.error)data.error.call(http);}}}}
if(data.method==="GET"&&isObject(data.data)){data.file=data.file+"?"+urlDatafy(data.data);dataSend="";}
http.open(data.method,data.file,true);http.setRequestHeader("X-Requested-With","HyAjax");if(data.method==="POST"&&!data.formData){http.setRequestHeader("Content-type","application/x-www-form-urlencoded");if(typeof data.data==="object"){dataSend=urlDatafy(data.data);}}
if(dataSend===null)dataSend=data.data;http.send(dataSend);return http;}
var urlDatafy=function(obj){var x,first=true,$return="";for(x in obj){$return+=(!first?"&":"")+x+"="+obj[x];first=false;}
return $return;}
var jsonParse=function(text){try{var json=JSON.parse(text);}
catch(e){return false;}
return json;}
var formData=function(data){var formData=new FormData(),x;for(x in data){if(isArray(data[x])){formData.append(x,data[x][0],data[x][1]);}else{formData.append(x,data[x]);}}
return formData;}
var each=function(items,callback){for(var i=0,len=items.length;i<len;i++){callback(i,items[i]);}}
var inArray=function(array,item){return isArray(array)&&array.indexOf(item)>-1?true:false;}
var trim=function(s){return s.replace(/^\s+|\s+$/g,"");}
var win={scroll:function(){var scrollLeft=(window.pageXOffset!==undefined)?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;var scrollTop=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{left:scrollLeft,top:scrollTop}},offset:function(){var w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return{width:w,height:h}}};(function(constructor){if(constructor&&constructor.prototype&&constructor.prototype.children==null){Object.defineProperty(constructor.prototype,'children',{get:function(){var i=0,node,nodes=this.childNodes,children=[];while(node=nodes[i++]){if(node.nodeType===1){children.push(node);}}
return children;}});}})(window.Node||window.Element);(function(constructor){if(!("nextElementSibling"in document.documentElement)){Object.defineProperty(constructor.prototype,"nextElementSibling",{get:function(){var e=this.nextSibling;while(e&&1!==e.nodeType)
e=e.nextSibling;return e;}});}})(window.Node||window.Element);if(!("previousElementSibling"in document.documentElement)){Object.defineProperty(Element.prototype,"previousElementSibling",{get:function(){var e=this.previousSibling;while(e&&1!==e.nodeType)
e=e.previousSibling;return e;}});}
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(vMember,nStartFrom){if(this==null){throw new TypeError("Array.prototype.indexOf() - can't convert `"+this+"` to object");}
var
nIdx=isFinite(nStartFrom)?Math.floor(nStartFrom):0,oThis=this instanceof Object?this:new Object(this),nLen=isFinite(oThis.length)?Math.floor(oThis.length):0;if(nIdx>=nLen){return-1;}
if(nIdx<0){nIdx=Math.max(nLen+nIdx,0);}
if(vMember===undefined){do{if(nIdx in oThis&&oThis[nIdx]===undefined){return nIdx;}}while(++nIdx<nLen);}else{do{if(oThis[nIdx]===vMember){return nIdx;}}while(++nIdx<nLen);}
return-1;};}