webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(159);\n\nvar _redux = __webpack_require__(160);\n\nvar _reactRedux = __webpack_require__(169);\n\nvar _todoRed = __webpack_require__(178);\n\nvar _todoRed2 = _interopRequireDefault(_todoRed);\n\nvar _todoApp = __webpack_require__(179);\n\nvar _todoApp2 = _interopRequireDefault(_todoApp);\n\nvar _todo_filterCst = __webpack_require__(324);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _redux.createStore)(_todoRed2.default);\n// import App from './containers/App'\n\nvar App = (0, _todoApp2.default)(_react2.default, _todo_filterCst.VisibilityFilters);\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(App, null)\n), document.getElementById('root'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/app.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _toConsumableArray2 = __webpack_require__(296);\n\nvar _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);\n\nvar _todo_filterCst = __webpack_require__(324);\n\nvar _todoCst = __webpack_require__(325);\n\nvar _redux = __webpack_require__(160);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SHOW_ALL = _todo_filterCst.VisibilityFilters.SHOW_ALL;\nvar _Object = Object;\nvar assign = _Object.assign;\n\nfunction visibilityFilter() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? SHOW_ALL : arguments[0];\n  var _ref = arguments[1];\n  var type = _ref.type;\n  var filter = _ref.filter;\n\n  switch (type) {\n    case _todo_filterCst.SET_VISIBILITY_FILTER:\n      return filter;\n    default:\n      return state;\n  }\n}\n\nfunction todos() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];\n  var _ref2 = arguments[1];\n  var type = _ref2.type;\n  var text = _ref2.text;\n  var index = _ref2.index;\n\n  switch (type) {\n    case _todoCst.ADD_TODO:\n      return [].concat((0, _toConsumableArray3.default)(state), [{ text: text, completed: true }]);\n    case _todoCst.COMPLETE_TODO:\n      return [].concat((0, _toConsumableArray3.default)(state.slice(0, index)), [assign({}, state[index], {\n        completed: true\n      })], (0, _toConsumableArray3.default)(state.slice(index + 1)));\n    default:\n      return state;\n  }\n}\n\nexports.default = (0, _redux.combineReducers)({\n  todos: todos,\n  visibilityFilter: visibilityFilter\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/store/reducers/todo.red.js\n ** module id = 178\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/store/reducers/todo.red.js?");

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(169);\n\nvar _todo_add = __webpack_require__(180);\n\nvar _todo_add2 = _interopRequireDefault(_todo_add);\n\nvar _todo_filter = __webpack_require__(262);\n\nvar _todo_filter2 = _interopRequireDefault(_todo_filter);\n\nvar _todo_list = __webpack_require__(263);\n\nvar _todo_list2 = _interopRequireDefault(_todo_list);\n\nvar _todo = __webpack_require__(326);\n\nvar _todo2 = _interopRequireDefault(_todo);\n\nvar _todoCont = __webpack_require__(281);\n\nvar _todoCont2 = _interopRequireDefault(_todoCont);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (React, VisibilityFilters) {\n  var TodoApp = (0, _todoCont2.default)({\n    React: React,\n    TodoAdd: (0, _todo_add2.default)(React),\n    TodoList: (0, _todo_list2.default)(React),\n    Todo: (0, _todo2.default)(React),\n    TodoFilter: (0, _todo_filter2.default)(React),\n    VisibilityFilters: VisibilityFilters\n  });\n\n  var SHOW_ALL = VisibilityFilters.SHOW_ALL;\n  var SHOW_COMPLETED = VisibilityFilters.SHOW_COMPLETED;\n  var SHOW_ACTIVE = VisibilityFilters.SHOW_ACTIVE;\n\n  function selectTodos(todos, filter) {\n    switch (filter) {\n      case SHOW_ALL:\n        return todos;\n      case SHOW_COMPLETED:\n        return todos.filter(function (todo) {\n          return todo.completed;\n        });\n      case SHOW_ACTIVE:\n        return todos.filter(function (todo) {\n          return !todo.completed;\n        });\n    }\n  }\n\n  function select(_ref) {\n    var todos = _ref.todos;\n    var visibilityFilter = _ref.visibilityFilter;\n\n    return {\n      visibleTodos: selectTodos(todos, visibilityFilter),\n      visibilityFilter: visibilityFilter\n    };\n  }\n\n  return (0, _reactRedux.connect)(select)(TodoApp);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/apps/todo.app.jsx\n ** module id = 179\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/apps/todo.app.jsx?");

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactStamp = __webpack_require__(181);\n\nvar _reactStamp2 = _interopRequireDefault(_reactStamp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (React) {\n  return (0, _reactStamp2.default)(React).compose({\n    handleClick: function handleClick(e) {\n      var node = this.refs.input,\n          text = node.value.trim();\n\n      this.props.onAddClick(text);\n      node.value = '';\n    },\n    render: function render() {\n      return React.createElement(\n        'div',\n        { className: 'row' },\n        React.createElement(\n          'div',\n          { className: 'input-group' },\n          React.createElement('input', { type: 'text', ref: 'input', className: 'form-control' }),\n          React.createElement(\n            'span',\n            { className: 'input-group-btn' },\n            React.createElement(\n              'button',\n              { onClick: this.handleClick.bind(this), type: 'button', className: 'btn btn-secondary' },\n              'Add'\n            )\n          )\n        )\n      );\n    }\n  });\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/apps/components/todo_add.jsx\n ** module id = 180\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/apps/components/todo_add.jsx?");

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports['default'] = reactStamp;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }\n\nvar _utils = __webpack_require__(182);\n\n/**\n * Convert the React component constructor function to a stamp.\n *\n * (React?: object): stamp\n */\n\nfunction reactStamp(React) {\n  var desc = {};\n\n  if (React && React.Component) {\n    desc.methods = _extends({}, React.Component.prototype);\n    desc.initializers = [function (options, _ref) {\n      var _React$Component;\n\n      var instance = _ref.instance;\n      var args = _ref.args;\n      return (_React$Component = React.Component).call.apply(_React$Component, [instance, options].concat(_toConsumableArray(args)));\n    }];\n  }\n\n  return (0, _utils.compose)(desc);\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/lib/index.js\n ** module id = 181\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/lib/index.js?");

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _compose = __webpack_require__(183);\n\nvar _compose2 = _interopRequireDefault(_compose);\n\nvar _descriptor = __webpack_require__(256);\n\nvar _descriptor2 = _interopRequireDefault(_descriptor);\n\nvar _react = __webpack_require__(259);\n\nvar _react2 = _interopRequireDefault(_react);\n\nexports.compose = _compose2['default'];\nexports.parseDesc = _descriptor2['default'];\nexports.wrapMethods = _react2['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/lib/utils/index.js\n ** module id = 182\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/lib/utils/index.js?");

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = compose;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _lodashObjectAssign = __webpack_require__(184);\n\nvar _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);\n\nvar _lodashCollectionForEach = __webpack_require__(208);\n\nvar _lodashCollectionForEach2 = _interopRequireDefault(_lodashCollectionForEach);\n\nvar _lodashObjectMerge = __webpack_require__(217);\n\nvar _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);\n\nvar _stampUtils = __webpack_require__(225);\n\nvar _ = __webpack_require__(182);\n\n/**\n * Given a description object, return a stamp aka composable.\n *\n * (desc?: specDesc): stamp\n */\nfunction createStamp() {\n  var specDesc = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n  var Component = function Component(options) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var instance = Object.create(specDesc.methods || {});\n\n    (0, _lodashObjectMerge2['default'])(instance, specDesc.deepProperties);\n    (0, _lodashObjectAssign2['default'])(instance, specDesc.properties, specDesc.configuration);\n    Object.defineProperties(instance, specDesc.propertyDescriptors || {});\n\n    if (specDesc.initializers) {\n      specDesc.initializers.forEach(function (initializer) {\n        var result = initializer.call(instance, options, { instance: instance, stamp: Component, args: [options].concat(args) });\n        typeof result !== 'undefined' && (instance = result);\n      });\n    }\n\n    return instance;\n  };\n\n  (0, _lodashObjectMerge2['default'])(Component, specDesc.deepStaticProperties);\n  (0, _lodashObjectAssign2['default'])(Component, specDesc.staticProperties);\n  Object.defineProperties(Component, specDesc.staticPropertyDescriptors || {});\n\n  !Component.displayName && (Component.displayName = 'Component');\n\n  return Component;\n}\n\n/**\n * Take any number of stamps or descriptors. Return a new stamp\n * that encapsulates combined behavior. If nothing is passed in,\n * an empty stamp is returned.\n *\n * (...args?: stamp|reactDesc|specDesc[]): stamp\n */\n\nfunction compose() {\n  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    args[_key2] = arguments[_key2];\n  }\n\n  var descs = args.map(function (arg) {\n    return (0, _.parseDesc)(arg);\n  });\n  var compDesc = {};\n\n  (0, _stampUtils.isStamp)(this) && descs.unshift(this.compose);\n\n  (0, _lodashCollectionForEach2['default'])(descs, function (desc) {\n    var initializers = desc.initializers;\n    var methods = desc.methods;\n    var properties = desc.properties;\n    var staticProperties = desc.staticProperties;\n    var propertyDescriptors = desc.propertyDescriptors;\n    var staticPropertyDescriptors = desc.staticPropertyDescriptors;\n    var deepProperties = desc.deepProperties;\n    var deepStaticProperties = desc.deepStaticProperties;\n    var configuration = desc.configuration;\n\n    // Wrap React lifecycle methods\n    compDesc.methods = (0, _.wrapMethods)(compDesc.methods, methods);\n\n    // Stamp spec\n    compDesc.initializers = (compDesc.initializers || []).concat(initializers).filter(function (initializer) {\n      return typeof initializer === 'function';\n    });\n\n    (0, _lodashCollectionForEach2['default'])({ properties: properties, staticProperties: staticProperties, propertyDescriptors: propertyDescriptors, staticPropertyDescriptors: staticPropertyDescriptors }, function (val, key) {\n      return val && (compDesc[key] = (0, _lodashObjectAssign2['default'])(compDesc[key] || {}, val));\n    });\n\n    (0, _lodashCollectionForEach2['default'])({ deepProperties: deepProperties, deepStaticProperties: deepStaticProperties, configuration: configuration }, function (val, key) {\n      return val && (compDesc[key] = (0, _lodashObjectMerge2['default'])(compDesc[key] || {}, val));\n    });\n  });\n\n  var stamp = createStamp(compDesc);\n  stamp.compose = (0, _lodashObjectAssign2['default'])(compose.bind(stamp), compDesc);\n\n  return stamp;\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/lib/utils/compose.js\n ** module id = 183\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/lib/utils/compose.js?");

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	eval("var assignWith = __webpack_require__(185),\n    baseAssign = __webpack_require__(201),\n    createAssigner = __webpack_require__(203);\n\n/**\n * Assigns own enumerable properties of source object(s) to the destination\n * object. Subsequent sources overwrite property assignments of previous sources.\n * If `customizer` is provided it's invoked to produce the assigned values.\n * The `customizer` is bound to `thisArg` and invoked with five arguments:\n * (objectValue, sourceValue, key, object, source).\n *\n * **Note:** This method mutates `object` and is based on\n * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).\n *\n * @static\n * @memberOf _\n * @alias extend\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @param {Function} [customizer] The function to customize assigned values.\n * @param {*} [thisArg] The `this` binding of `customizer`.\n * @returns {Object} Returns `object`.\n * @example\n *\n * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });\n * // => { 'user': 'fred', 'age': 40 }\n *\n * // using a customizer callback\n * var defaults = _.partialRight(_.assign, function(value, other) {\n *   return _.isUndefined(value) ? other : value;\n * });\n *\n * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });\n * // => { 'user': 'barney', 'age': 36 }\n */\nvar assign = createAssigner(function(object, source, customizer) {\n  return customizer\n    ? assignWith(object, source, customizer)\n    : baseAssign(object, source);\n});\n\nmodule.exports = assign;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/object/assign.js\n ** module id = 184\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/object/assign.js?");

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	eval("var keys = __webpack_require__(186);\n\n/**\n * A specialized version of `_.assign` for customizing assigned values without\n * support for argument juggling, multiple sources, and `this` binding `customizer`\n * functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {Function} customizer The function to customize assigned values.\n * @returns {Object} Returns `object`.\n */\nfunction assignWith(object, source, customizer) {\n  var index = -1,\n      props = keys(source),\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index],\n        value = object[key],\n        result = customizer(value, source[key], key, object, source);\n\n    if ((result === result ? (result !== value) : (value === value)) ||\n        (value === undefined && !(key in object))) {\n      object[key] = result;\n    }\n  }\n  return object;\n}\n\nmodule.exports = assignWith;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/assignWith.js\n ** module id = 185\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/assignWith.js?");

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	eval("var getNative = __webpack_require__(187),\n    isArrayLike = __webpack_require__(192),\n    isObject = __webpack_require__(190),\n    shimKeys = __webpack_require__(196);\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = getNative(Object, 'keys');\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nvar keys = !nativeKeys ? shimKeys : function(object) {\n  var Ctor = object == null ? undefined : object.constructor;\n  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||\n      (typeof object != 'function' && isArrayLike(object))) {\n    return shimKeys(object);\n  }\n  return isObject(object) ? nativeKeys(object) : [];\n};\n\nmodule.exports = keys;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/object/keys.js\n ** module id = 186\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/object/keys.js?");

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isNative = __webpack_require__(188);\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = object == null ? undefined : object[key];\n  return isNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/getNative.js\n ** module id = 187\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/getNative.js?");

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isFunction = __webpack_require__(189),\n    isObjectLike = __webpack_require__(191);\n\n/** Used to detect host constructors (Safari > 5). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar fnToString = Function.prototype.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  fnToString.call(hasOwnProperty).replace(/[\\\\^$.*+?()[\\]{}|]/g, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * Checks if `value` is a native function.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function, else `false`.\n * @example\n *\n * _.isNative(Array.prototype.push);\n * // => true\n *\n * _.isNative(_);\n * // => false\n */\nfunction isNative(value) {\n  if (value == null) {\n    return false;\n  }\n  if (isFunction(value)) {\n    return reIsNative.test(fnToString.call(value));\n  }\n  return isObjectLike(value) && reIsHostCtor.test(value);\n}\n\nmodule.exports = isNative;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isNative.js\n ** module id = 188\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isNative.js?");

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObject = __webpack_require__(190);\n\n/** `Object#toString` result references. */\nvar funcTag = '[object Function]';\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in older versions of Chrome and Safari which return 'function' for regexes\n  // and Safari 8 which returns 'object' for typed array constructors.\n  return isObject(value) && objToString.call(value) == funcTag;\n}\n\nmodule.exports = isFunction;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isFunction.js\n ** module id = 189\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isFunction.js?");

/***/ },
/* 190 */
/***/ function(module, exports) {

	eval("/**\n * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // Avoid a V8 JIT bug in Chrome 19-20.\n  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isObject.js\n ** module id = 190\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isObject.js?");

/***/ },
/* 191 */
/***/ function(module, exports) {

	eval("/**\n * Checks if `value` is object-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/isObjectLike.js\n ** module id = 191\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/isObjectLike.js?");

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	eval("var getLength = __webpack_require__(193),\n    isLength = __webpack_require__(195);\n\n/**\n * Checks if `value` is array-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(getLength(value));\n}\n\nmodule.exports = isArrayLike;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/isArrayLike.js\n ** module id = 192\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/isArrayLike.js?");

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseProperty = __webpack_require__(194);\n\n/**\n * Gets the \"length\" property value of `object`.\n *\n * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)\n * that affects Safari on at least iOS 8.1-8.3 ARM64.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {*} Returns the \"length\" value.\n */\nvar getLength = baseProperty('length');\n\nmodule.exports = getLength;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/getLength.js\n ** module id = 193\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/getLength.js?");

/***/ },
/* 194 */
/***/ function(module, exports) {

	eval("/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = baseProperty;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseProperty.js\n ** module id = 194\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseProperty.js?");

/***/ },
/* 195 */
/***/ function(module, exports) {

	eval("/**\n * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)\n * of an array-like value.\n */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n */\nfunction isLength(value) {\n  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/isLength.js\n ** module id = 195\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/isLength.js?");

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isArguments = __webpack_require__(197),\n    isArray = __webpack_require__(198),\n    isIndex = __webpack_require__(199),\n    isLength = __webpack_require__(195),\n    keysIn = __webpack_require__(200);\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A fallback implementation of `Object.keys` which creates an array of the\n * own enumerable property names of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction shimKeys(object) {\n  var props = keysIn(object),\n      propsLength = props.length,\n      length = propsLength && object.length;\n\n  var allowIndexes = !!length && isLength(length) &&\n    (isArray(object) || isArguments(object));\n\n  var index = -1,\n      result = [];\n\n  while (++index < propsLength) {\n    var key = props[index];\n    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = shimKeys;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/shimKeys.js\n ** module id = 196\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/shimKeys.js?");

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isArrayLike = __webpack_require__(192),\n    isObjectLike = __webpack_require__(191);\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Native method references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is classified as an `arguments` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nfunction isArguments(value) {\n  return isObjectLike(value) && isArrayLike(value) &&\n    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');\n}\n\nmodule.exports = isArguments;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isArguments.js\n ** module id = 197\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isArguments.js?");

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	eval("var getNative = __webpack_require__(187),\n    isLength = __webpack_require__(195),\n    isObjectLike = __webpack_require__(191);\n\n/** `Object#toString` result references. */\nvar arrayTag = '[object Array]';\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeIsArray = getNative(Array, 'isArray');\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(function() { return arguments; }());\n * // => false\n */\nvar isArray = nativeIsArray || function(value) {\n  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;\n};\n\nmodule.exports = isArray;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isArray.js\n ** module id = 198\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isArray.js?");

/***/ },
/* 199 */
/***/ function(module, exports) {

	eval("/** Used to detect unsigned integer values. */\nvar reIsUint = /^\\d+$/;\n\n/**\n * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)\n * of an array-like value.\n */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return value > -1 && value % 1 == 0 && value < length;\n}\n\nmodule.exports = isIndex;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/isIndex.js\n ** module id = 199\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/isIndex.js?");

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isArguments = __webpack_require__(197),\n    isArray = __webpack_require__(198),\n    isIndex = __webpack_require__(199),\n    isLength = __webpack_require__(195),\n    isObject = __webpack_require__(190);\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  if (object == null) {\n    return [];\n  }\n  if (!isObject(object)) {\n    object = Object(object);\n  }\n  var length = object.length;\n  length = (length && isLength(length) &&\n    (isArray(object) || isArguments(object)) && length) || 0;\n\n  var Ctor = object.constructor,\n      index = -1,\n      isProto = typeof Ctor == 'function' && Ctor.prototype === object,\n      result = Array(length),\n      skipIndexes = length > 0;\n\n  while (++index < length) {\n    result[index] = (index + '');\n  }\n  for (var key in object) {\n    if (!(skipIndexes && isIndex(key, length)) &&\n        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = keysIn;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/object/keysIn.js\n ** module id = 200\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/object/keysIn.js?");

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseCopy = __webpack_require__(202),\n    keys = __webpack_require__(186);\n\n/**\n * The base implementation of `_.assign` without support for argument juggling,\n * multiple sources, and `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return source == null\n    ? object\n    : baseCopy(source, keys(source), object);\n}\n\nmodule.exports = baseAssign;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseAssign.js\n ** module id = 201\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseAssign.js?");

/***/ },
/* 202 */
/***/ function(module, exports) {

	eval("/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property names to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @returns {Object} Returns `object`.\n */\nfunction baseCopy(source, props, object) {\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n    object[key] = source[key];\n  }\n  return object;\n}\n\nmodule.exports = baseCopy;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseCopy.js\n ** module id = 202\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseCopy.js?");

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	eval("var bindCallback = __webpack_require__(204),\n    isIterateeCall = __webpack_require__(206),\n    restParam = __webpack_require__(207);\n\n/**\n * Creates a `_.assign`, `_.defaults`, or `_.merge` function.\n *\n * @private\n * @param {Function} assigner The function to assign values.\n * @returns {Function} Returns the new assigner function.\n */\nfunction createAssigner(assigner) {\n  return restParam(function(object, sources) {\n    var index = -1,\n        length = object == null ? 0 : sources.length,\n        customizer = length > 2 ? sources[length - 2] : undefined,\n        guard = length > 2 ? sources[2] : undefined,\n        thisArg = length > 1 ? sources[length - 1] : undefined;\n\n    if (typeof customizer == 'function') {\n      customizer = bindCallback(customizer, thisArg, 5);\n      length -= 2;\n    } else {\n      customizer = typeof thisArg == 'function' ? thisArg : undefined;\n      length -= (customizer ? 1 : 0);\n    }\n    if (guard && isIterateeCall(sources[0], sources[1], guard)) {\n      customizer = length < 3 ? undefined : customizer;\n      length = 1;\n    }\n    while (++index < length) {\n      var source = sources[index];\n      if (source) {\n        assigner(object, source, customizer);\n      }\n    }\n    return object;\n  });\n}\n\nmodule.exports = createAssigner;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/createAssigner.js\n ** module id = 203\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/createAssigner.js?");

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	eval("var identity = __webpack_require__(205);\n\n/**\n * A specialized version of `baseCallback` which only supports `this` binding\n * and specifying the number of arguments to provide to `func`.\n *\n * @private\n * @param {Function} func The function to bind.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {number} [argCount] The number of arguments to provide to `func`.\n * @returns {Function} Returns the callback.\n */\nfunction bindCallback(func, thisArg, argCount) {\n  if (typeof func != 'function') {\n    return identity;\n  }\n  if (thisArg === undefined) {\n    return func;\n  }\n  switch (argCount) {\n    case 1: return function(value) {\n      return func.call(thisArg, value);\n    };\n    case 3: return function(value, index, collection) {\n      return func.call(thisArg, value, index, collection);\n    };\n    case 4: return function(accumulator, value, index, collection) {\n      return func.call(thisArg, accumulator, value, index, collection);\n    };\n    case 5: return function(value, other, key, object, source) {\n      return func.call(thisArg, value, other, key, object, source);\n    };\n  }\n  return function() {\n    return func.apply(thisArg, arguments);\n  };\n}\n\nmodule.exports = bindCallback;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/bindCallback.js\n ** module id = 204\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/bindCallback.js?");

/***/ },
/* 205 */
/***/ function(module, exports) {

	eval("/**\n * This method returns the first argument provided to it.\n *\n * @static\n * @memberOf _\n * @category Utility\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'user': 'fred' };\n *\n * _.identity(object) === object;\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/utility/identity.js\n ** module id = 205\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/utility/identity.js?");

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isArrayLike = __webpack_require__(192),\n    isIndex = __webpack_require__(199),\n    isObject = __webpack_require__(190);\n\n/**\n * Checks if the provided arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.\n */\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n  var type = typeof index;\n  if (type == 'number'\n      ? (isArrayLike(object) && isIndex(index, object.length))\n      : (type == 'string' && index in object)) {\n    var other = object[index];\n    return value === value ? (value === other) : (other !== other);\n  }\n  return false;\n}\n\nmodule.exports = isIterateeCall;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/isIterateeCall.js\n ** module id = 206\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/isIterateeCall.js?");

/***/ },
/* 207 */
/***/ function(module, exports) {

	eval("/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * Creates a function that invokes `func` with the `this` binding of the\n * created function and arguments from `start` and beyond provided as an array.\n *\n * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).\n *\n * @static\n * @memberOf _\n * @category Function\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n * @example\n *\n * var say = _.restParam(function(what, names) {\n *   return what + ' ' + _.initial(names).join(', ') +\n *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);\n * });\n *\n * say('hello', 'fred', 'barney', 'pebbles');\n * // => 'hello fred, barney, & pebbles'\n */\nfunction restParam(func, start) {\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        rest = Array(length);\n\n    while (++index < length) {\n      rest[index] = args[start + index];\n    }\n    switch (start) {\n      case 0: return func.call(this, rest);\n      case 1: return func.call(this, args[0], rest);\n      case 2: return func.call(this, args[0], args[1], rest);\n    }\n    var otherArgs = Array(start + 1);\n    index = -1;\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = rest;\n    return func.apply(this, otherArgs);\n  };\n}\n\nmodule.exports = restParam;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/function/restParam.js\n ** module id = 207\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/function/restParam.js?");

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	eval("var arrayEach = __webpack_require__(209),\n    baseEach = __webpack_require__(210),\n    createForEach = __webpack_require__(216);\n\n/**\n * Iterates over elements of `collection` invoking `iteratee` for each element.\n * The `iteratee` is bound to `thisArg` and invoked with three arguments:\n * (value, index|key, collection). Iteratee functions may exit iteration early\n * by explicitly returning `false`.\n *\n * **Note:** As with other \"Collections\" methods, objects with a \"length\" property\n * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`\n * may be used for object iteration.\n *\n * @static\n * @memberOf _\n * @alias each\n * @category Collection\n * @param {Array|Object|string} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @param {*} [thisArg] The `this` binding of `iteratee`.\n * @returns {Array|Object|string} Returns `collection`.\n * @example\n *\n * _([1, 2]).forEach(function(n) {\n *   console.log(n);\n * }).value();\n * // => logs each value from left to right and returns the array\n *\n * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {\n *   console.log(n, key);\n * });\n * // => logs each value-key pair and returns the object (iteration order is not guaranteed)\n */\nvar forEach = createForEach(arrayEach, baseEach);\n\nmodule.exports = forEach;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/collection/forEach.js\n ** module id = 208\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/collection/forEach.js?");

/***/ },
/* 209 */
/***/ function(module, exports) {

	eval("/**\n * A specialized version of `_.forEach` for arrays without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array.length;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\nmodule.exports = arrayEach;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/arrayEach.js\n ** module id = 209\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/arrayEach.js?");

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseForOwn = __webpack_require__(211),\n    createBaseEach = __webpack_require__(215);\n\n/**\n * The base implementation of `_.forEach` without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Array|Object|string} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array|Object|string} Returns `collection`.\n */\nvar baseEach = createBaseEach(baseForOwn);\n\nmodule.exports = baseEach;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseEach.js\n ** module id = 210\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseEach.js?");

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseFor = __webpack_require__(212),\n    keys = __webpack_require__(186);\n\n/**\n * The base implementation of `_.forOwn` without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns `object`.\n */\nfunction baseForOwn(object, iteratee) {\n  return baseFor(object, iteratee, keys);\n}\n\nmodule.exports = baseForOwn;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseForOwn.js\n ** module id = 211\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseForOwn.js?");

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	eval("var createBaseFor = __webpack_require__(213);\n\n/**\n * The base implementation of `baseForIn` and `baseForOwn` which iterates\n * over `object` properties returned by `keysFunc` invoking `iteratee` for\n * each property. Iteratee functions may exit iteration early by explicitly\n * returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\nmodule.exports = baseFor;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseFor.js\n ** module id = 212\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseFor.js?");

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	eval("var toObject = __webpack_require__(214);\n\n/**\n * Creates a base function for `_.forIn` or `_.forInRight`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var iterable = toObject(object),\n        props = keysFunc(object),\n        length = props.length,\n        index = fromRight ? length : -1;\n\n    while ((fromRight ? index-- : ++index < length)) {\n      var key = props[index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\nmodule.exports = createBaseFor;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/createBaseFor.js\n ** module id = 213\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/createBaseFor.js?");

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObject = __webpack_require__(190);\n\n/**\n * Converts `value` to an object if it's not one.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {Object} Returns the object.\n */\nfunction toObject(value) {\n  return isObject(value) ? value : Object(value);\n}\n\nmodule.exports = toObject;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/toObject.js\n ** module id = 214\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/toObject.js?");

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	eval("var getLength = __webpack_require__(193),\n    isLength = __webpack_require__(195),\n    toObject = __webpack_require__(214);\n\n/**\n * Creates a `baseEach` or `baseEachRight` function.\n *\n * @private\n * @param {Function} eachFunc The function to iterate over a collection.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseEach(eachFunc, fromRight) {\n  return function(collection, iteratee) {\n    var length = collection ? getLength(collection) : 0;\n    if (!isLength(length)) {\n      return eachFunc(collection, iteratee);\n    }\n    var index = fromRight ? length : -1,\n        iterable = toObject(collection);\n\n    while ((fromRight ? index-- : ++index < length)) {\n      if (iteratee(iterable[index], index, iterable) === false) {\n        break;\n      }\n    }\n    return collection;\n  };\n}\n\nmodule.exports = createBaseEach;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/createBaseEach.js\n ** module id = 215\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/createBaseEach.js?");

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	eval("var bindCallback = __webpack_require__(204),\n    isArray = __webpack_require__(198);\n\n/**\n * Creates a function for `_.forEach` or `_.forEachRight`.\n *\n * @private\n * @param {Function} arrayFunc The function to iterate over an array.\n * @param {Function} eachFunc The function to iterate over a collection.\n * @returns {Function} Returns the new each function.\n */\nfunction createForEach(arrayFunc, eachFunc) {\n  return function(collection, iteratee, thisArg) {\n    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))\n      ? arrayFunc(collection, iteratee)\n      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));\n  };\n}\n\nmodule.exports = createForEach;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/createForEach.js\n ** module id = 216\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/createForEach.js?");

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseMerge = __webpack_require__(218),\n    createAssigner = __webpack_require__(203);\n\n/**\n * Recursively merges own enumerable properties of the source object(s), that\n * don't resolve to `undefined` into the destination object. Subsequent sources\n * overwrite property assignments of previous sources. If `customizer` is\n * provided it's invoked to produce the merged values of the destination and\n * source properties. If `customizer` returns `undefined` merging is handled\n * by the method instead. The `customizer` is bound to `thisArg` and invoked\n * with five arguments: (objectValue, sourceValue, key, object, source).\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @param {Function} [customizer] The function to customize assigned values.\n * @param {*} [thisArg] The `this` binding of `customizer`.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var users = {\n *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]\n * };\n *\n * var ages = {\n *   'data': [{ 'age': 36 }, { 'age': 40 }]\n * };\n *\n * _.merge(users, ages);\n * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }\n *\n * // using a customizer callback\n * var object = {\n *   'fruits': ['apple'],\n *   'vegetables': ['beet']\n * };\n *\n * var other = {\n *   'fruits': ['banana'],\n *   'vegetables': ['carrot']\n * };\n *\n * _.merge(object, other, function(a, b) {\n *   if (_.isArray(a)) {\n *     return a.concat(b);\n *   }\n * });\n * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }\n */\nvar merge = createAssigner(baseMerge);\n\nmodule.exports = merge;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/object/merge.js\n ** module id = 217\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/object/merge.js?");

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	eval("var arrayEach = __webpack_require__(209),\n    baseMergeDeep = __webpack_require__(219),\n    isArray = __webpack_require__(198),\n    isArrayLike = __webpack_require__(192),\n    isObject = __webpack_require__(190),\n    isObjectLike = __webpack_require__(191),\n    isTypedArray = __webpack_require__(223),\n    keys = __webpack_require__(186);\n\n/**\n * The base implementation of `_.merge` without support for argument juggling,\n * multiple sources, and `this` binding `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {Function} [customizer] The function to customize merged values.\n * @param {Array} [stackA=[]] Tracks traversed source objects.\n * @param {Array} [stackB=[]] Associates values with source counterparts.\n * @returns {Object} Returns `object`.\n */\nfunction baseMerge(object, source, customizer, stackA, stackB) {\n  if (!isObject(object)) {\n    return object;\n  }\n  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),\n      props = isSrcArr ? undefined : keys(source);\n\n  arrayEach(props || source, function(srcValue, key) {\n    if (props) {\n      key = srcValue;\n      srcValue = source[key];\n    }\n    if (isObjectLike(srcValue)) {\n      stackA || (stackA = []);\n      stackB || (stackB = []);\n      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);\n    }\n    else {\n      var value = object[key],\n          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,\n          isCommon = result === undefined;\n\n      if (isCommon) {\n        result = srcValue;\n      }\n      if ((result !== undefined || (isSrcArr && !(key in object))) &&\n          (isCommon || (result === result ? (result !== value) : (value === value)))) {\n        object[key] = result;\n      }\n    }\n  });\n  return object;\n}\n\nmodule.exports = baseMerge;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseMerge.js\n ** module id = 218\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseMerge.js?");

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	eval("var arrayCopy = __webpack_require__(220),\n    isArguments = __webpack_require__(197),\n    isArray = __webpack_require__(198),\n    isArrayLike = __webpack_require__(192),\n    isPlainObject = __webpack_require__(221),\n    isTypedArray = __webpack_require__(223),\n    toPlainObject = __webpack_require__(224);\n\n/**\n * A specialized version of `baseMerge` for arrays and objects which performs\n * deep merges and tracks traversed objects enabling objects with circular\n * references to be merged.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {string} key The key of the value to merge.\n * @param {Function} mergeFunc The function to merge values.\n * @param {Function} [customizer] The function to customize merged values.\n * @param {Array} [stackA=[]] Tracks traversed source objects.\n * @param {Array} [stackB=[]] Associates values with source counterparts.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {\n  var length = stackA.length,\n      srcValue = source[key];\n\n  while (length--) {\n    if (stackA[length] == srcValue) {\n      object[key] = stackB[length];\n      return;\n    }\n  }\n  var value = object[key],\n      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,\n      isCommon = result === undefined;\n\n  if (isCommon) {\n    result = srcValue;\n    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {\n      result = isArray(value)\n        ? value\n        : (isArrayLike(value) ? arrayCopy(value) : []);\n    }\n    else if (isPlainObject(srcValue) || isArguments(srcValue)) {\n      result = isArguments(value)\n        ? toPlainObject(value)\n        : (isPlainObject(value) ? value : {});\n    }\n    else {\n      isCommon = false;\n    }\n  }\n  // Add the source value to the stack of traversed objects and associate\n  // it with its merged value.\n  stackA.push(srcValue);\n  stackB.push(result);\n\n  if (isCommon) {\n    // Recursively merge objects and arrays (susceptible to call stack limits).\n    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);\n  } else if (result === result ? (result !== value) : (value === value)) {\n    object[key] = result;\n  }\n}\n\nmodule.exports = baseMergeDeep;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseMergeDeep.js\n ** module id = 219\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseMergeDeep.js?");

/***/ },
/* 220 */
/***/ function(module, exports) {

	eval("/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction arrayCopy(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayCopy;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/arrayCopy.js\n ** module id = 220\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/arrayCopy.js?");

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseForIn = __webpack_require__(222),\n    isArguments = __webpack_require__(197),\n    isObjectLike = __webpack_require__(191);\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * **Note:** This method assumes objects created by the `Object` constructor\n * have no inherited enumerable properties.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  var Ctor;\n\n  // Exit early for non `Object` objects.\n  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||\n      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {\n    return false;\n  }\n  // IE < 9 iterates inherited properties before own properties. If the first\n  // iterated property is an object's own property then there are no inherited\n  // enumerable properties.\n  var result;\n  // In most environments an object's own properties are iterated before\n  // its inherited properties. If the last iterated property is an object's\n  // own property then there are no inherited enumerable properties.\n  baseForIn(value, function(subValue, key) {\n    result = key;\n  });\n  return result === undefined || hasOwnProperty.call(value, result);\n}\n\nmodule.exports = isPlainObject;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isPlainObject.js\n ** module id = 221\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isPlainObject.js?");

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseFor = __webpack_require__(212),\n    keysIn = __webpack_require__(200);\n\n/**\n * The base implementation of `_.forIn` without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns `object`.\n */\nfunction baseForIn(object, iteratee) {\n  return baseFor(object, iteratee, keysIn);\n}\n\nmodule.exports = baseForIn;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseForIn.js\n ** module id = 222\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseForIn.js?");

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isLength = __webpack_require__(195),\n    isObjectLike = __webpack_require__(191);\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dateTag] = typedArrayTags[errorTag] =\ntypedArrayTags[funcTag] = typedArrayTags[mapTag] =\ntypedArrayTags[numberTag] = typedArrayTags[objectTag] =\ntypedArrayTags[regexpTag] = typedArrayTags[setTag] =\ntypedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nfunction isTypedArray(value) {\n  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];\n}\n\nmodule.exports = isTypedArray;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isTypedArray.js\n ** module id = 223\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isTypedArray.js?");

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseCopy = __webpack_require__(202),\n    keysIn = __webpack_require__(200);\n\n/**\n * Converts `value` to a plain object flattening inherited enumerable\n * properties of `value` to own properties of the plain object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {Object} Returns the converted plain object.\n * @example\n *\n * function Foo() {\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.assign({ 'a': 1 }, new Foo);\n * // => { 'a': 1, 'b': 2 }\n *\n * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));\n * // => { 'a': 1, 'b': 2, 'c': 3 }\n */\nfunction toPlainObject(value) {\n  return baseCopy(value, keysIn(value));\n}\n\nmodule.exports = toPlainObject;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/toPlainObject.js\n ** module id = 224\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/toPlainObject.js?");

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _compose = __webpack_require__(226);\n\nvar _compose2 = _interopRequireDefault(_compose);\n\nvar _init = __webpack_require__(252);\n\nvar _init2 = _interopRequireDefault(_init);\n\nvar _isStamp = __webpack_require__(253);\n\nvar _isStamp2 = _interopRequireDefault(_isStamp);\n\nvar _isDescriptor = __webpack_require__(254);\n\nvar _isDescriptor2 = _interopRequireDefault(_isDescriptor);\n\nvar _isComposable = __webpack_require__(255);\n\nvar _isComposable2 = _interopRequireDefault(_isComposable);\n\nexports['default'] = _compose2['default'];\nexports.compose = _compose2['default'];\nexports.isStamp = _isStamp2['default'];\nexports.isDescriptor = _isDescriptor2['default'];\nexports.isComposable = _isComposable2['default'];\nexports.init = _init2['default'];\n//# sourceMappingURL=index.js.map\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/stamp-utils/build/index.js\n ** module id = 225\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/stamp-utils/build/index.js?");

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }\n\nvar _lodashObjectMerge = __webpack_require__(217);\n\nvar _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);\n\nvar _lodashCollectionMap = __webpack_require__(227);\n\nvar _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);\n\nvar _lodashLangIsUndefined = __webpack_require__(251);\n\nvar _lodashLangIsUndefined2 = _interopRequireDefault(_lodashLangIsUndefined);\n\nvar getDescriptorProps = function getDescriptorProps(descriptorName, composables) {\n  return (0, _lodashCollectionMap2['default'])(composables, function (composable) {\n    var descriptor = composable.compose || composable;\n    return descriptor[descriptorName];\n  });\n};\n\nvar createStamp = function createStamp(_ref) {\n  var methods = _ref.methods;\n  var properties = _ref.properties;\n  var deepProperties = _ref.deepProperties;\n  var propertyDescriptors = _ref.propertyDescriptors;\n  var initializers = _ref.initializers;\n  var staticProperties = _ref.staticProperties;\n  var deepStaticProperties = _ref.deepStaticProperties;\n  var staticPropertyDescriptors = _ref.staticPropertyDescriptors;\n\n  var assign = Object.assign;\n\n  var Stamp = function Stamp(options) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var obj = Object.create(methods);\n\n    (0, _lodashObjectMerge2['default'])(obj, deepProperties);\n    assign(obj, properties);\n\n    Object.defineProperties(obj, propertyDescriptors);\n\n    initializers.forEach(function (initializer) {\n      var returnValue = initializer.call(obj, options, { instance: obj, stamp: Stamp, args: [options].concat(args) });\n      if (!(0, _lodashLangIsUndefined2['default'])(returnValue)) {\n        obj = returnValue;\n      }\n    });\n\n    return obj;\n  };\n\n  (0, _lodashObjectMerge2['default'])(Stamp, deepStaticProperties);\n  assign(Stamp, staticProperties);\n\n  Object.defineProperties(Stamp, staticPropertyDescriptors);\n\n  return Stamp;\n};\n\nfunction compose() {\n  var _ref2;\n\n  var assign = Object.assign;\n\n  var composeMethod = function composeMethod() {\n    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      args[_key3] = arguments[_key3];\n    }\n\n    return compose.apply(undefined, [{ compose: composeMethod }].concat(args));\n  };\n\n  for (var _len2 = arguments.length, composables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    composables[_key2] = arguments[_key2];\n  }\n\n  var configuration = _lodashObjectMerge2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDescriptorProps('configuration', composables))));\n\n  assign(composeMethod, {\n    methods: assign.apply(undefined, [{}].concat(_toConsumableArray(getDescriptorProps('methods', composables)))),\n    deepProperties: _lodashObjectMerge2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDescriptorProps('deepProperties', composables)))),\n    properties: assign.apply(undefined, [{}].concat(_toConsumableArray(getDescriptorProps('properties', composables)))),\n    deepStaticProperties: _lodashObjectMerge2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDescriptorProps('deepStaticProperties', composables)))),\n    staticProperties: assign.apply(undefined, [{}].concat(_toConsumableArray(getDescriptorProps('staticProperties', composables)))),\n    propertyDescriptors: assign.apply(undefined, [{}].concat(_toConsumableArray(getDescriptorProps('propertyDescriptors', composables)))),\n    staticPropertyDescriptors: assign.apply(undefined, [{}].concat(_toConsumableArray(getDescriptorProps('staticPropertyDescriptors', composables)))),\n    initializers: (_ref2 = []).concat.apply(_ref2, _toConsumableArray(getDescriptorProps('initializers', composables))).filter(function (initializer) {\n      return initializer !== undefined;\n    }),\n    configuration: configuration\n  });\n\n  var stamp = createStamp(composeMethod);\n\n  stamp.compose = composeMethod;\n\n  return stamp;\n}\n\nexports['default'] = compose;\nmodule.exports = exports['default'];\n//# sourceMappingURL=index.js.map\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/stamp-utils/build/compose/index.js\n ** module id = 226\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/stamp-utils/build/compose/index.js?");

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	eval("var arrayMap = __webpack_require__(228),\n    baseCallback = __webpack_require__(229),\n    baseMap = __webpack_require__(250),\n    isArray = __webpack_require__(198);\n\n/**\n * Creates an array of values by running each element in `collection` through\n * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three\n * arguments: (value, index|key, collection).\n *\n * If a property name is provided for `iteratee` the created `_.property`\n * style callback returns the property value of the given element.\n *\n * If a value is also provided for `thisArg` the created `_.matchesProperty`\n * style callback returns `true` for elements that have a matching property\n * value, else `false`.\n *\n * If an object is provided for `iteratee` the created `_.matches` style\n * callback returns `true` for elements that have the properties of the given\n * object, else `false`.\n *\n * Many lodash methods are guarded to work as iteratees for methods like\n * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.\n *\n * The guarded methods are:\n * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,\n * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,\n * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,\n * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,\n * `sum`, `uniq`, and `words`\n *\n * @static\n * @memberOf _\n * @alias collect\n * @category Collection\n * @param {Array|Object|string} collection The collection to iterate over.\n * @param {Function|Object|string} [iteratee=_.identity] The function invoked\n *  per iteration.\n * @param {*} [thisArg] The `this` binding of `iteratee`.\n * @returns {Array} Returns the new mapped array.\n * @example\n *\n * function timesThree(n) {\n *   return n * 3;\n * }\n *\n * _.map([1, 2], timesThree);\n * // => [3, 6]\n *\n * _.map({ 'a': 1, 'b': 2 }, timesThree);\n * // => [3, 6] (iteration order is not guaranteed)\n *\n * var users = [\n *   { 'user': 'barney' },\n *   { 'user': 'fred' }\n * ];\n *\n * // using the `_.property` callback shorthand\n * _.map(users, 'user');\n * // => ['barney', 'fred']\n */\nfunction map(collection, iteratee, thisArg) {\n  var func = isArray(collection) ? arrayMap : baseMap;\n  iteratee = baseCallback(iteratee, thisArg, 3);\n  return func(collection, iteratee);\n}\n\nmodule.exports = map;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/collection/map.js\n ** module id = 227\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/collection/map.js?");

