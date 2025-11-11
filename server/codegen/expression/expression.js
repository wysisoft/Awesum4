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
exports.Expression = void 0;
// ---------------------------------------------------------------
// Expression: Builder
// ---------------------------------------------------------------
/** Type Expressions builder used to assert JavaScript values */
var Expression;
(function (Expression) {
    /** Creates a `And` expression where each sub expression is evaluated in sequence */
    function And(expressions, options = {}) {
        const expr = globalThis.Array.isArray(expressions) ? expressions : [...expressions()];
        if (expr.length === 0)
            return Expression.False();
        if (expr.length === 1)
            return expr[0];
        return Object.assign(Object.assign({}, options), { type: 'And', expr });
    }
    Expression.And = And;
    /** Creates a `Call` expression that will invoke the object target and check the return for the given sub expression */
    function Call(target, parameters, expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Call', target, parameters, expr: expression });
    }
    Expression.Call = Call;
    /** Creates a `Equals` expression that will compare for value equality */
    function Equals(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Equals', value });
    }
    Expression.Equals = Equals;
    /** Creates a `Function` expression which invokes the given callback to check a value */
    function Function(callback, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Function', callback });
    }
    Expression.Function = Function;
    /** Creates a `ElementsDistinct` expression which will check an arrays elements are structurally distinct  */
    function ElementsDistinct(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'ElementsDistinct' });
    }
    Expression.ElementsDistinct = ElementsDistinct;
    /** Creates a `Elements` expression that will check an arrays elements for the given sub expression */
    function Elements(expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Elements', expr: expression });
    }
    Expression.Elements = Elements;
    /** Creates a `False` expression that evaluates `false` */
    function False(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'False' });
    }
    Expression.False = False;
    /** Creates a `GreaterThanEqual` comparison expression */
    function GreaterThanEqual(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'GreaterThanEqual', value });
    }
    Expression.GreaterThanEqual = GreaterThanEqual;
    /** Creates a `GreaterThan` comparison expression */
    function GreaterThan(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'GreaterThan', value });
    }
    Expression.GreaterThan = GreaterThan;
    /** Creates a `IfThenElse` expression that will evaluate the `$if` expression followed by either the `$then` of `$else` expressions */
    function IfThenElse($if, $then, $else, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'IfThenElse', if: $if, then: $then, else: $else });
    }
    Expression.IfThenElse = IfThenElse;
    /** Creates a `Index` expression that will evaluate an array element by the given sub expression */
    function Index(index, expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Index', index, expr: expression });
    }
    Expression.Index = Index;
    /** Creates a `InstanceOf` expression that will apply the `instanceof` operator */
    function InstanceOf(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'InstanceOf', value });
    }
    Expression.InstanceOf = InstanceOf;
    /** Creates a `IsArray` expression that will check a value as an array */
    function IsArray(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'IsArray' });
    }
    Expression.IsArray = IsArray;
    /** Creates a `IsNaN` expression that will check for NaN */
    function IsNaN(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'IsNaN' });
    }
    Expression.IsNaN = IsNaN;
    /** Creates a `IsInteger` expression that will check for numeric integer values */
    function IsInteger(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'IsInteger' });
    }
    Expression.IsInteger = IsInteger;
    /** Creates a `IsObject` expression that will check a value as an object */
    function IsObject(options = {}) {
        return Expression.TypeOf('object', options);
    }
    Expression.IsObject = IsObject;
    /** Creates a `IsBigInt` expression that will check a value as a bigint */
    function IsBigInt(options = {}) {
        return Expression.TypeOf('bigint', options);
    }
    Expression.IsBigInt = IsBigInt;
    /** Creates a `IsBoolean` expression that will check a value as a boolean */
    function IsBoolean(options = {}) {
        return Expression.TypeOf('boolean', options);
    }
    Expression.IsBoolean = IsBoolean;
    /** Creates a `IsFinite` expression that will check a numeric value if finite */
    function IsFinite(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'IsFinite' });
    }
    Expression.IsFinite = IsFinite;
    /** Creates a `IsFunction` expression that will check a value as a function */
    function IsFunction(options = {}) {
        return Expression.TypeOf('function', options);
    }
    Expression.IsFunction = IsFunction;
    /** Creates a `IsNumber` expression that will check a value as a number */
    function IsNumber(options = {}) {
        return Expression.TypeOf('number', options);
    }
    Expression.IsNumber = IsNumber;
    /** Creates a `IsSafeInteger` expression that will check a numeric value if finite */
    function IsSafeInteger(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'IsSafeInteger' });
    }
    Expression.IsSafeInteger = IsSafeInteger;
    /** Creates a `IsString` expression that will check a value as a string */
    function IsString(options = {}) {
        return Expression.TypeOf('string', options);
    }
    Expression.IsString = IsString;
    /** Creates a `IsSymbol` expression that will check a value as a symbol */
    function IsSymbol(options = {}) {
        return Expression.TypeOf('symbol', options);
    }
    Expression.IsSymbol = IsSymbol;
    /** Creates a `IsUndefined` expression that will check a value is undefined */
    function IsUndefined(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'IsUndefined' });
    }
    Expression.IsUndefined = IsUndefined;
    /** Creates a `IsNull` expression that will check a value is null */
    function IsNull(options = {}) {
        return Expression.Equals(null, options);
    }
    Expression.IsNull = IsNull;
    /** Creates a `IsPattern` expression that will check a string with a regular expression */
    function IsPattern(pattern, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'IsPattern', pattern });
    }
    Expression.IsPattern = IsPattern;
    /** Creates a KeyIn expression that will check if a key exists on this value */
    function KeyIn(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'KeyIn', value });
    }
    Expression.KeyIn = KeyIn;
    /** Creates a `LessThanEqual` comparison expression */
    function LessThanEqual(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'LessThanEqual', value });
    }
    Expression.LessThanEqual = LessThanEqual;
    /** Creates a `LessThan` comparison expression */
    function LessThan(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'LessThan', value });
    }
    Expression.LessThan = LessThan;
    /** Creates a `MultipleOf` modulus expression that is true if the result is zero */
    function MultipleOf(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'MultipleOf', value });
    }
    Expression.MultipleOf = MultipleOf;
    /** Creates a `Not` expression where the result of the sub expression is inverted */
    function Not(expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Not', expr: expression });
    }
    Expression.Not = Not;
    /** Creates a `Or` expression where each sub expression is evaluated in sequence */
    function Or(expressions, options = {}) {
        const expr = globalThis.Array.isArray(expressions) ? expressions : [...expressions()];
        if (expr.length === 0)
            return Expression.False();
        if (expr.length === 1)
            return expr[0];
        return Object.assign(Object.assign({}, options), { type: 'Or', expr });
    }
    Expression.Or = Or;
    /** Creates a `PropertiesExcludePattern` expression that will enumerate each key matching the given regular expression */
    function PropertiesExcludePattern(pattern, expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'PropertiesExcludePattern', expr: expression, pattern });
    }
    Expression.PropertiesExcludePattern = PropertiesExcludePattern;
    /** Creates a `PropertiesExclude` expression that will enumerate the unselected keys and check each for the sub expression */
    function PropertiesExclude(keys, expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'PropertiesExclude', expr: expression, keys });
    }
    Expression.PropertiesExclude = PropertiesExclude;
    /** Creates a `PropertiesIncludePattern` expression that will enumerate each key matching the given regular expression */
    function PropertiesIncludePattern(pattern, expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'PropertiesIncludePattern', expr: expression, pattern });
    }
    Expression.PropertiesIncludePattern = PropertiesIncludePattern;
    /** Creates a `PropertiesInclude` expression that will enumerate the selected keys and check each for the sub expression */
    function PropertiesInclude(keys, expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'PropertiesInclude', expr: expression, keys });
    }
    Expression.PropertiesInclude = PropertiesInclude;
    /** Creates a `PropertiesLength` expression that checks an object a property length that equals the given value */
    function PropertiesLength(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'PropertiesLength', value });
    }
    Expression.PropertiesLength = PropertiesLength;
    /** Creates a `PropertiesMaximum` expression that will check an object has a property length less or equal the given value */
    function PropertiesMaximum(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'PropertiesMaximum', value });
    }
    Expression.PropertiesMaximum = PropertiesMaximum;
    /** Creates a `PropertiesMinimum` expression that will check an object has a property length greater or equal the given value */
    function PropertiesMinimum(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'PropertiesMinimum', value });
    }
    Expression.PropertiesMinimum = PropertiesMinimum;
    /** Creates a `Properties` expression that will enumerate all object properties and check for the given sub expression */
    function Properties(expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Properties', expr: expression });
    }
    Expression.Properties = Properties;
    /** Creates a `PropertyKeys` expression that will check an object has the specified keys */
    function PropertyKeys(keys, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'PropertyKeys', keys });
    }
    Expression.PropertyKeys = PropertyKeys;
    /** Creates a `Property` expression that will evaluate the property value by the given sub expression */
    function Property(key, expression, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Property', key, expr: expression });
    }
    Expression.Property = Property;
    /** Creates a `Ref` that will reference another part of the expression tree via $id */
    function Ref(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'Ref', $ref: value });
    }
    Expression.Ref = Ref;
    /** Creates a `True` expression that evaluates `true` */
    function True(options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'True' });
    }
    Expression.True = True;
    /** Creates a `TypeOf` expression that will apply `typeof` operator for the evaluated value */
    function TypeOf(value, options = {}) {
        return Object.assign(Object.assign({}, options), { type: 'TypeOf', value });
    }
    Expression.TypeOf = TypeOf;
})(Expression || (exports.Expression = Expression = {}));
