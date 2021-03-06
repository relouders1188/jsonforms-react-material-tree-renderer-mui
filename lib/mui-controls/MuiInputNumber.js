"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiInputNumber = void 0;
var tslib_1 = require("tslib");
/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var Input_1 = (0, tslib_1.__importDefault)(require("@mui/material/Input"));
var merge_1 = (0, tslib_1.__importDefault)(require("lodash/merge"));
var util_1 = require("../util");
var toNumber = function (value) {
    return value === '' ? undefined : parseFloat(value);
};
var eventToValue = function (ev) { return toNumber(ev.target.value); };
exports.MuiInputNumber = react_1.default.memo(function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange, config = props.config;
    var inputProps = { step: '0.1' };
    var appliedUiSchemaOptions = (0, merge_1.default)({}, config, uischema.options);
    var _a = (0, util_1.useDebouncedChange)(handleChange, '', data, path, eventToValue), inputValue = _a[0], onChange = _a[1];
    return (react_1.default.createElement(Input_1.default, { type: 'number', value: inputValue, onChange: onChange, className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, inputProps: inputProps, fullWidth: true }));
});
//# sourceMappingURL=MuiInputNumber.js.map