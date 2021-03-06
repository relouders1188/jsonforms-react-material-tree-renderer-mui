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
var styles_1 = require("@mui/styles");
var material_1 = require("@mui/material");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var styles = {
    noBottomBorder: {
        borderBottom: 'none'
    }
};
var NoBorderTableCell = function (_a) {
    var classes = _a.classes, children = _a.children, otherProps = (0, tslib_1.__rest)(_a, ["classes", "children"]);
    return (react_1.default.createElement(material_1.TableCell, (0, tslib_1.__assign)({ className: classes.noBottomBorder }, otherProps), children));
};
exports.default = (0, styles_1.withStyles)(styles)(NoBorderTableCell);
//# sourceMappingURL=NoBorderTableCell.js.map