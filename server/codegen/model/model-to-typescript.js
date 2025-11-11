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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelToTypeScript = void 0;
var index_1 = require("../common/index");
var compiler_1 = require("@sinclair/typebox/compiler");
var Types = require("@sinclair/typebox");
var ModelToTypeScript;
(function (ModelToTypeScript) {
    function Any(schema) {
        return 'any';
    }
    function Array(schema) {
        var items = Visit(schema.items);
        return "Array<".concat(items, ">");
    }
    function Boolean(schema) {
        return 'boolean';
    }
    function BigInt(schema) {
        return 'bigint';
    }
    function Constructor(schema) {
        var params = schema.parameters.map(function (param, i) { return "param".concat(i, ": ").concat(Visit(param)); }).join(', ');
        var returns = Visit(schema.returns);
        return "(new (".concat(params, ") => ").concat(returns, ")");
    }
    function Date(schema) {
        return 'Date';
    }
    function Function(schema) {
        var params = schema.parameters.map(function (param, i) { return "param".concat(i, ": ").concat(Visit(param)); }).join(', ');
        var returns = Visit(schema.returns);
        return "((".concat(params, ") => ").concat(returns, ")");
    }
    function Integer(schema) {
        return 'number';
    }
    function Intersect(schema) {
        return "(".concat(schema.allOf.map(function (schema) { return Visit(schema); }).join(' & '), ")");
    }
    function Literal(schema) {
        if (typeof schema.const === 'string') {
            return "'".concat(schema.const, "'");
        }
        else {
            return "".concat(schema.const);
        }
    }
    function Never(schema) {
        return 'never';
    }
    function Null(schema) {
        return 'null';
    }
    function String(schema) {
        return 'string';
    }
    function Number(schema) {
        return 'number';
    }
    // prettier-ignore
    function Object(schema) {
        var properties = globalThis.Object.entries(schema.properties).map(function (_a) {
            var key = _a[0], property = _a[1];
            var optional = Types.TypeGuard.IsOptional(property);
            var readonly = Types.TypeGuard.IsReadonly(property);
            return ((optional && readonly) ? "readonly ".concat(key, "?: ").concat(Visit(property)) :
                readonly ? "readonly ".concat(key, ": ").concat(Visit(property)) :
                    optional ? "".concat(key, "?: ").concat(Visit(property)) :
                        "".concat(index_1.PropertyEncoder.Encode(key), ": ").concat(Visit(property)));
        }).join(',\n');
        return "{\n".concat(properties, "\n}");
    }
    function Promise(schema) {
        var item = Visit(schema.item);
        return "Promise<".concat(item, ">");
    }
    function Record(schema) {
        for (var _i = 0, _a = globalThis.Object.entries(schema.patternProperties); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var type = Visit(value);
            if (key === '^(0|[1-9][0-9]*)$') {
                return "Record<number, ".concat(type, ">");
            }
            else {
                return "Record<string, ".concat(type, ">");
            }
        }
        throw Error('TypeBoxToTypeScript: Unreachable');
    }
    function Ref(schema) {
        return schema.$ref;
    }
    function This(schema) {
        return schema.$ref;
    }
    function Tuple(schema) {
        if (schema.items === undefined)
            return "[]";
        var items = schema.items.map(function (schema) { return Visit(schema); }).join(', ');
        return "[".concat(items, "]");
    }
    function UInt8Array(schema) {
        return "Uint8Array";
    }
    function Undefined(schema) {
        return "undefined";
    }
    function Union(schema) {
        return "(".concat(schema.anyOf.map(function (schema) { return Visit(schema); }).join(' | '), ")");
    }
    function Unknown(schema) {
        return "unknown";
    }
    function Void(schema) {
        return "void";
    }
    function Visit(schema) {
        if (reference_map.has(schema.$id))
            return schema.$id;
        if (schema.$id !== undefined)
            reference_map.set(schema.$id, schema);
        if (Types.TypeGuard.IsAny(schema))
            return Any(schema);
        if (Types.TypeGuard.IsArray(schema))
            return Array(schema);
        if (Types.TypeGuard.IsBoolean(schema))
            return Boolean(schema);
        if (Types.TypeGuard.IsBigInt(schema))
            return BigInt(schema);
        if (Types.TypeGuard.IsConstructor(schema))
            return Constructor(schema);
        if (Types.TypeGuard.IsDate(schema))
            return Date(schema);
        if (Types.TypeGuard.IsFunction(schema))
            return Function(schema);
        if (Types.TypeGuard.IsInteger(schema))
            return Integer(schema);
        if (Types.TypeGuard.IsIntersect(schema))
            return Intersect(schema);
        if (Types.TypeGuard.IsLiteral(schema))
            return Literal(schema);
        if (Types.TypeGuard.IsNever(schema))
            return Never(schema);
        if (Types.TypeGuard.IsNull(schema))
            return Null(schema);
        if (Types.TypeGuard.IsNumber(schema))
            return Number(schema);
        if (Types.TypeGuard.IsObject(schema))
            return Object(schema);
        if (Types.TypeGuard.IsPromise(schema))
            return Promise(schema);
        if (Types.TypeGuard.IsRecord(schema))
            return Record(schema);
        if (Types.TypeGuard.IsRef(schema))
            return Ref(schema);
        if (Types.TypeGuard.IsThis(schema))
            return This(schema);
        if (Types.TypeGuard.IsString(schema))
            return String(schema);
        if (Types.TypeGuard.IsTuple(schema))
            return Tuple(schema);
        if (Types.TypeGuard.IsUint8Array(schema))
            return UInt8Array(schema);
        if (Types.TypeGuard.IsUndefined(schema))
            return Undefined(schema);
        if (Types.TypeGuard.IsUnion(schema))
            return Union(schema);
        if (Types.TypeGuard.IsUnknown(schema))
            return Unknown(schema);
        if (Types.TypeGuard.IsVoid(schema))
            return Void(schema);
        return 'unknown';
    }
    function GenerateType(model, $id) {
        reference_map.clear();
        var type = model.types.find(function (type) { return type.$id === $id; });
        if (type === undefined)
            return "export type ".concat($id, " = unknown");
        return "export type ".concat(type.$id, " = ").concat(Visit(type));
    }
    ModelToTypeScript.GenerateType = GenerateType;
    var reference_map = new Map();
    function Generate(model) {
        reference_map.clear();
        var definitions = [];
        for (var _i = 0, _a = model.types; _i < _a.length; _i++) {
            var type = _a[_i];
            var definition = "export type ".concat(type.$id, " = ").concat(Visit(type));
            var assertion = "export const ".concat(type.$id, " = (() => { ").concat(compiler_1.TypeCompiler.Code(type, model.types, { language: 'typescript' }), " })();");
            var rewritten = assertion.replaceAll("return function check(value: any): boolean", "return function check(value: any): value is ".concat(type.$id));
            definitions.push("\n      ".concat(definition, "\n      ").concat(rewritten, "\n      "));
        }
        var output = __spreadArray([], definitions, true);
        return index_1.Formatter.Format(output.join('\n\n'));
    }
    ModelToTypeScript.Generate = Generate;
})(ModelToTypeScript || (exports.ModelToTypeScript = ModelToTypeScript = {}));