/***/ },
/* 228 */
/***/ function(module, exports) {

	eval("/**\n * A specialized version of `_.map` for arrays without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/arrayMap.js\n ** module id = 228\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/arrayMap.js?");

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseMatches = __webpack_require__(230),\n    baseMatchesProperty = __webpack_require__(241),\n    bindCallback = __webpack_require__(204),\n    identity = __webpack_require__(205),\n    property = __webpack_require__(248);\n\n/**\n * The base implementation of `_.callback` which supports specifying the\n * number of arguments to provide to `func`.\n *\n * @private\n * @param {*} [func=_.identity] The value to convert to a callback.\n * @param {*} [thisArg] The `this` binding of `func`.\n * @param {number} [argCount] The number of arguments to provide to `func`.\n * @returns {Function} Returns the callback.\n */\nfunction baseCallback(func, thisArg, argCount) {\n  var type = typeof func;\n  if (type == 'function') {\n    return thisArg === undefined\n      ? func\n      : bindCallback(func, thisArg, argCount);\n  }\n  if (func == null) {\n    return identity;\n  }\n  if (type == 'object') {\n    return baseMatches(func);\n  }\n  return thisArg === undefined\n    ? property(func)\n    : baseMatchesProperty(func, thisArg);\n}\n\nmodule.exports = baseCallback;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseCallback.js\n ** module id = 229\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseCallback.js?");

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseIsMatch = __webpack_require__(231),\n    getMatchData = __webpack_require__(238),\n    toObject = __webpack_require__(214);\n\n/**\n * The base implementation of `_.matches` which does not clone `source`.\n *\n * @private\n * @param {Object} source The object of property values to match.\n * @returns {Function} Returns the new function.\n */\nfunction baseMatches(source) {\n  var matchData = getMatchData(source);\n  if (matchData.length == 1 && matchData[0][2]) {\n    var key = matchData[0][0],\n        value = matchData[0][1];\n\n    return function(object) {\n      if (object == null) {\n        return false;\n      }\n      return object[key] === value && (value !== undefined || (key in toObject(object)));\n    };\n  }\n  return function(object) {\n    return baseIsMatch(object, matchData);\n  };\n}\n\nmodule.exports = baseMatches;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseMatches.js\n ** module id = 230\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseMatches.js?");

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseIsEqual = __webpack_require__(232),\n    toObject = __webpack_require__(214);\n\n/**\n * The base implementation of `_.isMatch` without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Object} object The object to inspect.\n * @param {Array} matchData The propery names, values, and compare flags to match.\n * @param {Function} [customizer] The function to customize comparing objects.\n * @returns {boolean} Returns `true` if `object` is a match, else `false`.\n */\nfunction baseIsMatch(object, matchData, customizer) {\n  var index = matchData.length,\n      length = index,\n      noCustomizer = !customizer;\n\n  if (object == null) {\n    return !length;\n  }\n  object = toObject(object);\n  while (index--) {\n    var data = matchData[index];\n    if ((noCustomizer && data[2])\n          ? data[1] !== object[data[0]]\n          : !(data[0] in object)\n        ) {\n      return false;\n    }\n  }\n  while (++index < length) {\n    data = matchData[index];\n    var key = data[0],\n        objValue = object[key],\n        srcValue = data[1];\n\n    if (noCustomizer && data[2]) {\n      if (objValue === undefined && !(key in object)) {\n        return false;\n      }\n    } else {\n      var result = customizer ? customizer(objValue, srcValue, key) : undefined;\n      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {\n        return false;\n      }\n    }\n  }\n  return true;\n}\n\nmodule.exports = baseIsMatch;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseIsMatch.js\n ** module id = 231\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseIsMatch.js?");

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseIsEqualDeep = __webpack_require__(233),\n    isObject = __webpack_require__(190),\n    isObjectLike = __webpack_require__(191);\n\n/**\n * The base implementation of `_.isEqual` without support for `this` binding\n * `customizer` functions.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @param {Function} [customizer] The function to customize comparing values.\n * @param {boolean} [isLoose] Specify performing partial comparisons.\n * @param {Array} [stackA] Tracks traversed `value` objects.\n * @param {Array} [stackB] Tracks traversed `other` objects.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n */\nfunction baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {\n  if (value === other) {\n    return true;\n  }\n  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {\n    return value !== value && other !== other;\n  }\n  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);\n}\n\nmodule.exports = baseIsEqual;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseIsEqual.js\n ** module id = 232\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseIsEqual.js?");

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	eval("var equalArrays = __webpack_require__(234),\n    equalByTag = __webpack_require__(236),\n    equalObjects = __webpack_require__(237),\n    isArray = __webpack_require__(198),\n    isTypedArray = __webpack_require__(223);\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    objectTag = '[object Object]';\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/**\n * A specialized version of `baseIsEqual` for arrays and objects which performs\n * deep comparisons and tracks traversed objects enabling objects with circular\n * references to be compared.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Function} [customizer] The function to customize comparing objects.\n * @param {boolean} [isLoose] Specify performing partial comparisons.\n * @param {Array} [stackA=[]] Tracks traversed `value` objects.\n * @param {Array} [stackB=[]] Tracks traversed `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {\n  var objIsArr = isArray(object),\n      othIsArr = isArray(other),\n      objTag = arrayTag,\n      othTag = arrayTag;\n\n  if (!objIsArr) {\n    objTag = objToString.call(object);\n    if (objTag == argsTag) {\n      objTag = objectTag;\n    } else if (objTag != objectTag) {\n      objIsArr = isTypedArray(object);\n    }\n  }\n  if (!othIsArr) {\n    othTag = objToString.call(other);\n    if (othTag == argsTag) {\n      othTag = objectTag;\n    } else if (othTag != objectTag) {\n      othIsArr = isTypedArray(other);\n    }\n  }\n  var objIsObj = objTag == objectTag,\n      othIsObj = othTag == objectTag,\n      isSameTag = objTag == othTag;\n\n  if (isSameTag && !(objIsArr || objIsObj)) {\n    return equalByTag(object, other, objTag);\n  }\n  if (!isLoose) {\n    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),\n        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');\n\n    if (objIsWrapped || othIsWrapped) {\n      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);\n    }\n  }\n  if (!isSameTag) {\n    return false;\n  }\n  // Assume cyclic values are equal.\n  // For more information on detecting circular references see https://es5.github.io/#JO.\n  stackA || (stackA = []);\n  stackB || (stackB = []);\n\n  var length = stackA.length;\n  while (length--) {\n    if (stackA[length] == object) {\n      return stackB[length] == other;\n    }\n  }\n  // Add `object` and `other` to the stack of traversed objects.\n  stackA.push(object);\n  stackB.push(other);\n\n  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);\n\n  stackA.pop();\n  stackB.pop();\n\n  return result;\n}\n\nmodule.exports = baseIsEqualDeep;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseIsEqualDeep.js\n ** module id = 233\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseIsEqualDeep.js?");

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	eval("var arraySome = __webpack_require__(235);\n\n/**\n * A specialized version of `baseIsEqualDeep` for arrays with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Array} array The array to compare.\n * @param {Array} other The other array to compare.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Function} [customizer] The function to customize comparing arrays.\n * @param {boolean} [isLoose] Specify performing partial comparisons.\n * @param {Array} [stackA] Tracks traversed `value` objects.\n * @param {Array} [stackB] Tracks traversed `other` objects.\n * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.\n */\nfunction equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {\n  var index = -1,\n      arrLength = array.length,\n      othLength = other.length;\n\n  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {\n    return false;\n  }\n  // Ignore non-index properties.\n  while (++index < arrLength) {\n    var arrValue = array[index],\n        othValue = other[index],\n        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;\n\n    if (result !== undefined) {\n      if (result) {\n        continue;\n      }\n      return false;\n    }\n    // Recursively compare arrays (susceptible to call stack limits).\n    if (isLoose) {\n      if (!arraySome(other, function(othValue) {\n            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);\n          })) {\n        return false;\n      }\n    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {\n      return false;\n    }\n  }\n  return true;\n}\n\nmodule.exports = equalArrays;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/equalArrays.js\n ** module id = 234\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/equalArrays.js?");

