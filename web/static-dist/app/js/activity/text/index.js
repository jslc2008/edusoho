webpackJsonp(["app/js/activity/text/index"],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _esEventEmitter=__webpack_require__("63fff8fb24f3bd1f61cd"),_esEventEmitter2=_interopRequireDefault(_esEventEmitter),_activityEmitter=__webpack_require__("da32dea28c2b82c7aab1"),_activityEmitter2=_interopRequireDefault(_activityEmitter),Text=function(_Emitter){function Text(_ref){var element=_ref.element;_classCallCheck(this,Text);var _this=_possibleConstructorReturn(this,(Text.__proto__||Object.getPrototypeOf(Text)).call(this));return _this.element=$(element),_this.emitter=new _activityEmitter2["default"],_this.emitter.receive("doing",function(data){var finishTime=parseInt(_this.element.data("finishTime"));finishTime&&data.learnedTime>=finishTime&&_this.emitter.emit("finish")}),_this}return _inherits(Text,_Emitter),Text}(_esEventEmitter2["default"]);new Text({element:"#text-activity"})}]);