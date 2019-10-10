hy('window').event('load',function(){hy('window').event("scroll",handleRightSide);});var rightLastChildBottom;function handleRightSide(){var rightElement=hy(":right-wrap"),rightChildren=hy(rightElement.children()),rightChildrenLength=rightChildren.length
if(win.offset().width<768)
return unfix();var winScroll=win.scroll(),winScrollTop=winScroll.top;if(rightLastChildBottom===undefined){rightLastChildBottom=hy(rightChildren[rightChildrenLength-1]).offset().bottom+winScrollTop;}
var documentScrollHeight=document.body.scrollHeight;if(winScrollTop>rightLastChildBottom){var leftSpace=documentScrollHeight-rightLastChildBottom,winScrollAfterLastChild=winScroll-rightLastChildBottom,leftSpaceForOneChild=leftSpace/rightChildrenLength,fixedChildIndex=Math.floor((winScrollTop/leftSpaceForOneChild))-1
unfix();var fixedElement=hy(rightChildren[fixedChildIndex]);fixedElement.css({width:parseInt(rightElement.offset().width)-10,position:"fixed",top:0});}else{unfix();}
function unfix(){rightChildren.css({width:"",position:"relative",top:""})}}
function popup(html){if(win.offset().width<600)
return;var back=hy("<div>").addClass("popup-back").appendTo(document.body),wrap=hy("<div>").addClass("popup-wrap").appendTo(back),popupHTML=hy("<div>").addClass("popup row").appendTo(wrap);popupHTML.html(html);var detach=hy('window').event('click',function(event){if(outsideClick(event,wrap[0])){close();}},true);hy(":popup-close").event('click',function(){close();})
function close(){back.kill();detach();}}
var userMessage=(function(){var previous=false;return function(title,mode){if(previous&&typeof previous.kill==="function"){previous.kill();}
var wrap=hy("<div>").addClass('user-message');var title=hy("<span>").addClass('title').html(title).appendTo(wrap);mode=mode!==undefined?mode:'normal'
if(mode==='red'){wrap.addClass("danger");}
wrap.by(2500,function(){this.fadeOut(400).killIn(400);});wrap.appendTo(document.body);previous=wrap;}})();"use strict";var clientSideLang=(function(){var storage=storageAvailable('localStorage'),selectedLang='Javascript',storageName='clientLang'
if(storage){var lang=localStorage.getItem(storageName);selectedLang=lang?lang:selectedLang;}
return{addTwoButtons:function(){var codes=hy(".code-both-js"),self=this;codes.each(function(node){var wrap=hy("<div>").prependTo(node).addClass("multilang-wrap"),buttonWrap=hy("<span>").addClass("multilang-button-wrap").appendTo(wrap);var js=hy("<span>").addClass("button-ondark").appendTo(buttonWrap).html("Javascript").on('click',function(){self.changeActive('Javascript');}),jq=hy("<span>").addClass("button-ondark").appendTo(buttonWrap).html("jQuery").on('click',function(){self.changeActive('jQuery')})
if(selectedLang.toLowerCase()==='javascript'){js.addClass("active")}else if(selectedLang.toLowerCase()==="jquery"){js.addClass("active");}});},reloop:function(){var codes=hy(".code-both-js"),lang=selectedLang.toLowerCase()
if(lang==='javascript'){hy(".on-jquery").hide();hy(".on-javascript").show();}else if(lang==='jquery'){hy(".on-jquery").show();hy(".on-javascript").hide();}
codes.each(function(node){node=hy(node);var codePieces=node.hy(".code-js"),buttons=node.hy('.button-ondark'),buttonJs=hy(buttons[0]),buttonjQuery=hy(buttons[1]);buttons.removeClass("active");codePieces.each(function(n){n=hy(n);n.hide();if(n.checkClass("jquery")&&lang==='jquery'){n.show();buttonjQuery.addClass("active");}
if(!n.checkClass("jquery")&&lang==='javascript'){n.show();buttonJs.addClass("active");}})});},changeActive:function(name){selectedLang=name;if(storage){localStorage.setItem(storageName,name);}
this.reloop();}}})();function outsideClick(event,notelem){if(notelem.length>1){var clickedOut=true,i,len=notelem.length;for(i=0;i<len;i++){if(event.target==notelem[i]||notelem[i].contains(event.target)){clickedOut=false;}}
if(clickedOut)return true;return;}
if(!event.target==notelem||!notelem.contains(event.target)){return true;}
return false;}
function storageAvailable(type){try{var storage=window[type],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&storage.length!==0;}}