/***/ },
/* 235 */
/***/ function(module, exports) {

	eval("/**\n * A specialized version of `_.some` for arrays without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Array} array The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arraySome;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/arraySome.js\n ** module id = 235\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/arraySome.js?");

/***/ },
/* 236 */
/***/ function(module, exports) {

	eval("/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    stringTag = '[object String]';\n\n/**\n * A specialized version of `baseIsEqualDeep` for comparing objects of\n * the same `toStringTag`.\n *\n * **Note:** This function only supports comparing values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {string} tag The `toStringTag` of the objects to compare.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalByTag(object, other, tag) {\n  switch (tag) {\n    case boolTag:\n    case dateTag:\n      // Coerce dates and booleans to numbers, dates to milliseconds and booleans\n      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.\n      return +object == +other;\n\n    case errorTag:\n      return object.name == other.name && object.message == other.message;\n\n    case numberTag:\n      // Treat `NaN` vs. `NaN` as equal.\n      return (object != +object)\n        ? other != +other\n        : object == +other;\n\n    case regexpTag:\n    case stringTag:\n      // Coerce regexes to strings and treat strings primitives and string\n      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.\n      return object == (other + '');\n  }\n  return false;\n}\n\nmodule.exports = equalByTag;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/equalByTag.js\n ** module id = 236\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/equalByTag.js?");

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	eval("var keys = __webpack_require__(186);\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqualDeep` for objects with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Function} [customizer] The function to customize comparing values.\n * @param {boolean} [isLoose] Specify performing partial comparisons.\n * @param {Array} [stackA] Tracks traversed `value` objects.\n * @param {Array} [stackB] Tracks traversed `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {\n  var objProps = keys(object),\n      objLength = objProps.length,\n      othProps = keys(other),\n      othLength = othProps.length;\n\n  if (objLength != othLength && !isLoose) {\n    return false;\n  }\n  var index = objLength;\n  while (index--) {\n    var key = objProps[index];\n    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {\n      return false;\n    }\n  }\n  var skipCtor = isLoose;\n  while (++index < objLength) {\n    key = objProps[index];\n    var objValue = object[key],\n        othValue = other[key],\n        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;\n\n    // Recursively compare objects (susceptible to call stack limits).\n    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {\n      return false;\n    }\n    skipCtor || (skipCtor = key == 'constructor');\n  }\n  if (!skipCtor) {\n    var objCtor = object.constructor,\n        othCtor = other.constructor;\n\n    // Non `Object` object instances with different constructors are not equal.\n    if (objCtor != othCtor &&\n        ('constructor' in object && 'constructor' in other) &&\n        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&\n          typeof othCtor == 'function' && othCtor instanceof othCtor)) {\n      return false;\n    }\n  }\n  return true;\n}\n\nmodule.exports = equalObjects;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/equalObjects.js\n ** module id = 237\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/equalObjects.js?");

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isStrictComparable = __webpack_require__(239),\n    pairs = __webpack_require__(240);\n\n/**\n * Gets the propery names, values, and compare flags of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the match data of `object`.\n */\nfunction getMatchData(object) {\n  var result = pairs(object),\n      length = result.length;\n\n  while (length--) {\n    result[length][2] = isStrictComparable(result[length][1]);\n  }\n  return result;\n}\n\nmodule.exports = getMatchData;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/getMatchData.js\n ** module id = 238\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/getMatchData.js?");

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObject = __webpack_require__(190);\n\n/**\n * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` if suitable for strict\n *  equality comparisons, else `false`.\n */\nfunction isStrictComparable(value) {\n  return value === value && !isObject(value);\n}\n\nmodule.exports = isStrictComparable;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/isStrictComparable.js\n ** module id = 239\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/isStrictComparable.js?");

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	eval("var keys = __webpack_require__(186),\n    toObject = __webpack_require__(214);\n\n/**\n * Creates a two dimensional array of the key-value pairs for `object`,\n * e.g. `[[key1, value1], [key2, value2]]`.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the new array of key-value pairs.\n * @example\n *\n * _.pairs({ 'barney': 36, 'fred': 40 });\n * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)\n */\nfunction pairs(object) {\n  object = toObject(object);\n\n  var index = -1,\n      props = keys(object),\n      length = props.length,\n      result = Array(length);\n\n  while (++index < length) {\n    var key = props[index];\n    result[index] = [key, object[key]];\n  }\n  return result;\n}\n\nmodule.exports = pairs;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/object/pairs.js\n ** module id = 240\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/object/pairs.js?");

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseGet = __webpack_require__(242),\n    baseIsEqual = __webpack_require__(232),\n    baseSlice = __webpack_require__(243),\n    isArray = __webpack_require__(198),\n    isKey = __webpack_require__(244),\n    isStrictComparable = __webpack_require__(239),\n    last = __webpack_require__(245),\n    toObject = __webpack_require__(214),\n    toPath = __webpack_require__(246);\n\n/**\n * The base implementation of `_.matchesProperty` which does not clone `srcValue`.\n *\n * @private\n * @param {string} path The path of the property to get.\n * @param {*} srcValue The value to compare.\n * @returns {Function} Returns the new function.\n */\nfunction baseMatchesProperty(path, srcValue) {\n  var isArr = isArray(path),\n      isCommon = isKey(path) && isStrictComparable(srcValue),\n      pathKey = (path + '');\n\n  path = toPath(path);\n  return function(object) {\n    if (object == null) {\n      return false;\n    }\n    var key = pathKey;\n    object = toObject(object);\n    if ((isArr || !isCommon) && !(key in object)) {\n      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));\n      if (object == null) {\n        return false;\n      }\n      key = last(path);\n      object = toObject(object);\n    }\n    return object[key] === srcValue\n      ? (srcValue !== undefined || (key in object))\n      : baseIsEqual(srcValue, object[key], undefined, true);\n  };\n}\n\nmodule.exports = baseMatchesProperty;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseMatchesProperty.js\n ** module id = 241\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseMatchesProperty.js?");

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	eval("var toObject = __webpack_require__(214);\n\n/**\n * The base implementation of `get` without support for string paths\n * and default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array} path The path of the property to get.\n * @param {string} [pathKey] The key representation of path.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path, pathKey) {\n  if (object == null) {\n    return;\n  }\n  if (pathKey !== undefined && pathKey in toObject(object)) {\n    path = [pathKey];\n  }\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[path[index++]];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseGet.js\n ** module id = 242\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseGet.js?");

