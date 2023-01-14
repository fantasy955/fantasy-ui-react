import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["loading", "disabled", "className", "children", "htmlType"];
/* eslint-disable react/button-has-type */
import * as React from 'react';
import DisabledContext from '../config-provider/DisabledContext';
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
    rest = _objectWithoutProperties(props, _excluded);

  // ===================== Disabled =====================
  var disabled = React.useContext(DisabledContext);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var _React$useState = React.useState(!!loading),
    _React$useState2 = _slicedToArray(_React$useState, 2),
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
  var buttonNode = /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: htmlType,
    className: className,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), kids);
  return buttonNode;
};
var Button = /*#__PURE__*/React.forwardRef(InternalButton);
export default Button;