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
exports.ExpressionCompiler = exports.ExpressionCheck = exports.ReferencedExpressionNotFound = exports.UnknownExpressionError = void 0;
const value_1 = require("@sinclair/typebox/value");
// --------------------------------------------------------------------------
// PropertyFormatter
// --------------------------------------------------------------------------
var MemberAccessor;
(function (MemberAccessor) {
    function DollarSign(code) {
        return code === 36;
    }
    function Underscore(code) {
        return code === 95;
    }
    function Numeric(code) {
        return code >= 48 && code <= 57;
    }
    function Alpha(code) {
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }
    function IsDot(propertyName) {
        if (propertyName.length === 0)
            return false;
        {
            const code = propertyName.charCodeAt(0);
            if (!(DollarSign(code) || Underscore(code) || Alpha(code))) {
                return false;
            }
        }
        for (let i = 1; i < propertyName.length; i++) {
            const code = propertyName.charCodeAt(i);
            if (!(DollarSign(code) || Underscore(code) || Alpha(code) || Numeric(code))) {
                return false;
            }
        }
        return true;
    }
    MemberAccessor.IsDot = IsDot;
})(MemberAccessor || (MemberAccessor = {}));
// --------------------------------------------------------------------------
// Errors
// --------------------------------------------------------------------------
class UnknownExpressionError extends Error {
    constructor(expression) {
        super('Unknown Expression Detected');
        this.expression = expression;
    }
}
exports.UnknownExpressionError = UnknownExpressionError;
class ReferencedExpressionNotFound extends Error {
    constructor(expression) {
        super('Referenced Expression Not Found');
        this.expression = expression;
    }
}
exports.ReferencedExpressionNotFound = ReferencedExpressionNotFound;
// --------------------------------------------------------------------------
// ExpressionCheck
// --------------------------------------------------------------------------
class ExpressionCheck {
    constructor(check, locals, code) {
        this.check = check;
        this.locals = locals;
        this.code = code;
    }
    Code() {
        return this.code;
    }
    Check(value) {
        return this.check(value);
    }
    Locals() {
        return this.locals;
    }
}
exports.ExpressionCheck = ExpressionCheck;
// --------------------------------------------------------------------------
// ExpressionCheckCompiler
// --------------------------------------------------------------------------
var ExpressionCompiler;
(function (ExpressionCompiler) {
    function And(expression, value) {
        return `(${expression.expr.map((expression) => Visit(expression, `${value}`)).join(' && ')})`;
    }
    function Call(expression, value) {
        return Visit(expression.expr, `${value}.${expression.target}(...${SetExtern(expression.parameters)})`);
    }
    function ElementsDistinct(expression, value) {
        return `((array) => { const set = new Set(); for (const value of array) { const hash = __hash(value); if (set.has(hash)) return false; set.add(hash) } return true })(${value})`;
    }
    function Elements(expression, value) {
        return `${value}.every((value) => ${Visit(expression.expr, 'value')})`;
    }
    function Equals(expression, value) {
        return typeof expression.value === 'string' ? `${value} === '${expression.value}'` : `${value} === ${expression.value}`;
    }
    function False(expression, value) {
        return `false`;
    }
    function Function(expression, value) {
        return `${SetExtern(expression.callback)}(${value})`;
    }
    function GreaterThan(expression, value) {
        return `${value} > ${expression.value}`;
    }
    function GreaterThanEqual(expression, value) {
        return `${value} >= ${expression.value}`;
    }
    function IfThenElse(expression, value) {
        return `(${Visit(expression.if, `${value}`)}) ? (${Visit(expression.then, `${value}`)}) : (${Visit(expression.else, `${value}`)})`;
    }
    function Index(expression, value) {
        return Visit(expression.expr, `${value}[${expression.index}]`);
    }
    function InstanceOf(expression, value) {
        return `${value} instanceof ${expression.value}`;
    }
    function IsArray(expression, value) {
        return `Array.isArray(${value})`;
    }
    function IsFinite(expression, value) {
        return `Number.isFinite(${value})`;
    }
    function IsInteger(expression, value) {
        return `Number.isInteger(${value})`;
    }
    function IsNaN(expression, value) {
        return `Number.isNaN(${value})`;
    }
    function IsSafeInteger(expression, value) {
        return `${value} === undefined`;
    }
    function IsUndefined(expression, value) {
        return `Number.isSafeInteger(${value})`;
    }
    function LessThan(expression, value) {
        return `${value} < ${expression.value}`;
    }
    function LessThanEqual(expression, value) {
        return `${value} <= ${expression.value}`;
    }
    function MultipleOf(expression, value) {
        return `${value} % ${expression.value} === 0`;
    }
    function Not(expression, value) {
        return `!(${Visit(expression.expr, value)})`;
    }
    function Or(expression, value) {
        return `(${expression.expr.map((expression) => Visit(expression, `${value}`)).join(' || ')})`;
    }
    function PropertiesExclude(expression, value) {
        return `Object.getOwnPropertyNames(${value}).every((key) => !${SetExtern(expression.keys)}.includes(key) ? ${Visit(expression.expr, `${value}[key]`)} : true)`;
    }
    function PropetiesExcludePattern(expression, value) {
        const local = SetLocal(`new RegExp(/${expression.pattern}/)`);
        return `Object.getOwnPropertyNames(${value}).every((key) => !${local}.test(key) ? ${Visit(expression.expr, `${value}[key]`)} : true)`;
    }
    function PropertiesInclude(expression, value) {
        return `Object.getOwnPropertyNames(${value}).every((key) => ${SetExtern(expression.keys)}.includes(key) ? ${Visit(expression.expr, `${value}[key]`)} : true)`;
    }
    function PropertiesIncludePattern(expression, value) {
        const local = SetLocal(`new RegExp(/${expression.pattern}/)`);
        return `Object.getOwnPropertyNames(${value}).every((key) => ${local}.test(key) ? ${Visit(expression.expr, `${value}[key]`)} : true)`;
    }
    function PropertiesLength(expression, value) {
        return `Object.getOwnPropertyNames(${value}).length === ${expression.value}`;
    }
    function PropertiesMaximum(expression, value) {
        return `Object.getOwnPropertyNames(${value}).length <= ${expression.value}`;
    }
    function PropertiesMinimum(expression, value) {
        return `Object.getOwnPropertyNames(${value}).length >= ${expression.value}`;
    }
    function Properties(expression, value) {
        return `Object.getOwnPropertyNames(${value}).every((key) => ${Visit(expression.expr, `${value}[key]`)})`;
    }
    function PropertyKeys(expression, value) {
        const keys = expression.keys.map((key) => `'${key}'`).join(', ');
        return `((value) => { const keys = Object.getOwnPropertyNames(value); return [${keys}].every((key) => keys.includes(key)); })(${value})`;
    }
    function Property(expression, value) {
        return MemberAccessor.IsDot(expression.key) ? Visit(expression.expr, `${value}.${expression.key}`) : Visit(expression.expr, `${value}['${expression.key}']`);
    }
    function IsPattern(expression, value) {
        const local = SetLocal(`new RegExp(/${expression.pattern}/)`);
        return `${local}.test(${value})`;
    }
    function Ref(expression, value) {
        if (!reference_map.has(expression.$ref))
            throw new ReferencedExpressionNotFound(expression);
        // Ref: All referenced expressions are hoisted into their own functions. We track a dictionary of
        // function names and compiled expressions here which is later emitted when generating the module.
        // If the function doesn't exist, build and just return the check_T() call.
        if (!function_map.has(expression.$ref)) {
            function_map.set(expression.$ref, ''); // terminate recursion
            const reference = reference_map.get(expression.$ref);
            function_map.set(expression.$ref, Visit(reference, 'value'));
        }
        return `check_${expression.$ref}(${value})`;
    }
    function True(expression, value) {
        return `true`;
    }
    function TypeOf(expression, value) {
        return `typeof ${value} === '${expression.value}'`;
    }
    function Visit(expression, value) {
        // Root and Recursive: All expressions with $ids are hoisted into their own functions. Here we check
        // if we have observed the $id before, and if not, generate the function and return check_T(). This
        // only occurs for discovered references which are typical of recursive expressions, but may also
        // include the Root expression if it has been specified with an $id.
        if (expression.$id !== undefined && !reference_map.has(expression.$id)) {
            reference_map.set(expression.$id, expression);
            const reference = reference_map.get(expression.$id);
            function_map.set(expression.$id, Visit(reference, 'value'));
            return `check_${expression.$id}(${value})`;
        }
        switch (expression.type) {
            case 'And':
                return And(expression, value);
            case 'Call':
                return Call(expression, value);
            case 'ElementsDistinct':
                return ElementsDistinct(expression, value);
            case 'Elements':
                return Elements(expression, value);
            case 'Equals':
                return Equals(expression, value);
            case 'False':
                return False(expression, value);
            case 'Function':
                return Function(expression, value);
            case 'GreaterThanEqual':
                return GreaterThanEqual(expression, value);
            case 'GreaterThan':
                return GreaterThan(expression, value);
            case 'IfThenElse':
                return IfThenElse(expression, value);
            case 'InstanceOf':
                return InstanceOf(expression, value);
            case 'Index':
                return Index(expression, value);
            case 'IsArray':
                return IsArray(expression, value);
            case 'IsFinite':
                return IsFinite(expression, value);
            case 'IsInteger':
                return IsInteger(expression, value);
            case 'IsNaN':
                return IsNaN(expression, value);
            case 'IsPattern':
                return IsPattern(expression, value);
            case 'IsSafeInteger':
                return IsSafeInteger(expression, value);
            case 'IsUndefined':
                return IsUndefined(expression, value);
            case 'LessThan':
                return LessThan(expression, value);
            case 'LessThanEqual':
                return LessThanEqual(expression, value);
            case 'MultipleOf':
                return MultipleOf(expression, value);
            case 'Not':
                return Not(expression, value);
            case 'Or':
                return Or(expression, value);
            case 'PropertiesInclude':
                return PropertiesInclude(expression, value);
            case 'PropertiesIncludePattern':
                return PropertiesIncludePattern(expression, value);
            case 'PropertiesExclude':
                return PropertiesExclude(expression, value);
            case 'PropertiesExcludePattern':
                return PropetiesExcludePattern(expression, value);
            case 'PropertiesLength':
                return PropertiesLength(expression, value);
            case 'PropertiesMaximum':
                return PropertiesMaximum(expression, value);
            case 'PropertiesMinimum':
                return PropertiesMinimum(expression, value);
            case 'Properties':
                return Properties(expression, value);
            case 'PropertyKeys':
                return PropertyKeys(expression, value);
            case 'Property':
                return Property(expression, value);
            case 'Ref':
                return Ref(expression, value);
            case 'True':
                return True(expression, value);
            case 'TypeOf':
                return TypeOf(expression, value);
            default:
                throw new UnknownExpressionError(expression);
        }
    }
    // -------------------------------------------------------
    // Compiler State
    // -------------------------------------------------------
    function SetLocal(code) {
        const key = `local_${local_map.size}`;
        local_map.set(key, code);
        return key;
    }
    function SetExtern(value) {
        const key = `extern_${extern_map.size}`;
        extern_map.set(key, value);
        return key;
    }
    const reference_map = new Map();
    const function_map = new Map();
    const extern_map = new Map();
    const local_map = new Map();
    /** Compiles an expression and associated references to target V8 hidden class optimizations */
    function Compile(expression, references = []) {
        reference_map.clear();
        function_map.clear();
        extern_map.clear();
        local_map.clear();
        for (const reference of references) {
            if (reference.$id === undefined)
                continue;
            reference_map.set(reference.$id, reference);
        }
        const root = `return function check(value) { return ${Visit(expression, 'value')} }`;
        const funcs = [...function_map.entries()].map(([key, body]) => `function check_${key}(value) { return ${body} }`);
        const locals = [...local_map.entries()].map(([key, code]) => `const ${key} = ${code}`);
        const check_module = [...locals, ...funcs, root].join('\n');
        // generate bootstrap
        const bootstrap = new globalThis.Function('__hash', ...extern_map.keys(), check_module);
        const check = bootstrap((value) => (0, value_1.Hash)(value), ...extern_map.values());
        return new ExpressionCheck(check, new Map(extern_map), check_module);
    }
    ExpressionCompiler.Compile = Compile;
})(ExpressionCompiler || (exports.ExpressionCompiler = ExpressionCompiler = {}));
