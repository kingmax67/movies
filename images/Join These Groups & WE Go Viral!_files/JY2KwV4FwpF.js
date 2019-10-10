if (self.CavalryLogger) { CavalryLogger.start_js(["YHh+4"]); }

__d("MentionResultsPropTypes",["React","SearchableEntry","SelectionState"],(function(a,b,c,d,e,f){a=b("React").PropTypes;c={viewID:a.string.isRequired,selection:a.instanceOf(b("SelectionState")).isRequired,contextComponent:a.object.isRequired,mentionableEntries:a.array.isRequired,highlightedMentionable:a.instanceOf(b("SearchableEntry")),onMentionSelect:a.func.isRequired,onMentionHighlight:a.func.isRequired,onMentionRenderHighlight:a.func.isRequired};e.exports=c}),null);
__d("MentionsLayer.react",["Bootloader","Locale","MentionResultsPropTypes","React","areEqual"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;var g=!1,h=b("Locale").isRTL(),i,j,k,l,m=5;c=b("React").createClass({displayName:"MentionsLayer",propTypes:babelHelpers["extends"]({},b("MentionResultsPropTypes"),{typeaheadView:a.func.isRequired,typeaheadViewProps:a.object,autoflip:a.bool,position:a.oneOf(["above","below"])}),getInitialState:function(){return{bootloaded:g}},getDefaultProps:function(){return{offset:m}},componentDidMount:function(){this.state.bootloaded||n(function(){this.isMounted()&&this.setState({bootloaded:!0})}.bind(this))},_onMentionSelect:function(a,b){b.preventDefault(),this.props.onMentionSelect(a,b)},shouldComponentUpdate:function(a,c){return this.state.bootloaded!==c.bootloaded||!b("areEqual")(this.props.mentionableEntries,a.mentionableEntries)||this.props.highlightedMentionable!==a.highlightedMentionable||this.props.characterOffset!==a.characterOffset},render:function(){__p&&__p();if(!this.state.bootloaded)return null;var a=this.props.mentionableEntries,c=this.props.selection;c=c.isCollapsed()&&c.getHasFocus()&&a&&a.length;var d=null,e=this.props.typeaheadViewProps,f=!1;e&&e.positionAtContext?f=!0:c&&(d=l(this.props.characterOffset,h));e={};this.props.autoflip&&(e.ContextualLayerAutoFlip=j,e.ContextualLayerUpdateOnScroll=k);var g=this.props.typeaheadView;return b("React").createElement(i,{shown:c,context:this.props.contextComponent,contextBounds:d,containerWidthMatchContext:f,offsetY:this.props.offset,offsetX:this.props.offset,position:this.props.position||"below",behaviors:e,shouldSetARIAProperties:!1},b("React").createElement("div",{"data-testid":"mentions-contextual-layer"},b("React").createElement(g,{id:this.props.viewID,viewProps:this.props.typeaheadViewProps,highlightedEntry:this.props.highlightedMentionable,entries:a||[],onSelect:this._onMentionSelect,onHighlight:this.props.onMentionHighlight,onRenderHighlight:this.props.onMentionRenderHighlight})))}});function n(a){b("Bootloader").loadModules(["ContextualLayer.react","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","getMentionableRect"],function(b,c,d,e){i=b,j=c,k=d,l=e,g=!0,a()},"MentionsLayer.react")}e.exports=c}),null);
__d("SUIButtonUniform.fds",["cssVar","createBUITypeStyle"],(function(a,b,c,d,e,f,g){"use strict";a={height:{normal:28,"short":24,tall:36},padding:{normal:{button:"11px",icon:"7px",onlyIcon:"7px"},"short":{button:"7px",icon:"3px",onlyIcon:"3px"},tall:{button:"19px",icon:"7px",onlyIcon:"11px"}},typeStyle:b("createBUITypeStyle")({color:"#444950",fontSize:"12px",fontWeight:"bold"}),use:{"default":{active:{background:"#DADDE1",borderColor:"#DADDE1",color:"#444950"},disabled:{background:"#F5F6F7",borderColor:"#EBEDF0",color:"#BEC3C9"},hover:{background:"#EBEDF0",borderColor:"#DADDE1",color:"#444950"},normal:{background:"#F5F6F7",borderColor:"#DADDE1",color:"#444950"}},confirm:{active:{background:"#1D3C78",borderColor:"#1D3C78",color:"#FFFFFF"},disabled:{background:"#AAC9FF",borderColor:"#AAC9FF",color:"#FFFFFF"},hover:{background:"#2851A3",borderColor:"#2851A3",color:"#FFFFFF"},normal:{background:"#3578E5",borderColor:"#3578E5",color:"#FFFFFF"}},special:{active:{background:"#006900",borderColor:"#006900",color:"#FFFFFF"},disabled:{background:"#86DF81",borderColor:"#86DF81",color:"#FFFFFF"},hover:{background:"#008C00",borderColor:"#008C00",color:"#FFFFFF"},normal:{background:"#00A400",borderColor:"#00A400",color:"#FFFFFF"}},flat:{active:{background:"rgba(0, 0, 0, 0.1)",borderColor:"transparent",color:"#444950"},disabled:{background:"transparent",borderColor:"transparent",color:"#BEC3C9"},hover:{background:"rgba(0, 0, 0, 0.05)",borderColor:"transparent",color:"#444950"},normal:{background:"transparent",borderColor:"transparent",color:"#444950"}},flatWhite:{active:{background:"rgba(255, 255, 255, 0.1)",borderColor:"transparent",color:"#FFFFFF"},disabled:{background:"transparent",borderColor:"transparent",color:"rgba(255, 255, 255, 0.4)"},hover:{background:"rgba(255, 255, 255, 0.05)",borderColor:"transparent",color:"#FFFFFF"},normal:{background:"transparent",borderColor:"transparent",color:"#FFFFFF"}}}};e.exports=a}),null);
__d("FDSPrivateButtonTheme.fds18",["SUIButtonUniform.fds","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";a=b("makeSUIFDSPrivateTheme")("FDSButton",{SUIButton:b("SUIButtonUniform.fds")});e.exports=a}),null);
__d("FDSPrivateButtonThemeContext",["FDSPrivateButtonTheme.fds18","React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(b("FDSPrivateButtonTheme.fds18"))}),null);
__d("FDSButton.react",["FDSPrivateButtonThemeContext","React","SUIBorderUtils","SUIButton.react","makeFDSStandardComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c={borderedSides:b("SUIBorderUtils").ALL_SIDES,isDisabled:!1,labelIsHidden:!1,roundedCorners:b("SUIBorderUtils").ALL_CORNERS,size:"medium",type:"button",use:"default"};g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){var a=this.props;return b("React").createElement(b("FDSPrivateButtonThemeContext").Consumer,null,function(c){return b("React").createElement(b("SUIButton.react"),{"aria-busy":a.busyIndicator!==void 0?!0:void 0,"aria-haspopup":a["aria-haspopup"],borderedSides:a.borderedSides,"data-testid":a["data-testid"],"data-tooltip-position":a.tooltipPosition,density:a.density,disabled:a.isDisabled,height:h(a.size),href:a.href,icon:a.icon,iconAfter:a.busyIndicator===void 0?a.iconAfter:void 0,id:a.id,isDepressed:a.isDepressed,label:a.label,labelIsHidden:a.labelIsHidden,layerAction:a.layerAction,margin:a.margin,maxWidth:a.maxWidth,minWidth:a.minWidth,onBlur:a.onBlur,onClick:a.onClick,onFocus:a.onFocus,onKeyDown:a.onKeyDown,onKeyUp:a.onKeyUp,onMouseDown:a.onMouseDown,onMouseEnter:a.onMouseEnter,onMouseLeave:a.onMouseLeave,onMouseUp:a.onMouseUp,rel:a.rel,rightContent:a.busyIndicator,roundedCorners:a.roundedCorners,style:a.style,target:a.target,textAlign:a.textAlign,theme:c,tooltip:a.tooltip,tooltipDelay:a.tooltipDelay,type:a.type,use:i(a.use),value:a.value,width:a.width})})};function a(){g.apply(this,arguments)}a.defaultProps=c;function h(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}function i(a){return a==="primary"?"confirm":a}d=b("makeFDSStandardComponent")("FDSButton",a);d.defaultProps=c;e.exports=d}),null);
__d("XUIDialogCancelButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"cancel",label:g._("Cancel")}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SimpleXUIDialog",["cx","DialogX","LayerAutoFocusReact","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=445;a={show:function(a,c,d,e){var f=b("React").createElement(b("XUIDialogOkayButton.react"),{action:"cancel",use:"confirm"});return this.showEx(a,c,f,d,e)},showConfirm:function(a,c,d,e){var f=!1,g=b("React").createElement(b("XUIDialogOkayButton.react"),{action:"cancel",className:e&&e.autofocusConfirm?"autofocus":"",use:"confirm",onClick:function(){f=!0}});e&&e.confirmBtnTxt&&(g=b("React").createElement(b("XUIDialogButton.react"),{className:b("joinClasses")(e&&e.autofocusConfirm?"autofocus":"","_2z1w"),action:"cancel",use:"confirm",label:e.confirmBtnTxt,onClick:function(){f=!0}}));g=b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),{onClick:function(){f=!1}}),g);function h(){d&&d(f)}return this.showEx(a,c,g,h,e)},showEx:function(a,c,d,e,f){__p&&__p();f=f||{};var g=[b("LayerDestroyOnHide"),b("LayerFadeOnShow"),b("LayerFadeOnHide"),b("LayerHideOnEscape"),b("LayerRefocusOnHide")];f.hideOnBlur!==!1&&g.push(b("LayerHideOnBlur"));f.useReactFocusBehavior&&g.push(b("LayerAutoFocusReact"));g={width:f.width||h,xui:!0,addedBehaviors:g,causalElement:f.causalElement};if(c){var i=b("uniqueID")();g.titleID=i;c=b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:f.showCloseButton!==!1,id:i},c)}d&&(d=b("React").createElement(b("XUIDialogFooter.react"),{"data-testid":"simple_xui_dialog_footer",leftContent:f.leftContent},d));i=b("React").createElement("div",null,c,b("React").createElement(b("XUIDialogBody.react"),null,a),d);f=new(b("DialogX"))(g,i);e&&f.subscribe("hide",e);f.show();return f}};e.exports=a}),null);
__d("LazyWorkMultiCompanyChatTooltip.react",["JSResource","Placeholder.react","lazyLoadComponent","react"],(function(a,b,c,d,e,f){"use strict";var g=b("lazyLoadComponent")(b("JSResource")("WorkMultiCompanyChatTooltip.react").__setRef("LazyWorkMultiCompanyChatTooltip.react"));function a(a){return b("react").createElement(b("Placeholder.react"),{fallback:a.children},b("react").createElement(g,null,a.children))}e.exports=a}),null);
__d("LazyWorkMultiCompanyChatTooltipReact.bs",["ReasonReact.bs","LazyWorkMultiCompanyChatTooltip.react"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("ReasonReact.bs").wrapJsForReason(b("LazyWorkMultiCompanyChatTooltip.react"),{},a)}f.make=a}),null);
__d("deepFreezeValue",["ImmutableValue"],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(a===null||a===void 0)return;switch(typeof a){case"string":return;case"boolean":return;case"number":return;case"function":return;default:b("ImmutableValue").deepFreezeRootNode(a)}}e.exports=a}),null);
__d("XFRXHandleChevronClickController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/frx/handle_chevron_click/",{})}),null);
__d("FRXHandleChevronClick",["AsyncRequest","Event","XFRXHandleChevronClickController"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c,d,e){b("Event").listen(a,"click",function(){new(b("AsyncRequest"))().setURI(b("XFRXHandleChevronClickController").getURIBuilder().getURI()).setMethod("POST").setData({reportable_ent_id:c,frx_entry_point:d,nfx_story_location:e}).send()})}};e.exports=a}),null);
__d("Cache",["DateConsts","TimeSlice"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1=new Map()}a.prototype.has=function(a){return this.$1.has(a)};a.prototype.get=function(a,b){a=this.__getRaw(a);return!a?b:a.$2};a.prototype.getAll=function(a,b){var c=new Map();a.forEach(function(a){return c.set(a,this.get(a,b))}.bind(this));return c};a.prototype["delete"]=function(a){var b=this.__getRaw(a);b&&b.$3&&clearTimeout(b.$3);return this.$1["delete"](a)};a.prototype.clear=function(){this.$1.forEach(function(a){a&&a.$3&&clearTimeout(a.$3)}),this.$1.clear()};a.prototype.set=function(a,c,d,e){__p&&__p();if(!this.shouldUpdate(a,d))return!1;var f=this.__getRaw(a);f||(f=this.__getNewRawObject());delete f.$2;delete f.$4;f.$3&&clearTimeout(f.$3);delete f.$3;f.$2=c;d!=null&&(f.$4=d);e!=null&&e>=0&&(f.$3=setTimeout(b("TimeSlice").guard(this["delete"].bind(this,a),"Cache expiration timeout"),e*b("DateConsts").MS_PER_SEC*b("DateConsts").SEC_PER_MIN));this.__setRaw(a,f);return!0};a.prototype.shouldUpdate=function(a,b){a=this.__getRaw(a);return a==null||a.$4==null||b==null||b>a.$4};a.prototype.size=function(){return this.$1.size};a.prototype.__getRaw=function(a){return this.$1.get(a)};a.prototype.__setRaw=function(a,b){this.$1.set(a,b)};a.prototype.__getNewRawObject=function(){return{$2:null,$3:null,$4:null,$5:null,$6:null}};a.prototype.__keys=function(){return this.$1.keys()};e.exports=a}),null);
__d("memoizeByReference",["MemoizationInstrumentation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=typeof WeakMap==="function";function a(a,c){__p&&__p();c===void 0&&(c=a.name||"unknown");var d=g?new WeakMap():new Map(),e=function(e){__p&&__p();var f=b("MemoizationInstrumentation").onFunctionCall("memoizeByReference",c);if(d.has(e)){var g=d.get(e);if(g!==void 0){f&&f(!0);return g[0]}}g=a(e);d.set(e,[g]);f&&f(!1);return g};return e}e.exports=a}),null);