webpackJsonp(["app/js/activity-manage/ppt/index"],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function inItStep2form(){var $step2_form=$("#step2-form"),validator=$step2_form.data("validator");validator=$step2_form.validate({rules:{title:{required:!0,maxlength:50},mediaId:"required"},messages:{mediaId:{required:"请上传或选择%display%"}}})}var _fileChoose=__webpack_require__("eca7a2561fa47d3f75f6"),_fileChoose2=_interopRequireDefault(_fileChoose),_chooserUi=__webpack_require__("f324dbdea53170d5000f"),$mediaId=$('[name="mediaId"]');(0,_chooserUi.showChooserType)($mediaId),inItStep2form();var onConditionTimeType=function(){var $step3_form=$("#step3-form"),validator=$step3_form.validate({rules:{finishDetail:{required:!0,digits:!0,max:300}},messages:{finishDetail:{required:"请输入至少观看多少分钟"}}});$step3_form.data("validator",validator);var $conditionsDetail=$("#condition-group");$conditionsDetail.removeClass("hidden")},$select=$("#condition-select");"time"===$select.children("option:selected").val()&&onConditionTimeType();var fileChooser=new _fileChoose2["default"];fileChooser.on("select",function(file){(0,_chooserUi.chooserUiClose)(),$mediaId.val(file.id)}),$select.on("change",function(event){var conditionsType=$(event.currentTarget).children("option:selected").val(),$conditionsDetail=$("#condition-group");"time"!==conditionsType?$conditionsDetail.addClass("hidden"):onConditionTimeType()})}]);