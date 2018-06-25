webpackHotUpdate("options/index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/options/pages/home.vue":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/options/pages/home.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  data: function data() {
    return {
      // 任务类型选项列表
      fdTaskList: [{
        label: '非工作',
        value: '15ea933ab548bd4a59ae3bd4e2fab986'
      }, {
        label: '运维类',
        value: '15ea933d0e70cbb1febf27e4e18b5e32'
      }, {
        label: '发布类',
        value: '15ea9342a3b3b7e1bb6c648419abcb3f'
      }, {
        label: '工具类',
        value: '15ea93443fe6fd779ffa031466584e9e'
      }, {
        label: '支持类',
        value: '15ea934693f62689f3f8a2c409788956'
      }, {
        label: '学习类',
        value: '15ea934863797f0f3d5b957494c9b572'
      }, {
        label: '管理类',
        value: '15ea934af13b578ecf0d3cf4241807d6'
      }, {
        label: '运营类',
        value: '15ea934ce38599434c6bc5f4bd3ae6f3'
      }, {
        label: '测试类',
        value: '15ea934eed59ad37288fafa4bb390934'
      }, {
        label: '研发类',
        value: '15ea9350c5dd0cae3f20d1442f0b4e54'
      }, {
        label: '需求类',
        value: '15ea9351dd3f73fad89a3434944b42e8'
      }],
      // 工作任务选项列表
      fdTypeList: [],
      form: {
        method_GET: 'addDialog',
        fdId: '',
        docCreatorId: '',
        docCreatorName: '',
        fdItemNames: '', // 空着的不知道为何
        fdDeptId: '15d7dbcdb3d23c8a92bb46741878d46c',
        fdDeptName: '',
        // 下面的是表单内容
        fdDescription: '开发', // 内容
        fdTaskId: '', // 任务类型
        fdTypeId: '', // 工作任务
        fdDate: '2018-06-22', // 日期
        fdSituation: 0, // 完成情况
        fdTime: 0 // 工时

        // 完整表单:
        // form: {
        //   fdId: '16426d63bbed76f52750c7a4d7db417d',
        //   method_GET: 'addDialog',
        //   fdDescription: 't',
        //   fdTaskId: '15ea9350c5dd0cae3f20d1442f0b4e54',
        //   fdTypeId: '15ea937991f9c77d751d4f645d2a38e8',
        //   fdDate: '2018-06-22',
        //   fdSituation: 100,
        //   fdTime: 1,
        //   fdItemNames: '',
        //   docCreateTime: '2018-06-22 15:07',
        //   docCreatorId: '14dd0f7a58fa5b2e6aaca5845888b114',
        //   docCreatorName: '陈子元',
        //   fdDeptId: '15d7dbcdb3d23c8a92bb46741878d46c',
        //   fdDeptName: '产品研发部_产品研发组',
        // }
      } };
  },
  mounted: function mounted() {
    this.getData();

    // dev code
    var fdTaskId = '15ea9350c5dd0cae3f20d1442f0b4e54';
    this.form.fdTaskId = fdTaskId;
    this.fdTaskChangeHandle(fdTaskId);
  },

  methods: {
    getData: function getData() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ajaxURL, res, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ajaxURL = 'http://java.landray.com.cn/sys/person/sys_person_zone/sysPersonZone.do?method=info';
                _context.next = 3;
                return _this.$http.get(ajaxURL);

              case 3:
                res = _context.sent;
                data = res.body;

                _this.form.docCreatorId = data.fdId;
                _this.form.docCreatorName = data.fdName;
                // this.form.fdDeptId = data.fdDeptName
                _this.form.fdDeptName = data.fdDeptName;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    formatDate: function formatDate(timeObj, fmt) {
      var o = {
        'M+': timeObj.getMonth() + 1, //月份
        'd+': timeObj.getDate(), //日
        'h+': timeObj.getHours(), //小时
        'm+': timeObj.getMinutes(), //分
        's+': timeObj.getSeconds(), //秒
        'q+': Math.floor((timeObj.getMonth() + 3) / 3), //季度
        'S': timeObj.getMilliseconds() //毫秒
      };

      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (timeObj.getFullYear() + '').substr(4 - RegExp.$1.length));
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }return fmt;
    },
    generateId: function generateId() {
      var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

      var nums = '';

      for (var i = 0; i < 32; i++) {
        var id = parseInt(Math.random() * 61);
        nums += chars[id];
      }

      return nums;
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var postData, ajaxURL, res;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                postData = _this2.form;

                postData.fdId = _this2.generateId();
                postData.docCreateTime = _this2.formatDate(new Date(), 'yyyy-MM-dd hh:mm');
                // return console.log(postData)
                ajaxURL = 'http://product.landray.com.cn/km/workhours/km_workhours_main/kmWorkhoursMain.do?method=save&s_ajax=true';
                _context2.next = 6;
                return _this2.$http.post(ajaxURL, postData);

              case 6:
                res = _context2.sent;

                if (res.body.status) _this2.$notify.success({ message: '提交成功，奥耶~！' });

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    reset: function reset() {},
    showDialog: function showDialog() {},

    // 改变任务类型
    fdTaskChangeHandle: function fdTaskChangeHandle(value) {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var ajaxURL, res;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.fdTypeList = [];
                _this3.form.fdTypeId = '';

                ajaxURL = 'http://product.landray.com.cn/km/workhours/km_workhours_type/kmWorkhoursType.do?method=getTypeByTask&fdTask=' + value + '&s_ajax=true';
                _context3.next = 5;
                return _this3.$http.get(ajaxURL);

              case 5:
                res = _context3.sent;


                _this3.fdTypeList = res.body;

                // dev code
                _this3.form.fdTypeId = res.body[0].hoursTypeFdId;

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }
});

/***/ })

})
//# sourceMappingURL=index.aab3858d5f49f4c33219.hot-update.js.map