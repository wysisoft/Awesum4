"use strict";
/*--------------------------------------------------------------------------

@sinclair/typebox-expression

The MIT License (MIT)

Copyright (c) 2023 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionErrors = exports.ExpressionErrorsUnknownExpressionError = void 0;
const value_1 = require("@sinclair/typebox/value");
// ---------------------------------------------------------------------
// ExpressionErrorsEvaluator
// ---------------------------------------------------------------------
class ExpressionErrorsUnknownExpressionError extends Error {
    constructor(expression) {
        super('Unknown Expression Detected');
        this.expression = expression;
    }
}
exports.ExpressionErrorsUnknownExpressionError = ExpressionErrorsUnknownExpressionError;
var ExpressionErrors;
(function (ExpressionErrors) {
    function And(expression, path, value) {
        return expression.expr.every((expression) => Visit(expression, path, value));
    }
    function Call(expression, path, value) {
        const func = value[expression.target].bind(value);
        return typeof func === 'function' && Visit(expression.expr, path, func(...expression.parameters));
    }
    function ElementsDistinct(expression, path, value) {
        const set = new Set();
        for (const element of value) {
            const hash = (0, value_1.Hash)(element);
            if (set.has(hash))
                return false;
            set.add(hash);
        }
        return true;
    }
    function Elements(expression, path, value) {
        return value.every((element) => Visit(expression.expr, path, element));
    }
    function Equals(expression, path, value) {
        return value === expression.value;
    }
    function False(expression, path, value) {
        return false;
    }
    function Function(expression, path, value) {
        return expression.callback(value);
    }
    function GreaterThanEqual(expression, path, value) {
        return value >= expression.value;
    }
    function GreaterThan(expression, path, value) {
        return value > expression.value;
    }
    function IfThenElse(expression, path, value) {
        return Visit(expression.if, path, value) ? Visit(expression.then, path, value) : Visit(expression.else, path, value);
    }
    function InstanceOf(expression, path, value) {
        return value instanceof expression.value;
    }
    function IsArray(expression, path, value) {
        return globalThis.Array.isArray(value);
    }
    function IsInteger(expression, path, value) {
        return globalThis.Number.isInteger(value);
    }
    function IsNaN(expression, path, value) {
        return globalThis.Number.isNaN(value);
    }
    function IsFinite(expression, path, value) {
        return globalThis.Number.isFinite(value);
    }
    function IsPattern(expression, path, value) {
        const regexp = new globalThis.RegExp(expression.pattern);
        return regexp.test(value);
    }
    function IsSafeInteger(expression, path, value) {
        return globalThis.Number.isSafeInteger(value);
    }
    function IsUndefined(expression, path, value) {
        return value === undefined;
    }
    function LessThan(expression, path, value) {
        return value < expression.value;
    }
    function LessThanEqual(expression, path, value) {
        return value <= expression.value;
    }
    function MultipleOf(expression, path, value) {
        return value % expression.value === 0;
    }
    function Property(expression, path, value) {
        return Visit(expression.expr, path, value[expression.key]);
    }
    function Index(expression, path, value) {
        return Visit(expression.expr, path, value[expression.index]);
    }
    function Or(expression, path, value) {
        return expression.expr.some((expression) => Visit(expression, path, value));
    }
    function Not(expression, path, value) {
        return !Visit(expression.expr, path, value);
    }
    function PropertiesExcludePattern(expression, path, value) {
        const regexp = new globalThis.RegExp(expression.pattern);
        return Object.getOwnPropertyNames(value).every((key) => (!regexp.test(key) ? Visit(expression.expr, path, value[key]) : true));
    }
    function PropertiesExclude(expression, path, value) {
        return Object.getOwnPropertyNames(value).every((key) => (!expression.keys.includes(key) ? Visit(expression.expr, path, value[key]) : true));
    }
    function PropertiesIncludePattern(expression, path, value) {
        const regexp = new globalThis.RegExp(expression.pattern);
        return Object.getOwnPropertyNames(value).every((key) => (regexp.test(key) ? Visit(expression.expr, path, value[key]) : true));
    }
    function PropertiesInclude(expression, path, value) {
        return Object.getOwnPropertyNames(value).every((key) => (expression.keys.includes(key) ? Visit(expression.expr, path, value[key]) : true));
    }
    function PropertiesLength(expression, path, value) {
        return globalThis.Object.getOwnPropertyNames(value).length === expression.value;
    }
    function PropertiesMaximum(expression, path, value) {
        return globalThis.Object.getOwnPropertyNames(value).length <= expression.value;
    }
    function PropertiesMinimum(expression, path, value) {
        return globalThis.Object.getOwnPropertyNames(value).length >= expression.value;
    }
    function Properties(expression, path, value) {
        return globalThis.Object.getOwnPropertyNames(value).every((key) => Visit(expression.expr, path, value[key]));
    }
    function PropertyKeys(expression, path, value) {
        const keys = globalThis.Object.getOwnPropertyNames(value);
        return expression.keys.every((key) => keys.includes(key));
    }
    function Ref(expression, path, value) {
        if (!reference_map.has(expression.$ref))
            return false;
        const referenced_expression = reference_map.get(expression.$ref);
        return Visit(referenced_expression, path, value);
    }
    function True(expression, path, value) {
        return true;
    }
    function TypeOf(expression, path, value) {
        return typeof value === expression.value;
    }
    function Visit(expression, path, value) {
        if (expression.$id !== undefined)
            reference_map.set(expression.$id, expression);
        switch (expression.type) {
            case 'And':
                return And(expression, path, value);
            case 'Call':
                return Call(expression, path, value);
            case 'ElementsDistinct':
                return ElementsDistinct(expression, path, value);
            case 'Elements':
                return Elements(expression, path, value);
            case 'Equals':
                return Equals(expression, path, value);
            case 'False':
                return False(expression, path, value);
            case 'Function':
                return Function(expression, path, value);
            case 'GreaterThanEqual':
                return GreaterThanEqual(expression, path, value);
            case 'GreaterThan':
                return GreaterThan(expression, path, value);
            case 'LessThanEqual':
                return LessThanEqual(expression, path, value);
            case 'LessThan':
                return LessThan(expression, path, value);
            case 'MultipleOf':
                return MultipleOf(expression, path, value);
            case 'IfThenElse':
                return IfThenElse(expression, path, value);
            case 'InstanceOf':
                return InstanceOf(expression, path, value);
            case 'Index':
                return Index(expression, path, value);
            case 'IsArray':
                return IsArray(expression, path, value);
            case 'IsFinite':
                return IsFinite(expression, path, value);
            case 'IsInteger':
                return IsInteger(expression, path, value);
            case 'IsNaN':
                return IsNaN(expression, path, value);
            case 'IsPattern':
                return IsPattern(expression, path, value);
            case 'IsSafeInteger':
                return IsSafeInteger(expression, path, value);
            case 'IsUndefined':
                return IsUndefined(expression, path, value);
            case 'Not':
                return Not(expression, path, value);
            case 'Or':
                return Or(expression, path, value);
            case 'PropertiesInclude':
                return PropertiesInclude(expression, path, value);
            case 'PropertiesIncludePattern':
                return PropertiesIncludePattern(expression, path, value);
            case 'PropertiesExclude':
                return PropertiesExclude(expression, path, value);
            case 'PropertiesExcludePattern':
                return PropertiesExcludePattern(expression, path, value);
            case 'PropertiesLength':
                return PropertiesLength(expression, path, value);
            case 'PropertiesMaximum':
                return PropertiesMaximum(expression, path, value);
            case 'PropertiesMinimum':
                return PropertiesMinimum(expression, path, value);
            case 'Properties':
                return Properties(expression, path, value);
            case 'PropertyKeys':
                return PropertyKeys(expression, path, value);
            case 'Property':
                return Property(expression, path, value);
            case 'Ref':
                return Ref(expression, path, value);
            case 'True':
                return True(expression, path, value);
            case 'TypeOf':
                return TypeOf(expression, path, value);
            default:
                throw 1;
        }
    }
    const reference_map = new Map();
    const error_map = new Map();
    /** Evaluates an expression against a value and returns an `ExpressionResult<T>` which contains a `path` and `ok` property  */
    function Evaluate(expression, references, value) {
        reference_map.clear();
        error_map.clear();
        for (const reference of references) {
            if (reference.$id === undefined)
                continue;
            reference_map.set(reference.$id, reference);
        }
        return Visit(expression, '', value);
    }
    ExpressionErrors.Evaluate = Evaluate;
})(ExpressionErrors || (exports.ExpressionErrors = ExpressionErrors = {}));
