"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialOneOfEnumCellTester = exports.MaterialOneOfEnumCell = void 0;
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
var MuiSelect_1 = require("../mui-controls/MuiSelect");
var MaterialOneOfEnumCell = function (props) { return (react_1.default.createElement(MuiSelect_1.MuiSelect, (0, tslib_1.__assign)({}, props))); };
exports.MaterialOneOfEnumCell = MaterialOneOfEnumCell;
/**
 * Default tester for oneOf enum controls.
 * @type {RankedTester}
 */
exports.materialOneOfEnumCellTester = (0, core_1.rankWith)(2, core_1.isOneOfEnumControl);
exports.default = (0, react_2.withJsonFormsOneOfEnumCellProps)(exports.MaterialOneOfEnumCell);
//# sourceMappingURL=MaterialOneOfEnumCell.js.map