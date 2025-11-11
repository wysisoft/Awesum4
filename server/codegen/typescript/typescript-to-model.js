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
exports.TypeScriptToModel = void 0;
var typebox_1 = require("@sinclair/typebox");
var typescript_to_typebox_1 = require("./typescript-to-typebox");
var Ts = require("typescript");
var TypeScriptToModel;
(function (TypeScriptToModel) {
    var compilerOptions = {
        module: Ts.ModuleKind.CommonJS, // used for exports
        target: Ts.ScriptTarget.ES2015, // evaluation target
    };
    // This function evaluates the generated TypeBox code and returns it's exports. This
    // function shouldn't really exist and instead the TypeScriptToTypeBox module should
    // just generate in memory TypeBox types. However the work to do this would require
    // a complete rewrite of the module. We settle for eval() until a version 2.
    function Exports(code) {
        var exports = {};
        var evaluate = new Function('exports', 'Type', 'Kind', 'CloneType', code);
        evaluate(exports, typebox_1.Type, typebox_1.Kind, typebox_1.CloneType);
        return exports;
    }
    TypeScriptToModel.Exports = Exports;
    // This function will traverse exports looking for types. If discovering an object
    // that isn't a type, that object will traversed and treated as a namespace. This
    // function will assign identifiers to the schematics based on the exported key,
    // nested types will be prefixed by the parent key and delimited via underscore.
    function Types(namespace, exports) {
        var types = [];
        for (var _i = 0, _a = Object.entries(exports); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], variable = _b[1];
            var scope = namespace.length > 0 ? "".concat(namespace, "_").concat(key) : key;
            if (typebox_1.TypeGuard.IsSchema(variable)) {
                types.push(__assign(__assign({}, variable), { $id: scope }));
            }
            else if (typebox_1.ValueGuard.IsObject(variable)) {
                types.push.apply(types, Types(scope, variable));
            }
        }
        return types;
    }
    TypeScriptToModel.Types = Types;
    function Generate(typescriptCode) {
        var typescript = typescript_to_typebox_1.TypeScriptToTypeBox.Generate(typescriptCode, {
            useExportEverything: true,
            useTypeBoxImport: false,
            useIdentifiers: true,
        });
        var javascript = Ts.transpileModule(typescript, { compilerOptions: compilerOptions });
        var exports = Exports(javascript.outputText);
        var types = Types('', exports);
        return { types: types };
    }
    TypeScriptToModel.Generate = Generate;
})(TypeScriptToModel || (exports.TypeScriptToModel = TypeScriptToModel = {}));
