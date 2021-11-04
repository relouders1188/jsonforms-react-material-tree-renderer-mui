"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var IconButton_1 = (0, tslib_1.__importDefault)(require("@mui/material/IconButton"));
var material_1 = require("@mui/material");
var TableRow_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableRow"));
var Tooltip_1 = (0, tslib_1.__importDefault)(require("@mui/material/Tooltip"));
var Add_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/Add"));
var ValidationIcon_1 = (0, tslib_1.__importDefault)(require("./ValidationIcon"));
var NoBorderTableCell_1 = (0, tslib_1.__importDefault)(require("./NoBorderTableCell"));
var fixedCellSmall = {
    paddingLeft: 0,
    paddingRight: 0,
};
var TableToolbar = react_1.default.memo(function (_a) {
    var numColumns = _a.numColumns, errors = _a.errors, label = _a.label, path = _a.path, addItem = _a.addItem, schema = _a.schema, enabled = _a.enabled;
    return (react_1.default.createElement(TableRow_1.default, null,
        react_1.default.createElement(NoBorderTableCell_1.default, { colSpan: numColumns },
            react_1.default.createElement(material_1.Grid, { container: true, alignItems: 'center', spacing: 2 },
                react_1.default.createElement(material_1.Grid, { item: true },
                    react_1.default.createElement(material_1.Typography, { variant: 'h6' }, label)),
                react_1.default.createElement(material_1.Grid, { item: true },
                    react_1.default.createElement(material_1.Hidden, { smUp: errors.length === 0 },
                        react_1.default.createElement(material_1.Grid, { item: true },
                            react_1.default.createElement(ValidationIcon_1.default, { id: 'tooltip-validation', errorMessages: errors })))))),
        enabled ? (react_1.default.createElement(NoBorderTableCell_1.default, { align: 'right', style: fixedCellSmall },
            react_1.default.createElement(Tooltip_1.default, { id: 'tooltip-add', title: "Add to " + label, placement: 'bottom' },
                react_1.default.createElement(IconButton_1.default, { "aria-label": "Add to " + label, onClick: addItem(path, (0, core_1.createDefaultValue)(schema)) },
                    react_1.default.createElement(Add_1.default, null))))) : null));
});
exports.default = TableToolbar;
//# sourceMappingURL=TableToolbar.js.map