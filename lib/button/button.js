"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));
var _excluded = ["loading", "disabled", "className", "children", "htmlType"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];
var ButtonShapes = ['default', 'circle', 'round'];
var ButtonHTMLTypes = ['submit', 'button', 'reset'];
var InternalButton = function InternalButton(props, ref) {
  var _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    customDisabled = props.disabled,
    className = props.className,
    children = props.children,
    _props$htmlType = props.htmlType,
    htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);

  // ===================== Disabled =====================
  var disabled = React.useContext(_DisabledContext.default);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var _React$useState = React.useState(!!loading),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    innerLoading = _React$useState2[0],
    _ = _React$useState2[1];
  var buttonRef = ref || /*#__PURE__*/React.createRef();
  var handleClick = function handleClick(e) {
    var onClick = props.onClick;
    // https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  var kids = children || children === 0 ? children : null;
  var buttonNode = /*#__PURE__*/React.createElement("button", (0, _extends2.default)({}, rest, {
    type: htmlType,
    className: className,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), kids);
  return buttonNode;
};
var Button = /*#__PURE__*/React.forwardRef(InternalButton);
var _default = Button;
exports.default = _default;