"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.createOnChangeHandler = void 0;
var tslib_1 = require("tslib");
var dayjs_1 = (0, tslib_1.__importDefault)(require("dayjs"));
var customParseFormat_1 = (0, tslib_1.__importDefault)(require("dayjs/plugin/customParseFormat"));
// required for the custom save formats in the date, time and date-time pickers
dayjs_1.default.extend(customParseFormat_1.default);
var createOnChangeHandler = function (path, handleChange, saveFormat) { return function (time) {
    if (!time) {
        handleChange(path, undefined);
        return;
    }
    var result = (0, dayjs_1.default)(time).format(saveFormat);
    handleChange(path, result === 'Invalid Date' ? undefined : result);
}; };
exports.createOnChangeHandler = createOnChangeHandler;
var getData = function (data, saveFormat) {
    if (!data) {
        return null;
    }
    var dayjsData = (0, dayjs_1.default)(data, saveFormat);
    if (dayjsData.toString() === 'Invalid Date') {
        return null;
    }
    return dayjsData;
};
exports.getData = getData;
//# sourceMappingURL=datejs.js.map