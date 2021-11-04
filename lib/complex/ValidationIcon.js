"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var Badge_1 = (0, tslib_1.__importDefault)(require("@mui/material/Badge"));
var ErrorOutline_1 = (0, tslib_1.__importDefault)(require("@mui/icons-material/ErrorOutline"));
var Tooltip_1 = (0, tslib_1.__importDefault)(require("@mui/material/Tooltip"));
var styles_1 = require("@mui/styles");
var styles = (0, styles_1.createStyles)(function (_a) {
    var palette = _a.palette;
    return ({
        badge: {
            color: palette.error.main
        }
    });
});
var ValidationIcon = function (_a) {
    var classes = _a.classes, errorMessages = _a.errorMessages, id = _a.id;
    return (react_1.default.createElement(Tooltip_1.default, { id: id, title: errorMessages },
        react_1.default.createElement(Badge_1.default, { className: classes.badge, badgeContent: errorMessages.split('\n').length },
            react_1.default.createElement(ErrorOutline_1.default, { color: 'inherit' }))));
};
exports.default = (0, styles_1.withStyles)(styles, { name: 'ValidationIcon' })(ValidationIcon);
//# sourceMappingURL=ValidationIcon.js.map