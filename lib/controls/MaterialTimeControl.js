"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialTimeControlTester = exports.MaterialTimeControl = void 0;
var tslib_1 = require("tslib");
// @ts-nocheck
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
var react_1 = (0, tslib_1.__importStar)(require("react"));
var lab_1 = require("@mui/lab");
var AdapterDateFns_1 = (0, tslib_1.__importDefault)(require("@mui/lab/AdapterDateFns"));
var LocalizationProvider_1 = (0, tslib_1.__importDefault)(require("@mui/lab/LocalizationProvider"));
var merge_1 = (0, tslib_1.__importDefault)(require("lodash/merge"));
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var util_1 = require("../util");
var MaterialTimeControl = function (props) {
    var _a, _b;
    var _c = (0, util_1.useFocus)(), focused = _c[0], onFocus = _c[1], onBlur = _c[2];
    var id = props.id, description = props.description, errors = props.errors, label = props.label, uischema = props.uischema, visible = props.visible, enabled = props.enabled, required = props.required, path = props.path, handleChange = props.handleChange, data = props.data, config = props.config;
    var appliedUiSchemaOptions = (0, merge_1.default)({}, config, uischema.options);
    var isValid = errors.length === 0;
    var showDescription = !(0, core_1.isDescriptionHidden)(visible, description, focused, appliedUiSchemaOptions.showUnfocusedDescription);
    var format = (_a = appliedUiSchemaOptions.timeFormat) !== null && _a !== void 0 ? _a : 'HH:mm';
    var saveFormat = (_b = appliedUiSchemaOptions.timeSaveFormat) !== null && _b !== void 0 ? _b : 'HH:mm:ss';
    var firstFormHelperText = showDescription
        ? description
        : !isValid
            ? errors
            : null;
    var secondFormHelperText = showDescription && !isValid ? errors : null;
    var onChange = (0, react_1.useMemo)(function () { return (0, util_1.createOnChangeHandler)(path, handleChange, saveFormat); }, [path, handleChange, saveFormat]);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(LocalizationProvider_1.default, { dateAdapter: AdapterDateFns_1.default },
            react_1.default.createElement(lab_1.TimePicker, { id: id + '-input', required: required && !appliedUiSchemaOptions.hideRequiredAsterisk, label: label, error: !isValid, fullWidth: !appliedUiSchemaOptions.trim, onFocus: onFocus, onBlur: onBlur, InputLabelProps: data ? { shrink: true } : undefined, value: (0, util_1.getData)(data, saveFormat), clearable: true, onChange: onChange, inputFormat: format, ampm: !!appliedUiSchemaOptions.ampm, views: appliedUiSchemaOptions.views, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, cancelLabel: appliedUiSchemaOptions.cancelLabel, clearLabel: appliedUiSchemaOptions.clearLabel, okLabel: appliedUiSchemaOptions.okLabel, invalidDateMessage: null, maxDateMessage: null, minDateMessage: null, renderInput: function (params) { return react_1.default.createElement(material_1.TextField, (0, tslib_1.__assign)({}, params)); } }),
            react_1.default.createElement(material_1.FormHelperText, { error: !isValid && !showDescription }, firstFormHelperText),
            react_1.default.createElement(material_1.FormHelperText, { error: !isValid }, secondFormHelperText))));
};
exports.MaterialTimeControl = MaterialTimeControl;
exports.materialTimeControlTester = (0, core_1.rankWith)(4, core_1.isTimeControl);
exports.default = (0, react_2.withJsonFormsControlProps)(exports.MaterialTimeControl);
//# sourceMappingURL=MaterialTimeControl.js.map