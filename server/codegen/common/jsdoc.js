"use strict";
/*--------------------------------------------------------------------------

@sinclair/typebox-codegen

The MIT License (MIT)

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

---------------------------------------------------------------------------*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsDoc = void 0;
/** JSDoc Property Parser */
var JsDoc;
(function (JsDoc) {
    // ----------------------------------------------------------------
    // Quotes
    // ----------------------------------------------------------------
    function ConsumeQuote(content) {
        if (!IsQuote(content))
            return ['', content];
        var quote = content[0];
        for (var i = 1; i < content.length; i++) {
            if (content[i] === quote)
                return [content.slice(1, i), content.slice(i)];
            if (content[i] === '\n')
                return [content.slice(1, i), content.slice(i)];
        }
        return [content.slice(1), ''];
    }
    function IsQuote(content) {
        return content[0] === '"' || content[0] === "'";
    }
    // ----------------------------------------------------------------
    // Decode
    // ----------------------------------------------------------------
    function DecodeWithNonQuotedProperties(content) {
        // todo: implement better inline object parser
        return content in globalThis ? content : new Function("return (".concat(content, ");"))();
    }
    function Decode(content) {
        try {
            return DecodeWithNonQuotedProperties(content);
        }
        catch (_a) {
            return content;
        }
    }
    function ParseValue(key, content) {
        var _a, consumed, rest, i, value, rest;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!IsQuote(content)) return [3 /*break*/, 3];
                    _a = ConsumeQuote(content), consumed = _a[0], rest = _a[1];
                    return [4 /*yield*/, [key, Decode(consumed)]];
                case 1:
                    _b.sent();
                    return [5 /*yield**/, __values(ParseContent(rest))];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    i = 0;
                    _b.label = 4;
                case 4:
                    if (!(i < content.length)) return [3 /*break*/, 8];
                    if (!(content[i] === '\n' || content[i] === '-')) return [3 /*break*/, 7];
                    value = content.slice(0, i).trim();
                    rest = content.slice(i);
                    return [4 /*yield*/, [key, Decode(value)]];
                case 5:
                    _b.sent();
                    return [5 /*yield**/, __values(ParseContent(rest))];
                case 6: return [2 /*return*/, _b.sent()];
                case 7:
                    i++;
                    return [3 /*break*/, 4];
                case 8: return [2 /*return*/];
            }
        });
    }
    function ParseKey(content) {
        var i, key, rest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 1;
                    _a.label = 1;
                case 1:
                    if (!(i < content.length)) return [3 /*break*/, 4];
                    if (!(content[i] === ' ')) return [3 /*break*/, 3];
                    key = content.slice(1, i);
                    rest = content.slice(i).trimStart();
                    return [5 /*yield**/, __values(ParseValue(key, rest))];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    function ParseContent(content) {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < content.length)) return [3 /*break*/, 4];
                    if (!(content[i] === '@')) return [3 /*break*/, 3];
                    return [5 /*yield**/, __values(ParseKey(content.slice(i)))];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    function Parse(content) {
        var properties = __spreadArray([], ParseContent(content), true);
        return properties.reduce(function (acc, _a) {
            var _b;
            var key = _a[0], value = _a[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
        }, {});
    }
    JsDoc.Parse = Parse;
})(JsDoc || (exports.JsDoc = JsDoc = {}));
