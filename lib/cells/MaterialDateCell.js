"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialDateCellTester = exports.MaterialDateCell = void 0;
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
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var Input_1 = (0, tslib_1.__importDefault)(require("@mui/material/Input"));
var merge_1 = (0, tslib_1.__importDefault)(require("lodash/merge"));
var MaterialDateCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange, config = props.config;
    var appliedUiSchemaOptions = (0, merge_1.default)({}, config, uischema.options);
    return (react_1.default.createElement(Input_1.default, { type: 'date', value: data || '', onChange: function (ev) { return handleChange(path, ev.target.value); }, className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, fullWidth: true }));
};
exports.MaterialDateCell = MaterialDateCell;
exports.materialDateCellTester = (0, core_1.rankWith)(2, core_1.isDateControl);
exports.default = (0, react_2.withJsonFormsCellProps)(exports.MaterialDateCell);
//# sourceMappingURL=MaterialDateCell.js.map