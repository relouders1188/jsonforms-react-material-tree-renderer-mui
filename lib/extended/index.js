"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedUnwrapped = exports.extendedMaterialRenderers = void 0;
var tslib_1 = require("tslib");
/*
  The MIT License

  Copyright (c) 2018-2020 EclipseSource Munich
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
var MaterialAutocompleteEnumControl_1 = (0, tslib_1.__importStar)(require("./MaterialAutocompleteEnumControl"));
var MaterialAutocompleteOneOfEnumControl_1 = (0, tslib_1.__importStar)(require("./MaterialAutocompleteOneOfEnumControl"));
var __1 = require("../");
/**
 * Includes all 'materialRenderers' and adds additional renderers based on '@material-ui/lab'
 */
exports.extendedMaterialRenderers = (0, tslib_1.__spreadArray)([
    {
        tester: MaterialAutocompleteOneOfEnumControl_1.materialAutocompleteOneOfEnumControlTester,
        renderer: MaterialAutocompleteOneOfEnumControl_1.default
    },
    {
        tester: MaterialAutocompleteEnumControl_1.materialAutocompleteEnumControlTester,
        renderer: MaterialAutocompleteEnumControl_1.default
    }
], __1.materialRenderers, true);
exports.ExtendedUnwrapped = {
    MaterialAutocompleteEnumControl: MaterialAutocompleteEnumControl_1.MaterialAutocompleteEnumControl,
    MaterialAutocompleteOneOfEnumControl: MaterialAutocompleteOneOfEnumControl_1.MaterialAutocompleteOneOfEnumControl
};
//# sourceMappingURL=index.js.map