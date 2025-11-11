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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.TypeScriptToTypeBox = exports.TypeScriptToTypeBoxError = void 0;
var jsdoc_1 = require("../common/jsdoc");
var Ts = require("typescript");
var TypeScriptToTypeBoxError = /** @class */ (function (_super) {
    __extends(TypeScriptToTypeBoxError, _super);
    function TypeScriptToTypeBoxError(diagnostics) {
        var _this = _super.call(this, '') || this;
        _this.diagnostics = diagnostics;
        return _this;
    }
    return TypeScriptToTypeBoxError;
}(Error));
exports.TypeScriptToTypeBoxError = TypeScriptToTypeBoxError;
/** Generates TypeBox types from TypeScript code */
var TypeScriptToTypeBox;
(function (TypeScriptToTypeBox) {
    // ------------------------------------------------------------------------------------------------------------
    // Transpile Options
    // ------------------------------------------------------------------------------------------------------------
    var transpilerOptions = {
        compilerOptions: {
            strict: true,
            target: Ts.ScriptTarget.ES2022,
        },
    };
    // ------------------------------------------------------------------------------------------------------------
    // Transpile States
    // ------------------------------------------------------------------------------------------------------------
    // (auto) tracked on calls to find type name
    var typenames = new Set();
    // (auto) tracked for recursive types and used to associate This type references
    var recursiveDeclaration = null;
    // (auto) tracked for scoped block level definitions and used to prevent `export` emit when not in global scope.
    var blockLevel = 0;
    // (auto) tracked for injecting typebox import statements
    var useImports = false;
    // (auto) tracked for injecting JSON schema optios
    var useOptions = false;
    // (auto) tracked for injecting TSchema import statements
    var useGenerics = false;
    // (auto) tracked for cases where composition requires deep clone
    var useCloneType = false;
    // (option) export override to ensure all schematics
    var useExportsEverything = false;
    // (option) inject identifiers
    var useIdentifiers = false;
    // (option) specifies if typebox imports should be included
    var useTypeBoxImport = true;
    // ------------------------------------------------------------------------------------------------------------
    // AST Query
    // ------------------------------------------------------------------------------------------------------------
    function FindRecursiveParent(decl, node) {
        return (Ts.isTypeReferenceNode(node) && decl.name.getText() === node.typeName.getText()) || node.getChildren().some(function (node) { return FindRecursiveParent(decl, node); });
    }
    function FindRecursiveThis(node) {
        return node.getChildren().some(function (node) { return Ts.isThisTypeNode(node) || FindRecursiveThis(node); });
    }
    function FindTypeName(node, name) {
        var found = typenames.has(name) ||
            node.getChildren().some(function (node) {
                return ((Ts.isInterfaceDeclaration(node) || Ts.isTypeAliasDeclaration(node)) && node.name.getText() === name) || FindTypeName(node, name);
            });
        if (found)
            typenames.add(name);
        return found;
    }
    function IsRecursiveType(decl) {
        var check1 = Ts.isTypeAliasDeclaration(decl) ? [decl.type].some(function (node) { return FindRecursiveParent(decl, node); }) : decl.members.some(function (node) { return FindRecursiveParent(decl, node); });
        var check2 = Ts.isInterfaceDeclaration(decl) && FindRecursiveThis(decl);
        return check1 || check2;
    }
    function IsReadonlyProperty(node) {
        return node.modifiers !== undefined && node.modifiers.find(function (modifier) { return modifier.getText() === 'readonly'; }) !== undefined;
    }
    function IsOptionalProperty(node) {
        return node.questionToken !== undefined;
    }
    function IsOptionalParameter(node) {
        return node.questionToken !== undefined;
    }
    function IsExport(node) {
        return blockLevel === 0 && (useExportsEverything || (node.modifiers !== undefined && node.modifiers.find(function (modifier) { return modifier.getText() === 'export'; }) !== undefined));
    }
    function IsNamespace(node) {
        return node.flags === Ts.NodeFlags.Namespace;
    }
    // ------------------------------------------------------------------------------------------------------------
    // Options
    // ------------------------------------------------------------------------------------------------------------
    function ResolveJsDocComment(node) {
        var content = node.getFullText().trim();
        var indices = [content.indexOf('/**'), content.indexOf('type'), content.indexOf('interface')].map(function (n) { return (n === -1 ? Infinity : n); });
        if (indices[0] === -1 || indices[1] < indices[0] || indices[2] < indices[0])
            return ''; // no comment or declaration before comment
        for (var i = indices[0]; i < content.length; i++) {
            if (content[i] === '*' && content[i + 1] === '/')
                return content.slice(0, i + 2);
        }
        return '';
    }
    function ResolveOptions(node) {
        var content = ResolveJsDocComment(node);
        return jsdoc_1.JsDoc.Parse(content);
    }
    // ------------------------------------------------------------------------------------------------------------
    // Identifiers
    // ------------------------------------------------------------------------------------------------------------
    function ResolveIdentifier(node) {
        function resolve(node) {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!node.parent) return [3 /*break*/, 2];
                        return [5 /*yield**/, __values(resolve(node.parent))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!Ts.isModuleDeclaration(node)) return [3 /*break*/, 4];
                        return [4 /*yield*/, node.name.getText()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }
        return __spreadArray(__spreadArray([], resolve(node), true), [node.name.getText()], false).join('.');
    }
    function UnwrapModifier(type) {
        for (var i = 0; i < type.length; i++)
            if (type[i] === '(')
                return type.slice(i + 1, type.length - 1);
        return type;
    }
    // Note: This function is only called when 'useIdentifiers' is true. What we're trying to achieve with
    // identifier injection is a referential type model over the default inline model. For the purposes of
    // code generation, we tend to prefer referential types as these can be both inlined or referenced in
    // the codegen target; and where different targets may have different referential requirements. It
    // should be possible to implement a more robust injection mechanism however. For review.
    // prettier-ignore
    function InjectOptions(type, options) {
        if (globalThis.Object.keys(options).length === 0)
            return type;
        // unwrap for modifiers
        if (type.indexOf('Type.ReadonlyOptional') === 0)
            return "Type.ReadonlyOptional( ".concat(InjectOptions(UnwrapModifier(type), options), " )");
        if (type.indexOf('Type.Readonly') === 0)
            return "Type.Readonly( ".concat(InjectOptions(UnwrapModifier(type), options), " )");
        if (type.indexOf('Type.Optional') === 0)
            return "Type.Optional( ".concat(InjectOptions(UnwrapModifier(type), options), " )");
        var encoded = JSON.stringify(options);
        // indexer type
        if (type.lastIndexOf(']') === type.length - 1)
            useCloneType = true;
        if (type.lastIndexOf(']') === type.length - 1)
            return "CloneType(".concat(type, ", ").concat(encoded, ")");
        // referenced type
        if (type.indexOf('(') === -1) {
            useCloneType = true;
            return "CloneType(".concat(type, ", ").concat(encoded, ")");
        }
        if (type.lastIndexOf('()') === type.length - 2)
            return type.slice(0, type.length - 1) + "".concat(encoded, ")");
        if (type.lastIndexOf('})') === type.length - 2)
            return type.slice(0, type.length - 1) + ", ".concat(encoded, ")");
        if (type.lastIndexOf('])') === type.length - 2)
            return type.slice(0, type.length - 1) + ", ".concat(encoded, ")");
        if (type.lastIndexOf(')') === type.length - 1)
            return type.slice(0, type.length - 1) + ", ".concat(encoded, ")");
        return type;
    }
    // ------------------------------------------------------------------------------------------------------------
    // Nodes
    // ------------------------------------------------------------------------------------------------------------
    function SourceFile(node) {
        var _i, _a, next;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, _a = node.getChildren();
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    next = _a[_i];
                    return [5 /*yield**/, __values(Visit(next))];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    function PropertySignature(node) {
        var _a, readonly, optional, options, type_0, type_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = [IsReadonlyProperty(node), IsOptionalProperty(node)], readonly = _a[0], optional = _a[1];
                    options = ResolveOptions(node);
                    type_0 = Collect(node.type);
                    type_1 = InjectOptions(type_0, options);
                    if (!(readonly && optional)) return [3 /*break*/, 2];
                    return [4 /*yield*/, "".concat(node.name.getText(), ": Type.ReadonlyOptional(").concat(type_1, ")")];
                case 1: return [2 /*return*/, _b.sent()];
                case 2:
                    if (!readonly) return [3 /*break*/, 4];
                    return [4 /*yield*/, "".concat(node.name.getText(), ": Type.Readonly(").concat(type_1, ")")];
                case 3: return [2 /*return*/, _b.sent()];
                case 4:
                    if (!optional) return [3 /*break*/, 6];
                    return [4 /*yield*/, "".concat(node.name.getText(), ": Type.Optional(").concat(type_1, ")")];
                case 5: return [2 /*return*/, _b.sent()];
                case 6: return [4 /*yield*/, "".concat(node.name.getText(), ": ").concat(type_1)];
                case 7: return [2 /*return*/, _b.sent()];
            }
        });
    }
    function ArrayTypeNode(node) {
        var type;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    type = Collect(node.elementType);
                    return [4 /*yield*/, "Type.Array(".concat(type, ")")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function Block(node) {
        var statments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    blockLevel += 1;
                    statments = node.statements.map(function (statement) { return Collect(statement); }).join('\n\n');
                    blockLevel -= 1;
                    return [4 /*yield*/, "{\n".concat(statments, "\n}")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function TupleTypeNode(node) {
        var types;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types = node.elements.map(function (type) { return Collect(type); }).join(',\n');
                    return [4 /*yield*/, "Type.Tuple([\n".concat(types, "\n])")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function UnionTypeNode(node) {
        var types;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types = node.types.map(function (type) { return Collect(type); }).join(',\n');
                    return [4 /*yield*/, "Type.Union([\n".concat(types, "\n])")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function MappedTypeNode(node) {
        var K, T, C, readonly, optional, readonly_subtractive, optional_subtractive;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    K = Collect(node.typeParameter);
                    T = Collect(node.type);
                    C = Collect(node.typeParameter.constraint);
                    readonly = node.readonlyToken !== undefined;
                    optional = node.questionToken !== undefined;
                    readonly_subtractive = readonly && Ts.isMinusToken(node.readonlyToken);
                    optional_subtractive = optional && Ts.isMinusToken(node.questionToken);
                    return [4 /*yield*/, ((readonly && optional) ? ((readonly_subtractive && optional_subtractive) ? "Type.Mapped(".concat(C, ", ").concat(K, " => Type.Readonly(Type.Optional(").concat(T, ", false), false))") :
                            (readonly_subtractive) ? "Type.Mapped(".concat(C, ", ").concat(K, " => Type.Readonly(Type.Optional(").concat(T, "), false))") :
                                (optional_subtractive) ? "Type.Mapped(".concat(C, ", ").concat(K, " => Type.Readonly(Type.Optional(").concat(T, ", false)))") :
                                    "Type.Mapped(".concat(C, ", ").concat(K, " => Type.Readonly(Type.Optional(").concat(T, ")))")) : (readonly) ? (readonly_subtractive
                            ? "Type.Mapped(".concat(C, ", ").concat(K, " => Type.Readonly(").concat(T, ", false))")
                            : "Type.Mapped(".concat(C, ", ").concat(K, " => Type.Readonly(").concat(T, "))")) : (optional) ? (optional_subtractive
                            ? "Type.Mapped(".concat(C, ", ").concat(K, " => Type.Optional(").concat(T, ", false))")
                            : "Type.Mapped(".concat(C, ", ").concat(K, " => Type.Optional(").concat(T, "))")) : "Type.Mapped(".concat(C, ", ").concat(K, " => ").concat(T, ")"))];
                case 1: 
                // prettier-ignore
                return [2 /*return*/, _a.sent()];
            }
        });
    }
    function MethodSignature(node) {
        var parameters, returnType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parameters = node.parameters.map(function (parameter) { return (parameter.dotDotDotToken !== undefined ? "...Type.Rest(".concat(Collect(parameter), ")") : Collect(parameter)); }).join(', ');
                    returnType = node.type === undefined ? "Type.Unknown()" : Collect(node.type);
                    return [4 /*yield*/, "".concat(node.name.getText(), ": Type.Function([").concat(parameters, "], ").concat(returnType, ")")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    // prettier-ignore
    function TemplateLiteralTypeNode(node) {
        var collect;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collect = node.getChildren().map(function (node) { return Collect(node); }).join('');
                    return [4 /*yield*/, "Type.TemplateLiteral([".concat(collect.slice(0, collect.length - 2), "])")]; // can't remove trailing here
                case 1:
                    _a.sent(); // can't remove trailing here
                    return [2 /*return*/];
            }
        });
    }
    // prettier-ignore
    function TemplateLiteralTypeSpan(node) {
        var collect;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collect = node.getChildren().map(function (node) { return Collect(node); }).join(', ');
                    if (!(collect.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, "".concat(collect)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }
    function TemplateHead(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(node.text.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, "Type.Literal('".concat(node.text, "'), ")];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }
    function TemplateMiddle(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(node.text.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, "Type.Literal('".concat(node.text, "'), ")];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }
    function TemplateTail(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(node.text.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, "Type.Literal('".concat(node.text, "'), ")];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }
    function ThisTypeNode(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, "This"];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function IntersectionTypeNode(node) {
        var types;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types = node.types.map(function (type) { return Collect(type); }).join(',\n');
                    return [4 /*yield*/, "Type.Intersect([\n".concat(types, "\n])")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function TypeOperatorNode(node) {
        var type;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(node.operator === Ts.SyntaxKind.KeyOfKeyword)) return [3 /*break*/, 2];
                    type = Collect(node.type);
                    return [4 /*yield*/, "Type.KeyOf(".concat(type, ")")];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(node.operator === Ts.SyntaxKind.ReadonlyKeyword)) return [3 /*break*/, 4];
                    return [4 /*yield*/, "Type.Readonly(".concat(Collect(node.type), ")")];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }
    function Parameter(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, IsOptionalParameter(node) ? "Type.Optional(".concat(Collect(node.type), ")") : Collect(node.type)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function FunctionTypeNode(node) {
        var parameters, returns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parameters = node.parameters.map(function (parameter) { return (parameter.dotDotDotToken !== undefined ? "...Type.Rest(".concat(Collect(parameter), ")") : Collect(parameter)); }).join(', ');
                    returns = Collect(node.type);
                    return [4 /*yield*/, "Type.Function([".concat(parameters, "], ").concat(returns, ")")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function ConstructorTypeNode(node) {
        var parameters, returns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parameters = node.parameters.map(function (param) { return Collect(param); }).join(', ');
                    returns = Collect(node.type);
                    return [4 /*yield*/, "Type.Constructor([".concat(parameters, "], ").concat(returns, ")")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function EnumDeclaration(node) {
        var exports, members, enumType, staticType, type;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    useImports = true;
                    exports = IsExport(node) ? 'export ' : '';
                    members = node.members.map(function (member) { return member.getText(); }).join(', ');
                    enumType = "".concat(exports, "enum Enum").concat(node.name.getText(), " { ").concat(members, " }");
                    staticType = "".concat(exports, "type ").concat(node.name.getText(), " = Static<typeof ").concat(node.name.getText(), ">");
                    type = "".concat(exports, "const ").concat(node.name.getText(), " = Type.Enum(Enum").concat(node.name.getText(), ")");
                    return [4 /*yield*/, [enumType, '', staticType, type].join('\n')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function PropertiesFromTypeElementArray(members) {
        var properties = members.filter(function (member) { return !Ts.isIndexSignatureDeclaration(member); });
        var indexers = members.filter(function (member) { return Ts.isIndexSignatureDeclaration(member); });
        var propertyCollect = properties.map(function (property) { return Collect(property); }).join(',\n');
        var indexer = indexers.length > 0 ? Collect(indexers[indexers.length - 1]) : '';
        if (properties.length === 0 && indexer.length > 0) {
            return "{},\n{\nadditionalProperties: ".concat(indexer, "\n }");
        }
        else if (properties.length > 0 && indexer.length > 0) {
            return "{\n".concat(propertyCollect, "\n},\n{\nadditionalProperties: ").concat(indexer, "\n }");
        }
        else {
            return "{\n".concat(propertyCollect, "\n}");
        }
    }
    function TypeLiteralNode(node) {
        var members;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    members = PropertiesFromTypeElementArray(node.members);
                    return [5 /*yield**/, __values("Type.Object(".concat(members, ")"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function InterfaceDeclaration(node) {
        var isRecursiveType, heritage, exports_1, identifier, options, constraints, parameters, members, names, staticDeclaration, rawTypeExpression, typeExpression, type, typeDeclaration, exports_2, identifier, options, members, staticDeclaration, rawTypeExpression, typeExpression, type, typeDeclaration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    useImports = true;
                    isRecursiveType = IsRecursiveType(node);
                    if (isRecursiveType)
                        recursiveDeclaration = node;
                    heritage = node.heritageClauses !== undefined ? node.heritageClauses.flatMap(function (node) { return Collect(node); }) : [];
                    if (!node.typeParameters) return [3 /*break*/, 2];
                    useGenerics = true;
                    exports_1 = IsExport(node) ? 'export ' : '';
                    identifier = ResolveIdentifier(node);
                    options = useIdentifiers ? __assign(__assign({}, ResolveOptions(node)), { $id: identifier }) : __assign({}, ResolveOptions(node));
                    constraints = node.typeParameters.map(function (param) { return "".concat(Collect(param), " extends TSchema"); }).join(', ');
                    parameters = node.typeParameters.map(function (param) { return "".concat(Collect(param), ": ").concat(Collect(param)); }).join(', ');
                    members = PropertiesFromTypeElementArray(node.members);
                    names = node.typeParameters.map(function (param) { return "".concat(Collect(param)); }).join(', ');
                    staticDeclaration = "".concat(exports_1, "type ").concat(node.name.getText(), "<").concat(constraints, "> = Static<ReturnType<typeof ").concat(node.name.getText(), "<").concat(names, ">>>");
                    rawTypeExpression = IsRecursiveType(node) ? "Type.Recursive(This => Type.Object(".concat(members, "))") : "Type.Object(".concat(members, ")");
                    typeExpression = heritage.length === 0 ? rawTypeExpression : "Type.Composite([".concat(heritage.join(', '), ", ").concat(rawTypeExpression, "])");
                    type = InjectOptions(typeExpression, options);
                    typeDeclaration = "".concat(exports_1, "const ").concat(node.name.getText(), " = <").concat(constraints, ">(").concat(parameters, ") => ").concat(type);
                    return [4 /*yield*/, "".concat(staticDeclaration, "\n").concat(typeDeclaration)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    exports_2 = IsExport(node) ? 'export ' : '';
                    identifier = ResolveIdentifier(node);
                    options = useIdentifiers ? __assign(__assign({}, ResolveOptions(node)), { $id: identifier }) : __assign({}, ResolveOptions(node));
                    members = PropertiesFromTypeElementArray(node.members);
                    staticDeclaration = "".concat(exports_2, "type ").concat(node.name.getText(), " = Static<typeof ").concat(node.name.getText(), ">");
                    rawTypeExpression = IsRecursiveType(node) ? "Type.Recursive(This => Type.Object(".concat(members, "))") : "Type.Object(".concat(members, ")");
                    typeExpression = heritage.length === 0 ? rawTypeExpression : "Type.Composite([".concat(heritage.join(', '), ", ").concat(rawTypeExpression, "])");
                    type = InjectOptions(typeExpression, options);
                    typeDeclaration = "".concat(exports_2, "const ").concat(node.name.getText(), " = ").concat(type);
                    return [4 /*yield*/, "".concat(staticDeclaration, "\n").concat(typeDeclaration)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    recursiveDeclaration = null;
                    return [2 /*return*/];
            }
        });
    }
    function TypeAliasDeclaration(node) {
        var isRecursiveType, exports_3, options, constraints, parameters, type_0, type_1, type_2, names, staticDeclaration, typeDeclaration, exports_4, options, type_0, type_1, type_2, staticDeclaration, typeDeclaration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    useImports = true;
                    isRecursiveType = IsRecursiveType(node);
                    if (isRecursiveType)
                        recursiveDeclaration = node;
                    if (!node.typeParameters) return [3 /*break*/, 2];
                    useGenerics = true;
                    exports_3 = IsExport(node) ? 'export ' : '';
                    options = useIdentifiers ? { $id: ResolveIdentifier(node) } : {};
                    constraints = node.typeParameters.map(function (param) { return "".concat(Collect(param), " extends TSchema"); }).join(', ');
                    parameters = node.typeParameters.map(function (param) { return "".concat(Collect(param), ": ").concat(Collect(param)); }).join(', ');
                    type_0 = Collect(node.type);
                    type_1 = isRecursiveType ? "Type.Recursive(This => ".concat(type_0, ")") : type_0;
                    type_2 = InjectOptions(type_1, options);
                    names = node.typeParameters.map(function (param) { return Collect(param); }).join(', ');
                    staticDeclaration = "".concat(exports_3, "type ").concat(node.name.getText(), "<").concat(constraints, "> = Static<ReturnType<typeof ").concat(node.name.getText(), "<").concat(names, ">>>");
                    typeDeclaration = "".concat(exports_3, "const ").concat(node.name.getText(), " = <").concat(constraints, ">(").concat(parameters, ") => ").concat(type_2);
                    return [4 /*yield*/, "".concat(staticDeclaration, "\n").concat(typeDeclaration)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    exports_4 = IsExport(node) ? 'export ' : '';
                    options = useIdentifiers ? __assign({ $id: ResolveIdentifier(node) }, ResolveOptions(node)) : __assign({}, ResolveOptions(node));
                    type_0 = Collect(node.type);
                    type_1 = isRecursiveType ? "Type.Recursive(This => ".concat(type_0, ")") : type_0;
                    type_2 = InjectOptions(type_1, options);
                    staticDeclaration = "".concat(exports_4, "type ").concat(node.name.getText(), " = Static<typeof ").concat(node.name.getText(), ">");
                    typeDeclaration = "".concat(exports_4, "const ").concat(node.name.getText(), " = ").concat(type_2);
                    return [4 /*yield*/, "".concat(staticDeclaration, "\n").concat(typeDeclaration)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    recursiveDeclaration = null;
                    return [2 /*return*/];
            }
        });
    }
    function HeritageClause(node) {
        var types;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    types = node.types.map(function (node) { return Collect(node); });
                    // Note: Heritage clauses are only used in interface extends cases. We expect the
                    // outer type to be a Composite, and where this type will be prepended before the
                    // interface definition.
                    return [4 /*yield*/, types.join(', ')];
                case 1:
                    // Note: Heritage clauses are only used in interface extends cases. We expect the
                    // outer type to be a Composite, and where this type will be prepended before the
                    // interface definition.
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function IndexedAccessType(node) {
        var obj, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    obj = node.objectType.getText();
                    key = Collect(node.indexType);
                    return [4 /*yield*/, "Type.Index(".concat(obj, ", ").concat(key, ")")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function ExpressionWithTypeArguments(node) {
        var name, typeArguments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = Collect(node.expression);
                    typeArguments = node.typeArguments === undefined ? [] : node.typeArguments.map(function (node) { return Collect(node); });
                    return [4 /*yield*/, typeArguments.length === 0 ? "".concat(name) : "".concat(name, "(").concat(typeArguments.join(', '), ")")];
                case 1: 
                // todo: default type argument (resolve `= number` from `type Foo<T = number>`)
                return [2 /*return*/, _a.sent()];
            }
        });
    }
    function TypeParameterDeclaration(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node.name.getText()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function ParenthesizedTypeNode(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Collect(node.type)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function PropertyAccessExpression(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node.getText()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function RestTypeNode(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, "...Type.Rest(".concat(node.type.getText(), ")")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function ConditionalTypeNode(node) {
        var checkType, extendsType, trueType, falseType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkType = Collect(node.checkType);
                    extendsType = Collect(node.extendsType);
                    trueType = Collect(node.trueType);
                    falseType = Collect(node.falseType);
                    return [4 /*yield*/, "Type.Extends(".concat(checkType, ", ").concat(extendsType, ", ").concat(trueType, ", ").concat(falseType, ")")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function isIndexSignatureDeclaration(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // note: we ignore the key and just return the type. this is a mismatch between
                // object and record types. Address in TypeBox by unifying validation paths
                // for objects and record types.
                return [4 /*yield*/, Collect(node.type)];
                case 1:
                    // note: we ignore the key and just return the type. this is a mismatch between
                    // object and record types. Address in TypeBox by unifying validation paths
                    // for objects and record types.
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function TypeReferenceNode(node) {
        var name, args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = node.typeName.getText();
                    args = node.typeArguments ? "(".concat(node.typeArguments.map(function (type) { return Collect(type); }).join(', '), ")") : '';
                    if (!(name === 'Date')) return [3 /*break*/, 2];
                    return [4 /*yield*/, "Type.Date()"];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    if (!(name === 'Uint8Array')) return [3 /*break*/, 4];
                    return [4 /*yield*/, "Type.Uint8Array()"];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    if (!(name === 'String')) return [3 /*break*/, 6];
                    return [4 /*yield*/, "Type.String()"];
                case 5: return [2 /*return*/, _a.sent()];
                case 6:
                    if (!(name === 'Number')) return [3 /*break*/, 8];
                    return [4 /*yield*/, "Type.Number()"];
                case 7: return [2 /*return*/, _a.sent()];
                case 8:
                    if (!(name === 'Boolean')) return [3 /*break*/, 10];
                    return [4 /*yield*/, "Type.Boolean()"];
                case 9: return [2 /*return*/, _a.sent()];
                case 10:
                    if (!(name === 'Function')) return [3 /*break*/, 12];
                    return [4 /*yield*/, "Type.Function([], Type.Unknown())"
                        // --------------------------------------------------------------
                        // Types
                        // --------------------------------------------------------------
                    ];
                case 11: return [2 /*return*/, _a.sent()
                    // --------------------------------------------------------------
                    // Types
                    // --------------------------------------------------------------
                ];
                case 12:
                    if (!(name === 'Array')) return [3 /*break*/, 14];
                    return [4 /*yield*/, "Type.Array".concat(args)];
                case 13: return [2 /*return*/, _a.sent()];
                case 14:
                    if (!(name === 'Record')) return [3 /*break*/, 16];
                    return [4 /*yield*/, "Type.Record".concat(args)];
                case 15: return [2 /*return*/, _a.sent()];
                case 16:
                    if (!(name === 'Partial')) return [3 /*break*/, 18];
                    return [4 /*yield*/, "Type.Partial".concat(args)];
                case 17: return [2 /*return*/, _a.sent()];
                case 18:
                    if (!(name === 'Required')) return [3 /*break*/, 20];
                    return [4 /*yield*/, "Type.Required".concat(args)];
                case 19: return [2 /*return*/, _a.sent()];
                case 20:
                    if (!(name === 'Omit')) return [3 /*break*/, 22];
                    return [4 /*yield*/, "Type.Omit".concat(args)];
                case 21: return [2 /*return*/, _a.sent()];
                case 22:
                    if (!(name === 'Pick')) return [3 /*break*/, 24];
                    return [4 /*yield*/, "Type.Pick".concat(args)];
                case 23: return [2 /*return*/, _a.sent()];
                case 24:
                    if (!(name === 'Promise')) return [3 /*break*/, 26];
                    return [4 /*yield*/, "Type.Promise".concat(args)];
                case 25: return [2 /*return*/, _a.sent()];
                case 26:
                    if (!(name === 'ReturnType')) return [3 /*break*/, 28];
                    return [4 /*yield*/, "Type.ReturnType".concat(args)];
                case 27: return [2 /*return*/, _a.sent()];
                case 28:
                    if (!(name === 'InstanceType')) return [3 /*break*/, 30];
                    return [4 /*yield*/, "Type.InstanceType".concat(args)];
                case 29: return [2 /*return*/, _a.sent()];
                case 30:
                    if (!(name === 'Parameters')) return [3 /*break*/, 32];
                    return [4 /*yield*/, "Type.Parameters".concat(args)];
                case 31: return [2 /*return*/, _a.sent()];
                case 32:
                    if (!(name === 'AsyncIterableIterator')) return [3 /*break*/, 34];
                    return [4 /*yield*/, "Type.AsyncIterator".concat(args)];
                case 33: return [2 /*return*/, _a.sent()];
                case 34:
                    if (!(name === 'IterableIterator')) return [3 /*break*/, 36];
                    return [4 /*yield*/, "Type.Iterator".concat(args)];
                case 35: return [2 /*return*/, _a.sent()];
                case 36:
                    if (!(name === 'ConstructorParameters')) return [3 /*break*/, 38];
                    return [4 /*yield*/, "Type.ConstructorParameters".concat(args)];
                case 37: return [2 /*return*/, _a.sent()];
                case 38:
                    if (!(name === 'Exclude')) return [3 /*break*/, 40];
                    return [4 /*yield*/, "Type.Exclude".concat(args)];
                case 39: return [2 /*return*/, _a.sent()];
                case 40:
                    if (!(name === 'Extract')) return [3 /*break*/, 42];
                    return [4 /*yield*/, "Type.Extract".concat(args)];
                case 41: return [2 /*return*/, _a.sent()];
                case 42:
                    if (!(name === 'Awaited')) return [3 /*break*/, 44];
                    return [4 /*yield*/, "Type.Awaited".concat(args)];
                case 43: return [2 /*return*/, _a.sent()];
                case 44:
                    if (!(name === 'Uppercase')) return [3 /*break*/, 46];
                    return [4 /*yield*/, "Type.Uppercase".concat(args)];
                case 45: return [2 /*return*/, _a.sent()];
                case 46:
                    if (!(name === 'Lowercase')) return [3 /*break*/, 48];
                    return [4 /*yield*/, "Type.Lowercase".concat(args)];
                case 47: return [2 /*return*/, _a.sent()];
                case 48:
                    if (!(name === 'Capitalize')) return [3 /*break*/, 50];
                    return [4 /*yield*/, "Type.Capitalize".concat(args)];
                case 49: return [2 /*return*/, _a.sent()];
                case 50:
                    if (!(name === 'Uncapitalize')) return [3 /*break*/, 52];
                    return [4 /*yield*/, "Type.Uncapitalize".concat(args)];
                case 51: return [2 /*return*/, _a.sent()];
                case 52:
                    if (!(recursiveDeclaration !== null && FindRecursiveParent(recursiveDeclaration, node))) return [3 /*break*/, 54];
                    return [4 /*yield*/, "This"];
                case 53: return [2 /*return*/, _a.sent()];
                case 54:
                    if (!(FindTypeName(node.getSourceFile(), name) && args.length === 0) /** non-resolvable */) return [3 /*break*/, 56]; /** non-resolvable */
                    return [4 /*yield*/, "".concat(name).concat(args)];
                case 55: return [2 /*return*/, _a.sent()];
                case 56:
                    if (!(name in globalThis)) return [3 /*break*/, 58];
                    return [4 /*yield*/, "Type.Never()"];
                case 57: return [2 /*return*/, _a.sent()];
                case 58: return [4 /*yield*/, "".concat(name).concat(args)];
                case 59: return [2 /*return*/, _a.sent()];
            }
        });
    }
    function LiteralTypeNode(node) {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    text = node.getText();
                    if (!(text === 'null')) return [3 /*break*/, 2];
                    return [4 /*yield*/, "Type.Null()"];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, "Type.Literal(".concat(node.getText(), ")")];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function NamedTupleMember(node) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, __values(Collect(node.type))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function ModuleDeclaration(node) {
        var export_specifier, module_specifier;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    export_specifier = IsExport(node) ? 'export ' : '';
                    module_specifier = IsNamespace(node) ? 'namespace' : 'module';
                    return [4 /*yield*/, "".concat(export_specifier).concat(module_specifier, " ").concat(node.name.getText(), " {")];
                case 1:
                    _a.sent();
                    return [5 /*yield**/, __values(Visit(node.body))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, "}"];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function ModuleBlock(node) {
        var _i, _a, statement;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, _a = node.statements;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    statement = _a[_i];
                    return [5 /*yield**/, __values(Visit(statement))];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    function FunctionDeclaration(node) {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }
    function ClassDeclaration(node) {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }
    function Collect(node) {
        return "".concat(__spreadArray([], Visit(node), true).join(''));
    }
    function Visit(node) {
        var _i, _a, child;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (node === undefined)
                        return [2 /*return*/];
                    if (!Ts.isArrayTypeNode(node)) return [3 /*break*/, 2];
                    return [5 /*yield**/, __values(ArrayTypeNode(node))];
                case 1: return [2 /*return*/, _b.sent()];
                case 2:
                    if (!Ts.isBlock(node)) return [3 /*break*/, 4];
                    return [5 /*yield**/, __values(Block(node))];
                case 3: return [2 /*return*/, _b.sent()];
                case 4:
                    if (!Ts.isClassDeclaration(node)) return [3 /*break*/, 6];
                    return [5 /*yield**/, __values(ClassDeclaration(node))];
                case 5: return [2 /*return*/, _b.sent()];
                case 6:
                    if (!Ts.isConditionalTypeNode(node)) return [3 /*break*/, 8];
                    return [5 /*yield**/, __values(ConditionalTypeNode(node))];
                case 7: return [2 /*return*/, _b.sent()];
                case 8:
                    if (!Ts.isConstructorTypeNode(node)) return [3 /*break*/, 10];
                    return [5 /*yield**/, __values(ConstructorTypeNode(node))];
                case 9: return [2 /*return*/, _b.sent()];
                case 10:
                    if (!Ts.isEnumDeclaration(node)) return [3 /*break*/, 12];
                    return [5 /*yield**/, __values(EnumDeclaration(node))];
                case 11: return [2 /*return*/, _b.sent()];
                case 12:
                    if (!Ts.isExpressionWithTypeArguments(node)) return [3 /*break*/, 14];
                    return [5 /*yield**/, __values(ExpressionWithTypeArguments(node))];
                case 13: return [2 /*return*/, _b.sent()];
                case 14:
                    if (!Ts.isFunctionDeclaration(node)) return [3 /*break*/, 16];
                    return [5 /*yield**/, __values(FunctionDeclaration(node))];
                case 15: return [2 /*return*/, _b.sent()];
                case 16:
                    if (!Ts.isFunctionTypeNode(node)) return [3 /*break*/, 18];
                    return [5 /*yield**/, __values(FunctionTypeNode(node))];
                case 17: return [2 /*return*/, _b.sent()];
                case 18:
                    if (!Ts.isHeritageClause(node)) return [3 /*break*/, 20];
                    return [5 /*yield**/, __values(HeritageClause(node))];
                case 19: return [2 /*return*/, _b.sent()];
                case 20:
                    if (!Ts.isIndexedAccessTypeNode(node)) return [3 /*break*/, 22];
                    return [5 /*yield**/, __values(IndexedAccessType(node))];
                case 21: return [2 /*return*/, _b.sent()];
                case 22:
                    if (!Ts.isIndexSignatureDeclaration(node)) return [3 /*break*/, 24];
                    return [5 /*yield**/, __values(isIndexSignatureDeclaration(node))];
                case 23: return [2 /*return*/, _b.sent()];
                case 24:
                    if (!Ts.isInterfaceDeclaration(node)) return [3 /*break*/, 26];
                    return [5 /*yield**/, __values(InterfaceDeclaration(node))];
                case 25: return [2 /*return*/, _b.sent()];
                case 26:
                    if (!Ts.isLiteralTypeNode(node)) return [3 /*break*/, 28];
                    return [5 /*yield**/, __values(LiteralTypeNode(node))];
                case 27: return [2 /*return*/, _b.sent()];
                case 28:
                    if (!Ts.isNamedTupleMember(node)) return [3 /*break*/, 30];
                    return [5 /*yield**/, __values(NamedTupleMember(node))];
                case 29: return [2 /*return*/, _b.sent()];
                case 30:
                    if (!Ts.isPropertySignature(node)) return [3 /*break*/, 32];
                    return [5 /*yield**/, __values(PropertySignature(node))];
                case 31: return [2 /*return*/, _b.sent()];
                case 32:
                    if (!Ts.isModuleDeclaration(node)) return [3 /*break*/, 34];
                    return [5 /*yield**/, __values(ModuleDeclaration(node))];
                case 33: return [2 /*return*/, _b.sent()];
                case 34:
                    if (!Ts.isIdentifier(node)) return [3 /*break*/, 36];
                    return [4 /*yield*/, node.getText()];
                case 35: return [2 /*return*/, _b.sent()];
                case 36:
                    if (!Ts.isIntersectionTypeNode(node)) return [3 /*break*/, 38];
                    return [5 /*yield**/, __values(IntersectionTypeNode(node))];
                case 37: return [2 /*return*/, _b.sent()];
                case 38:
                    if (!Ts.isUnionTypeNode(node)) return [3 /*break*/, 40];
                    return [5 /*yield**/, __values(UnionTypeNode(node))];
                case 39: return [2 /*return*/, _b.sent()];
                case 40:
                    if (!Ts.isMappedTypeNode(node)) return [3 /*break*/, 42];
                    return [5 /*yield**/, __values(MappedTypeNode(node))];
                case 41: return [2 /*return*/, _b.sent()];
                case 42:
                    if (!Ts.isMethodSignature(node)) return [3 /*break*/, 44];
                    return [5 /*yield**/, __values(MethodSignature(node))];
                case 43: return [2 /*return*/, _b.sent()];
                case 44:
                    if (!Ts.isModuleBlock(node)) return [3 /*break*/, 46];
                    return [5 /*yield**/, __values(ModuleBlock(node))];
                case 45: return [2 /*return*/, _b.sent()];
                case 46:
                    if (!Ts.isParameter(node)) return [3 /*break*/, 48];
                    return [5 /*yield**/, __values(Parameter(node))];
                case 47: return [2 /*return*/, _b.sent()];
                case 48:
                    if (!Ts.isParenthesizedTypeNode(node)) return [3 /*break*/, 50];
                    return [5 /*yield**/, __values(ParenthesizedTypeNode(node))];
                case 49: return [2 /*return*/, _b.sent()];
                case 50:
                    if (!Ts.isPropertyAccessExpression(node)) return [3 /*break*/, 52];
                    return [5 /*yield**/, __values(PropertyAccessExpression(node))];
                case 51: return [2 /*return*/, _b.sent()];
                case 52:
                    if (!Ts.isRestTypeNode(node)) return [3 /*break*/, 54];
                    return [5 /*yield**/, __values(RestTypeNode(node))];
                case 53: return [2 /*return*/, _b.sent()];
                case 54:
                    if (!Ts.isTupleTypeNode(node)) return [3 /*break*/, 56];
                    return [5 /*yield**/, __values(TupleTypeNode(node))];
                case 55: return [2 /*return*/, _b.sent()];
                case 56:
                    if (!Ts.isTemplateLiteralTypeNode(node)) return [3 /*break*/, 58];
                    return [5 /*yield**/, __values(TemplateLiteralTypeNode(node))];
                case 57: return [2 /*return*/, _b.sent()];
                case 58:
                    if (!Ts.isTemplateLiteralTypeSpan(node)) return [3 /*break*/, 60];
                    return [5 /*yield**/, __values(TemplateLiteralTypeSpan(node))];
                case 59: return [2 /*return*/, _b.sent()];
                case 60:
                    if (!Ts.isTemplateHead(node)) return [3 /*break*/, 62];
                    return [5 /*yield**/, __values(TemplateHead(node))];
                case 61: return [2 /*return*/, _b.sent()];
                case 62:
                    if (!Ts.isTemplateMiddle(node)) return [3 /*break*/, 64];
                    return [5 /*yield**/, __values(TemplateMiddle(node))];
                case 63: return [2 /*return*/, _b.sent()];
                case 64:
                    if (!Ts.isTemplateTail(node)) return [3 /*break*/, 66];
                    return [5 /*yield**/, __values(TemplateTail(node))];
                case 65: return [2 /*return*/, _b.sent()];
                case 66:
                    if (!Ts.isThisTypeNode(node)) return [3 /*break*/, 68];
                    return [5 /*yield**/, __values(ThisTypeNode(node))];
                case 67: return [2 /*return*/, _b.sent()];
                case 68:
                    if (!Ts.isTypeAliasDeclaration(node)) return [3 /*break*/, 70];
                    return [5 /*yield**/, __values(TypeAliasDeclaration(node))];
                case 69: return [2 /*return*/, _b.sent()];
                case 70:
                    if (!Ts.isTypeLiteralNode(node)) return [3 /*break*/, 72];
                    return [5 /*yield**/, __values(TypeLiteralNode(node))];
                case 71: return [2 /*return*/, _b.sent()];
                case 72:
                    if (!Ts.isTypeOperatorNode(node)) return [3 /*break*/, 74];
                    return [5 /*yield**/, __values(TypeOperatorNode(node))];
                case 73: return [2 /*return*/, _b.sent()];
                case 74:
                    if (!Ts.isTypeParameterDeclaration(node)) return [3 /*break*/, 76];
                    return [5 /*yield**/, __values(TypeParameterDeclaration(node))];
                case 75: return [2 /*return*/, _b.sent()];
                case 76:
                    if (!Ts.isTypeReferenceNode(node)) return [3 /*break*/, 78];
                    return [5 /*yield**/, __values(TypeReferenceNode(node))];
                case 77: return [2 /*return*/, _b.sent()];
                case 78:
                    if (!Ts.isSourceFile(node)) return [3 /*break*/, 80];
                    return [5 /*yield**/, __values(SourceFile(node))];
                case 79: return [2 /*return*/, _b.sent()];
                case 80:
                    if (!(node.kind === Ts.SyntaxKind.ExportKeyword)) return [3 /*break*/, 82];
                    return [4 /*yield*/, "export"];
                case 81: return [2 /*return*/, _b.sent()];
                case 82:
                    if (!(node.kind === Ts.SyntaxKind.KeyOfKeyword)) return [3 /*break*/, 84];
                    return [4 /*yield*/, "Type.KeyOf()"];
                case 83: return [2 /*return*/, _b.sent()];
                case 84:
                    if (!(node.kind === Ts.SyntaxKind.NumberKeyword)) return [3 /*break*/, 86];
                    return [4 /*yield*/, "Type.Number()"];
                case 85: return [2 /*return*/, _b.sent()];
                case 86:
                    if (!(node.kind === Ts.SyntaxKind.BigIntKeyword)) return [3 /*break*/, 88];
                    return [4 /*yield*/, "Type.BigInt()"];
                case 87: return [2 /*return*/, _b.sent()];
                case 88:
                    if (!(node.kind === Ts.SyntaxKind.StringKeyword)) return [3 /*break*/, 90];
                    return [4 /*yield*/, "Type.String()"];
                case 89: return [2 /*return*/, _b.sent()];
                case 90:
                    if (!(node.kind === Ts.SyntaxKind.SymbolKeyword)) return [3 /*break*/, 92];
                    return [4 /*yield*/, "Type.Symbol()"];
                case 91: return [2 /*return*/, _b.sent()];
                case 92:
                    if (!(node.kind === Ts.SyntaxKind.BooleanKeyword)) return [3 /*break*/, 94];
                    return [4 /*yield*/, "Type.Boolean()"];
                case 93: return [2 /*return*/, _b.sent()];
                case 94:
                    if (!(node.kind === Ts.SyntaxKind.UndefinedKeyword)) return [3 /*break*/, 96];
                    return [4 /*yield*/, "Type.Undefined()"];
                case 95: return [2 /*return*/, _b.sent()];
                case 96:
                    if (!(node.kind === Ts.SyntaxKind.UnknownKeyword)) return [3 /*break*/, 98];
                    return [4 /*yield*/, "Type.Unknown()"];
                case 97: return [2 /*return*/, _b.sent()];
                case 98:
                    if (!(node.kind === Ts.SyntaxKind.AnyKeyword)) return [3 /*break*/, 100];
                    return [4 /*yield*/, "Type.Any()"];
                case 99: return [2 /*return*/, _b.sent()];
                case 100:
                    if (!(node.kind === Ts.SyntaxKind.NeverKeyword)) return [3 /*break*/, 102];
                    return [4 /*yield*/, "Type.Never()"];
                case 101: return [2 /*return*/, _b.sent()];
                case 102:
                    if (!(node.kind === Ts.SyntaxKind.NullKeyword)) return [3 /*break*/, 104];
                    return [4 /*yield*/, "Type.Null()"];
                case 103: return [2 /*return*/, _b.sent()];
                case 104:
                    if (!(node.kind === Ts.SyntaxKind.VoidKeyword)) return [3 /*break*/, 106];
                    return [4 /*yield*/, "Type.Void()"];
                case 105: return [2 /*return*/, _b.sent()];
                case 106:
                    if (node.kind === Ts.SyntaxKind.EndOfFileToken)
                        return [2 /*return*/];
                    if (!(node.kind === Ts.SyntaxKind.SyntaxList)) return [3 /*break*/, 111];
                    _i = 0, _a = node.getChildren();
                    _b.label = 107;
                case 107:
                    if (!(_i < _a.length)) return [3 /*break*/, 110];
                    child = _a[_i];
                    return [5 /*yield**/, __values(Visit(child))];
                case 108:
                    _b.sent();
                    _b.label = 109;
                case 109:
                    _i++;
                    return [3 /*break*/, 107];
                case 110: return [2 /*return*/];
                case 111:
                    console.warn('Unhandled:', Ts.SyntaxKind[node.kind], node.getText());
                    return [2 /*return*/];
            }
        });
    }
    function ImportStatement() {
        if (!(useImports && useTypeBoxImport))
            return '';
        var set = new Set(['Type', 'Static']);
        if (useGenerics) {
            set.add('TSchema');
        }
        if (useOptions) {
            set.add('SchemaOptions');
        }
        if (useCloneType) {
            set.add('CloneType');
        }
        var imports = __spreadArray([], set, true).join(', ');
        return "import { ".concat(imports, " } from '@sinclair/typebox'");
    }
    /** Generates TypeBox types from TypeScript interface and type definitions */
    function Generate(typescriptCode, options) {
        var _a, _b, _c;
        useExportsEverything = (_a = options === null || options === void 0 ? void 0 : options.useExportEverything) !== null && _a !== void 0 ? _a : false;
        useIdentifiers = (_b = options === null || options === void 0 ? void 0 : options.useIdentifiers) !== null && _b !== void 0 ? _b : false;
        useTypeBoxImport = (_c = options === null || options === void 0 ? void 0 : options.useTypeBoxImport) !== null && _c !== void 0 ? _c : true;
        typenames.clear();
        useImports = false;
        useOptions = false;
        useGenerics = false;
        useCloneType = false;
        blockLevel = 0;
        var source = Ts.createSourceFile('types.ts', typescriptCode, Ts.ScriptTarget.ESNext, true);
        var declarations = __spreadArray([], Visit(source), true).join('\n\n');
        var imports = ImportStatement();
        var typescript = [imports, '', '', declarations].join('\n');
        var assertion = Ts.transpileModule(typescript, transpilerOptions);
        if (assertion.diagnostics && assertion.diagnostics.length > 0) {
            throw new TypeScriptToTypeBoxError(assertion.diagnostics);
        }
        return typescript;
    }
    TypeScriptToTypeBox.Generate = Generate;
})(TypeScriptToTypeBox || (exports.TypeScriptToTypeBox = TypeScriptToTypeBox = {}));
