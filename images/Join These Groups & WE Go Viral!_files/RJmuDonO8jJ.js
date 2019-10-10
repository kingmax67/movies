if (self.CavalryLogger) { CavalryLogger.start_js(["hu9\/n"]); }

__d("ResetScrollOnUnload",["Run"],(function(a,b,c,d,e,f){a={disableScrollRestoration:function(){b("Run").onUnload(function(){window.history.scrollRestoration="manual"})},init:function(a){b("Run").onUnload(function(){window.history.scrollRestoration="manual",a.style.opacity="0",window.scrollTo(0,0)})}};e.exports=a}),null);
__d("NavigationMenubarInteractionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAction=function(a){this.$1.action=a;return this};a.prototype.setTargetItem=function(a){this.$1.target_item=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={action:!0,target_item:!0};e.exports=a}),null);
__d("NavigationAssistantController",["csx","cx","fbt","Arbiter","AsyncRequest","CSS","DOM","DOMEventListener","DOMQuery","DOMTraverser","Event","Focus","KeyboardShortcuts","KeyEventController","Menu","MenuItem","NavigationMenubarInteractionsTypedLogger","PageTransitions","RTLKeys","TabbableElements","debounce","ge","getActiveElement","getOrCreateDOMID","gkx","setImmediate","setTimeout"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=["main","banner","search","navigation","region","complementary","form","contentinfo"],k={main:function(a){return a?i._("Main: {section name}",[i._param("section name",a)]):i._("Main section")},banner:function(a){return i._("{section name} banner",[i._param("section name",a)])},search:function(a){return i._("Search {section name}",[i._param("section name",a)])},navigation:function(a){return a?i._("Navigate {section name}",[i._param("section name",a)]):i._("Navigation")},region:function(a){return a},complementary:function(a){return a?a:i._("Complementary information")},form:function(a){return i._("{section name} form",[i._param("section name",a)])},contentinfo:function(a){return i._("{section name} footer",[i._param("section name",a)])}},l=500;a={init:function(a,c,d,e,f,g){__p&&__p();this._banner=a;this._menubar=c;this._sectionsMenu=d;this._accessibilityMenu=e;this._globalMenu=f;this._shortcutMenuItem=this._accessibilityMenu&&this._accessibilityMenu.getItemAt(0);this._menubarMenus=[{menu:this._sectionsMenu,logName:"page_sections"}];this._accessibilityMenu&&this._menubarMenus.push({menu:this._accessibilityMenu,logName:"accessibility"});this._globalMenu&&this._menubarMenus.push({menu:this._globalMenu,logName:"global"});document.body&&b("CSS").addClass(document.body,"hasAXNavMenubar");this._hasBanner=document.body&&b("CSS").hasClass(document.body,"hasBanner");this._shown=!1;this._items=[];this._hotKeyTrigger=null;this._menubarMenuItems=b("DOMQuery").scry(this._menubar,'[role="button"]');this._menubarMenuItems.forEach(function(a){a.setAttribute("role","menuitem")});this._activeItem=this._menubarMenuItems[0];this._activeItemIndex=0;if(g!=null)for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&g[h]!=null&&g[h].disableTypeaheadActivation();this._setupEvents();this._keysSoFar="";this._clearKeysSoFarAfterDelay=b("debounce")(function(){this._keysSoFar=""}.bind(this),l);this._handlePageLoad()},_setupEvents:function(){this._menubarMenuItems[0].addEventListener("focus",this._showMenubar.bind(this)),this._menubar.addEventListener("keydown",this._checkHide.bind(this)),this._menubar.addEventListener("keyup",this._checkMenuSwitch.bind(this)),this._menubarMenus.forEach(function(a){a.menu.subscribe("show",this._menuShown.bind(this,a)),a.menu.subscribe("hide",this._menuHidden.bind(this,a)),a.menu.subscribe("done",this._checkBlur.bind(this)),a.menu.getRoot().addEventListener("keyup",this._checkMenuSwitch.bind(this))}.bind(this)),b("DOMEventListener").add(document,"click",this._checkClickBlur.bind(this)),this._sectionsMenu.subscribe("focus",this._highlightFocused.bind(this)),this._sectionsMenu.subscribe("blur",this._unhighlightFocused.bind(this)),this._accessibilityMenu&&this._accessibilityMenu.subscribe("itemclick",this._checkShortcutsShow.bind(this)),this._globalMenu&&this._globalMenu.subscribe("itemclick",this._checkLogEvent.bind(this)),b("gkx")("677762")&&(b("DOMEventListener").add(document,"keydown",this._checkHotKey.bind(this)),b("DOMEventListener").add(document,"keypress",this._trackHotKeyPress.bind(this)),b("DOMEventListener").add(document,"keyup",this._unsetHotKey.bind(this)))},_checkHide:function(a){a=b("Event").getKeyCode(a);if(a===b("RTLKeys").ESC){this._hideMenubar();this._returnFocus();return}a===b("RTLKeys").TAB&&b("setImmediate")(function(){this._hideMenubar()}.bind(this))},_returnFocus:function(){if(this._hotKeyTrigger)b("Focus").set(this._hotKeyTrigger,!0),this._hotKeyTrigger=null;else{var a=this._banner.nextElementSibling;b("TabbableElements").isTabbable(a)||(a=b("DOMTraverser").nextFilteredNode(document.body,a,b("TabbableElements").isTabbable));b("Focus").set(a)}},_setActiveItem:function(a){if(a<0||a>=this._menubarMenuItems.length)return;this._activeItem.setAttribute("tabindex","-1");this._activeItem=this._menubarMenuItems[a];this._activeItemIndex=a;this._activeItem.setAttribute("tabindex","0")},_checkMenuSwitch:function(a){__p&&__p();a=b("Event").getKeyCode(a);var c=this._menubarMenus.length,d=this._activeItemIndex;switch(a){case b("RTLKeys").getLeft():d=this._activeItemIndex===0?c-1:this._activeItemIndex-1;break;case b("RTLKeys").getRight():d=this._activeItemIndex===c-1?0:this._activeItemIndex+1;break;default:d=this._findItemToFocus(a);if(d<0)return!1}this._isShowingMenu&&this._isShowingMenu.done();this._setActiveItem(d);b("setTimeout")(function(){b("Focus").set(this._activeItem,!0)}.bind(this),0);return!0},_findItemToFocus:function(a){if(this._isShowingMenu)return-1;a=String.fromCharCode(a).toLowerCase();this._keysSoFar||(this._searchIndex=this._activeItemIndex);this._keysSoFar+=a;this._clearKeysSoFarAfterDelay();a=this._findMatchInRange(this._searchIndex+1,this._menubarMenuItems.length);a<0&&(a=this._findMatchInRange(0,this._searchIndex));return a<0?this._searchIndex:a},_findMatchInRange:function(a,b){for(var a=a;a<b;a++){var c=this._menubarMenuItems[a].innerText;if(c.toLowerCase().indexOf(this._keysSoFar)===0)return a}return-1},_menuShown:function(a){this._ignoreBlur=!0,this._isShowingMenu=a.menu,this._logEvent("menu_shown",a.logName)},_menuHidden:function(a){this._ignoreBlur=!1,this._isShowingMenu===a.menu&&(this._isShowingMenu=null)},_checkClickBlur:function(){this._ignoreBlur||this._checkBlur()},_checkBlur:function(){var a=b("getActiveElement")();this._shown&&a&&!b("DOM").contains(this._menubar,a)&&!this._ignoreBlur&&this._hideMenubar();this._highlighted&&(b("CSS").removeClass(this._highlighted,"_1toc"),this._highlighted=null)},_highlightFocused:function(a,c){this._highlighted&&b("CSS").removeClass(this._highlighted,"_1toc"),this._highlighted=b("ge")(c.item.getValue()),this._highlighted&&b("CSS").addClass(this._highlighted,"_1toc")},_unhighlightFocused:function(a,c){this._highlighted&&b("CSS").removeClass(this._highlighted,"_1toc")},_checkHotKey:function(a){__p&&__p();var c=b("Event").getKeyCode(a),d=a.altKey;if(!b("gkx")("677763")&&!b("KeyEventController").filterEventTargets(a,"keydown"))return;if(c===b("RTLKeys").FORWARD_SLASH&&d){c=b("getActiveElement")();this._listenHotKeyPress=!0;if(this._shown){this._menubarMenus.forEach(function(a){a.menu.done()});b("setTimeout")(function(){this._returnFocus(),this._hideMenubar()}.bind(this),0);return}if(c&&this._isInDialog(c))return;this._hotKeyTrigger=c;this._showMenubar();b("Focus").set(this._activeItem,!0);this._logEvent("hotkey_triggered","menubar");return}this._listenHotKeyPress=!1;this._shown&&this._checkHide(a)},_unsetHotKey:function(a){this._listenHotKeyPress=!1},_trackHotKeyPress:function(a){if(this._listenHotKeyPress){a=b("Event").getKeyCode(a);this._logEvent("hotkey_char",""+a)}},_handlePageLoad:function(){this._validateMainSection(),this._setupSectionsMenu(),this._setupAccessibilityMenu(),b("PageTransitions").registerCompletionCallback(function(){this._handlePageLoad()}.bind(this))},_validateMainSection:function(){var a=document.getElementById("content");if(!a)return;var c=b("DOMQuery").scry(a,'[role="main"]'),d=a.getAttribute("role")==="main";c.length&&d?a.setAttribute("role",""):!c.length&&!d&&a.setAttribute("role","main")},_isInDialog:function(a){a=a;while(a&&a!==document&&a.getAttribute("role")!=="dialog")a=a.parentNode;return a!==document},_hideMenubar:function(){if(!this._shown)return;this._shown=!1;b("KeyboardShortcuts").popLayer();b("CSS").addClass(this._banner,"_1toe");this._setActiveItem(0);!this._hasBanner&&document.body&&b("CSS").removeClass(document.body,"hasBanner");b("setTimeout")(function(){b("Event").fire(window,"scroll")},350)},_showMenubar:function(){__p&&__p();if(this._shown)return;this._shown=!0;this._ignoreBlur=!1;this._validateMainSection();this._setupSectionsMenu();this._setupAccessibilityMenu();b("KeyboardShortcuts").pushLayer();b("CSS").matchesSelector(this._banner.nextElementSibling,"._73y_")?b("CSS").addClass(this._banner,"_1tof"):b("CSS").removeClass(this._banner,"_1tof");b("CSS").removeClass(this._banner,"_1toe");!this._hasBanner&&document.body&&b("CSS").addClass(document.body,"hasBanner");b("setTimeout")(function(){b("Event").fire(window,"scroll"),b("Arbiter").inform("banner/shown",null,"state")},50);this._logEvent("shown","menubar")},_addMenuItem:function(a,c,d){c=b("Menu").buildItemFromData({ctor:b("MenuItem"),label:a,selected:!1,value:c,onclick:function(c){b("setTimeout")(function(){b("Focus").set(b("ge")(d),!0),this._hideMenubar()}.bind(this),0),this._logEvent("selected_item",a),this._ignoreBlur=!1}.bind(this)});this._sectionsMenu.addItem(c);this._items.push(c)},_getLandmarkSections:function(a){var b=[],c=[];a.forEach(function(a){var d=a.getAttribute("role");d==="main"?b.push(a):j.indexOf(d)>-1&&c.push(a)});return b.concat(c)},_computeElementLabel:function(a,b,c){__p&&__p();var d=a.getAttribute("id");c=c||[];var e=c.includes(d);!e&&d&&c.push(d);d=a.getAttribute("aria-labelledby");if(!e&&d){e=d.split(" ");var f="";e.forEach(function(a){a=document.getElementById(a);if(!a)return;f+=this._computeElementLabel(a,!1,c)}.bind(this));return f}d=a.getAttribute("aria-label");if(d)return d;return b?"":a.innerText?a.innerText.substring(0,100):""},_addSectionItems:function(a){__p&&__p();a.forEach(function(a){__p&&__p();if(!b("TabbableElements").isVisible(a)||!a.offsetHeight||!a.offsetWidth)return;var c=a.getAttribute("role");if(!c||!Object.prototype.hasOwnProperty.call(k,c))return;var d=k[c](this._computeElementLabel(a,!0)),e=a;if(c==="search"||c==="region"||c==="form"){c=b("DOMQuery").scry(a,".navigationFocus");c.length&&(e=c[0],!b("TabbableElements").isTabbable(e)&&b("TabbableElements").find(e).length&&(e=b("TabbableElements").find(e)[0]))}d&&this._addMenuItem(d,b("getOrCreateDOMID")(a),b("getOrCreateDOMID")(e))}.bind(this))},_setupSectionsMenu:function(){var a=b("DOMQuery").scry(document.body,"[role]");a=this._getLandmarkSections(a);this._cleanupSectionsMenu();this._addSectionItems(a)},_cleanupSectionsMenu:function(){while(this._items.length)this._sectionsMenu.removeItem(this._items.pop())},_setupAccessibilityMenu:function(){if(!this._accessibilityMenu)return;if(b("KeyboardShortcuts").hasFlyoutToShow()){var a=this._accessibilityMenu.getItemAt(0);a!==this._shortcutMenuItem&&this._accessibilityMenu.addItemBefore(this._shortcutMenuItem,a)}else this._accessibilityMenu.removeItem(this._shortcutMenuItem)},_logEvent:function(a,c){new(b("NavigationMenubarInteractionsTypedLogger"))().setAction(a).setTargetItem(c).log()},_checkShortcutsShow:function(a,c){c.item.getValue()==="key_shortcuts"&&(this._ignoreBlur=!1,this._hideMenubar(),b("setTimeout")(function(){b("KeyboardShortcuts").showShortcutFlyout()},0)),this._logEvent("selected_item_ax",c.item.getValue())},_checkLogEvent:function(a,b){a=b.item.getValue();this._logEvent("selected_item_global",a);this._ignoreBlur=!1},_getHelpDialogRequest:function(){if(!this._dialogRequest)this._dialogRequest=new(b("AsyncRequest"))("/ajax/keyboard_shortcuts"),this._dialogRequest.setReadOnly(!0);else if(this._dialogRequest.transport)return null;return this._dialogRequest}};e.exports=a}),null);
__d("IntlControllerSpecialCharEncodings",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NON_BREAKING_SPACE:"&nbsp;"})}),null);
__d("LocaleSwitchingReferrers",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CARRY_LOGOUT_LOGIN:"carry_logout_login",COMMUNITY_SITE_TRANSLATION_TOGGLE:"community_site_translation_toggle",FB4B_GLOBAL_SITES_DIALOG:"fb4b_global_sites_dialog",FB4B_GLOBAL_SITES_FOOTER:"fb4b_global_sites_footer",FB4C_GLOBAL_SITE_FOOTER:"fb4c_global_site_footer",IGB_GLOBAL_SITES_FOOTER:"igb_global_sites_footer",WORKPLACE_MARKETING_FOOTER:"workplace_marketing_footer",IG_HC_FOOTER:"ig_hc_footer",LOCALE_SWITCH_SCRIPT:"locale_switch_script",M_TOUCH_LOCALE_SELECTOR:"m_touch_locale_selector",M_BASIC_LOCALE_FOOTER:"m_basic_locale_footer",MEDIA_PORTAL_V3_DIALOG:"media_portal_v3_dialog",MOBILE_ACCOUNT_SETTINGS:"mobile_account_settings",MOBILE_CHROME_JP_FOOTER:"mobile_chrome_jp_footer",MOBILE_FB4B_GLOBAL_SITES_FOOTER:"mobile_fb4b_global_sites_footer",MOBILE_FB4B_GLOBAL_SITES_PAGE_VIEW:"mobile_fb4b_global_sites_page_view",MOBILE_HELP_CENTER_SEARCH:"mobile_help_center_search",MOBILE_LOCALE_CHANGED_NOTICE:"mobile_locale_changed_notice",MOBILE_LOCALE_LINKS:"mobile_locale_links",MOBILE_SUGGESTED_LOCALE_SELECTOR:"mobile_suggested_locale_selector",MOBILE_SWITCH_LANGUAGE_HEADER:"mobile_switch_language_header",SAFETY_CENTER_GLOBAL_SITES_FOOTER:"fbsc_global_sites_footer",SITEMAP:"sitemap",QP_PROMO:"qp_promo",RLX_QP_FORCE_SWITCH:"rlx_qp_force_switch",RLX_QP_PROMPT_SWITCH:"rlx_qp_prompt_switch",RLX_PROMPTED_SWITCH_FOLLOWUP_NOTICE:"rlx_prompted_switch_followup_notice",RLX_QP_MULTI_LANGUAGE:"rlx_qp_multi_language",WWW_ACCOUNT_SETTINGS:"www_account_settings",WWW_CARD_SELECTOR:"www_card_selector",WWW_CARD_SELECTOR_MORE:"www_card_selector_more",WWW_DEV_SITE:"www_dev_site",WWW_HELP_INLINE_SELECTOR:"www_help_inline_selector",WWW_I18N_NUB:"www_i18n_nub",WWW_LANGUAGE_PAGE:"www_language_page",WWW_LINK_DIALOG_SELECTOR:"www_link_dialog_selector",WWW_LIST_SELECTOR:"www_list_selector",WWW_LIST_SELECTOR_MORE:"www_list_selector_more",WWW_MANDATORY_LOCALE_SELECTION_POST:"www_mandatory_locale_selection_post",WWW_TRANS_APP_INCONSISTENT:"www_trans_app_inconsistent",FBCOLUMN_FOOTER:"fbcolumn_footer",WWW_LOGIN_BLUE_BAR:"www_login_blue_bar_nub",UNIT_TEST:"unit_test",ACCOUNT_CREATOR:"account_creator",AT_WORK_ACCOUNT:"at_work_account_creator",ADMIN_TOOL:"admin_tool",TRANSLATION_APP_UNINSTALL:"translation_app_uninstall",CHECKPOINT:"checkpoint",LEGACY_CONTROLLER:"legacy_controller",AYMT:"aymt",UNKNOWN:"unknown"})}),null);
__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setIndex=function(a){this.$1.index=a;return this};a.prototype.setNewLocale=function(a){this.$1.new_locale=a;return this};a.prototype.setOldLocale=function(a){this.$1.old_locale=a;return this};a.prototype.setReferrer=function(a){this.$1.referrer=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={index:!0,new_locale:!0,old_locale:!0,referrer:!0,time:!0,weight:!0};e.exports=a}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0}})}),null);
__d("IntlUtils",["AsyncRequest","Cookie","IntlControllerSpecialCharEncodings","LocaleSwitchingReferrers","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","goURI"],(function(a,b,c,d,e,f){__p&&__p();a={setXmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({xmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},encodeSpecialCharsForXController:function(a){return a.replace(new RegExp("\xa0","g"),b("IntlControllerSpecialCharEncodings").NON_BREAKING_SPACE)},decodeSpecialCharsFromXController:function(a){return a.replace(new RegExp(b("IntlControllerSpecialCharEncodings").NON_BREAKING_SPACE,"g"),"\xa0")},setAmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({amode:a,app:!1}).setHandler(function(){b("ReloadPage").now()}).send()},setRmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({rmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},setLocale:function(a,c,d,e){d||(d=a.options[a.selectedIndex].value);e=b("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(e).setData({loc:d,ref:c,should_redirect:!1}).setHandler(function(a){b("ReloadPage").now()}).send()},appendCookieLocaleHistory:function(a){__p&&__p();var c="lh",d=b("Cookie").get(c),e=[],f=5;if(d!==null&&d!==void 0&&d!=""){e=d.split(",");e.push(a);for(var d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);b("Cookie").set(c,e.toString())},setCookieLocale:function(a,c,d,e,f){e===void 0&&(e=b("LocaleSwitchingReferrers").OTHER),f===void 0&&(f=null),b("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),this.appendCookieLocaleHistory(a),new(b("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(c).setIndex(f).setReferrer(e).log(),b("goURI")(d)}};e.exports=a}),null);
__d("AccessibilityWebAssistiveTechTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setIndicatedBrowsers=function(a){this.$1.indicated_browsers=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setIsVirtualCursorAction=function(a){this.$1.is_virtual_cursor_action=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={indicated_browsers:!0,is_virtual_cursor_action:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("FourOhFourJSTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setFbid=function(a){this.$1.fbid=a;return this};a.prototype.setOriginalURI=function(a){this.$1.original_uri=a;return this};a.prototype.setScriptPath=function(a){this.$1.script_path=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={fbid:!0,original_uri:!0,script_path:!0,time:!0,weight:!0};e.exports=a}),null);
__d("KeyboardActivityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setDuration=function(a){this.$1.duration=a;return this};a.prototype.setKey=function(a){this.$1.key=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={duration:!0,key:!0,vc:!0};e.exports=a}),null);
__d("FocusRing",["cx","CSS","Event","KeyEventController","Keys","VirtualCursorStatus","emptyFunction"],(function(a,b,c,d,e,f,g){__p&&__p();var h=["mousedown","mouseup"];a={KEY_CODES:[b("Keys").UP,b("Keys").RIGHT,b("Keys").DOWN,b("Keys").LEFT,b("Keys").TAB,b("Keys").RETURN,b("Keys").SPACE,b("Keys").ESC],init:function(){if(this._initialized)return;this._userInteractingWithKeyboard=!1;this._attachVirtualCursorListener();this._attachKeyDownListener();document.body&&b("CSS").addClass(document.body,"_19_u");this._initialized=!0},usingKeyboardNavigation:function(){return this._userInteractingWithKeyboard},_attachVirtualCursorListener:function(){document.documentElement&&(this._onClickListener=b("VirtualCursorStatus").add(document.documentElement,this._onClick.bind(this)))},_attachMouseListeners:function(){this._onMouseListeners=h.map(function(a){return b("Event").listen(document.documentElement,a,this._onMouseEvent.bind(this))}.bind(this))},_attachKeyDownListener:function(){this._onKeyDownListener=b("Event").listen(document.documentElement,"keydown",this._onKeyDown.bind(this))},_initialized:!1,_userInteractingWithKeyboard:!0,_onMouseEvent:function(){this._hideFocusRing()},_onMouseListeners:h.map(function(a){return{remove:b("emptyFunction")}}),_removeMouseListeners:function(){this._onMouseListeners.forEach(function(a){return a.remove()})},_onClick:function(a,b,c){a&&this._showFocusRing()},_onKeyDown:function(a){this.KEY_CODES.indexOf(b("Event").getKeyCode(a))>-1&&b("KeyEventController").filterEventTargets(a,"keydown")&&this._showFocusRing()},_showFocusRing:function(){this._onKeyDownListener.remove(),this._attachMouseListeners(),this._userInteractingWithKeyboard=!0,document.body&&b("CSS").removeClass(document.body,"_19_u")},_hideFocusRing:function(){this._removeMouseListeners(),this._attachKeyDownListener(),this._userInteractingWithKeyboard=!1,document.body&&b("CSS").addClass(document.body,"_19_u")},_onKeyDownListener:{remove:b("emptyFunction")},_onClickListener:{remove:b("emptyFunction")}};e.exports=a}),null);
__d("FourOhFourJSLogger",["FourOhFourJSTypedLogger","ScriptPath"],(function(a,b,c,d,e,f){a={log:function(){window.onload=function(){var a=new(b("FourOhFourJSTypedLogger"))();a.setOriginalURI(window.location.href);a.setScriptPath(b("ScriptPath").getScriptPath());a.logVital()}}};e.exports=a}),null);
__d("AccessibilityWebVirtualCursorClickLogger",["AccessibilityWebAssistiveTechTypedLogger","VirtualCursorStatus"],(function(a,b,c,d,e,f){a={init:function(a){a.forEach(function(a){b("VirtualCursorStatus").add(a,this._log)}.bind(this),this)},_log:function(a,c,d){d===void 0&&(d=!1),a&&new(b("AccessibilityWebAssistiveTechTypedLogger"))().setIndicatedBrowsers(c).setIsVirtualCursorAction(d).log()}};e.exports=a}),null);
__d("KeyboardActivityLogger",["Event","KeyboardActivityTypedLogger","Keys","isElementInteractive"],(function(a,b,c,d,e,f){__p&&__p();a=["tab","right","left","up","down","enter"];var g=a.reduce(function(a,b){a[b]={count:0,startTS:0};return a},{}),h=20;c={init:function(){document.addEventListener("keydown",this._listenForKey.bind(this))},_listenForKey:function(a){__p&&__p();var c=a.getTarget();if(b("isElementInteractive")(c))return;switch(b("Event").getKeyCode(a)){case b("Keys").TAB:this._checkKeyActivity("tab");break;case b("Keys").RIGHT:this._checkKeyActivity("right");break;case b("Keys").LEFT:this._checkKeyActivity("left");break;case b("Keys").UP:this._checkKeyActivity("up");break;case b("Keys").DOWN:this._checkKeyActivity("down");break;case b("Keys").RETURN:this._checkKeyActivity("enter");break}},_checkKeyActivity:function(a){var b=g[a];b.count++;b.startTS===0&&(b.startTS=Date.now());b.count===h&&(this._log(a),b.count=0,b.startTS=0)},_log:function(a){var c=g[a];c=Date.now()-c.startTS;new(b("KeyboardActivityTypedLogger"))().setKey(a).setDuration(c).log()}};e.exports=c}),null);
__d("QuickLogEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({655575:{moduleName:"FEED",name:"CONSUMPTION_RESTORATION_WWW",sampleRate:1},655576:{moduleName:"FEED",name:"IMAGE_LOAD_WWW",sampleRate:5e3},655584:{moduleName:"FEED",name:"NOTIFICATION_INTERACTION_WWW",sampleRate:1},655585:{moduleName:"FEED",name:"COMMENT_TTL_WWW",sampleRate:250},655595:{moduleName:"FEED",name:"MAIN_THREAD_PERFORMANCE",sampleRate:1},655596:{moduleName:"FEED",name:"LOAD_ANY_DESTINATION_FROM_NOTIFICATIONS_WWW",sampleRate:50},655597:{moduleName:"FEED",name:"LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW",sampleRate:100},3735589:{moduleName:"UFI",name:"UFI_OPTIMISTIC_COMMENT",sampleRate:100},3735590:{moduleName:"UFI",name:"UFI2_OPTIMISTIC_COMMENT",sampleRate:1},3735591:{moduleName:"UFI",name:"UFI_PERSISTED_COMMENT",sampleRate:100},3735592:{moduleName:"UFI",name:"UFI2_PERSISTED_COMMENT",sampleRate:1},3735593:{moduleName:"UFI",name:"UFI2_OPTIMISTIC_COMMENT_EDIT",sampleRate:1},3735594:{moduleName:"UFI",name:"UFI2_PERSISTED_COMMENT_EDIT",sampleRate:1},3735595:{moduleName:"UFI",name:"UFI_TOP_LEVEL_COMMENTS_PAGINATION",sampleRate:100},3735596:{moduleName:"UFI",name:"UFI2_TOP_LEVEL_COMMENTS_PAGINATION",sampleRate:1},3735597:{moduleName:"UFI",name:"UFI2_REPLY_COMMENTS_PAGINATION",sampleRate:1},3735598:{moduleName:"UFI",name:"UFI_SHARE_DIALOG_OPENS",sampleRate:100},3735599:{moduleName:"UFI",name:"UFI2_SHARE_DIALOG_OPENS",sampleRate:1},3735600:{moduleName:"UFI",name:"UFI_COMPOSER_INPUT_FOCUS",sampleRate:100},3735601:{moduleName:"UFI",name:"UFI_STORY_REACTION",sampleRate:100},3735602:{moduleName:"UFI",name:"UFI2_STORY_REACTION",sampleRate:1},3735603:{moduleName:"UFI",name:"UFI2_COMMENT_REACTION",sampleRate:1},3735604:{moduleName:"UFI",name:"UFI_COMMENT_REACTION",sampleRate:100},3735605:{moduleName:"UFI",name:"UFI_COMPOSER_KEYPRESS_LATENCY",sampleRate:100},3735606:{moduleName:"UFI",name:"UFI2_COMPOSER_KEYPRESS_LATENCY",sampleRate:1},3735608:{moduleName:"UFI",name:"UFI_SHARE_TOOLTIP_OPENS",sampleRate:250},3735609:{moduleName:"UFI",name:"UFI2_SHARE_TOOLTIP_OPENS",sampleRate:250},3735610:{moduleName:"UFI",name:"UFI_STORY_TOP_REACTIONS_TOOLTIP_OPENS",sampleRate:250},3735611:{moduleName:"UFI",name:"UFI2_STORY_TOP_REACTIONS_TOOLTIP_OPENS",sampleRate:250},3735612:{moduleName:"UFI",name:"UFI_STORY_REACTIONS_COUNT_TOOLTIP_OPENS",sampleRate:250},3735613:{moduleName:"UFI",name:"UFI2_STORY_REACTIONS_COUNT_TOOLTIP_OPENS",sampleRate:250},3735614:{moduleName:"UFI",name:"UFI_COMMENT_TOP_REACTIONS_TOOLTIP_OPENS",sampleRate:250},3735615:{moduleName:"UFI",name:"UFI2_COMMENT_TOP_REACTIONS_TOOLTIP_OPENS",sampleRate:250},3735616:{moduleName:"UFI",name:"UFI_COMMENT_COUNT_TOOLTIP_OPENS",sampleRate:250},3735617:{moduleName:"UFI",name:"UFI2_COMMENT_COUNT_TOOLTIP_OPENS",sampleRate:250},7733270:{moduleName:"ADS_MANAGER",name:"ADS_CHANGE_LEVEL_WWW",sampleRate:100},7733271:{moduleName:"ADS_MANAGER",name:"OPTIMAL_STRATEGY_ELIGIBLE_CAMPAIGNS_TTI",sampleRate:1},7995396:{moduleName:"RELAY",name:"UNSAFE_SUBSCRIPTIONS_TEST",sampleRate:100},7995398:{moduleName:"RELAY",name:"UNSAFE_SYNC_TEST",sampleRate:100},7995399:{moduleName:"RELAY",name:"UNSAFE_ASYNC_TEST",sampleRate:100},7995400:{moduleName:"RELAY",name:"RUNTIME_SUBSCRIPTIONS",sampleRate:1},7995401:{moduleName:"RELAY",name:"NETWORK_FETCH_QUERY",sampleRate:1},7995402:{moduleName:"RELAY",name:"RUNTIME_GC",sampleRate:1},7995403:{moduleName:"RELAY",name:"RUNTIME_NOTIFY",sampleRate:100},7995404:{moduleName:"RELAY",name:"RESPONSE_NORMALIZER_NORMALIZE",sampleRate:100},7995408:{moduleName:"RELAY",name:"LOAD_ALL_PROJECTS_AIP",sampleRate:100},11075606:{moduleName:"MARKETPLACE",name:"REACT_TTI_WWW",sampleRate:100},11075638:{moduleName:"MARKETPLACE",name:"BROWSE_FEED_PAGINATION_WWW",sampleRate:1},11075649:{moduleName:"MARKETPLACE",name:"BROWSE_TTI_WWW",sampleRate:1},11075653:{moduleName:"MARKETPLACE",name:"SEARCH_TTI_WWW",sampleRate:1},12517384:{moduleName:"ABOUTPAGE",name:"Z_AMPERANDY_TEST_WWW",sampleRate:0},12845073:{moduleName:"NATIVE_TEMPLATES",name:"MTOUCH_REACT_RENDER",sampleRate:1},12845074:{moduleName:"NATIVE_TEMPLATES",name:"MTOUCH_REACT_ASYNC_ACTION",sampleRate:1},12845075:{moduleName:"NATIVE_TEMPLATES",name:"MTOUCH_ASYNC_ACTION",sampleRate:null},13238313:{moduleName:"STORIES",name:"STORY_VIEWER_LOAD_TTI_WWW",sampleRate:100},13238314:{moduleName:"STORIES",name:"STORY_VIEWER_LOAD_FIRST_TIME_WWW",sampleRate:100},14549005:{moduleName:"LIVE",name:"VIDEO_COMPONENT_TTL",sampleRate:null},19202053:{moduleName:"PAGES_INSIGHTS",name:"OVERVIEW_CARD_WWW",sampleRate:100},19202054:{moduleName:"PAGES_INSIGHTS",name:"OVERVIEW_TAB_PAGE_SUMMARY_WWW",sampleRate:1},19202055:{moduleName:"PAGES_INSIGHTS",name:"OVERVIEW_TAB_MOST_RECENT_POST_WWW",sampleRate:10},19202056:{moduleName:"PAGES_INSIGHTS",name:"POSTS_TAB_ALL_POSTS_PUBLISHED_WWW",sampleRate:10},19202057:{moduleName:"PAGES_INSIGHTS",name:"POSTS_TAB_WHEN_FANS_ONLINE_WWW",sampleRate:10},19202058:{moduleName:"PAGES_INSIGHTS",name:"POSTS_TAB_BEST_POSTS_WWW",sampleRate:10},19202059:{moduleName:"PAGES_INSIGHTS",name:"POST_TAB_PAGE_YOU_WATCH_WWW",sampleRate:10},19202060:{moduleName:"PAGES_INSIGHTS",name:"LIKES_TAB_LOAD_WWW",sampleRate:10},19202061:{moduleName:"PAGES_INSIGHTS",name:"LIKES_TAB_UPDATE_WWW",sampleRate:10},19202062:{moduleName:"PAGES_INSIGHTS",name:"REACH_TAB_LOAD_WWW",sampleRate:10},19202063:{moduleName:"PAGES_INSIGHTS",name:"REACH_TAB_UPDATE_WWW",sampleRate:10},19202064:{moduleName:"PAGES_INSIGHTS",name:"REACH_TAB_REACTION_LOAD_WWW",sampleRate:10},19202065:{moduleName:"PAGES_INSIGHTS",name:"REACH_TAB_REACTION_UPDATE_WWW",sampleRate:10},19202066:{moduleName:"PAGES_INSIGHTS",name:"POSTS_TAB_ALL_POSTS_SEE_MORE_WWW",sampleRate:10},19202067:{moduleName:"PAGES_INSIGHTS",name:"OVERVIEW_TAB_NEW_PAGE_SUMMARY_WWW",sampleRate:1},19202068:{moduleName:"PAGES_INSIGHTS",name:"INSIGHTS_TAB_SWITCHING_WWW",sampleRate:1},19202069:{moduleName:"PAGES_INSIGHTS",name:"INSIGHTS_TAB_SWITCHING_UPDATED_WWW",sampleRate:100},19202070:{moduleName:"PAGES_INSIGHTS",name:"INSIGHTS_TAB_SWITCHING_TARGET_WWW",sampleRate:1},20578316:{moduleName:"GROUPS_ADMIN",name:"MEMBER_REQUESTS_TTI_WWW",sampleRate:0},22347782:{moduleName:"STORIES_ARCHIVE",name:"ARCHIVE_GRID_TTI_WWW",sampleRate:100},23265284:{moduleName:"CHECKOUT_PURCHASE_EXPERIENCES",name:"CHECKOUT_FLOW_WWW",sampleRate:1},23265285:{moduleName:"CHECKOUT_PURCHASE_EXPERIENCES",name:"CHECKOUT_LAUNCH_BY_PRODUCT_WWW",sampleRate:1},23265286:{moduleName:"CHECKOUT_PURCHASE_EXPERIENCES",name:"PAY_FLOW_WWW",sampleRate:1},23265287:{moduleName:"CHECKOUT_PURCHASE_EXPERIENCES",name:"CHECKOUT_INFORMATION_API",sampleRate:1},23855105:{moduleName:"UNIDASH",name:"INIT_LOAD_WWW",sampleRate:1},23855106:{moduleName:"UNIDASH",name:"WIDGET_LOAD_START_WWW",sampleRate:1},23855107:{moduleName:"UNIDASH",name:"WIDGET_LOAD_END_WWW",sampleRate:1},23855108:{moduleName:"UNIDASH",name:"PAGE_LOAD_END_WWW",sampleRate:1},23855109:{moduleName:"UNIDASH",name:"TAB_NAV_START_WWW",sampleRate:1},23855110:{moduleName:"UNIDASH",name:"CLEAN_LOAD_WWW",sampleRate:1},23855111:{moduleName:"UNIDASH",name:"WIDGET_LOAD_WWW",sampleRate:1},23855112:{moduleName:"UNIDASH",name:"TAB_NAV_WWW",sampleRate:1},24117249:{moduleName:"SRT",name:"TIME_TO_FIRST_JOB_WWW",sampleRate:1},24117250:{moduleName:"SRT",name:"PAGE_NAVIGATION_START_WWW",sampleRate:0},24117251:{moduleName:"SRT",name:"TIME_TO_NEXT_JOB_WWW",sampleRate:1},25296897:{moduleName:"MESSENGER_WEB",name:"FIRSTCHATTABOPEN_WWW",sampleRate:1},25296898:{moduleName:"MESSENGER_WEB",name:"GROUP_INPUT_TAB_OPEN_WWW",sampleRate:0},25296899:{moduleName:"MESSENGER_WEB",name:"GROUP_INPUT_INDIVIDUAL_TAB_OPEN_WWW",sampleRate:null},25296900:{moduleName:"MESSENGER_WEB",name:"COMPOSER_INTERACTION",sampleRate:null},25296901:{moduleName:"MESSENGER_WEB",name:"PAGE_LOAD_MDOTCOM_WWW",sampleRate:1},25296902:{moduleName:"MESSENGER_WEB",name:"THREAD_LOAD_MDOTCOM_WWW",sampleRate:1},25296903:{moduleName:"MESSENGER_WEB",name:"SEND_MESSAGE",sampleRate:null},25296904:{moduleName:"MESSENGER_WEB",name:"FETCH_THREAD_INFO",sampleRate:null},25296905:{moduleName:"MESSENGER_WEB",name:"FETCH_THREAD_LIST",sampleRate:null},25296906:{moduleName:"MESSENGER_WEB",name:"FETCH_MORE_THREAD_LIST",sampleRate:null},25493505:{moduleName:"TAHOE",name:"TAHOE_MEDIA_DONE",sampleRate:null},25493506:{moduleName:"TAHOE",name:"TAHOE_DISPLAY_DONE",sampleRate:null},25952260:{moduleName:"NAVIGATION",name:"ASYNC_NAVIGATION_MTOUCH",sampleRate:1},26476545:{moduleName:"WWW_PROFILE",name:"TIMELINE_TAIL_LOAD_WWW",sampleRate:1},26804225:{moduleName:"WIKTORK_TEST",name:"WIKTORK_EVENT_ONE_XD",sampleRate:0},26804227:{moduleName:"WIKTORK_TEST",name:"WIKTORK_TEST_THREE",sampleRate:0},26804230:{moduleName:"WIKTORK_TEST",name:"WIKTORK_TEST_ELEVEN",sampleRate:0},26804231:{moduleName:"WIKTORK_TEST",name:"WIKTORK_TEST_LOL",sampleRate:10},26869761:{moduleName:"CREATOR_STUDIO",name:"CREATOR_STUDIO_INITIAL_LOAD",sampleRate:1},26869762:{moduleName:"CREATOR_STUDIO",name:"CREATOR_STUDIO_FEED_LOAD",sampleRate:1},26869763:{moduleName:"CREATOR_STUDIO",name:"CREATOR_STUDIO_CONTEXT_SWITCH",sampleRate:1},26869764:{moduleName:"CREATOR_STUDIO",name:"CREATOR_STUDIO_LOADING_EVENT",sampleRate:0},27459585:{moduleName:"IG_WEB",name:"IG_FEED_LOAD",sampleRate:1e4},27459586:{moduleName:"IG_WEB",name:"IG_FEED_LOAD_MORE",sampleRate:1e4},27459587:{moduleName:"IG_WEB",name:"EMBED_LOAD",sampleRate:1e3},27459588:{moduleName:"IG_WEB",name:"APP_START",sampleRate:1e3},27983873:{moduleName:"COMET_VISUAL_COMPLETION",name:"COMET_VISUALLY_COMPLETE_WWW",sampleRate:1},27983874:{moduleName:"COMET_VISUAL_COMPLETION",name:"COMET_SPEED_INDEX_WWW",sampleRate:1},27983875:{moduleName:"COMET_VISUAL_COMPLETION",name:"BLUE_VISUALLY_COMPLETE_WWW",sampleRate:1},27983876:{moduleName:"COMET_VISUAL_COMPLETION",name:"BLUE_SPEED_INDEX_WWW",sampleRate:1},28377089:{moduleName:"DELTOID_METRIC_MONITOR",name:"QUERY_RESULTS",sampleRate:0},28770305:{moduleName:"NEWPULSE",name:"THRIFT_CALL_WWW",sampleRate:0},29294593:{moduleName:"QE",name:"QE2_LOAD",sampleRate:1},29818881:{moduleName:"COMET_STARTUP",name:"INITIAL_LOAD",sampleRate:1},29818882:{moduleName:"COMET_STARTUP",name:"NAVIGATION",sampleRate:1},29818883:{moduleName:"COMET_STARTUP",name:"INITIAL_LOAD_SERVER",sampleRate:1},29818884:{moduleName:"COMET_STARTUP",name:"TAIL_LOAD",sampleRate:1},29884421:{moduleName:"NPX",name:"NUX_FRIEND_SUGGESTIONS_LOAD_TIME_MTOUCH",sampleRate:10},29884422:{moduleName:"NPX",name:"NUX_FRIEND_REQUESTS_LOAD_TIME_MTOUCH",sampleRate:10},29884423:{moduleName:"NPX",name:"NUX_PROFILE_PICTURE_LOAD_TIME_MTOUCH",sampleRate:10},29884424:{moduleName:"NPX",name:"NUX_APP_INSTALL_LOAD_TIME_MTOUCH",sampleRate:10},29884425:{moduleName:"NPX",name:"NUX_CONTACT_IMPORTER_TTI_WWW",sampleRate:10},29884426:{moduleName:"NPX",name:"NUX_PYMK_TTI_WWW",sampleRate:10},29949953:{moduleName:"ADS_INTEGRATION_PORTAL",name:"LOAD_ALL_PROJECTS_WWW",sampleRate:1},29949954:{moduleName:"ADS_INTEGRATION_PORTAL",name:"LOAD_ALL_PROJCTS_WWW",sampleRate:1},29949955:{moduleName:"ADS_INTEGRATION_PORTAL",name:"LOAD_PROJECTS_TABLE_WWW",sampleRate:1},30408705:{moduleName:"TASKS",name:"GRAPHQL_MUTATION_WWW",sampleRate:10},30605313:{moduleName:"COMET_INTERACTION_TRACING",name:"HOME_FEED_TAILLOAD",sampleRate:1},30605314:{moduleName:"COMET_INTERACTION_TRACING",name:"NOTIFICATION_PAGINATION",sampleRate:1},30605315:{moduleName:"COMET_INTERACTION_TRACING",name:"TIMELINE_FEED_TAILLOAD",sampleRate:1}})}),null);
__d("ServiceWorkerLoginAndLogout",["ClientServiceWorkerMessage"],(function(a,b,c,d,e,f){function g(a){new(b("ClientServiceWorkerMessage"))(a,null).sendViaController()}a={login:function(){g("login")},logout:function(){g("logout")}};e.exports=a}),null);
__d("XRelayBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/relay/bootload/",{component:{type:"String",required:!0},params:{type:"String",required:!0},route:{type:"String",required:!0},uri:{type:"String",required:!0}})}),null);