/***/ },
/* 243 */
/***/ function(module, exports) {

	eval("/**\n * The base implementation of `_.slice` without an iteratee call guard.\n *\n * @private\n * @param {Array} array The array to slice.\n * @param {number} [start=0] The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the slice of `array`.\n */\nfunction baseSlice(array, start, end) {\n  var index = -1,\n      length = array.length;\n\n  start = start == null ? 0 : (+start || 0);\n  if (start < 0) {\n    start = -start > length ? 0 : (length + start);\n  }\n  end = (end === undefined || end > length) ? length : (+end || 0);\n  if (end < 0) {\n    end += length;\n  }\n  length = start > end ? 0 : ((end - start) >>> 0);\n  start >>>= 0;\n\n  var result = Array(length);\n  while (++index < length) {\n    result[index] = array[index + start];\n  }\n  return result;\n}\n\nmodule.exports = baseSlice;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseSlice.js\n ** module id = 243\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseSlice.js?");

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isArray = __webpack_require__(198),\n    toObject = __webpack_require__(214);\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\n\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  var type = typeof value;\n  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {\n    return true;\n  }\n  if (isArray(value)) {\n    return false;\n  }\n  var result = !reIsDeepProp.test(value);\n  return result || (object != null && value in toObject(object));\n}\n\nmodule.exports = isKey;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/isKey.js\n ** module id = 244\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/isKey.js?");

