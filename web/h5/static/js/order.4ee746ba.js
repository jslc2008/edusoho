(window.webpackJsonp=window.webpackJsonp||[]).push([["order"],{"639e":function(t,e,a){"use strict";a("c5f6");var s={name:"ECoupon",mixins:[a("8813").a],props:{showButton:{type:Boolean,default:!0},showSelecet:{type:Boolean,default:!1},coupon:{type:Object,default:function(){return{}}},index:{type:Number,default:-1},active:{type:Number,default:-1}},data:function(){return{}},created:function(){},methods:{onSelect:function(){this.showSelecet&&this.$emit("chooseItem",{index:this.index,itemData:this.coupon})},couponHandle:function(){this.$emit("couponHandle",this.coupon)}}},i=a("2877"),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"coupon-container e-coupon",on:{click:t.onSelect}},[a("div",{staticClass:"e-coupon__container clearfix e-coupon-single"},[a("div",{key:t.index,staticClass:"e-coupon__body"},[a("div",{staticClass:"e-coupon__header clearfix"},[a("span",{staticClass:"e-coupon__price",domProps:{innerHTML:t._s(t.priceHtml(t.coupon))}}),a("div",{staticClass:"e-coupon__name"},[a("div",{staticClass:"text-overflow text-14 coupon-name"},[t._v(t._s(t.coupon.name||"优惠券"))]),t.coupon.deadlineMode&&"time"!==t.coupon.deadlineMode?t._e():a("span",{staticClass:"text-10"},[t._v(t._s(t.timeExpire(t.coupon.createdTime,t.coupon.deadline)))]),"day"!==t.coupon.deadlineMode||t.coupon.currentUserCoupon?t._e():a("span",{staticClass:"text-10"},[t._v("领取后"+t._s(t.coupon.fixedDay)+"天内有效")]),"day"===t.coupon.deadlineMode&&t.coupon.currentUserCoupon?a("span",{staticClass:"text-10"},[t._v(t._s(t.timeExpire(t.coupon.createdTime,t.coupon.currentUserCoupon.deadline)))]):t._e()]),t.coupon.currentUserCoupon?a("div",{staticClass:"stamp"}):t._e(),t.showSelecet?a("div",{staticClass:"e-coupon__select-circle"},[a("i",{staticClass:"select-icon",class:t.index===t.active?"h5-icon h5-icon-check":""})]):t._e(),t.showButton&&!t.coupon.currentUserCoupon?a("span",{staticClass:"coupon-button",on:{click:t.couponHandle}},[t._v("领券")]):t._e()]),a("div",{staticClass:"e-coupon__middle"}),a("div",{staticClass:"e-coupon__bottom text-overflow"},[t._v("\n        可用范围："+t._s(t.scopeFilter(t.coupon))+"\n      ")])])])])}),[],!1,null,null,null);e.a=r.exports},8807:function(t,e,a){"use strict";a("a481"),a("ac6a"),a("456d"),a("7f7f"),a("c5f6"),a("8e6e");var s=a("bd86"),i=a("2f62");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}var o={props:{type:{type:String,default:"price"},course:{type:Object,default:{}},order:{type:Object,default:{}}},data:function(){return{isFree:0==this.course.price}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(a,!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(i.d)(["courseSettings"]),{rate:function(){return parseInt(this.course.publishedTaskNum)?parseInt(this.course.progress.percent):0},showStudent:function(){return!this.courseSettings||Number(this.courseSettings.show_student_num_enabled)}}),filters:{numFilter:function(t){return t?parseFloat(t).toFixed(2):""}},methods:{goToPay:function(){this.$router.push({path:"/pay",query:{id:this.order.id,source:"order",sn:this.order.sn,targetId:this.order.targetId,targetType:this.order.targetType}})}}},n=a("2877"),c={components:{switchBox:Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"e-course-switch-box"},["price"===t.type?a("div",{staticClass:"switch-box"},[a("span",{staticClass:"switch-box__price"},[t.isFree?a("p",{staticClass:"free"},[t._v("免费")]):t._e(),t.isFree?t._e():a("p",{staticClass:"price"},[t._v("¥ "+t._s(t.course.price))])]),a("span",{staticClass:"switch-box__state"},[t.showStudent?a("p",[t._v(t._s(t.course.studentNum)+"人在学")]):t._e()])]):t._e(),"order"===t.type?a("div",{staticClass:"switch-box"},[a("span",{staticClass:"switch-box__price"},[t.isFree?a("p",{staticClass:"free"},[t._v("免费")]):t._e(),t.isFree?t._e():a("p",{staticClass:"price"},[t._v("¥ "+t._s(t.order.pay_amount/100))])]),a("span",{staticClass:"switch-box__state"},["created"!==t.order.status&&"paying"!==t.order.status?a("p",{class:t.order.status},[t._v("\n        "+t._s(t._f("filterOrderStatus")(t.order.status))+"\n      ")]):t._e(),"created"===t.order.status||"paying"===t.order.status?a("span",{staticClass:"order-pay",on:{click:t.goToPay}},[t._v(t._s(t._f("filterOrderStatus")(t.order.status)))]):t._e()])]):t._e(),"confirmOrder"===t.type?a("div",{staticClass:"switch-box"},[a("span",{staticClass:"switch-box__price"},[a("p",{staticClass:"price"},[t._v("¥ "+t._s(t._f("numFilter")(t.order.totalPrice)))])])]):t._e(),"rank"===t.type?a("div",{staticClass:"rank-box"},[a("div",{staticClass:"progress round-conner"},[a("div",{staticClass:"curRate round-conner",style:{width:t.rate+"%"}})]),a("span",[t._v(t._s(this.rate)+"%")])]):t._e()])}),[],!1,null,null,null).exports},props:{course:{type:Object,default:function(){return{}}},order:{type:Object,default:function(){return{}}},type:{type:String,default:"price"},feedback:{type:Boolean,default:!0},typeList:{type:String,default:"course_list"},duration:{type:Number,default:0}},data:function(){return{pathName:this.$route.name}},computed:{imgSrc:function(){if("classroom_list"===this.typeList)return this.course.cover.middle;var t=this.course.courseSet;return t?t.cover.middle:this.order.cover.middle},title:function(){return"classroom_list"===this.typeList?this.course.title:this.course.courseSetTitle||(this.course.courseSet?this.course.courseSet.title:"")||this.order.title},teachPlan:function(){return!!this.course.title&&this.course.title},imgClass:function(){return"vip"===this.typeList?"e-vip__img":"e-course__img"},vipDuration:function(){return"month"===this.order.unitType?"".concat(this.duration,"个月"):"year"===this.order.unitType?"".concat(this.duration,"年"):"".concat(this.duration,"天")}},watch:{course:{handler:function(t){var e=t.courseSet;if("miniprogramSetting"===this.pathName&&e)for(var a=Object.keys(e.cover),s=0;s<a.length;s++)e.cover[a[s]]=e.cover[a[s]].replace(/^(\/\/)|(http:\/\/)/,"https://")},immediate:!0}},methods:{onClick:function(t){if(this.feedback&&"vip"!==this.typeList){var e="order"===this.type,a=this.course.id||this.order.targetId;"SPAN"!==t.target.tagName&&(e?location.href=this.order.targetUrl:this.$router.push({path:"course_list"===this.typeList?"/course/".concat(a):"/classroom/".concat(a)}))}}}},u=Object(n.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"e-course"},[a("div",{staticClass:"clearfix",on:{click:t.onClick}},[a("div",{staticClass:"e-course__left pull-left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgSrc,expression:"imgSrc"}],class:t.imgClass})]),a("div",{staticClass:"e-course__right pull-left"},["confirmOrder"===t.type?a("div",{staticClass:"e-course__title course-confirm-title"},[t._v("\n        "+t._s(t.title)),"vip"===t.typeList?a("span",{staticClass:"grey-medium"},[t._v(" x "+t._s(t.vipDuration))]):t._e()]):a("div",[a("div",{staticClass:"e-course__title text-overflow"},[t._v(t._s(t.title))]),"classroom_list"===t.typeList?a("div",{staticClass:"e-course__count"},[t._v("\n          共 "+t._s(t.course.courseNum)+" 门课程\n        ")]):t._e(),"course_list"===t.typeList?a("div",{staticClass:"e-course__project text-overflow"},[t.teachPlan?a("span",[t._v(t._s(t.teachPlan))]):t._e()]):t._e()]),a("switchBox",{attrs:{type:t.type,course:t.course,order:t.order,"student-num":t.course.studentNum,"published-task-num":t.course.publishedTaskNum}})],1)])])}),[],!1,null,null,null);e.a=u.exports},8813:function(t,e,a){"use strict";a("28a5"),a("6b54"),a("c5f6");var s=a("0d25");e.a={methods:{timeExpire:function(t,e){return t?(t=Object(s.formatFullTime)(new Date(t)),e=Object(s.formatFullTime)(new Date(e)),"".concat(t," 至 ").concat(e)):(e=Object(s.formatFullTime)(new Date(e)),"有效期截止：".concat(e))},timeCalculation:function(t){var e=(new Date).setDate((new Date).getDate()+Number(t));return e=Object(s.formatFullTime)(new Date(e)),"有效期至：".concat(e)},priceHtml:function(t){var e=t.rate,a=t.type,s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=parseInt(e,10),r=i.toString().length>3?"text-16 ml-5":"",o=Number(e).toFixed(2).split(".")[1];o=0===Number(o)?"":".".concat(o);var n="discount"===a?"折":"元";return s?'<span class="'.concat(r,'">').concat(i,'</span><span class="text-14">').concat(o+n,"</span>"):i+o+n},scopeFilter:function(t){var e=t.targetDetail,a=e.numType,s=e.product,i="";if("single"===a)switch(s){case"course":case"classroom":i="指定商品";break;case"vip":i="指定会员";break;default:i=""}else if("all"===a)switch(s){case"course":i="全部课程";break;case"classroom":i="全部班级";break;case"all":i="全部商品";break;case"vip":i="全部会员";break;default:i=""}else switch(s){case"course":case"classroom":i="部分商品";break;default:i=""}return i},handleClick:function(t){this.$emit("buttonClick",t)},receiveTimeExpire:function(t){return Object(s.formatchinaTime)(new Date(t))}}}},"8b8e":function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d"),a("96cf");var s=a("3b8d"),i=(a("a481"),a("e7e5"),a("d399")),r=(a("c5f6"),a("bd86")),o=a("2f62"),n=a("639e"),c=a("8807"),u=a("3ce7");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}var p={components:{eCourse:c.a,coupon:n.a},data:function(){return{course:{availableCoupons:[],courseSet:{cover:{}}},activeItemIndex:-1,showList:!1,itemData:null,couponNumber:0,preferenceCode:"",targetType:this.$route.query.targetType,targetId:this.$route.params.id,targetUnit:this.$route.params.unit,targetNum:this.$route.params.num,vipOrderType:this.$route.params.type,detail:{},payWay:"",selected:!0,paySettings:{},inWechat:this.isWeixinBrowser(),timeoutId:-1}},created:function(){"升级"===this.vipOrderType&&(this.targetUnit=void 0,this.targetNum=void 0),this.confirmOrder(),this.getSettings()},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(o.d)(["wechatSwitch","isLoading","couponSwitch"]),{total:function(){var t=this.course.totalPrice;if(!this.itemData)return t?Number(this.course.totalPrice).toFixed(2):"";var e="minus"===this.itemData.type,a=this.itemData.rate;return e?Math.max(t-a,0).toFixed(2):t?Number(t*a*.1).toFixed(2):""},couponMoney:function(){if(this.itemData){var t="discount"===this.itemData.type,e=this.itemData.rate;return t&&(e=Number(this.course.totalPrice-this.course.totalPrice*this.itemData.rate*.1).toFixed(2)),this.couponNumber=e,e}},couponShow:function(){return 0==this.course.availableCoupons.length?"无可用优惠券":this.couponNumber?parseFloat(this.itemData.rate):this.course.availableCoupons.length+"张可用"},getValidity:function(){return this.$route.query.expiryScope||"永久有效"},validPayWay:function(){return this.paySettings.wxpayEnabled||this.paySettings.alipayEnabled&&!this.inWechat}}),filters:{filterPrice:function(t){return parseFloat(t).toFixed(2)},couponType:function(t){return"discount"==t?"折":"元"}},watch:{$route:function(t,e){this.confirmOrder()}},beforeRouteLeave:function(t,e,a){clearTimeout(this.timeoutId),a()},methods:{handleSubmit:function(){if(0==this.total)this.createOrder("free");else{if(!this.validPayWay)return void i.a.fail("无可用支付方式");this.createOrder("pay")}},usePreferenceCode:function(){var t=this,e=this;u.a.exchangePreferential({query:{code:this.preferenceCode},data:{targetType:this.targetType,targetId:this.targetId,action:"receive"}}).then((function(a){if(a.success){e.itemData=a.data;var s=e.course.availableCoupons.length||0;e.$set(t.course.availableCoupons,s,a.data),e.preferenceCode="",e.showList=!1}else a.error&&i.a.fail(a.error.message)})).catch((function(t){}))},disuse:function(){this.showList=!1,this.activeItemIndex=-1,this.itemData=null,this.couponNumber=0},chooseItem:function(t){this.activeItemIndex=t.index,this.itemData=t.itemData,this.showList=!1},confirmOrder:function(){var t=this,e={targetType:this.targetType,targetId:this.targetId,num:this.targetNum,unit:this.targetUnit};u.a.confirmOrder({data:e}).then((function(e){if(t.couponSwitch){var a=e.availableCoupons;t.course=e,t.itemData=a.length>0?a[0]:null}})).catch((function(e){t.$router.go(-1)}))},routerChange:function(){var t=this;this.wechatSwitch?this.$router.replace({path:"/pay_success",query:{targetType:this.targetType,targetId:this.targetId}}):"vip"===this.targetType?this.$router.replace({path:"/".concat(this.targetType)},(function(){t.$router.go(-1)})):this.$router.replace({path:"/".concat(this.targetType,"/").concat(this.targetId)},(function(){t.$router.go(-1)}))},getSettings:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getSettings({query:{type:"payment"}}).catch((function(t){i.a.fail(t.message)}));case 2:this.paySettings=t.sent,this.paySettings.alipayEnabled&&!this.inWechat?this.payWay="Alipay_LegacyH5":this.paySettings.wxpayEnabled&&(this.payWay="WechatPay_H5");case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),createOrder:function(t){var e=this,a=this;u.a.createOrder({data:{targetType:this.targetType,targetId:this.targetId,isOrderCreate:1,couponCode:this.itemData?this.itemData.code:"",unit:this.targetUnit,num:this.targetNum}}).then((function(s){"free"==t?a.routerChange():"pay"==t&&(e.detail=Object.assign({},s),a.handlePay())})).catch((function(t){i.a.fail(t.message)}))},isWeixinBrowser:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},getTradeInfo:function(t){var e=this;return u.a.getTrade({query:{tradesSn:t}}).then((function(a){if(a.isPaid)return e.wechatSwitch?void e.$router.replace({path:"/pay_success",query:{paidUrl:window.location.origin+a.paidSuccessUrlH5}}):void(window.location.href=window.location.origin+a.paidSuccessUrlH5);e.timeoutId=setTimeout((function(){e.getTradeInfo(t)}),2e3)})).catch((function(t){i.a.fail(t.message)}))},handlePay:function(){var t=this;this.validPayWay&&("WechatPay_H5"===this.payWay&&this.inWechat?window.location.href="".concat(window.location.origin,"/pay/center/wxpay_h5?pay_amount=")+"".concat(this.detail.pay_amount,"&title=").concat(this.detail.title,"&sn=").concat(this.detail.sn):u.a.createTrade({data:{gateway:this.payWay,type:"purchase",orderSn:this.detail.sn,app_pay:"Y"}}).then((function(e){"WechatPay_H5"!==t.payWay?window.location.href=e.payUrl:t.getTradeInfo(e.tradeSn).then((function(){window.location.href=e.mwebUrl}))})).catch((function(t){i.a.fail(t.message)})))}}},d=a("2877"),h=Object(d.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("div",{staticClass:"goods-info"},[t.isLoading?a("e-loading"):t._e(),Object.keys(t.course).length>0?a("e-course",{attrs:{"type-list":t.targetType,duration:t.course.duration,order:t.course,course:t.course,type:"confirmOrder"}}):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.couponSwitch,expression:"couponSwitch"}],staticClass:"order-coupon"},[a("div",{staticClass:"coupon-column",on:{click:function(e){t.showList=!0}}},[a("span",[t._v("优惠券")]),a("span",{class:["red",t.itemData?"coupon-money":""]},[t._v(t._s(t.couponShow)),t.itemData?a("span",{staticClass:"coupon-type"},[t._v(t._s(t._f("couponType")(t.itemData.type)))]):t._e(),a("i",{staticClass:"iconfont icon-arrow-right"})])]),a("van-popup",{staticClass:"e-popup full-height-popup coupon-popup",attrs:{overlay:!1,position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[a("van-nav-bar",{staticClass:"nav-bar",attrs:{"left-arrow":!0,title:"优惠券"},on:{"click-left":t.disuse}}),a("div",{class:["btn-coupon-exit",{active:t.activeItemIndex<0}],on:{click:t.disuse}},[t._v("不使用优惠 "),a("i",{staticClass:"iconfont icon-About"})]),a("div",{staticClass:"e-popup__content coupon-popup__content"},[a("div",{staticClass:"coupon-number-change"},[a("van-field",{attrs:{center:"",border:"",clearable:"",placeholder:"请输入优惠码"},model:{value:t.preferenceCode,callback:function(e){t.preferenceCode=e},expression:"preferenceCode"}},[a("van-button",{attrs:{slot:"button",disabled:!t.preferenceCode,size:"small",type:"primary"},on:{click:t.usePreferenceCode},slot:"button"},[t._v("使用")])],1)],1),t._l(t.course.availableCoupons,(function(e,s){return a("coupon",{key:s,attrs:{coupon:e,index:s,active:t.activeItemIndex,"show-button":!1,"show-selecet":!0},on:{chooseItem:t.chooseItem}})})),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.course.availableCoupons.length,expression:"!course.availableCoupons.length"}],staticClass:"coupon-empty"},[a("img",{staticClass:"empty-img",attrs:{src:"static/images/coupon_empty.png"}}),a("div",{staticClass:"empty-text"},[t._v("暂无优惠券")])])],2)],1)],1),"vip"!==t.targetType?a("div",{staticClass:"order-goods-item"},[a("span",[t._v("学习有效期")]),a("span",{staticClass:"gray-dark",domProps:{innerHTML:t._s(t.getValidity)}})]):t._e()],1),a("div",{staticClass:"payPage"},[t.isLoading?a("e-loading"):t._e(),a("div",{staticClass:"payPage__order"},[a("div",{staticClass:"order__head"},[t._v("\n        支付方式\n      ")]),a("div",{staticClass:"order__infomation"},[a("div",{staticClass:"payWay"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.paySettings.alipayEnabled&&!t.inWechat,expression:"paySettings.alipayEnabled && !inWechat"}],class:["payWay__item",{"payWay__item--selected":"Alipay_LegacyH5"===t.payWay}],on:{click:function(e){t.payWay="Alipay_LegacyH5",t.selected=!0}}},[a("img",{staticClass:"correct",attrs:{src:"static/images/correct.png"}}),a("div",{staticClass:"right"}),a("img",{staticClass:"payWay__img",attrs:{src:"static/images/zfb.png"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.paySettings.wxpayEnabled,expression:"paySettings.wxpayEnabled"}],class:["payWay__item",{"payWay__item--selected":"WechatPay_H5"===t.payWay}],on:{click:function(e){t.payWay="WechatPay_H5",t.selected=!1}}},[a("img",{staticClass:"correct",attrs:{src:"static/images/correct.png"}}),a("div",{staticClass:"right"}),a("img",{staticClass:"payWay__img",attrs:{src:"static/images/wx.png"}})])])])])],1),a("div",{staticClass:"order-footer"},[a("div",{staticClass:"order-footer__text"},[t._v("\n      实付："),a("div",{staticClass:"price"},[t._v(t._s(t.total))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.itemData,expression:"itemData"}],staticClass:"discount"},[t._v("已优惠"+t._s(t.couponMoney))])]),a("div",{class:["order-footer__btn",{disabled:!t.validPayWay}],on:{click:t.handleSubmit}},[t._v("\n      去支付\n    ")])])])}),[],!1,null,null,null);e.default=h.exports}}]);