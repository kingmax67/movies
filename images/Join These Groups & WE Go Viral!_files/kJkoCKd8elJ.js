if (self.CavalryLogger) { CavalryLogger.start_js(["ciobD"]); }

__d("BrowseFacebarHighlighter",["csx","CSS","NodeHighlighter"],(function(a,b,c,d,e,f,g){"use strict";a={};Object.assign(a,b("NodeHighlighter"),{getHighlightCandidates:function(){return["._53ad"]},isDiscardNode:function(a){return b("CSS").hasClass(a,"DefaultText")},createSegmentedRegex:function(a){a=this.escapeAndAddBidirectionalCharsToTokens(a);return"(^|\\s|\\b)("+a.join("|")+")"}});e.exports=a}),null);
__d("Typeahead",["ArbiterMixin","BehaviorsMixin","DataStore","DOM","Event","Parent","Run","Style","emptyFunction","ge","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(h,b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));g=c&&c.prototype;function h(a,c,d,e){"use strict";g.constructor.call(this),this.args={data:a,view:c,core:d},b("DataStore").set(e,"Typeahead",this),this.element=e}h.prototype.init=function(a){"use strict";this.init=b("emptyFunction"),this.getCore(),this.getView().setAccessibilityControlElement(this.getCore().getElement()),this.proxyEvents(),this.initBehaviors(a||[]),this.inform("init",this),this.data.bootstrap(),this.core.focus()};h.prototype.getData=function(){"use strict";if(!this.data){var a=this.args.data;this.data=a;this.data.init()}return this.data};h.prototype.getView=function(){"use strict";if(!this.view){var a=this.args.view,c=a.node||b("ge")(a.node_id);c||(c=b("DOM").create("div",{className:"uiTypeaheadView"}),b("DOM").appendContent(this.element,c));typeof a.ctor==="string"?this.view=new window[a.ctor](c,a.options||{}):this.view=new a.ctor(c,a.options||{});this.view.init();this.view.setTypeahead(this.element)}return this.view};h.prototype.getCore=function(){"use strict";if(!this.core){var a=this.args.core;typeof a.ctor==="string"?this.core=new window[a.ctor](a.options||{}):this.core=new a.ctor(a.options||{});this.core.init(this.getData(),this.getView(),this.getElement())}return this.core};h.prototype.getElement=function(){"use strict";return this.element};h.prototype.setHeight=function(a){"use strict";a!=="auto"&&(a+="px"),b("Style").set(this.element,"height",a)};h.prototype.swapData=function(a){"use strict";return this.$Typeahead1(a,!0)};h.prototype.swapDataNoCoreReset=function(a){"use strict";return this.$Typeahead1(a,!1)};h.prototype.$Typeahead1=function(a,b){"use strict";var c=this.core;this.data=this.args.data=a;a.init();c&&(c.data=a,c.initData(),b&&c.reset(),this.proxyEvents());a.bootstrap();return a};h.prototype.proxyEvents=function(){"use strict";[this.data,this.view,this.core].forEach(function(a){a.subscribe(a.events,this.inform.bind(this))},this)};h.prototype.initBehaviors=function(c){"use strict";c.forEach(function(c){typeof c==="string"?a.TypeaheadBehaviors&&a.TypeaheadBehaviors[c]?a.TypeaheadBehaviors[c](this):b("Run").onLoad(function(){a.TypeaheadBehaviors&&(a.TypeaheadBehaviors[c]||b("emptyFunction"))(this)}.bind(this)):this.enableBehavior(c)},this)};h.getInstance=function(a){"use strict";a=b("Parent").byClass(a,"uiTypeahead");return a?b("DataStore").get(a,"Typeahead"):null};h.initNow=function(a,b,c){"use strict";c&&c.init(a),a.init(b)};h.init=function(a,c,d,e){"use strict";b("DOM").isNodeOfType(a,["input","textarea"])||(a=b("DOM").scry(a,"input")[0]||b("DOM").scry(a,"textarea")[0]);var f=!1;try{f=document.activeElement===a}catch(a){}if(f)h.initNow(c,d,e);else var g=b("Event").listen(a,"focus",function(){h.initNow(c,d,e),g.remove()})};e.exports=h}),null);
__d("BasicTypeaheadRenderer",["BadgeHelper","DOM"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();c=[];a.icon&&c.push(b("DOM").create("img",{alt:"",src:a.icon}));var d=a.debug_info;d&&c.push(b("DOM").create("span",{className:"debugInfo"},d));if(a.text){d=[a.text];a.is_verified&&d.push(b("BadgeHelper").renderBadge("xsmall","verified"));c.push(b("DOM").create("span",{className:"text"},d))}if(a.subtext){d=[a.subtext];c.push(b("DOM").create("span",{className:"subtext"},d))}d=b("DOM").create("li",{className:a.type||""},c);a.text&&(d.setAttribute("title",a.text),d.setAttribute("aria-label",a.text));return d}a.className="basic";e.exports=a}),null);
__d("createIxElement",["invariant","DOM","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c){__p&&__p();var d="img";a.sprited||a.uri||g(0,2521);if(a.sprited){d=b("joinClasses")(d,a.spriteMapCssClass,a.spriteCssClass);var e=b("DOM").create("i",{className:d});c!=null&&b("DOM").setContent(e,b("DOM").create("u",null,c));return e}e=b("DOM").create("img",{className:d,src:a.uri});c!=null&&e.setAttribute("alt",c);a.width&&e.setAttribute("width",a.width);a.height&&e.setAttribute("height",a.height);return e}e.exports=a}),null);
__d("TypeaheadView",["ix","ArbiterMixin","BasicTypeaheadRenderer","CSS","DOM","Event","Parent","$","createIxElement","emptyFunction","getElementText","getOrCreateDOMID","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h;d=babelHelpers.inherits(c,b("mixin")(b("ArbiterMixin")));h=d&&d.prototype;function c(a,c){"use strict";h.constructor.call(this),this.initialized=!1,this.element=this.content=b("$").fromIDOrElement(a),Object.assign(this,c)}c.prototype.init=function(){"use strict";this.initialized||(this.initialized=!0,this.initializeEvents(),this.reset())};c.prototype.initializeEvents=function(){"use strict";b("Event").listen(this.element,{mouseup:this.mouseup.bind(this),mouseover:this.mouseover.bind(this)})};c.prototype.setTypeahead=function(a){"use strict";this.typeahead=a};c.prototype.setAccessibilityControlElement=function(a){"use strict";this.accessibilityElement=a};c.prototype.getElement=function(){"use strict";return this.element};c.prototype.mouseup=function(a){"use strict";a.button!=2&&(this.select(!0),a.prevent())};c.prototype.mouseover=function(a){"use strict";if(this.ignoreMouseover){this.ignoreMouseover=!1;return}this.visible&&this.highlight(this.getIndex(a))};c.prototype.reset=function(a){"use strict";a||(this.disableAutoSelect=!1);this.index=-1;this.items=[];this.results=[];this.value="";this.content.innerHTML="";this.inform("reset");return this};c.prototype.getIndex=function(a){"use strict";return this.items.indexOf(b("Parent").byTag(a.getTarget(),"li"))};c.prototype.getSelection=function(){"use strict";var a=this.results[this.index]||null;return this.visible?a:null};c.prototype.isEmpty=function(){"use strict";return!this.results.length};c.prototype.isVisible=function(){"use strict";return!!this.visible};c.prototype.show=function(){"use strict";b("CSS").show(this.element);this.results&&this.results.length&&(this.autoSelect&&this.accessibilityElement&&this.selected&&this.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(this.selected)));this.accessibilityElement&&this.accessibilityElement.setAttribute("aria-expanded","true");this.visible=!0;return this};c.prototype.hide=function(){"use strict";b("CSS").hide(this.element);this.accessibilityElement&&(this.accessibilityElement.setAttribute("aria-expanded","false"),this.accessibilityElement.removeAttribute("aria-activedescendant"));this.visible=!1;return this};c.prototype.render=function(a,c,d){"use strict";__p&&__p();this.value=a;if(!c.length){this.accessibilityElement&&this.accessibilityElement.removeAttribute("aria-activedescendant");this.reset(!0);return}a={results:c,value:a};this.inform("beforeRender",a);c=a.results;a=(!this.value||d)&&this.index!==-1?this.index:this.getDefaultIndex(c);this.results=c;b("DOM").setContent(this.content,this.buildResults(c));this.items=this.getItems();this.highlight(a,!1);this.inform("render",this.results)};c.prototype.getItems=function(){"use strict";return b("DOM").scry(this.content,"li")};c.prototype.buildResults=function(c){"use strict";__p&&__p();var d,e=null;typeof this.renderer==="function"?(d=this.renderer,e=this.renderer.className||""):(d=a.TypeaheadRenderers[this.renderer],e=this.renderer);d=d.bind(this);c=c.map(function(a,b){a=a.node||d(a,b);a.setAttribute("role","option");return a});e=b("DOM").create("ul",{className:e,id:"typeahead_list_"+(this.typeahead?b("getOrCreateDOMID")(this.typeahead):b("getOrCreateDOMID")(this.element))},c);e.setAttribute("role","listbox");return e};c.prototype.showLoadingIndicator=function(){"use strict";var a=b("createIxElement")(g("85428"));a=b("DOM").create("li",{className:"typeaheadViewInternalLoading"},a);a=b("DOM").create("ul",{role:"listbox"},a);b("DOM").setContent(this.content,a)};c.prototype.getDefaultIndex=function(a){"use strict";a=this.autoSelect&&!this.disableAutoSelect;return this.index<0&&!a?-1:0};c.prototype.next=function(){"use strict";this.highlight(this.index+1),this.inform("next",this.selected)};c.prototype.prev=function(){"use strict";this.highlight(this.index-1),this.inform("prev",this.selected)};c.prototype.getItemText=function(a){"use strict";var c="";a&&(c=a.getAttribute("aria-label"),c||(c=b("getElementText")(a),a.setAttribute("aria-label",c)));return c};c.prototype.setIsViewingSelectedItems=function(a){"use strict";this.viewingSelected=a;return this};c.prototype.getIsViewingSelectedItems=function(){"use strict";return!!this.viewingSelected};c.prototype.highlight=function(a,c){"use strict";this.selected&&(b("CSS").removeClass(this.selected,"selected"),this.selected.setAttribute("aria-selected","false")),a>this.items.length-1?a=-1:a<-1&&(a=this.items.length-1),a>=0&&a<this.items.length?(this.selected=this.items[a],b("CSS").addClass(this.selected,"selected"),this.selected.setAttribute("aria-selected","true"),this.accessibilityElement&&setTimeout(function(){this.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(this.selected))}.bind(this),0)):this.accessibilityElement&&this.accessibilityElement.removeAttribute("aria-activedescendant"),this.index=a,this.disableAutoSelect=a==-1,c!==!1&&this.inform("highlight",{index:a,selected:this.results[a],element:this.selected})};c.prototype.select=function(a){"use strict";if(this.headerIndex&&a)return;var b=this.index,c=this.results[b],d=this.element.getAttribute("id");if(c){var e=function(c){this.inform("select",{index:b,clicked:!!a,selected:c,id:d,query:this.value}),this.inform("afterSelect")}.bind(this);this.shouldValidateTypeaheadSelection(c)?this.validateTypeaheadSelection(c,e):e(c)}};c.prototype.shouldValidateTypeaheadSelection=function(a){"use strict";return!1};c.prototype.validateTypeaheadSelection=function(a,b){"use strict"};Object.assign(c.prototype,{events:["highlight","render","reset","select","beforeRender","next","prev"],renderer:b("BasicTypeaheadRenderer"),autoSelect:!1,ignoreMouseover:!1});e.exports=c}),null);
__d("WorkGalahadDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.dispatch=this.dispatch.bind(this)}e.exports=new a({strict:!0})}),null);
__d("WorkGalahadNavActions",["URI","WorkGalahadDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var c=a.appTabID,d=a.entityKeys;a=a.uri;b("WorkGalahadDispatcher").dispatch({type:"nav/markPendingTransition",appTabID:c,entityKeys:d,uri:new(b("URI"))(a).getPath()})}function c(a){b("WorkGalahadDispatcher").dispatch({type:"nav/setActiveEntityKeys",entityKeys:a})}function d(a){b("WorkGalahadDispatcher").dispatch({type:"nav/selectAppTabID",appTabID:a})}function f(a,c,d){b("WorkGalahadDispatcher").dispatch({type:"nav/selectStackedChannel",stackedChannelData:{type:a,title:c,data:d}})}function g(){b("WorkGalahadDispatcher").dispatch({type:"nav/dismissStackedChannel"})}function h(a){b("WorkGalahadDispatcher").dispatch({type:"nav/startLoading",uri:new(b("URI"))(a).getPath()})}function i(){b("WorkGalahadDispatcher").dispatch({type:"nav/stopLoading"})}function j(a){b("WorkGalahadDispatcher").dispatch({type:"nav/showPublicContentBanner",html:a})}function k(){b("WorkGalahadDispatcher").dispatch({type:"nav/hidePublicContentBanner"})}function l(){b("WorkGalahadDispatcher").dispatch({type:"nav/showSearchOverlay"})}function m(){b("WorkGalahadDispatcher").dispatch({type:"nav/hideSearchOverlay"})}e.exports={markPendingTransition:a,setActiveEntityKeys:c,selectAppTabID:d,selectStackedChannel:f,dismissStackedNavigation:g,startLoading:h,stopLoading:i,showPublicContentBanner:j,hidePublicContentBanner:k,showSearchOverlay:l,hideSearchOverlay:m}}),null);
__d("WorkGalahadHoverHelper",["ReactHooks_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";var g=b("ReactHooks_DEPRECATED").useState;a={useHover:function(a){var b=g(!1),c=b[0],d=b[1];return[c,{onMouseEnter:function(){a&&a(),d(!0)},onMouseLeave:function(){return d(!1)}}]}};e.exports=a}),null);
__d("WorkGalahadChannelItemChromeList.react",["cx","FlexLayout.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){var c=a.centered,d=a.textType,e=a.roundIcon,f=a.isNested,g=a.isBig,h=a.index,i=a.spacing;a=a.isIndented;var j={animationDelay:h*.1+"s"};return b("React").createElement("li",{className:"_6s9f"+(f?" _6unp":"")+(g?" _6s9i":"")+(i==="narrow"?" _2pi2":"")+(i==="medium"?" _79x2":"")+" _2pih"+(a?" _2piv":"")+(a?"":" _2piu")},b("React").createElement("div",{className:f?"_3-9b":""},b("React").createElement(b("FlexLayout.react"),{align:c?"center":"start"},f?null:b("React").createElement(b("FlexLayout.react"),{align:"center",className:(a?"_3-90":"")+(a?"":" _3-91")+" _3nmt"},b("React").createElement("div",{className:"_6s9g"+(e?" _6s9j":""),style:j})),b("React").createElement(b("FlexLayout.react"),{align:"start",direction:"vertical",style:{width:"100%",transform:"scaleX("+(Math.abs(Math.sin(h))*(1-.6)+.6)+")",transformOrigin:"center left"}},b("React").createElement("div",{className:"_6s9h _6s9k",style:j}),d==="subtitled"?b("React").createElement("div",{className:"_6s9h _6s9l",style:j}):null,d==="multi"?b("React").createElement(b("React").Fragment,null,b("React").createElement("div",{className:"_6s9h _6s9l",style:j}),b("React").createElement("div",{className:"_6s9h _6s9m",style:j})):null))))}function i(){return b("React").createElement("li",null,b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_3-8n _2o1m",direction:"horizontal",justify:"all"},b("React").createElement("div",{className:"_6s9h _6s9l"})))}function a(a){__p&&__p();var c=a.amount,d=a.type;a=a.withHeader;var e;switch(d){case"groups":e={centered:!0,textType:"single",roundIcon:!1,isNested:!1,isBig:!1,spacing:"narrow",isIndented:!0};break;case"people":e={centered:!0,textType:"single",roundIcon:!0,isNested:!1,isBig:!1,spacing:"narrow",isIndented:!0};break;case"notifications":e={centered:!1,textType:"multi",roundIcon:!0,isNested:!1,isBig:!0,spacing:"narrow",isIndented:!0};break;case"minimall":e={centered:!1,textType:"multi",roundIcon:!0,isNested:!1,isBig:!1,spacing:"narrow",isIndented:!0};break;case"inlineMinimall":e={centered:!1,textType:"multi",roundIcon:!0,isNested:!0,isBig:!1,spacing:"narrow",isIndented:!0};break;case"search":e={centered:!1,textType:"subtitled",roundIcon:!1,isNested:!1,isBig:!1,spacing:"medium",isIndented:!1};break}d=[];for(var f=0;f<c;f++)d.push(b("React").createElement(h,babelHelpers["extends"]({index:f,key:f},e)));return b("React").createElement(b("React").Fragment,null,a?b("React").createElement(i,null):null,d)}a.defaultProps={withHeader:!1};e.exports=a}),null);
__d("WorkGalahadIcon.react",["Image.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.className,d=a.icons,e=a.hovered;a=a.selected;var f=d.normal;a?f=d.selected!=null?d.selected:f:e&&(f=d.hovered!=null?d.hovered:f);return b("React").createElement(b("Image.react"),{className:c,src:f})}e.exports=a}),null);
__d("WorkGalahadDropdownMenuItem.react",["ix","cx","FlexLayout.react","Image.react","Link.react","React","WorkGalahadHoverHelper","WorkGalahadIcon.react","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("WorkGalahadHoverHelper").useHover;function a(a){__p&&__p();var c=a.itemData,d=a.onHide;a=i();var e=a[0];a=a[1];switch(c.type){case"item":var f=c.label,h=c.onClick,j=c.icons,k=c.description,l=c.isStatic,m=c.itemKey,n=c.href,o=c.subMenu,p=c.ajaxify,q=c.rel,r=c.hideMenu,s=f!==null&&f!==void 0,t=k!==null&&k!==void 0,u=j!==null&&j!==void 0,v=s&&!t;return b("React").createElement("div",babelHelpers["extends"]({className:"_74ll"},a),b("React").createElement(b("Link.react"),{key:m,className:"_78g3"+(o?" _74lm":"")+(l?" _74ln":""),href:n,onClick:function(){h&&h(),r===!0&&d!=null&&d()},ajaxify:p,rel:q},s?b("React").createElement(b("FlexLayout.react"),{align:"center"},b("React").createElement("div",{className:u?"_74lo":""},u&&b("React").createElement(b("WorkGalahadIcon.react"),{icons:{normal:v?j.secondary:j.normal,hovered:j.hovered},hovered:l?!1:e,selected:!1})),s?b("React").createElement(b("XUIText.react"),{className:"_74lp"+(v?" _7d6w":""),display:"block",size:"body2",weight:t?"bold":void 0},typeof f==="function"?f({hovered:e}):f):null):null,t?b("React").createElement(b("XUIText.react"),{className:"_74lq"+(s?" _7d6z":"")+(u?" _4m0t":""),display:"block",size:"body2"},typeof k==="function"?k({hovered:e}):k):null,e&&o?b("React").createElement("div",{className:"_74lr"},b("React").createElement(b("Image.react"),{src:g("514453")})):null));case"header":return b("React").createElement("div",{key:c.itemKey,className:"_74k1"},c.label);case"separator":return b("React").createElement("div",{key:c.itemKey,className:"_74k2"},b("React").createElement("div",{className:"_74k3"}))}return null}e.exports=a}),null);
__d("WorkGalahadDropdownMenu.react",["cx","fbt","ContextualDialogNoArrow","FlexLayout.react","LayerHideOnBlur","LayerHideOnEscape","Link.react","React","ReactAbstractContextualDialog","ReactLayer","WorkGalahadDropdownMenuItem.react","compactArray"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({addedBehaviors:[b("LayerHideOnBlur"),b("LayerHideOnEscape")],displayName:"WorkGalahadContextualDialog",shouldSetARIAProperties:!1,theme:{wrapperClassName:"_76gj _53ii"}}));c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={currentMenuKey:this.props.menuData.menuKey,previousMenuKey:null},this.$1={},b}a.prototype.render=function(){var a,c=this.props,d=c.menuData,e=c.width,f=c.contextRef,g=c.onToggle,h=c.position,i=c.shown,k=c.label;c=c.alignment;var l=d.menuKey;d=d.items;a=(a=this.$1[this.state.currentMenuKey])==null?void 0:a.ref;a=a&&a.scrollHeight>0?{height:a.scrollHeight}:{height:"auto"};return b("React").createElement(j,{arrowBehavior:b("ContextualDialogNoArrow"),alignment:c,autoFocus:!1,hideOnBlur:!0,contextRef:f,onToggle:g,shown:i,position:h,width:e,offsetX:6,offsetY:h==="above"?-6:6,label:k},b("React").createElement("div",{className:"_74lf",style:a},b("React").createElement(b("FlexLayout.react"),{direction:"horizontal"},this.$2(l,d))))};a.prototype.$3=function(a){var b=this.state.currentMenuKey;this.setState({currentMenuKey:a,previousMenuKey:b})};a.prototype.$4=function(a){var b=this.state.previousMenuKey!==null&&this.state.currentMenuKey===this.$1[this.state.previousMenuKey].parentKey;if(a===this.state.currentMenuKey)return{width:this.props.width,"float":b?"right":"left"};else return{width:0,"float":b?"left":"right"}};a.prototype.$5=function(a){return b("React").createElement(b("React").Fragment,null,b("React").createElement("div",{className:"_76gk"},b("React").createElement(b("Link.react"),{key:"back-button",className:"_74lg",onClick:function(){return this.$3(a)}.bind(this)},b("React").createElement("div",{className:"_74lh"}),h._("Back"))),b("React").createElement(b("WorkGalahadDropdownMenuItem.react"),{itemData:{type:"separator",itemKey:"back-button-separator"}}))};a.prototype.$2=function(a,c,d){__p&&__p();d===void 0&&(d=null);var e=this.state.currentMenuKey,f=b("compactArray")(c.map(function(b){return b.type==="item"&&b.subMenu?{menuKey:b.subMenu.menuKey,parentKey:a,items:b.subMenu.items}:null}));this.$1[a]={parentKey:d};var g=this.$4(a);return b("React").createElement(b("React").Fragment,{key:a},b("React").createElement("div",{style:{width:g.width},className:"_74li"+(e!==a?" _74lj":""),ref:function(b){this.$1[a]={parentKey:d,ref:b}}.bind(this)},b("React").createElement("div",{style:{width:this.props.width,"float":g["float"]}},b("React").createElement(b("FlexLayout.react"),{direction:"vertical"},d!==null?this.$5(d):null,c.map(function(a){var c=a;if(a.type==="item"&&a.subMenu){var d=a.subMenu.menuKey;c={type:"item",itemKey:a.itemKey,label:a.label,icons:a.icons,description:a.description,isStatic:a.isStatic,subMenu:a.subMenu,href:a.href,onClick:function(){this.$3(d)}.bind(this)}}return b("React").createElement(b("WorkGalahadDropdownMenuItem.react"),{itemData:c,key:a.itemKey,onHide:function(){return this.props.onToggle&&this.props.onToggle(!1)}.bind(this)})}.bind(this))))),f.map(function(a){return this.$2(a.menuKey,a.items,a.parentKey)}.bind(this)))};a.defaultProps={position:"below"};e.exports=a}),null);
__d("useGalahadDropdownMenu",["React","ReactHooks_DEPRECATED","WorkGalahadDropdownMenu.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReactHooks_DEPRECATED").useRef,h=b("ReactHooks_DEPRECATED").useState;function a(a){var c=a.alignment,d=a.label,e=a.menuData,f=a.onShow,i=a.onHide,j=a.position;a=a.width;var k=h(!1),l=k[0],m=k[1],n=g();function o(a){m(a),a?f&&f():i&&i()}k=b("React").createElement(b("WorkGalahadDropdownMenu.react"),{alignment:c,contextRef:function(){return n.current},label:d,menuData:e,onToggle:o,position:j,shown:l,width:a});return[k,{ref:n,onClick:function(){return o(!l)}}]}e.exports=a}),null);
__d("WorkGalahadNavHeader.react",["cx","FlexLayout.react","Link.react","React","XUIText.react","joinClasses","nullthrows","useGalahadDropdownMenu"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){var c=a.action;a=a.title;var d=b("useGalahadDropdownMenu")({label:void 0,menuData:{menuKey:"headerMenu",items:b("nullthrows")(c.menuItems)}}),e=d[0];d=d[1];return b("React").createElement(b("FlexLayout.react"),{justify:"all",align:"center",className:"_2pij _3-96"},b("React").createElement(b("Link.react"),babelHelpers["extends"]({className:"_3-9b _2pin _2pit _2pid _23gh"},d),b("React").createElement(b("XUIText.react"),{size:"header4",weight:"bold",className:"_77md"},a)),c.extraAction,e)}function a(a){var c=a.action,d=a.className,e=a.indented;a=a.title;var f=b("React").createElement(b("XUIText.react"),{className:"_4es7",display:"inline",size:"body3",weight:"bold"},a);if(c&&c.menuItems!=null)return b("React").createElement(h,{action:c,title:a});else c&&c.href&&!c.title&&(f=b("React").createElement(b("Link.react"),{className:"_734o",href:c.href},f));return b("React").createElement(b("FlexLayout.react"),{align:"center",className:b("joinClasses")("_2pim _2pie"+(e?" _2o1q":"")+(e?"":" _2pit")+" _2pik",d),direction:"horizontal",justify:"all"},f,c&&b("React").createElement(b("Link.react"),{className:"_67k6",href:c.href,onClick:c.onClick},b("React").createElement(b("XUIText.react"),{display:"block",size:"body3"},c.title)))}a.defaultProps={indented:!0};e.exports=a}),null);
__d("FacebarTypeaheadMessengerThreadIcon.react",["CurrentUser","ImmutableObject","MercuryIDs","MessengerThreadImageReact.bs","React","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MessengerThreadImageReact.bs").jsComponent;function a(a){__p&&__p();var c=a.className;a=a.result;var d=a.uid,e=b("CurrentUser").getID();a=a.participantIds;if(!Array.isArray(a))return b("React").createElement("div",null);var f=[];a.forEach(function(a){f.push(b("MercuryIDs").getParticipantIDFromUserID(a.toString()))});a=new(b("ImmutableObject"))({thread_id:d,participants:f});return b("React").createElement(g,{participants:b("immutable").OrderedMap(a.participants.map(function(a){return[a,a]})),size:32,viewer:e,thread:a,className:c})}e.exports=a}),null);
__d("SimpleStructuredInput",["csx","Arbiter","ArbiterMixin","DataStore","DOM","Event","FacebarStructuredText","FlipDirection","Input","Parent","getActiveElement","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h;a=babelHelpers.inherits(i,b("mixin")(b("ArbiterMixin")));h=a&&a.prototype;function i(a){"use strict";h.constructor.call(this),this.$SimpleStructuredInput1=a,this.$SimpleStructuredInput2=b("DOM").find(a,"._1frb"),this.$SimpleStructuredInput3=b("DOM").find(a,"._5eay"),b("DataStore").set(a,"SimpleStructuredInput",this),this.init()}i.prototype.init=function(){"use strict";var a=function(a){return this.inform(a.type)}.bind(this);b("Event").listen(this.$SimpleStructuredInput2,"blur",a);b("Event").listen(this.$SimpleStructuredInput2,"focus",a);b("Event").listen(this.$SimpleStructuredInput2,"input",function(){b("FlipDirection").setDirection(this.$SimpleStructuredInput2,1,!0),this.inform("change")}.bind(this));this.inform("init",null,"persistent")};i.prototype.setHint=function(a){"use strict";a=a.map(function(a){return a.text}).join("");var c=b("Input").getValue(this.$SimpleStructuredInput2);this.hasFocus()&&c.length>0&&a.toLowerCase().indexOf(c.toLowerCase())===0?b("Input").setValue(this.$SimpleStructuredInput3,c+a.slice(c.length)):b("Input").setValue(this.$SimpleStructuredInput3,"")};i.prototype.focus=function(){"use strict";this.$SimpleStructuredInput2.focus()};i.prototype.blur=function(){"use strict";this.$SimpleStructuredInput2.blur(),this.setHint([])};i.prototype.hasFocus=function(){"use strict";return b("DOM").contains(this.$SimpleStructuredInput1,b("getActiveElement")())};i.prototype.setStructure=function(a,c){c===void 0&&(c=!1);a=a.map(function(a){return a.text});b("Input").setValue(this.$SimpleStructuredInput2,a.join(""));c!==!0&&this.inform("change")};i.prototype.getStructure=function(){"use strict";return b("FacebarStructuredText").fromString(b("Input").getValue(this.$SimpleStructuredInput2)).toStruct()};i.prototype.getSelection=function(){"use strict";return{offset:this.$SimpleStructuredInput2.selectionStart,length:this.$SimpleStructuredInput2.selectionEnd-this.$SimpleStructuredInput2.selectionStart}};i.prototype.setSelection=function(a){"use strict";this.hasFocus()&&(this.$SimpleStructuredInput2.setSelectionRange(a.offset,a.offset+a.length),this.inform("select"))};i.prototype.isSelectionAtEnd=function(){"use strict";var a=this.getSelection().offset,c=b("Input").getValue(this.$SimpleStructuredInput2).length;return a>=c};i.prototype.selectAll=function(){"use strict";this.setSelection({offset:0,length:b("Input").getValue(this.$SimpleStructuredInput2).length})};i.getInstance=function(a){"use strict";a=b("Parent").bySelector(a,"._5eaz");if(!(a instanceof HTMLElement))throw new Error("No DOMElement structured input found using");return b("DataStore").get(a,"SimpleStructuredInput")||new i(a)};e.exports=i}),null);
__d("WorkGalahadAppTabID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PROFILE:"profile",HOME:"home",NOTIFICATIONS:"notifications",CHATS:"chats",ADMIN_PANEL:"admin_panel",RESELLER_CONSOLE:"reseller_console"})}),null);
__d("WorkInviteSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({RHC_MODULE:"rhc_module",NEWSFEED_NUX:"newsfeed_nux",BULK_UPLOAD:"bulk_upload",GROUP_BULK_UPLOAD:"group_bulk_upload",GROUP_BULK_UPLOAD_FROM_SETTINGS:"group_bulk_upload_from_settings",GROUP_BULK_UPLOAD_FROM_RHC:"group_bulk_upload_from_rhc",GROUP_BULK_UPLOAD_FROM_MEMBERS:"group_bulk_upload_from_members",GROUP_INVITE_DIALOG:"group_invite_dialog",GROUP_INVITE_TYPEAHEAD:"group_invite_typeahead",GROUP_RHC_LINK:"group_rhc_link",SEARCH_RESULT:"search_result",SEARCH_RHC:"search_rhc",SEARCH_TYPEAHEAD:"search_typeahead",INSTANCE_INVITE_LINK:"instance_invite_link",SIGN_UP:"sign_up",SIGN_UP_CHAT_FIRST:"sign_up_chat_first",SIGN_UP_NON_GENESIS:"sign_up_non_genesis",SIGN_UP_M_SITE:"sign_up_m_site",SETUP_TEAM_SIGNUP_STEP:"setup_team_signup_step",SETUP_TEAM_SIGNUP_STEP_CHAT_FIRST:"setup_team_signup_step_chat_first",SETUP_SUBCOMMUNITY_INVITE_STEP:"setup_subcommunity_invite_step",FORWARD_INVITE_EMAIL:"forward_invite_email",WORK_GOALS:"work_goals",TEAM_PROTILE:"team_protile",ACCESS_REQUESTED:"access_requested",ADMIN_ADD_PEOPLE_LINK:"admin_app_people_link",ADMIN_OTHER:"admin_other",WORK_GOAL_INLINE:"work_goal_inline",CONTEXTUAL_INVITE_EMPTY_GROUP:"contextual_invite_empty_group",WORK_GOLDIE_GROUP_INVITE:"goldie_group_invite",GOLDIE_SIGN_UP_INVITE_STEP:"goldie_sign_up_invite_step",WORK_GALAHAD_COMPOSE:"work_galahad_compose",WORK_SUGGESTED_DEFAULT_GROUPS:"work_suggested_default_groups",WORK_UNDELIVERED_INVITE_NOTIF:"work_undelivered_invite_notif",AZURE:"azure",AZURE_BULK:"azure_bulk",GSUITE:"gsuite",GSUITE_BULK:"gsuite_bulk",SELF_INVITE:"self_invite",SELF_INVITE_VIA_INVITE_LINK:"self_invite_via_invite_link",SELF_INVITE_VIA_SSO:"self_invite_via_sso",WORKPLACE_FB_COM:"workplace_fb_com",MCG_EXTERNAL_INVITE:"mcg_external_invite",GUEST_MEMBER_INVITE:"guest_member_invite",SUBCOMMUNITY_INVITE:"subcommunity_invite",M2_ADS_TO_NGO:"m2_ads_to_ngo",M2_AYMT_TO_NGO:"m2_aymt_to_ngo",MOBILE_APP_CLAIM:"mobile_app_claim",COMPANY_SUBDOMAIN_LOGIN_PAGE:"company_subdomain_login_page",WORK_FACEBOOK_COM:"work_facebook_com",AYMT:"aymt",TESTS:"tests",E2E_TESTS:"e2e_tests",TESTS_STANDARD_SUBCOMMUNITIES:"tests_standard_subcommunities",WWW_BOOKMARK:"www_bookmark",MSITE_BOOKMARK:"msite_bookmark",MSITE_END_OF_FEED:"msite_end_of_feed",WWW_BLUEBAR:"www_bluebar",WWW_BLUEBAR_LINK:"www_bluebar_link",WWW_CHAT_SIDEBAR:"www_chat_sidebar",WWW_SIDEBAR_PENDING_SECTION:"www_sidebar_pending_section",WWW_CHAT_THREAD_LIST:"www_chat_thread_list",WWW_FOLLOW_SUGGESTIONS_PAGE:"www_follow_suggestions_page",FEED_END_STATE:"feed_end_state",GROUP_END_STATE:"group_end_state",PROFILE_END_STATE:"profile_end_state",RHC_UNIT_ADD_PEOPLE_BUTTON:"rhc_unit_add_people_button",WWW_FEED_QP:"www_feed_qp",ANDROID_APP:"android_app",ANDROID_INVITE_OPTION_PICKER:"android_invite_option_picker",ANDROID_TYPED_EMAIL:"android_typed_email",ANDROID_GROUP_TYPED_EMAIL:"android_group_typed_email",ANDROID_CONTACT_EMAIL:"android_contact_email",ANDROID_ALL_CONTACT_EMAILS:"android_all_contact_emails",IOS_APP:"ios_app",IOS_GROUP_TYPED_EMAIL:"ios_group_typed_email",IOS_INSTANCE_TYPED_EMAIL:"ios_instance_typed_email",IOS_CONTACT_EMAIL:"ios_contact_email",IOS_ALL_CONTACT_EMAILS:"ios_all_contact_emails",FIRST_COWORKER_INVITES_EMAIL:"first_coworker_invites_email",SIGNUP4_E2E_STANDARD_GENESIS:"signup4_e2e_test_standard_genesis",SIGNUP4_E2E_PREMIUM_GENESIS:"signup4_e2e_test_premium_genesis",WORK_MANAGED_CLAIM_TEST:"work_managed_claim_test",UNKNOWN:"unknown",IN_PRODUCT_NUX_CARD:"in_product_nux_card",IN_PRODUCT_NUX_CARD_INVITE_MORE_COWORKERS:"in_product_nux_card_invite_more_coworkers",WORKPLACE_JOURNEY:"workplace_journey",UX_RESEARCH:"ux_research",RESELLER:"reseller"})}),null);
__d("StaticContainer.react",["React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.shouldComponentUpdate=function(a){"use strict";return!!a.shouldUpdate};a.prototype.render=function(){"use strict";var a=this.props.children;return a===null||a===!1?null:b("React").Children.only(a)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("XWorkInviteCoworkersDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/invite_coworkers/dialog/",{source:{type:"Enum",required:!0,enumType:1},group_id:{type:"FBID"},undelivered_users:{type:"FBIDVector"},__asyncDialog:{type:"Int"}})}),null);