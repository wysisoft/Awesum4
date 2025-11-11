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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelToJsonSchema = void 0;
var index_1 = require("../common/index");
var Types = require("@sinclair/typebox");
// --------------------------------------------------------------------------
// ModelToJsonSchema
// --------------------------------------------------------------------------
var ModelToJsonSchema;
(function (ModelToJsonSchema) {
    function Any(schema) {
        return schema;
    }
    function Array(schema) {
        return schema;
    }
    function BigInt(schema) {
        return schema;
    }
    function Boolean(schema) {
        return schema;
    }
    function Date(schema) {
        return schema;
    }
    function Constructor(schema) {
        return schema;
    }
    function Function(schema) {
        var parameters = schema.parameters.map(function (schema) { return Visit(schema); });
        var returns = Visit(schema.returns);
        return __assign(__assign({}, schema), { parameters: parameters, returns: returns });
    }
    function Integer(schema) {
        return schema;
    }
    function Intersect(schema) {
        var allOf = schema.allOf.map(function (schema) { return Visit(schema); });
        return __assign(__assign({}, schema), { allOf: allOf });
    }
    function Literal(schema) {
        return schema;
    }
    function Never(schema) {
        return schema;
    }
    function Null(schema) {
        return schema;
    }
    function String(schema) {
        return schema;
    }
    function Number(schema) {
        return schema;
    }
    function Object(schema) {
        Object.assign = global.Object.assign;
        var properties = globalThis.Object.keys(schema.properties).reduce(function (acc, key) {
            var _a;
            return __assign(__assign({}, acc), (_a = {}, _a[key] = Visit(schema.properties[key]), _a));
        }, {});
        return __assign(__assign({}, schema), { properties: properties });
    }
    function Promise(schema) {
        var item = Visit(schema.item);
        return __assign(__assign({}, schema), { item: item });
    }
    function Record(schema) {
        var patternProperties = globalThis.Object.keys(schema.patternProperties).reduce(function (acc, key) {
            var _a;
            return __assign(__assign({}, acc), (_a = {}, _a[key] = Visit(schema.patternProperties[key]), _a));
        }, {});
        return __assign(__assign({}, schema), { patternProperties: patternProperties });
    }
    function Ref(schema) {
        return schema;
    }
    function This(schema) {
        return schema;
    }
    function Tuple(schema) {
        if (schema.items === undefined)
            return schema;
        var items = schema.items.map(function (schema) { return Visit(schema); });
        return __assign(__assign({}, schema), { items: items });
    }
    function TemplateLiteral(schema) {
        return schema;
    }
    function UInt8Array(schema) {
        return schema;
    }
    function Undefined(schema) {
        return schema;
    }
    function Union(schema) {
        var anyOf = schema.anyOf.map(function (schema) { return Visit(schema); });
        return __assign(__assign({}, schema), { anyOf: anyOf });
    }
    function Unknown(schema) {
        return schema;
    }
    function Void(schema) {
        return schema;
    }
    function UnsupportedType(schema) {
        return schema;
    }
    function Visit(schema) {
        if (Types.TypeGuard.IsAny(schema))
            return Any(schema);
        if (Types.TypeGuard.IsArray(schema))
            return Array(schema);
        if (Types.TypeGuard.IsBigInt(schema))
            return BigInt(schema);
        if (Types.TypeGuard.IsBoolean(schema))
            return Boolean(schema);
        if (Types.TypeGuard.IsDate(schema))
            return Date(schema);
        if (Types.TypeGuard.IsConstructor(schema))
            return Constructor(schema);
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
        if (Types.TypeGuard.IsString(schema))
            return String(schema);
        if (Types.TypeGuard.IsTemplateLiteral(schema))
            return TemplateLiteral(schema);
        if (Types.TypeGuard.IsThis(schema))
            return This(schema);
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
        return UnsupportedType(schema);
    }
    function Generate(model) {
        var buffer = [];
        for (var _i = 0, _a = model.types.filter(function (type) { return Types.TypeGuard.IsSchema(type); }); _i < _a.length; _i++) {
            var type = _a[_i];
            var schema = Visit(type);
            var encode = JSON.stringify(schema, null, 2);
            buffer.push("export const ".concat(type.$id, " = ").concat(encode));
        }
        return index_1.Formatter.Format(buffer.join('\n'));
    }
    ModelToJsonSchema.Generate = Generate;
})(ModelToJsonSchema || (exports.ModelToJsonSchema = ModelToJsonSchema = {}));
