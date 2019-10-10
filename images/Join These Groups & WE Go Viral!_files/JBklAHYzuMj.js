if (self.CavalryLogger) { CavalryLogger.start_js(["z7cwO"]); }

__d("DockTabsViewportFantaTabUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();f=9;var g=284,h=g+f;function a(){return h+1}function b(a){return Math.floor(a/h)}function c(a){if(!a)return null;a=a.fantaTabModelStateGetter;return a?a():null}function d(a){return a?a.size:0}e.exports={getTabCountToFitWidth:b,getMinRequiredWidthForFirstFantaTab:a,getFantaTabModelFromCallbacks:c,getNumFantaTabsFromModel:d}}),null);
__d("DockTabsViewportPinnedConversationTabUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=496+9+2,h=210+9+2,i=52;function j(){return g}function k(){return h}function a(){return i}function b(a){return a.getIsRaised()?j():k()}function c(){return j()+i}function d(a){a=a||{};a=a.pinnedConvoTabStateGetter;return a?a():null}function f(a){return a?a.getTotalTabCount():0}e.exports={getRaisedPinnedConvoTabWidth:j,getLoweredPinnedConvoTabWidth:k,getPinnedConvoSelectorWidth:a,getPinnedConvoTabWidth:b,getMinRequiredWidthForFirstConvoTab:c,getPinnedConvoTabsStateFromCallbacks:d,getNumPinnedConvoTabsFromModel:f}}),null);
__d("DockTabsViewportCalculator",["csx","Arbiter","DataStore","Dock","DockTabsViewportFantaTabUtils","DockTabsViewportPinnedConversationTabUtils","DOM","Event","FullScreen","SubscriptionsHandler","Vector","ViewportBounds","ge","getViewportDimensions","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=50;a=35;var i=a,j="dock-tab-viewport-inst",k=b("DockTabsViewportFantaTabUtils").getMinRequiredWidthForFirstFantaTab,l=b("DockTabsViewportFantaTabUtils").getFantaTabModelFromCallbacks,m=b("DockTabsViewportFantaTabUtils").getNumFantaTabsFromModel,n=b("DockTabsViewportPinnedConversationTabUtils").getMinRequiredWidthForFirstConvoTab,o=b("DockTabsViewportPinnedConversationTabUtils").getNumPinnedConvoTabsFromModel,p=b("DockTabsViewportPinnedConversationTabUtils").getPinnedConvoTabsStateFromCallbacks;function q(a){return a?b("Vector").getElementDimensions(a).x:0}function r(a){this.$1=a,this.$3=0,this.$4=0,this.$5=null,this.$6=null,this.$7=!1,this.$8=!1,this.$9=!1,this.$2=new(b("SubscriptionsHandler"))(),this.$10(),this.$11()}r.prototype.$10=function(){var a=this.$12.bind(this);this.$2.addSubscriptions(b("Event").listen(window,"resize",a),b("Dock").subscribe("resize",a),b("Arbiter").subscribeOnce("sidebar/initialized",a,"new"),b("FullScreen").subscribe("changed",function(){b("FullScreen").isFullScreen()?(this.$7=!0,this.$8=!1):(this.$7=!1,this.$8&&(b("setImmediate")(function(){a()}),this.$8=!1))}.bind(this)))};r.prototype.registerFantaTabCallbacks=function(a){this.$5=a};r.prototype.registerPinnedConvoTabCallbacks=function(a){this.$6=a};r.prototype.forceRecalculateFBDockWidth=function(){this.$11(),this.$13({forceRecalculateChatTabs:!1,pinnedConvoUpdateData:null})};r.prototype.forceRecalculateChatTabs=function(){this.$13({forceRecalculateChatTabs:!0,pinnedConvoUpdateData:null})};r.prototype.forceRecalculatePinnedConvoTabs=function(a){this.$13({forceRecalculateChatTabs:!0,pinnedConvoUpdateData:a})};r.prototype.$12=function(){if(b("FullScreen").isFullScreen()||this.$7){this.$8=!0;return}this.forceRecalculateFBDockWidth()};r.prototype.$13=function(a){var b=a.forceRecalculateChatTabs;a=a.pinnedConvoUpdateData;var c=this.$14(),d=c.chatTabAvailableWidth;c=c.pinnedConvoTabAvailableWidth;this.$15(d,!!b);this.$16(c,a)};r.prototype.$16=function(a,b){var c=this.$6||{};c=c.onAvailableWidthChanged;c&&c(a,b)};r.prototype.$15=function(a,b){b=this.$5||{};b=b.onAvailableWidthChanged;b&&b(a)};r.prototype.$17=function(){var a=l(this.$5);return m(a)};r.prototype.$18=function(){return k()};r.prototype.$14=function(){__p&&__p();var a=this.$3,b={chatTabAvailableWidth:a,pinnedConvoTabAvailableWidth:0},c={chatTabAvailableWidth:0,pinnedConvoTabAvailableWidth:a},d=this.$17(),e=p(this.$6),f=o(e);if(!e||f===0)return b;else if(d===0)return c;e=this.$18();if(a<=e)return b;f=n();d=a-e;if(d<f)return b;else c=f;d=c;b=Math.max(e,a-c);return{chatTabAvailableWidth:b,pinnedConvoTabAvailableWidth:d}};r.prototype.$11=function(){this.$3=this.$19(),this.$20("DockTabsViewportCalculator/recalcTotalDock_FOR_TEST_ONLY")};r.prototype.$21=function(){var a=this.$1;if(!a)return{buddyListNubWidth:0,employeeNubsWidth:0};var c=q(a),d=q(b("DOM").find(a,"._56ox")),e=q(b("DOM").scry(a,"._56oy")[0]);a=q(b("DOM").scry(a,"._ph1")[0]);c=Math.max(c-d-e-a,0);return{buddyListNubWidth:d,employeeNubsWidth:c}};r.prototype.$19=function(){__p&&__p();var a=b("getViewportDimensions").withoutScrollbars().width;a-=b("ViewportBounds").getLeft()+b("ViewportBounds").getRight();a-=h;var c=this.$21(),d=c.buddyListNubWidth;c=c.employeeNubsWidth;a-=d;this.$4=Math.max(this.$4,c);a-=this.$4;a-=i;return Math.max(a,0)};r.prototype.enableTestInforms_FOR_TEST_ONLY=function(){this.$9=!0};r.prototype.$20=function(a){this.$9&&b("Arbiter").inform(a)};r.prototype.getChatTabAvailableDockWidth_FOR_TEST_ONLY=function(){return this.$14().chatTabAvailableWidth};r.prototype.getPinnedConvoTabAvailableDockWidth_FOR_TEST_ONLY=function(){return this.$14().pinnedConvoTabAvailableWidth};r.prototype.getAvailableTotalWidth_FOR_TEST_ONLY=function(){return this.$3};e.exports={getInstance:function(a){__p&&__p();var c=b("ge")("pagelet_dock");if(!c||!b("DOM").contains(c,a))return null;a=b("DataStore").get(c,j);if(a instanceof r)return a;var d=b("DOM").scry(c,".fbDockWrapperRight .fbDock")[0];a=new r(d);b("DataStore").set(c,j,a);return a}}}),null);
__d("FBRTCCallSummaryUploader",["Banzai","FBRTCCallSummary","FBRTCCallSummaryStore"],(function(a,b,c,d,e,f){a={init:function(){var a=b("FBRTCCallSummaryStore").getInstance();b("Banzai").subscribe(b("Banzai").SEND,function(){b("FBRTCCallSummary").logSavedSummaries(a)})}};e.exports=a}),null);
__d("M4ThreadFillDetect.bs",["bs_caml_builtin_exceptions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return a.style}function c(a,b){a.appendChild(b);return 0}try{d=document.createElement("div");e=document.createElement("div");var g=document.createElement("div"),h=document.createElement("div"),i=document.createElement("div"),j=document.createElement("div"),k=document.createElement("div"),l=document.createElement("table");d.appendChild(e);d.appendChild(k);e.appendChild(g);k.appendChild(l);g.appendChild(h);h.appendChild(i);h.appendChild(j);d.style.position="absolute";d.style.marginLeft="-999px";d.style.contain="layout";e.style.height="200px";e.style.display="flex";e.style.visibility="hidden";e.style.flexDirection="column";e.style.position="relative";g.style.flexBasis="0px";g.style.flexGrow="1";g.style.flexShrink="0";g.style.position="relative";h.style.display="flex";h.style.flexDirection="column";h.style.minHeight="100%";i.style.flexGrow="1";j.style.height="50px";k.style.height="200px";k.style.visibility="hidden";k.style.position="relative";l.style.minHeight="100%";e=document.body;e.appendChild(d);g=i.clientHeight===150;h=l.clientHeight===200;document.body.removeChild(d);j=g?0:h?1:2}catch(a){if(a===b("bs_caml_builtin_exceptions").not_found)j=3;else throw a}k=j===2||j===1?1:0;e=k?"TABLE":"FLEX";f.getStylesheet=a;f.appendChild=c;f.measuredTechnique=j;f.technique=k;f.forJS=e}),null);
__d("FantaThread.react",["cx","M4ThreadFillDetect.bs","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("M4ThreadFillDetect.bs").forJS;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.setRef=function(a){this.$1=a,typeof this.props.scrollRef==="function"&&this.props.scrollRef(a)}.bind(this),b}a.prototype.render=function(){var a=this.props,c=a.children;a=a.spacerContent;return b("React").createElement("div",{className:"_1i6a",onClick:this.props.onClick},b("React").createElement("div",{className:"_4po3"+(i==="FLEX"?" _4poa":"")+(i==="TABLE"?" _4po4":""),ref:this.setRef},b("React").createElement("div",{className:"_4po5"},b("React").createElement("div",{className:"_4po6"},b("React").createElement("div",{className:"_4po7"},a)),b("React").createElement("div",{className:"_4po8"},b("React").createElement("div",{className:"_4po9"},c)))))};e.exports=a}),null);
__d("MessengerDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("MercuryTypeaheadConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COMPOSER_FRIENDS_MAX:4,COMPOSER_FB4C_MAX:8,COMPOSER_NON_FRIENDS_MAX:2,COMPOSER_NON_FRIENDS_EXTRA_FETCH:3,COMPOSER_SHOW_MORE_LIMIT:2,COMPOSER_THREADS_INITIAL_LIMIT:2,COMPOSER_CHATTAB_MAX:5,COMPOSER_PAGES_MAX:5,COMPOSER_USERS_MAX:13,COMPOSER_WM_MAX:23,USER_TYPE:"user",PAGE_TYPE:"page",THREAD_TYPE:"thread",HEADER_TYPE:"header",SEARCH_TYPE:"search",FRIEND_TYPE:"friend",NON_FRIEND_TYPE:"non_friend",FB4C_TYPE:"fb4c",MEETING_ROOM_PAGE_TYPE:"meeting_room_page",COMMERCE_PAGE_TYPE:"commerce_page",INTERNAL_BOT_PAGE_TYPE:"internal_bot_page",GAME_TYPE:"game",WORKPLACE_BOT_CATEGORY_TYPE:"WORKPLACE_BOT",VALID_EMAIL:"^([A-Z0-9._%+-]+@((?!facebook\\.com))[A-Z0-9.-]+\\.[A-Z]{2,4}|(([A-Z._%+-]+[A-Z0-9._%+-]*)|([A-Z0-9._%+-]+[A-Z._%+-]+[A-Z0-9._%+-]*))@(?:facebook\\.com))$"})}),null);
__d("MercuryAudienceRestrictedTypeaheadDataSource",["CurrentUser","DataSource","MercuryParticipantTypes","MercuryTypeaheadConstants","OrderedFriendsList","ShortProfiles"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("DataSource"));g=c&&c.prototype;function a(a){"use strict";a=a||{},a.kanaNormalization=!0,a.maxResults=b("MercuryTypeaheadConstants").COMPOSER_CHATTAB_MAX,a.minQueryLength=2,g.constructor.call(this,a),this.$MercuryAudienceRestrictedTypeaheadDataSource1=!1,this.$MercuryAudienceRestrictedTypeaheadDataSource2=!1,this.$MercuryAudienceRestrictedTypeaheadDataSource3={},this.$MercuryAudienceRestrictedTypeaheadDataSource4=!0,this.queryCache={},this.localCache={},this.queryIDs={}}a.prototype.dirty=function(){"use strict";return this};a.prototype.buildData=function(a){"use strict";return g.buildData.call(this,a)};a.prototype.query=function(a,b,c,d){"use strict";b=b||a.length===1;return g.query.call(this,a,b,c,d)};a.prototype.getQueryData=function(a,b){"use strict";return babelHelpers["extends"]({},g.getQueryData.call(this,a,b))};a.prototype.setEntry=function(a,b){"use strict";this.$MercuryAudienceRestrictedTypeaheadDataSource3[a]=b};a.prototype.getEntry=function(a){"use strict";return this.$MercuryAudienceRestrictedTypeaheadDataSource3[a]||null};a.prototype.getCachedShortProfileIDs=function(){"use strict";var a=b("ShortProfiles").getCachedProfileIDs();a=a.filter(function(a){var c=b("ShortProfiles").getNow(a);return a==b("CurrentUser").getID()||c&&(c.type===b("MercuryParticipantTypes").FRIEND||c.type===b("MercuryParticipantTypes").FB4C)});return a};a.prototype.isBootstrapped=function(){"use strict";return this.$MercuryAudienceRestrictedTypeaheadDataSource1};a.prototype.isBootstrapping=function(){"use strict";return this.$MercuryAudienceRestrictedTypeaheadDataSource2};a.prototype.processEntries=function(a,c){"use strict";a=a&&a.map(function(a){a.index==null&&(a.render_type===b("MercuryParticipantTypes").FRIEND||a.render_type===b("MercuryParticipantTypes").FB4C)&&(a.index=b("OrderedFriendsList").getActiveRank(a.uid));return a});return g.processEntries.call(this,a)};a.prototype.mergeUids=function(a,b,c,d){"use strict";b=b.sort(function(a,b){a=this.getEntry(a);b=this.getEntry(b);return a&&a.index&&b&&b.index?a.index-b.index:0}.bind(this));return g.mergeUids.call(this,a,b,c,d)};a.prototype.setQueryData=function(a,b){"use strict";return g.setQueryData.call(this,a)};a.prototype.respond=function(a,b,c){"use strict";return g.respond.call(this,a,b,c)};a.prototype.setShowThreads=function(a){"use strict";this.$MercuryAudienceRestrictedTypeaheadDataSource4=a};e.exports=a}),null);
__d("MessengerMQTTConnectionEvents",[],(function(a,b,c,d,e,f){"use strict";e.exports={DELTA_EVENT:"messenger-mqtt-delta",STREAM_DISCONNECT:"messenger-mqtt-stream-disconnect",STREAM_CONNECTING:"messenger-mqtt-stream-connecting",STREAM_CONNECT:"messenger-mqtt-stream-connect",STATE_CONNECTED:"Connected",STATE_DISCONNECTED:"Disconnected",STATE_CONNECTING:"Connecting",TYP:"messenger-mqtt-typ"}}),null);
__d("MercuryTypeaheadDataSource",["CurrentUser","DataSource","MercuryParticipantTypes","MercuryTypeaheadConstants","OrderedFriendsList","ShortProfiles","WorkModeConfig"],(function(a,b,c,d,e,f){__p&&__p();var g,h=[],i={},j={},k={},l=[],m=[],n=[],o=!1,p=!1;c=babelHelpers.inherits(a,b("DataSource"));g=c&&c.prototype;function a(a){"use strict";a=a||{},a.kanaNormalization=!0,g.constructor.call(this,a),this.showDefaultList=a.showDefaultList||!1}a.prototype.dirty=function(){"use strict";this.$MercuryTypeaheadDataSource1=h;this.localCache=j;this.queryCache=i;this.queryIDs=k;this.defaultList=l;this.topEntryIDs=m;this.nullStateExclusions=n;return this};a.prototype.bootstrap=function(){"use strict";if(o||p)return!1;p=!0;b("ShortProfiles").fetchAll().then(function(){this.updateBootstrapData(),p=!1,o=!0,this.showDefaultList&&this.inform("show-default",{impressions:this.defaultList})}.bind(this),function(){}.bind(this));return!0};a.prototype.updateBootstrapData=function(){"use strict";__p&&__p();var a=this.getCachedShortProfileIDs(),c=b("WorkModeConfig").is_work_user?b("MercuryParticipantTypes").FB4C:b("MercuryParticipantTypes").FRIEND;a=a.map(function(a){var d=b("ShortProfiles").getNow(a),e=a==b("CurrentUser").getID()?c:d.type,f=[d.additionalName,d.alternateName].concat(d.searchTokens||[]).join(" "),g=d.name,h=null;return{uid:a,index:b("OrderedFriendsList").getActiveRank(a),text:g,subtext:h,tokens:f,localized_text:d.name,additional_text:d.additionalName,photo:d.thumbSrc,render_type:e,type:b("MercuryTypeaheadConstants").USER_TYPE}});a.length&&this.addEntries(a);if(!this.showDefaultList)return;m=a.sort(function(a,b){return a.index-b.index}).map(function(a){return a.uid});this.defaultList=this.buildData(m.slice(0,5));this.topEntryIDs=m};a.prototype.updateDefaultList=function(a){"use strict";if(!a)return;this.nullStateExclusions.includes(a)?this.nullStateExclusions=this.nullStateExclusions.filter(function(b){return b!==a}):this.nullStateExclusions.push(a);l=this.topEntryIDs.filter(function(a){return!this.nullStateExclusions.includes(a)}.bind(this));this.defaultList=this.buildData(l.slice(0,5))};a.prototype.query=function(a,b,c,d){"use strict";b=b||a.length===1;return g.query.call(this,a,b,c,d)};a.prototype.getQueryData=function(a,b){"use strict";return babelHelpers["extends"]({},g.getQueryData.call(this,a,b))};a.prototype.setEntry=function(a,b){"use strict";this.$MercuryTypeaheadDataSource1[a]=b};a.prototype.getEntry=function(a){"use strict";return this.$MercuryTypeaheadDataSource1[a]||null};a.prototype.getCachedShortProfileIDs=function(){"use strict";var a=b("ShortProfiles").getCachedProfileIDs();a=a.filter(function(a){var c=b("ShortProfiles").getNow(a);return a==b("CurrentUser").getID()||c.type===b("MercuryParticipantTypes").FRIEND||c.type===b("MercuryParticipantTypes").FB4C});return a};a.prototype.isBootstrapped=function(){"use strict";return o};a.prototype.isBootstrapping=function(){"use strict";return p};a.prototype.processEntries=function(a,c){"use strict";a=a.map(function(a){a.index==null&&(a.render_type===b("MercuryParticipantTypes").FRIEND||a.render_type===b("MercuryParticipantTypes").FB4C)&&(a.index=b("OrderedFriendsList").getActiveRank(a.uid));return a});return g.processEntries.call(this,a)};a.prototype.mergeUids=function(a,b,c,d){"use strict";b=b.sort(function(a,b){return this.getEntry(a).index-this.getEntry(b).index}.bind(this));return g.mergeUids.call(this,a,b,c,d)};a.prototype.setShowDefaultList=function(a){"use strict";this.showDefaultList=a};e.exports=a}),null);
__d("ChatTabTypeaheadDataSource",["MercuryConfig","MercuryTypeaheadConstants","MercuryTypeaheadDataSource"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("MercuryTypeaheadDataSource"));g=c&&c.prototype;function a(a){"use strict";a=a||{},a.maxResults=b("MercuryTypeaheadConstants").COMPOSER_CHATTAB_MAX,a.showDefaultList=b("MercuryConfig").ChatComposer,g.constructor.call(this,a),this.$ChatTabTypeaheadDataSource1=!0}a.prototype.buildData=function(a){"use strict";__p&&__p();var c=[],d=[],e=[],f=[],h=[],i=[],j=[],k=!this.$ChatTabTypeaheadDataSource1;a.forEach(function(a){__p&&__p();var i=g.getEntry.call(this,a);switch(i.render_type){case b("MercuryTypeaheadConstants").FRIEND_TYPE:c.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:this.$ChatTabTypeaheadDataSource1&&d.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:f.push(a);break;case b("MercuryTypeaheadConstants").PAGE_TYPE:k||h.push(a);break;case b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:i=!k||i.can_add_to_group_chat;i&&j.push(a);break;default:break}}.bind(this),this);a=i.concat(c,f,d,h,e,j);return g.buildData.call(this,a)};a.prototype.query=function(a,b,c,d){"use strict";return g.query.call(this,a,b,c,d)};a.prototype.respond=function(a,b,c){"use strict";return g.respond.call(this,a,b,c)};a.prototype.setShowThreads=function(a){"use strict";this.$ChatTabTypeaheadDataSource1=a};e.exports=a}),null);
__d("MessengerSearchFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("MessengerSecondarySearchFunnelConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({MESSENGER_DOT_COM:"messenger_dot_com",WWW:"www"});b=Object.freeze({ABANDON:"abandon",CREATE_GROUP:"create_group",ENTER_THREAD:"enter_thread",RESULT_SELECTED:"result_selected",SEND:"send",SINGLE_RESULT_SELECTED:"single_result_selected"});c=Object.freeze({ACTION:"action"});d=Object.freeze({EXISTING_TAB:"existing_tab",JEWEL:"jewel",SIDEBAR:"sidebar",COMPOSER:"composer"});f=Object.freeze({END:"end",IMPRESSIONS:"impressions",MICRO_SESSION_ENDED:"micro_session_ended",MICRO_SESSION_STARTED:"micro_session_started",QUERY_CHANGED:"query_changed",RESULT_SELECTED:"result_selected",SOURCE_ENDED:"source_ended",SOURCE_STARTED:"source_started",START:"start",TOKEN_REMOVED:"token_removed"});var g=Object.freeze({BROADCAST:"broadcast",GROUP_CREATION:"group_creation",OMNIPICKER:"omnipicker",SHARE:"share"}),h=Object.freeze({DIRECT_SEND:"direct_send",ADD:"add"}),i=Object.freeze({FINISHED:"finished",FAILED:"failed"}),j=Object.freeze({BROADCAST:9500,GROUP_CREATE:9501}),k=Object.freeze({QUERY:"query",NO_QUERY:"no_query"}),l=Object.freeze({BOOTSTRAP:"bootstrap",LOCAL:"local",LOCAL_AND_SERVER:"local_and_server",LOCAL_CONTACTS:"local_contacts",ORDERED_GCF_FRIENDLIST:"local_ordered_gcf_friendlist",QUERY_CACHE:"query_cache",SERVER:"server",SHORT_PROFILES:"local_short_profiles",SUGGESTED_RECIPIENTS:"local_suggested_recipients"});e.exports={FUNNEL_NAME:"MESSENGER_SECONDARY_SEARCH_FUNNEL",CLIENTS:a,END_ACTIONS:b,END_REASONS:c,ENTRY_SURFACES:d,EVENTS:f,SEARCH_SURFACES:g,SELECTION_TYPES:h,SOURCE_STATUSES:i,LOGGING_IDS:j,MICRO_SESSION_TYPES:k,SOURCES:l}}),null);
__d("SoundPlayer",["URI","createArrayFromMixed"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map();function h(a){var c=new(b("URI"))(a);return c.getDomain()?a:new(b("URI"))(window.location.href).setPath(c.getPath()).toString()}function i(a){a=new(b("URI"))(a).getPath();if(/\.mp3$/.test(a))return"audio/mpeg";return/\.og[ga]$/.test(a)?"audio/ogg":""}var j={preload:function(a){__p&&__p();for(var a=b("createArrayFromMixed")(a),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;if(g.has(e))return;var f=document.createElement("audio");if(!f||!f.canPlayType||!f.canPlayType(i(e)))continue;f.preload="auto";f.src=h(e);document.body&&document.body.appendChild(f);g.set(e,f);return}},play:function(a,c){__p&&__p();c===void 0&&(c={});for(var a=b("createArrayFromMixed")(a),d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;g.has(f)||j.preload(f);f=g.get(f);if(!f)continue;c.loop&&f.setAttribute("loop","");c.volume&&(f.volume=c.volume);f.play();return}},pause:function(a){__p&&__p();for(var a=b("createArrayFromMixed")(a),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e=g.get(e);if(e){e.pause();return}}},stop:function(a){__p&&__p();for(var a=b("createArrayFromMixed")(a),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;var f=g.get(e);if(f){f.pause();f.removeAttribute("src");f.src=h(e);return}}}};e.exports=j}),null);
__d("SoundSynchronizer",["SoundPlayer","WebStorage","createArrayFromMixed"],(function(a,b,c,d,e,f){__p&&__p();var g="fb_sounds_playing3";function h(){__p&&__p();var a=b("WebStorage").getLocalStorage();if(a)try{a=a[g];if(a){a=JSON.parse(a);if(Array.isArray(a))return a}}catch(a){}return[]}function i(a){var c=b("WebStorage").getLocalStorage();if(c){var d=h();d.push(a);while(d.length>5)d.shift();try{c[g]=JSON.stringify(d)}catch(a){}}}function j(a){return h().some(function(b){return b===a})}a={play:function(a,c,d){a=b("createArrayFromMixed")(a);c=c||a[0]+Math.floor(Date.now()/1e3);if(j(c))return;b("SoundPlayer").play(a,{loop:!!d});i(c)},isSupported:function(){return!!b("WebStorage").getLocalStorage()}};e.exports=a}),null);
__d("SoundRPC",["Event","FBJSON","SoundSynchronizer"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d){b("SoundSynchronizer").play(a,c,d)}a={playLocal:g,playRemote:function(a,c,d,e){c={name:"SoundRPC",data:{paths:c,sync:d,loop:e}};a.postMessage(b("FBJSON").stringify(c),"*")},supportsRPC:function(){return!!window.postMessage},_listen:function(){b("Event").listen(window,"message",function(a){if(!/\.facebook.com$/.test(a.origin))return;var c={};try{c=b("FBJSON").parse(a.data)}catch(a){}c.name==="SoundRPC"&&g(c.data.paths,c.data.sync,c.data.loop)})}};e.exports=a}),null);
__d("Sound",["SoundInitialData","SoundPlayer","SoundRPC","SoundSynchronizer","URI","UserAgent_DEPRECATED","Visibility","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=!1;c={init:function(a){},play:function(a,c,d){g?b("SoundRPC").playRemote(g.contentWindow,a,c,!1):b("SoundRPC").playLocal(a,c,d),h=!0},hasPlayedSoundBefore:function(){return h},playOnlyIfImmediate:function(a,c,d){if(!h&&b("Visibility").isHidden())return;this.play(a,c,d)},stop:function(a){g||b("SoundPlayer").stop(a)}};d=new(b("URI"))(location.href);d.getSubdomain()&&d.getSubdomain()!=="www"&&d.setSubdomain("www");f=d.getDomain();function a(){if(b("UserAgent_DEPRECATED").ie()<9)return!1;return b("SoundInitialData").RPC_DISABLED?!1:b("SoundSynchronizer").isSupported()&&b("SoundRPC").supportsRPC()}b("isFacebookURI")(d)&&location.host!==f&&a()&&(g=document.createElement("iframe"),g.setAttribute("src","//"+f+"/sound_iframe.php"),g.style.display="none",document.body&&document.body.appendChild(g));e.exports=c}),null);
__d("P2PActionConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({CREDIT_CARDS_UPDATED:"credit_cards_updated",CREDIT_CARDS_UPDATED_ERROR:"credit_cards_updated_error",CHANNEL_EVENTS_ALLOWED:"channel_events_allowed",CHANNEL_EVENTS_IGNORED:"channel_events_ignored",CREDIT_CARD_SAVING:"credit_card_saving",CREDIT_CARD_ADDED:"credit_card_added",CREDIT_CARD_ADDED_ERROR:"credit_card_added_error",CREDIT_CARD_ADDED_ERROR_CLEARED:"credit_card_added_error_cleared",CREDIT_CARD_DELETED:"credit_card_deleted",CREDIT_CARD_DELETED_ERROR:"credit_card_deleted_error",CREDIT_CARD_UPDATED:"credit_card_updated",CREDIT_CARD_UPDATED_ERROR:"credit_card_updated_error",PRESET_CREDIT_CARD_UPDATED:"preset_credit_card_updated",PRESET_CREDIT_CARD_UPDATED_ERROR:"preset_credit_card_updated_error",CREDIT_CARD_VERIFIED:"credit_card_verified",CREDIT_CARD_VERIFIED_ERROR:"credit_card_verified_error",PAYMENT_METHODS_UPDATED:"payment_methods_updated",PAYMENT_METHODS_UPDATED_ERROR:"payment_methods_updated_error",TRANSFERS_UPDATED:"transfers_updated",TRANSFERS_UPDATED_ERROR:"transfers_updated_error",NUX_TRANSFERS_UPDATED:"nux_transfers_updated",TRANSFER_ADDED:"transfer_added",TRANSFER_ADDED_ERROR:"transfer_added_error",TRANSFER_UPDATED:"transfer_updated",TRANSFER_UPDATED_ERROR:"transfer_updated_error",TRANSFER_ACCEPTED:"transfer_accepted",TRANSFER_DECLINED:"transfer_declined",CHAT_SEND_VIEW_OPENED:"chat_send_view_opened",CHAT_SEND_VIEW_CLOSED:"chat_send_view_closed",BIN_NUMBER_VALIDATED:"bin_number_validated",BIN_NUMBER_VALIDATED_ERROR:"bin_number_validated_error",USER_ELIGIBILITY_UDPATED:"user_eligibility_updated",FRIENDS_LIST_UPDATED:"friends_list_updated",DIALOG_SHOWN:"dialog_shown",DIALOG_CLOSED:"dialog_closed",BANNER_STATES_UPDATED:"banner_states_updated",BANNER_DISMISSED:"banner_dismissed",BANNER_VIEWED:"banner_viewed",BANNER_COMPLETED:"banner_completed",MONEYPENNY_TRANSFER_CREATED:"moneypenny_transfer_created",MONEYPENNY_TRANSFER_CREATED_ERROR:"moneypenny_transfer_created_error",PLATFORM_CONTEXT_ADDED:"platform_context_added",PLATFORM_CONTEXT_ADDED_ERROR:"platform_context_added_error",PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED:"platform_context_save_errors_cleared",PLATFORM_CONTEXT_BANNER_DISMISSED:"platform_context_banner_dismissed",PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD:"platform_context_product_item_sold",PLATFORM_CONTEXT_CHANGED:"platform_context_changed",EXTENSIVE_TRANSFER_DETAILS_UPDATED:"extensive_transfer_details_updated",ADDRESS_SAVING:"address_saving",ADDRESSES_UPDATED:"addresses_updated",ADDRESS_ADDED:"address_added",ADDRESS_ADDED_ERROR:"address_added_error",ADDRESS_ADDED_ERROR_CLEARED:"address_added_error_cleared",CHECKOUT_CART_INITIATED:"checkout_cart_initiated",CHECKOUT_CART_CREATED:"checkout_cart_created",CHECKOUT_SHIPPING_OPTION_SELECTED:"checkout_shipping_option_selected",CHECKOUT_ADDRESS_SELECTED:"checkout_address_selected",CHECKOUT_CREDIT_CARD_SELECTED:"checkout_credit_card_selected",CHECKOUT_ADDRESS_FORM_TOGGLED:"checkout_address_form_toggled",CHECKOUT_CREDIT_CARD_FORM_TOGGLED:"checkout_credit_card_form_toggled",CHECKOUT_ADDRESS_EDIT_OPTIONS_TOGGLED:"checkout_address_options_toggled",CHECKOUT_CREDIT_CARD_EDIT_OPTIONS_TOGGLED:"checkout_credit_card_edit_options_toggled",CHECKOUT_PAYMENT_METHOD_EDIT_OPTIONS_TOGGLED:"checkout_payment_edit_options_toggled",CHECKOUT_PAYMENT_METHOD_SELECTED:"checkout_payment_method_selected",CHECKOUT_PAYMENT_METHOD_CONFIGURED:"checkout_payment_method_configured",CHECKOUT_PAYMENT_METHOD_CONFIRMED:"checkout_payment_method_confirmed",CHECKOUT_ADDRESS_FORM_VALIDATED:"checkout_address_form_validated",CHECKOUT_CREDIT_CARD_FORM_VALIDATED:"checkout_credit_card_form_validated",CHECKOUT_EDIT_COMPLETED:"checkout_completed",CHECKOUT_PROCESSING:"checkout_processing",CHECKOUT_BUYER_PROFILE_UPDATED:"checkout_buyer_profile_updated",CHECKOUT_MANUAL_PAYMENT_RECEIPT_UPDATED:"checkout_manual_payment_receipt_updated",PAYMENT_REQUEST_INITIATED:"payment_request_initiated",PAYMENT_REQUEST_INITIATED_COMPLETE:"payment_request_initiated_completed",PAYMENT_REQUEST_CREATED:"payment_request_created",PAYMENT_REQUEST_CREATED_ERROR:"payment_request_created_error",PAYMENT_REQUEST_UPDATED:"payment_request_updated",PAYMENT_REQUEST_DECLINE_INITIATED:"payment_request_decline_initiated",PAYMENT_REQUEST_DECLINED:"payment_request_declined",PAYMENT_REQUEST_DECLINE_ERROR:"payment_request_decline_error",PAYMENT_REQUESTS_FETCHED:"payment_requests_fetched",PAYMENT_REQUEST_CANCEL_INITIATED:"payment_request_cancel_initiated",PAYMENT_REQUEST_CANCELED:"payment_request_canceled",PAYMENT_REQUEST_CANCEL_ERROR:"payment_request_cancel_error"});e.exports=a}),null);
__d("P2PDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationReactDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.dispatch=this.dispatch.bind(this)}e.exports=new a({strict:!1})}),null);
__d("EmoticonEmojiList",[],(function(a,b,c,d,e,f){e.exports={names:{":)":"slightsmile",":-)":"slightsmile",":]":"slightsmile","=)":"smile","(:":"slightsmile","(=":"smile",":(":"frown",":-(":"frown",":[":"frown","=(":"frown",")=":"frown",";-P":"winktongue",";P":"winktongue",";-p":"winktongue",";p":"winktongue",":poop:":"poop",":P":"tongue",":-P":"tongue",":-p":"tongue",":p":"tongue","=P":"tongue","=p":"tongue","=D":"grin",":-D":"slightgrin",":D":"slightgrin",":o":"gasp",":-O":"gasp",":O":"gasp",":-o":"gasp",";)":"wink",";-)":"wink","8-)":"glasses","8)":"glasses","B-)":"glasses","B)":"glasses",">:(":"grumpy",">:-(":"grumpy",":/":"unsure",":-/":"unsure",":\\":"unsure",":-\\":"unsure","=/":"unsure","=\\":"unsure",":'(":"cry",":'-(":"cry",":\u2019(":"cry",":\u2019-(":"cry","3:)":"devil","3:-)":"devil","O:)":"angel","O:-)":"angel","0:)":"angel","0:-)":"angel",":*":"kiss",":-*":"kiss",";-*":"winkkiss",";*":"winkkiss","<3":"heart","&lt;3":"heart","\u2665":"heart","^_^":"kiki","^~^":"kiki","-_-":"expressionless",":-|":"squint",":|":"squint",">:o":"upset",">:O":"upset",">:-O":"upset",">:-o":"upset",">_<":"persevere",">.<":"persevere",'<(")':"penguin",O_O:"flushface",o_o:"flushface","0_0":"flushface",T_T:"crying","T-T":"crying",ToT:"crying","T.T":"crying","-3-":"flushkiss","'-_-":"sweating","\u2019-_-":"sweating","(y)":"like",":like:":"like","(Y)":"like","(n)":"dislike","(N)":"dislike"},emote2emojis:{slightsmile:"1f642",smile:"1f60a",frown:"1f61e",winktongue:"1f61c",poop:"1f4a9",tongue:"1f61b",slightgrin:"1f600",grin:"1f603",gasp:"1f62e",wink:"1f609",glasses:"1f60e",grumpy:"1f620",unsure:"1f615",cry:"1f622",devil:"1f608",angel:"1f607",kiss:"1f617",winkkiss:"1f618",heart:"2764",kiki:"1f60a",expressionless:"1f611",squint:"1f610",upset:"1f620",persevere:"1f623",penguin:"1f427",flushface:"1f633",crying:"1f62d",flushkiss:"1f61a",sweating:"1f613",like:"f0000",dislike:"1f44e"},symbols:{slightsmile:":)",smile:"=)",frown:":(",winktongue:";-P",poop:":poop:",tongue:":P",slightgrin:":D",grin:"=D",gasp:":o",wink:";)",glasses:"8-)",grumpy:">:(",unsure:":/",cry:":'(",devil:"3:)",angel:"O:)",kiss:":*",winkkiss:";*",heart:"<3",kiki:"^_^",expressionless:"-_-",squint:":-|",upset:">:o",persevere:">_<",penguin:'<(")',flushface:"O_O",crying:"T_T",flushkiss:"-3-",sweating:"'-_-",like:"(y)",dislike:"(n)"},regexp:/(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/,noncapturingRegexp:/(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/}}),null);
__d("MessengerGroupCreationEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHAT_TAB:"chat_tab_add_people",JEWEL:"jewel_new_message",CHAT_SIDEBAR:"chat_sidebar_new_message",GCF_JEWEL:"jewel_new_group",GCF_CHAT_SIDEBAR:"chat_sidebar_new_group",GCF_SHARE_FLOW:"chat_share_message_to_messenger",CHAT_POLL:"chat_poll_button",WORK_CHAT_HEADER_NEW_GROUP_BUTTON:"work_chat_header_new_group_button"})}),null);
__d("BootloadOnInteraction.react",["BootloadOnRender.react","React"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this,a),this.$1=function(){this.setState({hadUserInteraction:!0})}.bind(this),this.state={hadUserInteraction:!1}}a.prototype.render=function(){"use strict";if(!this.state.hadUserInteraction)return b("React").cloneElement(this.props.placeholder,{onFocus:this.$1,onMouseOver:this.$1,onClick:this.$1});var a=this.props,c=a.loader,d=a.component;a=a.placeholder;return b("React").createElement(b("BootloadOnRender.react"),{placeholder:a,loader:c,component:d})};e.exports=a}),null);
__d("MercurySingletonProvider",["CurrentUser"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this.$1={},this.$2=a}a.prototype.getForFBID=function(a){this.$1[a]||(this.$1[a]=new this.$2(a));return this.$1[a]};a.prototype.get=function(){return this.getForFBID(b("CurrentUser").getID())};a.mock=function(a){throw new Error("MercurySingletonProvider.mock() must only be used in tests.")};e.exports=a}),null);
__d("bs_js_dict",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(a,b){delete a[b];return 0};function a(a){var b=Object.keys(a),c=b.length,d=new Array(c);for(var e=0,c=c-1|0;e<=c;++e){var f=b[e];d[e]=[f,a[f]]}return d}function b(a){var b=Object.keys(a),c=b.length,d=new Array(c);for(var e=0,c=c-1|0;e<=c;++e)d[e]=a[b[e]];return d}function c(a){__p&&__p();var b={};a=a;while(!0){var c=a;if(c){var d=c[0];b[d[0]]=d[1];a=c[1];continue}else return b}}function d(a){var b={},c=a.length;for(var d=0,c=c-1|0;d<=c;++d){var e=a[d];b[e[0]]=e[1]}return b}function e(a,b){var c={},d=Object.keys(b),e=d.length;for(var f=0,e=e-1|0;f<=e;++f){var g=d[f];c[g]=a(b[g])}return c}f.unsafeDeleteKey=g;f.entries=a;f.values=b;f.fromList=c;f.fromArray=d;f.map=e}),null);