/***/ },
/* 245 */
/***/ function(module, exports) {

	eval("/**\n * Gets the last element of `array`.\n *\n * @static\n * @memberOf _\n * @category Array\n * @param {Array} array The array to query.\n * @returns {*} Returns the last element of `array`.\n * @example\n *\n * _.last([1, 2, 3]);\n * // => 3\n */\nfunction last(array) {\n  var length = array ? array.length : 0;\n  return length ? array[length - 1] : undefined;\n}\n\nmodule.exports = last;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/array/last.js\n ** module id = 245\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/array/last.js?");

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseToString = __webpack_require__(247),\n    isArray = __webpack_require__(198);\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\n\\\\]|\\\\.)*?)\\2)\\]/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `value` to property path array if it's not one.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {Array} Returns the property path array.\n */\nfunction toPath(value) {\n  if (isArray(value)) {\n    return value;\n  }\n  var result = [];\n  baseToString(value).replace(rePropName, function(match, number, quote, string) {\n    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n}\n\nmodule.exports = toPath;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/toPath.js\n ** module id = 246\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/toPath.js?");

/***/ },
/* 247 */
/***/ function(module, exports) {

	eval("/**\n * Converts `value` to a string if it's not one. An empty string is returned\n * for `null` or `undefined` values.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  return value == null ? '' : (value + '');\n}\n\nmodule.exports = baseToString;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseToString.js\n ** module id = 247\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseToString.js?");

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseProperty = __webpack_require__(194),\n    basePropertyDeep = __webpack_require__(249),\n    isKey = __webpack_require__(244);\n\n/**\n * Creates a function that returns the property value at `path` on a\n * given object.\n *\n * @static\n * @memberOf _\n * @category Utility\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new function.\n * @example\n *\n * var objects = [\n *   { 'a': { 'b': { 'c': 2 } } },\n *   { 'a': { 'b': { 'c': 1 } } }\n * ];\n *\n * _.map(objects, _.property('a.b.c'));\n * // => [2, 1]\n *\n * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');\n * // => [1, 2]\n */\nfunction property(path) {\n  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);\n}\n\nmodule.exports = property;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/utility/property.js\n ** module id = 248\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/utility/property.js?");

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseGet = __webpack_require__(242),\n    toPath = __webpack_require__(246);\n\n/**\n * A specialized version of `baseProperty` which supports deep paths.\n *\n * @private\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new function.\n */\nfunction basePropertyDeep(path) {\n  var pathKey = (path + '');\n  path = toPath(path);\n  return function(object) {\n    return baseGet(object, path, pathKey);\n  };\n}\n\nmodule.exports = basePropertyDeep;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/basePropertyDeep.js\n ** module id = 249\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/basePropertyDeep.js?");

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseEach = __webpack_require__(210),\n    isArrayLike = __webpack_require__(192);\n\n/**\n * The base implementation of `_.map` without support for callback shorthands\n * and `this` binding.\n *\n * @private\n * @param {Array|Object|string} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction baseMap(collection, iteratee) {\n  var index = -1,\n      result = isArrayLike(collection) ? Array(collection.length) : [];\n\n  baseEach(collection, function(value, key, collection) {\n    result[++index] = iteratee(value, key, collection);\n  });\n  return result;\n}\n\nmodule.exports = baseMap;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/baseMap.js\n ** module id = 250\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/baseMap.js?");

/***/ },
/* 251 */
/***/ function(module, exports) {

	eval("/**\n * Checks if `value` is `undefined`.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.\n * @example\n *\n * _.isUndefined(void 0);\n * // => true\n *\n * _.isUndefined(null);\n * // => false\n */\nfunction isUndefined(value) {\n  return value === undefined;\n}\n\nmodule.exports = isUndefined;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isUndefined.js\n ** module id = 251\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isUndefined.js?");

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _compose = __webpack_require__(226);\n\nvar _compose2 = _interopRequireDefault(_compose);\n\nvar init = function init() {\n  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {\n    functions[_key] = arguments[_key];\n  }\n\n  return (0, _compose2['default'])({ initializers: [].concat(functions) });\n};\n\nexports['default'] = init;\nmodule.exports = exports['default'];\n//# sourceMappingURL=index.js.map\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/stamp-utils/build/init/index.js\n ** module id = 252\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/stamp-utils/build/init/index.js?");

/***/ },
/* 253 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nvar isStamp = function isStamp(obj) {\n  return typeof obj === 'function' && typeof obj.compose === 'function';\n};\n\nexports['default'] = isStamp;\nmodule.exports = exports['default'];\n//# sourceMappingURL=index.js.map\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/stamp-utils/build/is-stamp/index.js\n ** module id = 253\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/stamp-utils/build/is-stamp/index.js?");

/***/ },
/* 254 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports[\"default\"] = function (obj) {\n  if (!obj) return false;\n  return Boolean((obj.methods || obj.properties || obj.deepProperties || obj.propertyDescriptors || obj.staticProperties || obj.deepStaticProperties || obj.staticPropertyDescriptors || obj.initializers || obj.configuration) && true);\n};\n\nmodule.exports = exports[\"default\"];\n//# sourceMappingURL=index.js.map\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/stamp-utils/build/is-descriptor/index.js\n ** module id = 254\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/stamp-utils/build/is-descriptor/index.js?");

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _isStamp = __webpack_require__(253);\n\nvar _isStamp2 = _interopRequireDefault(_isStamp);\n\nvar _isDescriptor = __webpack_require__(254);\n\nvar _isDescriptor2 = _interopRequireDefault(_isDescriptor);\n\nexports['default'] = function (obj) {\n  if ((0, _isStamp2['default'])(obj)) return true;\n  if ((0, _isDescriptor2['default'])(obj)) return true;\n  return false;\n};\n\nmodule.exports = exports['default'];\n//# sourceMappingURL=index.js.map\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/stamp-utils/build/is-composable/index.js\n ** module id = 255\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/stamp-utils/build/is-composable/index.js?");

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports['default'] = parseDesc;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar _lodashCollectionForEach = __webpack_require__(208);\n\nvar _lodashCollectionForEach2 = _interopRequireDefault(_lodashCollectionForEach);\n\nvar _lodashLangIsEmpty = __webpack_require__(257);\n\nvar _lodashLangIsEmpty2 = _interopRequireDefault(_lodashLangIsEmpty);\n\nvar _stampUtils = __webpack_require__(225);\n\n/**\n * Create a stamp spec compliant desc object.\n *\n * (desc?: stamp|reactDesc|specDesc): specDesc\n */\n\nfunction parseDesc() {\n  var desc = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n  if ((0, _stampUtils.isStamp)(desc)) {\n    return desc.compose;\n  } else if ((0, _stampUtils.isDescriptor)(desc) || (0, _lodashLangIsEmpty2['default'])(desc)) {\n    return desc;\n  }\n\n  var displayName = desc.displayName;\n  var init = desc.init;\n  var state = desc.state;\n  var statics = desc.statics;\n  var contextTypes = desc.contextTypes;\n  var childContextTypes = desc.childContextTypes;\n  var propTypes = desc.propTypes;\n  var defaultProps = desc.defaultProps;\n\n  var methods = _objectWithoutProperties(desc, ['displayName', 'init', 'state', 'statics', 'contextTypes', 'childContextTypes', 'propTypes', 'defaultProps']);\n\n  var parsedDesc = {};\n\n  displayName && (parsedDesc.staticProperties = { displayName: displayName });\n  init && (parsedDesc.initializers = [init]);\n  state && (parsedDesc.deepProperties = { state: state });\n  methods && (parsedDesc.methods = methods);\n  parsedDesc.deepStaticProperties = _extends({}, statics);\n\n  (0, _lodashCollectionForEach2['default'])({ contextTypes: contextTypes, childContextTypes: childContextTypes, propTypes: propTypes, defaultProps: defaultProps }, function (val, key) {\n    return val && (parsedDesc.deepStaticProperties[key] = val);\n  });\n\n  return parsedDesc;\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/lib/utils/descriptor.js\n ** module id = 256\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/lib/utils/descriptor.js?");

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isArguments = __webpack_require__(197),\n    isArray = __webpack_require__(198),\n    isArrayLike = __webpack_require__(192),\n    isFunction = __webpack_require__(189),\n    isObjectLike = __webpack_require__(191),\n    isString = __webpack_require__(258),\n    keys = __webpack_require__(186);\n\n/**\n * Checks if `value` is empty. A value is considered empty unless it's an\n * `arguments` object, array, string, or jQuery-like collection with a length\n * greater than `0` or an object with own enumerable properties.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {Array|Object|string} value The value to inspect.\n * @returns {boolean} Returns `true` if `value` is empty, else `false`.\n * @example\n *\n * _.isEmpty(null);\n * // => true\n *\n * _.isEmpty(true);\n * // => true\n *\n * _.isEmpty(1);\n * // => true\n *\n * _.isEmpty([1, 2, 3]);\n * // => false\n *\n * _.isEmpty({ 'a': 1 });\n * // => false\n */\nfunction isEmpty(value) {\n  if (value == null) {\n    return true;\n  }\n  if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||\n      (isObjectLike(value) && isFunction(value.splice)))) {\n    return !value.length;\n  }\n  return !keys(value).length;\n}\n\nmodule.exports = isEmpty;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isEmpty.js\n ** module id = 257\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isEmpty.js?");

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObjectLike = __webpack_require__(191);\n\n/** `Object#toString` result references. */\nvar stringTag = '[object String]';\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as a `String` primitive or object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isString('abc');\n * // => true\n *\n * _.isString(1);\n * // => false\n */\nfunction isString(value) {\n  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);\n}\n\nmodule.exports = isString;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/lang/isString.js\n ** module id = 258\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/lang/isString.js?");

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports['default'] = wrapMethods;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _lodashObjectAssign = __webpack_require__(184);\n\nvar _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);\n\nvar _lodashObjectMapValues = __webpack_require__(260);\n\nvar _lodashObjectMapValues2 = _interopRequireDefault(_lodashObjectMapValues);\n\n/**\n * React lifecycle methods\n */\nvar lifecycle = {\n  componentDidMount: 'wrap',\n  componentDidUpdate: 'wrap',\n  componentWillMount: 'wrap',\n  componentWillReceiveProps: 'wrap',\n  componentWillUnmount: 'wrap',\n  componentWillUpdate: 'wrap',\n  getChildContext: 'wrap_merge',\n  render: 'override',\n  shouldComponentUpdate: 'wrap_or'\n};\n\n/**\n * Iterate through object methods, creating wrapper\n * functions for React lifecycle methods, starting\n * execution with first-in.\n *\n * (targ?: object, src?: object): new: object\n */\n\nfunction wrapMethods() {\n  var targ = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n  var src = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n  var methods = (0, _lodashObjectMapValues2['default'])(src, function (val, key) {\n    switch (lifecycle[key]) {\n      case 'wrap':\n        return function () {\n          targ[key] && targ[key].apply(this, arguments);\n          val.apply(this, arguments);\n        };\n      case 'wrap_merge':\n        return function () {\n          var res1 = targ[key] && targ[key].apply(this, arguments);\n          var res2 = val.apply(this, arguments);\n\n          return res1 ? (0, _lodashObjectAssign2['default'])(res1, res2) : res2;\n        };\n      case 'wrap_or':\n        return function () {\n          var res1 = targ[key] && targ[key].apply(this, arguments);\n          var res2 = val.apply(this, arguments);\n\n          return res1 || res2;\n        };\n      case 'override':\n      default:\n        return val;\n    }\n  });\n\n  return (0, _lodashObjectAssign2['default'])(_extends({}, targ), methods);\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/lib/utils/react.js\n ** module id = 259\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/lib/utils/react.js?");

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	eval("var createObjectMapper = __webpack_require__(261);\n\n/**\n * Creates an object with the same keys as `object` and values generated by\n * running each own enumerable property of `object` through `iteratee`. The\n * iteratee function is bound to `thisArg` and invoked with three arguments:\n * (value, key, object).\n *\n * If a property name is provided for `iteratee` the created `_.property`\n * style callback returns the property value of the given element.\n *\n * If a value is also provided for `thisArg` the created `_.matchesProperty`\n * style callback returns `true` for elements that have a matching property\n * value, else `false`.\n *\n * If an object is provided for `iteratee` the created `_.matches` style\n * callback returns `true` for elements that have the properties of the given\n * object, else `false`.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to iterate over.\n * @param {Function|Object|string} [iteratee=_.identity] The function invoked\n *  per iteration.\n * @param {*} [thisArg] The `this` binding of `iteratee`.\n * @returns {Object} Returns the new mapped object.\n * @example\n *\n * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {\n *   return n * 3;\n * });\n * // => { 'a': 3, 'b': 6 }\n *\n * var users = {\n *   'fred':    { 'user': 'fred',    'age': 40 },\n *   'pebbles': { 'user': 'pebbles', 'age': 1 }\n * };\n *\n * // using the `_.property` callback shorthand\n * _.mapValues(users, 'age');\n * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)\n */\nvar mapValues = createObjectMapper();\n\nmodule.exports = mapValues;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/object/mapValues.js\n ** module id = 260\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/object/mapValues.js?");

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	eval("var baseCallback = __webpack_require__(229),\n    baseForOwn = __webpack_require__(211);\n\n/**\n * Creates a function for `_.mapKeys` or `_.mapValues`.\n *\n * @private\n * @param {boolean} [isMapKeys] Specify mapping keys instead of values.\n * @returns {Function} Returns the new map function.\n */\nfunction createObjectMapper(isMapKeys) {\n  return function(object, iteratee, thisArg) {\n    var result = {};\n    iteratee = baseCallback(iteratee, thisArg, 3);\n\n    baseForOwn(object, function(value, key, object) {\n      var mapped = iteratee(value, key, object);\n      key = isMapKeys ? mapped : key;\n      value = isMapKeys ? value : mapped;\n      result[key] = value;\n    });\n    return result;\n  };\n}\n\nmodule.exports = createObjectMapper;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-stamp/~/lodash/internal/createObjectMapper.js\n ** module id = 261\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-stamp/~/lodash/internal/createObjectMapper.js?");

/***/ },
/* 262 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (React) {\n  return function (_ref) {\n    var filter = _ref.filter;\n    var onFilterChange = _ref.onFilterChange;\n    var VisibilityFilters = _ref.VisibilityFilters;\n\n    return React.createElement(\n      'p',\n      null,\n      'Show :',\n      ' ',\n      renderFilter(onFilterChange, filter, VisibilityFilters.SHOW_ALL, 'All'),\n      ' ',\n      renderFilter(onFilterChange, filter, VisibilityFilters.SHOW_COMPLETED, 'Completed'),\n      ' ',\n      renderFilter(onFilterChange, filter, VisibilityFilters.SHOW_ACTIVE, 'Active')\n    );\n  };\n};\n\nfunction renderFilter(onFilterChange, filter, nextFilter, name) {\n  if (filter === nextFilter) return name;\n\n  return React.createElement(\n    'a',\n    { href: '#',\n      onClick: getFilterHandler(nextFilter, onFilterChange) },\n    name\n  );\n}\n\nfunction getFilterHandler(nextFilter, onFilterChange) {\n  return function handleFilterChange(e) {\n    e.preventDefault();\n    onFilterChange(nextFilter);\n  };\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/apps/components/todo_filter.jsx\n ** module id = 262\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/apps/components/todo_filter.jsx?");

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(264);\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (React) {\n  return function (_ref) {\n    var Todo = _ref.Todo;\n    var todos = _ref.todos;\n    var onTodoClick = _ref.onTodoClick;\n    return React.createElement(\n      \"ul\",\n      null,\n      todos.map(mapTodo(Todo, onTodoClick))\n    );\n  };\n};\n\nfunction mapTodo(Todo, onTodoClick) {\n  return function renderTodo(todo, index) {\n    return React.createElement(Todo, (0, _extends3.default)({}, todo, { key: index, onClick: onTodoClick }));\n  };\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/apps/components/todo_list.jsx\n ** module id = 263\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/apps/components/todo_list.jsx?");

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _assign = __webpack_require__(265);\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _assign2.default || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/extends.js\n ** module id = 264\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/extends.js?");

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(266), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/object/assign.js\n ** module id = 265\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/object/assign.js?");

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(267);\nmodule.exports = __webpack_require__(270).Object.assign;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/fn/object/assign.js\n ** module id = 266\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/fn/object/assign.js?");

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(268);\n\n$export($export.S + $export.F, 'Object', {assign: __webpack_require__(273)});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/es6.object.assign.js\n ** module id = 267\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/es6.object.assign.js?");

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	eval("var global    = __webpack_require__(269)\n  , core      = __webpack_require__(270)\n  , ctx       = __webpack_require__(271)\n  , PROTOTYPE = 'prototype';\n\nvar $export = function(type, name, source){\n  var IS_FORCED = type & $export.F\n    , IS_GLOBAL = type & $export.G\n    , IS_STATIC = type & $export.S\n    , IS_PROTO  = type & $export.P\n    , IS_BIND   = type & $export.B\n    , IS_WRAP   = type & $export.W\n    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})\n    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]\n    , key, own, out;\n  if(IS_GLOBAL)source = name;\n  for(key in source){\n    // contains in native\n    own = !IS_FORCED && target && key in target;\n    if(own && key in exports)continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function(C){\n      var F = function(param){\n        return this instanceof C ? new C(param) : C(param);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;\n  }\n};\n// type bitmap\n$export.F = 1;  // forced\n$export.G = 2;  // global\n$export.S = 4;  // static\n$export.P = 8;  // proto\n$export.B = 16; // bind\n$export.W = 32; // wrap\nmodule.exports = $export;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.export.js\n ** module id = 268\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.export.js?");

/***/ },
/* 269 */
/***/ function(module, exports) {

	eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();\nif(typeof __g == 'number')__g = global; // eslint-disable-line no-undef\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.global.js\n ** module id = 269\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.global.js?");

/***/ },
/* 270 */
/***/ function(module, exports) {

	eval("var core = module.exports = {version: '1.2.6'};\nif(typeof __e == 'number')__e = core; // eslint-disable-line no-undef\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.core.js\n ** module id = 270\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.core.js?");

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	eval("// optional / simple context binding\nvar aFunction = __webpack_require__(272);\nmodule.exports = function(fn, that, length){\n  aFunction(fn);\n  if(that === undefined)return fn;\n  switch(length){\n    case 1: return function(a){\n      return fn.call(that, a);\n    };\n    case 2: return function(a, b){\n      return fn.call(that, a, b);\n    };\n    case 3: return function(a, b, c){\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function(/* ...args */){\n    return fn.apply(that, arguments);\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.ctx.js\n ** module id = 271\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.ctx.js?");

/***/ },
/* 272 */
/***/ function(module, exports) {

	eval("module.exports = function(it){\n  if(typeof it != 'function')throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.a-function.js\n ** module id = 272\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.a-function.js?");

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.2.1 Object.assign(target, source, ...)\nvar $        = __webpack_require__(274)\n  , toObject = __webpack_require__(275)\n  , IObject  = __webpack_require__(277);\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = __webpack_require__(279)(function(){\n  var a = Object.assign\n    , A = {}\n    , B = {}\n    , S = Symbol()\n    , K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function(k){ B[k] = k; });\n  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;\n}) ? function assign(target, source){ // eslint-disable-line no-unused-vars\n  var T     = toObject(target)\n    , $$    = arguments\n    , $$len = $$.length\n    , index = 1\n    , getKeys    = $.getKeys\n    , getSymbols = $.getSymbols\n    , isEnum     = $.isEnum;\n  while($$len > index){\n    var S      = IObject($$[index++])\n      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)\n      , length = keys.length\n      , j      = 0\n      , key;\n    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];\n  }\n  return T;\n} : Object.assign;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.object-assign.js\n ** module id = 273\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.object-assign.js?");

/***/ },
/* 274 */
/***/ function(module, exports) {

	eval("var $Object = Object;\nmodule.exports = {\n  create:     $Object.create,\n  getProto:   $Object.getPrototypeOf,\n  isEnum:     {}.propertyIsEnumerable,\n  getDesc:    $Object.getOwnPropertyDescriptor,\n  setDesc:    $Object.defineProperty,\n  setDescs:   $Object.defineProperties,\n  getKeys:    $Object.keys,\n  getNames:   $Object.getOwnPropertyNames,\n  getSymbols: $Object.getOwnPropertySymbols,\n  each:       [].forEach\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.js\n ** module id = 274\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.js?");

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(276);\nmodule.exports = function(it){\n  return Object(defined(it));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.to-object.js\n ** module id = 275\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.to-object.js?");

/***/ },
/* 276 */
/***/ function(module, exports) {

	eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function(it){\n  if(it == undefined)throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.defined.js\n ** module id = 276\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.defined.js?");

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(278);\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.iobject.js\n ** module id = 277\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.iobject.js?");

/***/ },
/* 278 */
/***/ function(module, exports) {

	eval("var toString = {}.toString;\n\nmodule.exports = function(it){\n  return toString.call(it).slice(8, -1);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.cof.js\n ** module id = 278\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.cof.js?");

/***/ },
/* 279 */
/***/ function(module, exports) {

	eval("module.exports = function(exec){\n  try {\n    return !!exec();\n  } catch(e){\n    return true;\n  }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.fails.js\n ** module id = 279\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.fails.js?");

/***/ },
/* 280 */,
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactStamp = __webpack_require__(181);\n\nvar _reactStamp2 = _interopRequireDefault(_reactStamp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n  var React = _ref.React;\n  var TodoAdd = _ref.TodoAdd;\n  var TodoFilter = _ref.TodoFilter;\n  var Todo = _ref.Todo;\n  var TodoList = _ref.TodoList;\n  var VisibilityFilters = _ref.VisibilityFilters;\n  return (0, _reactStamp2.default)(React).compose({\n    render: function render() {\n      return React.createElement(\n        \"div\",\n        { className: \"container\" },\n        React.createElement(\n          \"div\",\n          { className: \"row\" },\n          React.createElement(\n            \"div\",\n            { className: \"col-sm-4 col-sm-offset-4\" },\n            React.createElement(TodoAdd, {\n              onAddClick: getLoger('add todo') }),\n            React.createElement(TodoList, {\n              Todo: Todo,\n              todos: todos,\n              onItemClick: getLoger('todo clicked') }),\n            React.createElement(TodoFilter, {\n              filter: \"SHOW_ALL\",\n              onFilterChange: getLoger('filter change'),\n              VisibilityFilters: VisibilityFilters })\n          )\n        )\n      );\n    }\n  });\n};\n\nfunction getLoger(type) {\n  return function (text) {\n    console.log(type, text);\n  };\n}\n\nvar todos = [{\n  text: 'Use Redux',\n  completed: true\n}, {\n  text: 'Learn to connect it to React',\n  completed: false\n}];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/apps/containers/todo.cont.jsx\n ** module id = 281\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/apps/containers/todo.cont.jsx?");

/***/ },
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _from = __webpack_require__(297);\n\nvar _from2 = _interopRequireDefault(_from);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  } else {\n    return (0, _from2.default)(arr);\n  }\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/toConsumableArray.js\n ** module id = 296\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/toConsumableArray.js?");

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(298), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/array/from.js\n ** module id = 297\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/array/from.js?");

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(299);\n__webpack_require__(315);\nmodule.exports = __webpack_require__(270).Array.from;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/fn/array/from.js\n ** module id = 298\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/fn/array/from.js?");

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar $at  = __webpack_require__(300)(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(302)(String, 'String', function(iterated){\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function(){\n  var O     = this._t\n    , index = this._i\n    , point;\n  if(index >= O.length)return {value: undefined, done: true};\n  point = $at(O, index);\n  this._i += point.length;\n  return {value: point, done: false};\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/es6.string.iterator.js\n ** module id = 299\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/es6.string.iterator.js?");

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	eval("var toInteger = __webpack_require__(301)\n  , defined   = __webpack_require__(276);\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function(TO_STRING){\n  return function(that, pos){\n    var s = String(defined(that))\n      , i = toInteger(pos)\n      , l = s.length\n      , a, b;\n    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.string-at.js\n ** module id = 300\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.string-at.js?");

/***/ },
/* 301 */
/***/ function(module, exports) {

	eval("// 7.1.4 ToInteger\nvar ceil  = Math.ceil\n  , floor = Math.floor;\nmodule.exports = function(it){\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.to-integer.js\n ** module id = 301\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.to-integer.js?");

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar LIBRARY        = __webpack_require__(303)\n  , $export        = __webpack_require__(268)\n  , redefine       = __webpack_require__(304)\n  , hide           = __webpack_require__(305)\n  , has            = __webpack_require__(308)\n  , Iterators      = __webpack_require__(309)\n  , $iterCreate    = __webpack_require__(310)\n  , setToStringTag = __webpack_require__(311)\n  , getProto       = __webpack_require__(274).getProto\n  , ITERATOR       = __webpack_require__(312)('iterator')\n  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`\n  , FF_ITERATOR    = '@@iterator'\n  , KEYS           = 'keys'\n  , VALUES         = 'values';\n\nvar returnThis = function(){ return this; };\n\nmodule.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function(kind){\n    if(!BUGGY && kind in proto)return proto[kind];\n    switch(kind){\n      case KEYS: return function keys(){ return new Constructor(this, kind); };\n      case VALUES: return function values(){ return new Constructor(this, kind); };\n    } return function entries(){ return new Constructor(this, kind); };\n  };\n  var TAG        = NAME + ' Iterator'\n    , DEF_VALUES = DEFAULT == VALUES\n    , VALUES_BUG = false\n    , proto      = Base.prototype\n    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]\n    , $default   = $native || getMethod(DEFAULT)\n    , methods, key;\n  // Fix native\n  if($native){\n    var IteratorPrototype = getProto($default.call(new Base));\n    // Set @@toStringTag to native iterators\n    setToStringTag(IteratorPrototype, TAG, true);\n    // FF fix\n    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);\n    // fix Array#{values, @@iterator}.name in V8 / FF\n    if(DEF_VALUES && $native.name !== VALUES){\n      VALUES_BUG = true;\n      $default = function values(){ return $native.call(this); };\n    }\n  }\n  // Define iterator\n  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG]  = returnThis;\n  if(DEFAULT){\n    methods = {\n      values:  DEF_VALUES  ? $default : getMethod(VALUES),\n      keys:    IS_SET      ? $default : getMethod(KEYS),\n      entries: !DEF_VALUES ? $default : getMethod('entries')\n    };\n    if(FORCED)for(key in methods){\n      if(!(key in proto))redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.iter-define.js\n ** module id = 302\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.iter-define.js?");

/***/ },
/* 303 */
/***/ function(module, exports) {

	eval("module.exports = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.library.js\n ** module id = 303\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.library.js?");

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(305);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.redefine.js\n ** module id = 304\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.redefine.js?");

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $          = __webpack_require__(274)\n  , createDesc = __webpack_require__(306);\nmodule.exports = __webpack_require__(307) ? function(object, key, value){\n  return $.setDesc(object, key, createDesc(1, value));\n} : function(object, key, value){\n  object[key] = value;\n  return object;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.hide.js\n ** module id = 305\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.hide.js?");

/***/ },
/* 306 */
/***/ function(module, exports) {

	eval("module.exports = function(bitmap, value){\n  return {\n    enumerable  : !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable    : !(bitmap & 4),\n    value       : value\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.property-desc.js\n ** module id = 306\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.property-desc.js?");

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(279)(function(){\n  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.descriptors.js\n ** module id = 307\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.descriptors.js?");

/***/ },
/* 308 */
/***/ function(module, exports) {

	eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function(it, key){\n  return hasOwnProperty.call(it, key);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.has.js\n ** module id = 308\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.has.js?");

/***/ },
/* 309 */
/***/ function(module, exports) {

	eval("module.exports = {};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.iterators.js\n ** module id = 309\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.iterators.js?");

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar $              = __webpack_require__(274)\n  , descriptor     = __webpack_require__(306)\n  , setToStringTag = __webpack_require__(311)\n  , IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(305)(IteratorPrototype, __webpack_require__(312)('iterator'), function(){ return this; });\n\nmodule.exports = function(Constructor, NAME, next){\n  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.iter-create.js\n ** module id = 310\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.iter-create.js?");

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	eval("var def = __webpack_require__(274).setDesc\n  , has = __webpack_require__(308)\n  , TAG = __webpack_require__(312)('toStringTag');\n\nmodule.exports = function(it, tag, stat){\n  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.set-to-string-tag.js\n ** module id = 311\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.set-to-string-tag.js?");

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	eval("var store  = __webpack_require__(313)('wks')\n  , uid    = __webpack_require__(314)\n  , Symbol = __webpack_require__(269).Symbol;\nmodule.exports = function(name){\n  return store[name] || (store[name] =\n    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.wks.js\n ** module id = 312\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.wks.js?");

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	eval("var global = __webpack_require__(269)\n  , SHARED = '__core-js_shared__'\n  , store  = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function(key){\n  return store[key] || (store[key] = {});\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.shared.js\n ** module id = 313\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.shared.js?");

/***/ },
/* 314 */
/***/ function(module, exports) {

	eval("var id = 0\n  , px = Math.random();\nmodule.exports = function(key){\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.uid.js\n ** module id = 314\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.uid.js?");

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar ctx         = __webpack_require__(271)\n  , $export     = __webpack_require__(268)\n  , toObject    = __webpack_require__(275)\n  , call        = __webpack_require__(316)\n  , isArrayIter = __webpack_require__(319)\n  , toLength    = __webpack_require__(320)\n  , getIterFn   = __webpack_require__(321);\n$export($export.S + $export.F * !__webpack_require__(323)(function(iter){ Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){\n    var O       = toObject(arrayLike)\n      , C       = typeof this == 'function' ? this : Array\n      , $$      = arguments\n      , $$len   = $$.length\n      , mapfn   = $$len > 1 ? $$[1] : undefined\n      , mapping = mapfn !== undefined\n      , index   = 0\n      , iterFn  = getIterFn(O)\n      , length, result, step, iterator;\n    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){\n      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){\n        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;\n      }\n    } else {\n      length = toLength(O.length);\n      for(result = new C(length); length > index; index++){\n        result[index] = mapping ? mapfn(O[index], index) : O[index];\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/es6.array.from.js\n ** module id = 315\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/es6.array.from.js?");

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(317);\nmodule.exports = function(iterator, fn, value, entries){\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch(e){\n    var ret = iterator['return'];\n    if(ret !== undefined)anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.iter-call.js\n ** module id = 316\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.iter-call.js?");

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObject = __webpack_require__(318);\nmodule.exports = function(it){\n  if(!isObject(it))throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.an-object.js\n ** module id = 317\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.an-object.js?");

/***/ },
/* 318 */
/***/ function(module, exports) {

	eval("module.exports = function(it){\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.is-object.js\n ** module id = 318\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.is-object.js?");

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	eval("// check on default Array iterator\nvar Iterators  = __webpack_require__(309)\n  , ITERATOR   = __webpack_require__(312)('iterator')\n  , ArrayProto = Array.prototype;\n\nmodule.exports = function(it){\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.is-array-iter.js\n ** module id = 319\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.is-array-iter.js?");

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(301)\n  , min       = Math.min;\nmodule.exports = function(it){\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.to-length.js\n ** module id = 320\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.to-length.js?");

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	eval("var classof   = __webpack_require__(322)\n  , ITERATOR  = __webpack_require__(312)('iterator')\n  , Iterators = __webpack_require__(309);\nmodule.exports = __webpack_require__(270).getIteratorMethod = function(it){\n  if(it != undefined)return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/core.get-iterator-method.js\n ** module id = 321\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/core.get-iterator-method.js?");

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(278)\n  , TAG = __webpack_require__(312)('toStringTag')\n  // ES3 wrong here\n  , ARG = cof(function(){ return arguments; }()) == 'Arguments';\n\nmodule.exports = function(it){\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.classof.js\n ** module id = 322\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.classof.js?");

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	eval("var ITERATOR     = __webpack_require__(312)('iterator')\n  , SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function(){ SAFE_CLOSING = true; };\n  Array.from(riter, function(){ throw 2; });\n} catch(e){ /* empty */ }\n\nmodule.exports = function(exec, skipClosing){\n  if(!skipClosing && !SAFE_CLOSING)return false;\n  var safe = false;\n  try {\n    var arr  = [7]\n      , iter = arr[ITERATOR]();\n    iter.next = function(){ safe = true; };\n    arr[ITERATOR] = function(){ return iter; };\n    exec(arr);\n  } catch(e){ /* empty */ }\n  return safe;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.iter-detect.js\n ** module id = 323\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.iter-detect.js?");

/***/ },
/* 324 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';\n\nvar VisibilityFilters = exports.VisibilityFilters = {\n  SHOW_ALL: 'SHOW_ALL',\n  SHOW_COMPLETED: 'SHOW_COMPLETED',\n  SHOW_ACTIVE: 'SHOW_ACTIVE'\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/store/constants/todo_filter.cst.js\n ** module id = 324\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/store/constants/todo_filter.cst.js?");

/***/ },
/* 325 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ADD_TODO = exports.ADD_TODO = 'ADD_TODO';\nvar COMPLETE_TODO = exports.COMPLETE_TODO = 'COMPLETE_TODO';\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/store/constants/todo.cst.js\n ** module id = 325\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/store/constants/todo.cst.js?");

/***/ },
/* 326 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (React) {\n  return function (_ref) {\n    var onClick = _ref.onClick;\n    var completed = _ref.completed;\n    var text = _ref.text;\n    return React.createElement(\n      'li',\n      { onClick: onClick,\n        style: {\n          textDecoration: completed ? 'line-through' : 'none',\n          cursor: completed ? 'default' : 'pointer'\n        } },\n      text\n    );\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/js/apps/components/todo.jsx\n ** module id = 326\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/js/apps/components/todo.jsx?");

/***/ }
]);