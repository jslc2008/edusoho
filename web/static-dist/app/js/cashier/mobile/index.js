webpackJsonp(["app/js/cashier/mobile/index"],{"0462758757283f323cc5":function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e){i(this,t),this.$container=e.$coinContainer,this.cashierForm=e.cashierForm,this.$form=e.$form,this.priceType=this.$container.data("priceType"),this.coinRate=this.$container.data("coinRate"),this.maxCoinInput=this.$container.data("maxAllowCoin")>this.$container.data("coinBalance")?this.$container.data("coinBalance"):this.$container.data("maxAllowCoin"),this.initEvent()}return n(t,[{key:"initEvent",value:function(){var t=this;this.$form.on("change",".js-coin-amount",function(e){return t.changeAmount(e)})}},{key:"changeAmount",value:function(t){var e=$(t.currentTarget),i=e.val();if(i>this.maxCoinInput&&(i=this.maxCoinInput),isNaN(i)||i<=0)return e.val(""),this.removePasswordValidate(),this.$form.trigger("removePriceItem",["coin-price"]),void this.cashierForm.calcPayPrice(i);e.val(parseFloat(i).toFixed(2)),this.addPasswordValidate();var n=this.$form.data("coin-name"),a=0;if("coin"===this.priceType){a=parseFloat(i).toFixed(2)+" "+n;var r=parseFloat(this.$container.data("maxAllowCoin")),o=parseFloat(r-i).toFixed(2)+" "+n;this.$form.trigger("changeCoinPrice",[o])}else a="￥"+parseFloat(i/this.coinRate).toFixed(2);this.$form.trigger("addPriceItem",["coin-price",n+Translator.trans("order.create.minus"),a]),this.cashierForm.calcPayPrice(i)}},{key:"addPasswordValidate",value:function(){this.$container.find('[name="payPassword"]').rules("add","required es_remote")}},{key:"removePasswordValidate",value:function(){this.$container.find('[name="payPassword"]').rules("remove","required es_remote")}}]),t}();e.default=a},0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i("0462758757283f323cc5"),c=n(o),s=function(){function t(e){a(this,t),this.$container=e,this.validator=this.$container.validate(),this.initEvent(),this.initCoin()}return r(t,[{key:"initCoin",value:function(){var t=$("#coin-use-section");t.length>0&&(this.coin=new c.default(t,this))}},{key:"calcPayPrice",value:function(t){var e=this;$.post(this.$container.data("priceUrl"),{coinAmount:t},function(t){e.$container.find(".js-pay-price").text(t.data)})}},{key:"initEvent",value:function(){this.$container.on("click",".check",function(t){var e=$(t.currentTarget);e.hasClass("active")||e.hasClass("disabled")||(e.addClass("active").siblings().removeClass("active"),$("input[name='payment']").val(e.attr("id")))});var t=this.$container;t.on("click",".js-pay-btn",function(e){t.valid()&&t.submit()})}}]),t}();new s($("#cashier-form"))}});