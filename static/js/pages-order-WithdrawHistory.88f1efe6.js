(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-WithdrawHistory"],{1131:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.tab-bar[data-v-6bde1cc7]{height:%?88?%;display:flex;flex-direction:row;background:#fff}.tab-bar .tab[data-v-6bde1cc7]{position:relative;display:flex;flex:1;align-items:center;flex-direction:column;justify-content:center;box-sizing:border-box;padding:0 4px;color:#646566;font-size:%?28?%;line-height:%?40?%;cursor:pointer}.tab-bar .tab .select[data-v-6bde1cc7]{font-weight:600;color:#333}.tab-bar .tab .line[data-v-6bde1cc7]{position:absolute;bottom:0;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1;width:%?80?%;height:%?6?%;background:#1989fa;border-radius:%?6?%}.uni-input[data-v-6bde1cc7]{font-size:%?24?%}.kefu .uni-border-left uni-button[data-v-6bde1cc7]::after{border:none}.kefu[data-v-6bde1cc7] :deep(.uni-popup .uni-popup__wrapper){border-radius:%?15?%}.kefu :v-deep .uni-dialog-button-text[data-v-6bde1cc7]{background-color:#fff}.kefu[data-v-6bde1cc7] :deep(.uni-popup__wrapper){border-radius:%?15?%}.content[data-v-6bde1cc7]{min-height:100vh;min-width:100vw;box-sizing:border-box}.self[data-v-6bde1cc7]{text-align:center;margin:%?60?% auto %?30?%;font-size:%?28?%;color:#a7a7a7;background-color:#f7f7f7;border-radius:%?30?%;padding:%?10?% %?20?%;width:%?300?%}.underline[data-v-6bde1cc7]{position:relative}.underline[data-v-6bde1cc7]:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;right:0;bottom:0;left:0;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tab-bar[data-v-6bde1cc7]{height:%?88?%;display:flex;flex-direction:row;background:#fff}.tab-bar .tab[data-v-6bde1cc7]{position:relative;display:flex;flex:1;align-items:center;flex-direction:column;justify-content:center;box-sizing:border-box;padding:0 4px;color:#646566;font-size:%?28?%;line-height:%?40?%;cursor:pointer}.tab-bar .tab .select[data-v-6bde1cc7]{font-weight:600;color:#333}.tab-bar .tab .line[data-v-6bde1cc7]{position:absolute;bottom:0;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1;width:%?80?%;height:%?6?%;background:#1989fa;border-radius:%?6?%}.list[data-v-6bde1cc7]{margin:16px 16px 0;height:100%;overflow-y:auto;font-size:12px}.list .record[data-v-6bde1cc7]{display:flex;flex-wrap:wrap;border-radius:4px;padding:0 0 8px;background-color:#fff;box-sizing:border-box;margin-bottom:16px;position:relative}.list .record .go-withdraw-apply[data-v-6bde1cc7]{position:absolute;bottom:10px;right:10px;width:80px;height:28px}.list .record .item[data-v-6bde1cc7]{box-sizing:border-box;padding:0 16px;display:flex;line-height:24px;width:100%;position:relative}.list .record .item uni-text[data-v-6bde1cc7]{display:block}.list .record .item .label[data-v-6bde1cc7]{width:20%;color:#333}.list .record .item .value[data-v-6bde1cc7]{color:#333}.list .record .item .info[data-v-6bde1cc7]{position:absolute;right:16px;color:var(--van-primary-color)}.list .record .header[data-v-6bde1cc7]{color:#333;line-height:32px;margin-bottom:8px;position:relative}.list .record .header .status[data-v-6bde1cc7]{display:flex;align-items:center;position:absolute;right:14px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.list .record .header .label[data-v-6bde1cc7]{color:#333}',""]),t.exports=e},"32bf":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2634")),a=i(n("2fdc")),r=(i(n("d428")),n("dbe5")),s=i(n("843d")),c={components:{Protocle:s.default},data:function(){return{form:{phone:"",auth_code:""},msgTitle:this.$t("common.getCode"),isAgree:!1,userInfo:{},amount:0,url:"url",rejectEmit:!1,pupShow:!1,disableSms:!1,count:60}},computed:{disableSmsBtn:function(){return this.disableSms||!this.form.phone}},onLoad:function(){this.$refs.popuplogin.open()},methods:{sendSMS:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.form.phone){e.next=3;break}return uni.showToast({title:t.$t("common.inputPhoneNo"),icon:"none"}),e.abrupt("return");case 3:return e.next=5,(0,r.postSMS)({phone:t.form.phone,sms_code:"login"});case 5:t.disableSms=!0,t.countDown();case 7:case"end":return e.stop()}}),e)})))()},countDown:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.timer=setInterval((function(){t.count>0&&t.count<=60?(t.count--,t.msgTitle="".concat(t.count,"s")):(t.count=60,t.disableSms=!1,t.msgTitle=t.$t("common.getCode"),t.timer&&clearInterval(t.timer))}),1e3);case 1:case"end":return e.stop()}}),e)})))()},showMessage:function(){uni.showToast({title:this.$t("common.agreeProtocle"),icon:"none"})},close:function(){this.$refs.popuplogin.close()},change:function(t){this.pupShow=t,this.$emit("change",t)},showPup:function(t){this.$refs.popuplogin.open()},openAgreement:function(){this.$refs.Protocle.show()},getAuthCode:function(t){},login:function(t){var e=this;this.isAgree?(0,r.login)(this.form).then((function(t){uni.setStorageSync("loginToken",t.token),e.$emit("loginOk",!0),e.close()})):uni.showToast({title:this.$t("common.agreeProtocle"),icon:"none"})}}};e.default=c},"3e5f":function(t,e,n){var i=n("1131");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("de96a36c",i,!0,{sourceMap:!1,shadowMode:!1})},5669:function(t,e,n){var i=n("accc");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("73bf3020",i,!0,{sourceMap:!1,shadowMode:!1})},"65cc":function(t,e,n){"use strict";n.r(e);var i=n("b1e7"),o=n("cab7");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("8ce3");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0503a3c2",null,!1,i["a"],void 0);e["default"]=s.exports},"81ce":function(t,e,n){"use strict";n.r(e);var i=n("aada"),o=n("d37b");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("bbcf");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"6bde1cc7",null,!1,i["a"],void 0);e["default"]=s.exports},"8ce3":function(t,e,n){"use strict";var i=n("5669"),o=n.n(i);o.a},aada:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniTag:n("0e30").default,kevyEmpty:n("1b3c").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"list"},[t.orderList.length>0?n("v-uni-scroll-view",{style:"height: "+(t.isScroll?t.scrollH+"rpx":"100%"),attrs:{"scroll-y":t.isScroll,"show-scrollbar":!1,"upper-threshold":"40","refresher-enabled":!0,"refresher-triggered":t.refresherTriggered},on:{refresherrefresh:function(e){arguments[0]=e=t.$handleEvent(e),t.refresherpulling.apply(void 0,arguments)}}},t._l(t.orderList,(function(e){return n("v-uni-view",{key:e.order_number,staticClass:"record"},[n("v-uni-view",{staticClass:"item header underline"},[n("v-uni-text",{staticClass:"value"},[t._v(t._s(e.account))]),n("v-uni-view",{staticClass:"status"},[t._v(t._s(t.$t("order.status"))+"："),n("uni-tag",{attrs:{size:"small",text:t.STATUS_TEXT_MAP[e.status],type:t.STATUS_MAP[e.status]}})],1)],1),n("v-uni-view",{staticClass:"item v-name"},[n("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("withdraw.applyAmt2")))]),n("v-uni-text",{staticClass:"value"},[t._v("฿"+t._s(e.amount/100)+"("+t._s(t.$t("withdraw.transactionFee"))+"฿"+t._s(e.charge/100)+")")])],1),n("v-uni-view",{staticClass:"item v-amount"},[n("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("withdraw.amountCredited")))]),n("v-uni-text",{staticClass:"value"},[t._v("฿"+t._s(((e.amount-e.charge)/100).toFixed(0)))])],1),n("v-uni-view",{staticClass:"item v-time"},[n("v-uni-text",{staticClass:"value",staticStyle:{color:"#858585"}},[t._v(t._s(e.create_time))])],1)],1)})),1):n("kevy-empty",{attrs:{show:!0,type:"favor",text:t.$t("withdraw.noAmountCredited")}}),n("LoginPopup",{ref:"loginPopup",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.showPopup=e.show}.apply(void 0,arguments)},loginOk:function(e){arguments[0]=e=t.$handleEvent(e),t.queryOrder.apply(void 0,arguments)}}})],1)},a=[]},accc:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.tab-bar[data-v-0503a3c2]{height:%?88?%;display:flex;flex-direction:row;background:#fff}.tab-bar .tab[data-v-0503a3c2]{position:relative;display:flex;flex:1;align-items:center;flex-direction:column;justify-content:center;box-sizing:border-box;padding:0 4px;color:#646566;font-size:%?28?%;line-height:%?40?%;cursor:pointer}.tab-bar .tab .select[data-v-0503a3c2]{font-weight:600;color:#333}.tab-bar .tab .line[data-v-0503a3c2]{position:absolute;bottom:0;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1;width:%?80?%;height:%?6?%;background:#1989fa;border-radius:%?6?%}.uni-input[data-v-0503a3c2]{font-size:%?24?%}.kefu .uni-border-left uni-button[data-v-0503a3c2]::after{border:none}.kefu[data-v-0503a3c2] :deep(.uni-popup .uni-popup__wrapper){border-radius:%?15?%}.kefu :v-deep .uni-dialog-button-text[data-v-0503a3c2]{background-color:#fff}.kefu[data-v-0503a3c2] :deep(.uni-popup__wrapper){border-radius:%?15?%}.kefu .uni-border-left uni-button[data-v-0503a3c2]::after{border:none}.kefu[data-v-0503a3c2] :deep(.uni-popup .uni-popup__wrapper){border-radius:%?15?%}.kefu :v-deep .uni-dialog-button-text[data-v-0503a3c2]{background-color:#fff}.button-sms[data-v-0503a3c2]{margin:0;line-height:%?74?%;height:%?74?%;padding:0 %?24?%;font-size:%?24?%;margin-left:%?30?%}.login-box[data-v-0503a3c2]{background:#fff;height:%?600?%;padding:%?10?% %?30?%;width:%?600?%;border-radius:%?10?%}.login-box .title[data-v-0503a3c2]{font-size:%?32?%;font-weight:600;color:#333;margin:%?30?% 0}.login-box .protocle[data-v-0503a3c2]{display:flex;align-items:center;justify-content:center;margin-top:%?40?%}.login-box .login-btn-auth[data-v-0503a3c2]{background:#ed4014;text-align:center;color:#fff;font-size:%?28?%;border-radius:%?40?%;width:%?480?%}.login-box .auth-box[data-v-0503a3c2]{margin-top:%?30?%;display:flex;justify-content:center}',""]),t.exports=e},b1e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniPopup:n("6519").default,uniForms:n("4dcc").default,uniFormsItem:n("10b5").default,uniEasyinput:n("bab4").default,uniIcons:n("38cd").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"popuplogin",staticClass:"kefu",attrs:{type:"center"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"login-box"},[n("v-uni-view",{staticClass:"title",staticStyle:{"text-align":"center"}},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.$t("common.loginbtn")))])],1),n("uni-forms",{ref:"form",attrs:{modelValue:t.form,"label-width":"120rpx"}},[n("uni-forms-item",{attrs:{label:t.$t("common.phoneNo")}},[n("v-uni-view",{staticStyle:{width:"100%",height:"100%",display:"flex","justify-content":"space-between"}},[n("v-uni-text",{staticStyle:{"margin-right":"10px","margin-top":"8px"}},[t._v("+66")]),n("uni-easyinput",{attrs:{placeholder:t.$t("common.inputPhoneNo")},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),n("uni-forms-item",{staticStyle:{display:"flex"},attrs:{label:t.$t("common.authCode")}},[n("v-uni-view",{staticStyle:{width:"100%",height:"100%",display:"flex","justify-content":"space-between"}},[n("uni-easyinput",{attrs:{placeholder:t.$t("common.inputAuthCode")},model:{value:t.form.auth_code,callback:function(e){t.$set(t.form,"auth_code",e)},expression:"form.auth_code"}}),n("v-uni-button",{staticClass:"button-sms",attrs:{disabled:t.disableSmsBtn,size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendSMS()}}},[t._v(t._s(t.msgTitle))])],1)],1)],1),n("v-uni-view",{staticClass:"auth-box"},[n("v-uni-button",{staticClass:"login-btn-auth",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.loginbtn")))])],1),n("v-uni-view",{staticClass:"protocle"},[t.isAgree?n("uni-icons",{attrs:{type:"circle-filled",color:"#1874ff",size:"36rpx"}}):n("uni-icons",{attrs:{type:"circle",size:"36rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isAgree=!0}}}),n("v-uni-view",{staticStyle:{"margin-left":"5px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isAgree=!0}}},[t._v(t._s(t.$t("common.loginProtocle"))),n("v-uni-text",{staticStyle:{color:"#1874ff"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.openAgreement.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.loginProtocleDetail")))])],1)],1)],1),n("Protocle",{ref:"Protocle"})],1)},a=[]},bbcf:function(t,e,n){"use strict";var i=n("3e5f"),o=n.n(i);o.a},cab7:function(t,e,n){"use strict";n.r(e);var i=n("32bf"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d37b:function(t,e,n){"use strict";n.r(e);var i=n("de744"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},de744:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2634")),a=i(n("2fdc")),r=n("dbe5"),s=i(n("65cc")),c={components:{LoginPopup:s.default},data:function(){return{tabList:[],selectTab:this.$t("order.all"),scrollH:0,isScroll:!0,refresherTriggered:!1,orderList:[],STATUS_MAP:{pending:"primary",success:"success",trading:"warning",failed:"error"},navBarHeight:44}},computed:{STATUS_TEXT_MAP:function(){return{pending:this.$t("order.pending"),confirming:this.$t("order.confirming"),success:this.$t("order.success"),failed:this.$t("order.failed"),trading:this.$t("order.trading")}}},created:function(){},onShow:function(){var t=this;this.queryOrder(),uni.getSystemInfo({success:function(e){t.$nextTick((function(){var t=e.windowHeight,n=e.windowWidth,i=750/n,o=64/i,a=t-o-this.navBarHeight;this.scrollH=a*i,this.pageType}))}})},onLaunch:function(){},methods:{refresherpulling:function(){var t=this;this.refresherTriggered=!0,setTimeout((function(){t.refresherTriggered=!1}),1e3)},queryOrder:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getWithdrawalHistory)();case 2:n=e.sent,t.orderList=n;case 4:case"end":return e.stop()}}),e)})))()},scrolltolowerFun:function(){},showLogin:function(){var t=this;this.$nextTick((function(){t.$refs.loginPopup.showPup()}))}}};e.default=c}}]);