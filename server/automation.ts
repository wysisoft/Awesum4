
import { types } from "./typebox";
import {execSync}  from "child_process";
import {
  InputData,
  JSONSchemaInput,
  JSONSchemaStore,
  quicktype,
} from "quicktype-core";

// Helper function to capitalize the first letter of a property
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function jsonSchemaToTS(schema: string, className: string) {
  // Prepare the JSON Schema input
  const schemaInput = new JSONSchemaInput(undefined);

  // Add the JSON schema to the input
  await schemaInput.addSource({
    name: className,
    schema: schema,
  });

  // Prepare the input data
  const inputData = new InputData();
  inputData.addInput(schemaInput);



  // Convert the input data to C#
  const result = await quicktype({
    inputData,
    lang: "typescript", // Target language
    rendererOptions: {},
  });

  return result.lines.join("\n");
}


import { TSchema } from "@sinclair/typebox";

// Utility to determine the SQL type based on TypeBox schema
function getSQLType(field: TSchema): string {
  if (field.type === "string") {
    if (field.format === "uuid") return "UUID";
    const maxLength = field.maxLength ? `(${field.maxLength})` : "";
    return `VARCHAR${maxLength}`;
  }
  if (field.type === "boolean") return "BOOLEAN";
  if (field.type === "integer") return "INTEGER";
  if (field.type === "number") return "NUMERIC";
  return "TEXT";
}

function generateClientClasses(typeObject: TSchema, id: string) {
  if (
    id == "followerRequest" ||
    !id.endsWith("Response") &&
    !id.endsWith("message") &&
    !id.endsWith("deletion") &&
    !id.endsWith("Request") &&
    !id.endsWith("dnsEntry")
  ) {
    var clientClass = `
  import type { Table } from "dexie";
  ` + (id.endsWith("DatabaseItemData") ? `
    import type { ClientDatabaseItem } from "./DatabaseItem";
    ` : "") + `
  ` + (id == "databaseItem" ? `
    import { ClientSpellingDatabaseItemData } from "./SpellingDatabaseItemData";
    import { itemType } from "../../../server/typebox";
    import type { ClientSpellingDatabaseItem } from "./SpellingDatabaseItem";
    import { ClientOneByTwoDigraphsDatabaseItemData } from "./OneByTwoDigraphsDatabaseItemData";
    import type { ClientOneByTwoDigraphsDatabaseItem } from "./OneByTwoDigraphsDatabaseItem";
    import { ClientOneByOneMathDatabaseItemData } from "./OneByOneMathDatabaseItemData";
    import { ClientOneByOneMathDatabaseItem } from "./OneByOneMathDatabaseItem";

    ` : "") + `
  import { awesum } from "@/awesum";
  import type { Server${capitalize(id)
      }Interface } from "../../../server/serverInterfaces/Server${capitalize(id)
      }Interface";
  
  export class Client${capitalize(id)} implements Server${capitalize(id)
      }Interface {
      constructor(other?:Partial<Server${capitalize(id)
      }Interface>|null, table?: Table) {
          if (other) {
              (this as any)["id"] = (other as any)["id"];
               for (var i in other) {
                ` + (id == "databaseItem" ? `if(i == "data") {
                  if((other as ClientSpellingDatabaseItem).itemType == itemType.spelling) {
                    (this as unknown as ClientSpellingDatabaseItem).data = new ClientSpellingDatabaseItemData((other as ClientSpellingDatabaseItem).data, table);
                    (this as unknown as ClientSpellingDatabaseItem).data.parent = this;
                  }
                    if((other as ClientSpellingDatabaseItem).itemType == itemType.oneByTwoDigraphs) {
                    (this as unknown as ClientOneByTwoDigraphsDatabaseItem).data = new ClientOneByTwoDigraphsDatabaseItemData((other as ClientOneByTwoDigraphsDatabaseItem).data, table);
                    (this as unknown as ClientOneByTwoDigraphsDatabaseItem).data.parent = this;
                  }
                    if((other as ClientSpellingDatabaseItem).itemType == itemType.oneByOneMultiplication || 
                    (other as ClientSpellingDatabaseItem).itemType == itemType.oneByOneAddition) {
                    (this as unknown as ClientOneByOneMathDatabaseItem).data = new ClientOneByOneMathDatabaseItemData((other as ClientOneByOneMathDatabaseItem).data, table);
                    (this as unknown as ClientOneByOneMathDatabaseItem).data.parent = this;
                  }
               
                    continue;
                }` : "") + `
                    if (i == "id") continue;
                    if(i.startsWith("_")) {
                        (this as any)[i] = (other as any)[i];
                    } else {
                        (this as any)["_"+i] = (other as any)[i];
                    }
               }
          }
          if (table) {
               this.table = table;
          }
     }
     //id = "00000000-0000-0000-0000-000000000000";
     table!: Table;
     ` + (id.endsWith("DatabaseItemData") ? `parent!:ClientDatabaseItem;` : "") + `
  `;

    var columns: string[] = [];
    for (const [key, field] of Object.entries(typeObject.properties)) {
      if (
        key == "id" || key == "version" || key == "lastModified" || id == "media"
      ) {
        clientClass += `
    private _${key}: ${getJavascriptType(field as TSchema)} = ${getJavascriptDefaultValue(field as TSchema)
          };
    public get ${key}():${getJavascriptType(field as TSchema)
          } { return this._${key}; }
    public set ${key}(v:${getJavascriptType(field as TSchema)
          }) {if(this._${key} != v){this._${key}=v;awesum.setTablePropertyValueById(this.id, '${key}',v,this.table)}}`;;
      } else {
        clientClass += `
    private _${key}: ${getJavascriptType(field as TSchema)} = ${getJavascriptDefaultValue(field as TSchema)
          };
    public get ${key}():${getJavascriptType(field as TSchema)
          } { return this._${key}; }
    public set ${key}(v:${getJavascriptType(field as TSchema)
          }) {if(this._${key} != v){this` + (id.endsWith("DatabaseItemData") ? `.parent` : ``) + `.version++;this` + (id.endsWith("DatabaseItemData") ? `.parent` : ``) + `.lastModified=new Date().getTime();this._${key}=v;awesum.setTablePropertyValueById(this` + (id.endsWith("DatabaseItemData") ? `.parent` : ``) + `.id, ` + (id.endsWith("DatabaseItemData") ? `'data.${key}'` : `'${key}'`) + `,v,this` + (id.endsWith("DatabaseItemData") ? `.parent` : ``) + `.table)}}`;
      }
    }

    clientClass += `
  }
  `;

    const tableName = typeObject.$id![0].toUpperCase() +
      typeObject.$id!.slice(1);

    console.log("./../client/src/clientClasses/" + tableName + ".ts");

    writeFileSync(
      "./../client/src/clientClasses/" + tableName + ".ts",
      clientClass,
    );
  }
}

function getJavascriptType(field: TSchema): string {
  if (field.type === "string") return "string";
  if (field.type === "boolean") return "boolean";
  if (field.type === "integer") return "number";
  if (field.type === "number") return "number";
  return "any";
}

function getJavascriptDefaultValue(field: TSchema): string {
  if (field.type === "string") return '""';
  if (field.type === "boolean") return "false";
  if (field.type === "integer") return "0";
  if (field.type === "number") return "0";
  return "null";
}

// Function to generate PostgreSQL table schema from TypeBox object
function generatePostgresSchema(typeObject: TSchema, id: string) {
  const columns: string[] = [];
  const requiredFields = typeObject.required || [];

  for (const [key, field] of Object.entries(typeObject.properties)) {
    const isRequired = requiredFields.includes(key);
    const sqlType = getSQLType(field as TSchema);
    //const nullable = isRequired ? "NOT NULL" : "NULL";
    const nullable = isRequired ? "NOT NULL" : "NULL";
    if (key == "id") {
      columns.push(`"${key}" UUID PRIMARY KEY ${nullable}`);
    } else {
      columns.push(`"${key}" ${sqlType} ${nullable}`);
    }
  }

  const tableName = typeObject.$id![0].toUpperCase() + typeObject.$id!.slice(1);
  const tableDefinition = `DROP TABLE IF EXISTS awesum."${tableName}";
    CREATE TABLE awesum."${tableName}" (\n  ${columns.join(",\n  ")}\n);`;

  return tableDefinition;
}

// Function to process TypeBox definitions and generate tables
function processTypeBoxDefinitions(types: TSchema[]) {
  var schemaGen = `
  drop schema if exists awesum cascade; 
  create schema awesum;`;

  types.forEach((type) => {
    if (
      type.$id == "followerRequest" ||
      type.$id && !type.$id.endsWith("Response") &&
      !type.$id.endsWith("Request")
    ) {
      generateClientClasses(type as any, type.$id);

      // Skip DTO-like objects
      if (type.$id.endsWith("Item") && type.$id != "databaseItem" || type.$id.endsWith('ItemData')) {

      }
      else {
        const schema = generatePostgresSchema(type as any, type.$id);
        schemaGen += schema + "\n\n";
      }
    }
  });
  writeFileSync("postgresSchemas.sql", schemaGen);
}

// Generate PostgreSQL schemas
processTypeBoxDefinitions(types);

const messages: Record<string, string> = {};
messages["/required"] = "Required";

// Helper function to extract custom messages
function extractCustomMessages(
  schema: TSchema,
  parentPath = "",
): Record<string, string> {
  for (const [key, value] of Object.entries(schema.properties)) {
    const currentPath = `${parentPath}/properties/${key}`;

    // Loop through the properties of the schema
    for (const [subKey, subValue] of Object.entries(value as any)) {
      // If the property name ends with 'Message', it is a custom message for a keyword
      if (subKey.endsWith("Message")) {
        const keyword = subKey.replace("Message", ""); // Extract the corresponding keyword
        messages[`${currentPath}/${keyword}`] = subValue as string;
      }
    }

    // If the value has nested properties (another object), recursively traverse it
    if ((value as TSchema).properties) {
      Object.assign(
        messages,
        extractCustomMessages(value as TSchema, currentPath),
      );
    }
  }

  return messages;
}

var model2 = { types };

var ts = ModelToTypeScript.Generate(model2);

import { _, Ajv, KeywordCxt } from "ajv";
import addFormats from "ajv-formats";
import addKeywords from "ajv-keywords";
import standaloneCode from "ajv/dist/standalone";

const ajvClient = new Ajv({
  code: { source: true },
  allErrors: true,
});

addFormats(ajvClient);
addKeywords(ajvClient, ["transform"]);

ajvClient.addKeyword({
  keyword: "doesEmailExist",
  type: "string",
  schemaType: "boolean",
  code(cxt: KeywordCxt) {
    const { data, schema } = cxt;
    const op = schema ? _`!==` : _`===`;
    cxt.fail(_`!awaitSpaceServerAndClientFunctionsDotdoesEmailExist(${data})`); // ... the only code change needed is to use `cxt.fail$data` here
  },
});

ajvClient.addKeyword({
  keyword: "emailIsNotUser",
  type: "string",
  schemaType: "boolean",
  code(cxt: KeywordCxt) {
    const { data, schema } = cxt;
    const op = schema ? _`!==` : _`===`;
    cxt.fail(_`!awaitSpaceServerAndClientFunctionsDotemailIsNotUser(${data},awaesumUserName)`); // ... the only code change needed is to use `cxt.fail$data` here
  },
});

ajvClient.addKeyword({
  keyword: "isNameGloballyUnique",
  type: "string",
  schemaType: "boolean",
  code(cxt: KeywordCxt) {
    const { data, schema } = cxt;
    const op = schema ? _`!==` : _`===`;
    cxt.fail(_`!awaitSpaceServerAndClientFunctionsDotisNameGloballyUnique(${data})`); // ... the only code change needed is to use `cxt.fail$data` here
  },
});

const ajv = new Ajv({
  code: { source: true },
});
addFormats(ajv);
addKeywords(ajv, ["transform"]);

ajv.addKeyword({
  keyword: "doesEmailExist",
  type: "string",
  schemaType: "boolean",
  code(cxt: KeywordCxt) {
    const { data, schema } = cxt;
    const op = schema ? _`!==` : _`===`;
    cxt.fail(_`!awaitSpaceServerAndClientFunctionsDotdoesEmailExist(${data})`); // ... the only code change needed is to use `cxt.fail$data` here
  },
});

ajv.addKeyword({
  keyword: "emailIsNotUser",
  type: "string",
  schemaType: "boolean",
  code(cxt: KeywordCxt) {
    const { data, schema } = cxt;
    const op = schema ? _`!==` : _`===`;
    cxt.fail(_`!awaitSpaceServerAndClientFunctionsDotemailIsNotUser(${data},awaesumUserName)`); // ... the only code change needed is to use `cxt.fail$data` here
  },
});

ajv.addKeyword({
  keyword: "isNameGloballyUnique",
  type: "string",
  schemaType: "boolean",
  code(cxt: KeywordCxt) {
    const { data, schema } = cxt;
    const op = schema ? _`!==` : _`===`;
    cxt.fail(_`!awaitSpaceServerAndClientFunctionsDotisNameGloballyUnique(${data})`); // ... the only code change needed is to use `cxt.fail$data` here
  },
});

import { readFileSync, writeFileSync } from "fs";
import { ModelToTypeScript } from "./codegen/model/model-to-typescript";

import * as prettier from "prettier/standalone";
import * as prettier_typescript from "prettier/plugins/typescript";
import * as prettier_estree from "prettier/plugins/estree";
import path from "path";
import { exit } from "process";

//for each type in types, generate the schema, get the moduleCode and write to file
types.forEach((type) => {
  extractCustomMessages(type);

  //remove all <keyword>Message fields from the schema
  var schema = JSON.stringify(type);
  schema = schema.replace(/"[A-Za-z0-9]+?Message":".*?",/g, "");
  schema = schema.replace(/"[A-Za-z0-9]+?Message":".*?"/g, "");

  // var schema = ModelToJsonSchema.Generate({
  //   types: [type],
  // });

  writeFileSync("jsonSchemas/" + type.$id + ".json", schema);



  jsonSchemaToTS(
    schema.replaceAll("export const " + type.$id + " = ", ""),
    "Server" + capitalize(type.$id!) + "Interface",
  ).then((tsCode: string) => {
    tsCode = tsCode.replace(
      /    \[property: string\]: any;.*/gs,
      "    [property: string]: any; }",
    );

    /* writeFileSync(
      "./serverInterfaces/" + "Server" + capitalize(type.$id!) + "Interface.ts",
      tsCode,
    ); */

    var typeId = type.$id;
    execSync(`npx json2ts ./jsonSchemas/${typeId}.json ./serverInterfaces/Server${capitalize(typeId!)}Interface.ts`);

    //edit the generated file to change the export name to Server${capitalize(typeId!)}Interface
    var generatedFile = "./serverInterfaces/Server" + capitalize(typeId!) + "Interface.ts";
    var generatedFileContent = readFileSync(generatedFile, "utf8");
    generatedFileContent = generatedFileContent.replace("export interface " + capitalize(typeId!) + " {", "export interface Server" + capitalize(typeId!) + "Interface {");
    generatedFileContent = generatedFileContent.replaceAll("[k: string]: unknown;", "");
    writeFileSync(generatedFile, generatedFileContent);
  });


  const clientValidate = ajvClient.compile(
    JSON.parse(schema.replaceAll("export const " + type.$id + " = ", "")),
  );
  let moduleClientCode = standaloneCode(ajvClient, clientValidate);



  //user prettier javascript on moduleCode
  prettier
    .format(moduleClientCode, {
      parser: "typescript",
      plugins: [prettier_typescript, prettier_estree as any],
      trailingComma: "none",
      printWidth: 80,
      singleQuote: true,
      semi: false,
    })
    .then((formattedCode: string) => {
      var originalCode = formattedCode;



      //AwesumDotCustomValidation needs to be replaced with await Awesum.CustomValidation
      formattedCode = formattedCode.replace(
        /awaitSpaceServerAndClientFunctionsDot(.*)\(/g,
        "await serverAndClientFunctions.$1(",
      );

      formattedCode = formattedCode.replaceAll(
        "serverAndClientFunctions.isNameGloballyUnique(",
        "serverAndClientFunctions.isNameGloballyUnique(data,",
      );

      formattedCode = formattedCode.replace(
        /function validate[\d]*/,
        "import type { ErrorObject } from 'ajv'\nimport * as serverAndClientFunctions from '../serverAndClientFunctions'\nimport type { Server" + type.$id![0].toUpperCase() +
        type.$id!.slice(1) + "Interface } from '../serverInterfaces/Server" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1) +
        "Interface'\nexport async function validate" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1),
      );

      formattedCode = formattedCode.replace(
        /module.exports.default = validate.*\n/g,
        "",
      );

      formattedCode = formattedCode.replace(
        /const (func[\d]*) = require\('ajv\/dist\/runtime\/ucs2length'\).default/g,
        "import * as ucs2length from 'ajv/dist/runtime/ucs2length';const $1 = ucs2length.default;",
      );

      formattedCode = formattedCode.replace(
        /const (func[\d]*) = require\('ajv-keywords\/dist\/definitions\/transform'\).transform.trim/g,
        "import transform from 'ajv-keywords/dist/definitions/transform'\nconst $1 = transform.transform.trim",
      );

      if (formattedCode.includes(".transform\n  .toLowerCase")) {
        console.log("transform.transform.toLowerCase");
        //
        // const (func[\d]*) = require\('ajv-keywords\/dist\/definitions\/transform'\).transform\n  .toLowerCase/g,
        formattedCode = formattedCode.replace(
          "import transform from 'ajv-keywords/dist/definitions/transform'", ""
        );
        // const (func[\d]*) = require\('ajv-keywords\/dist\/definitions\/transform'\).transform\n  .toLowerCase/g,
        formattedCode = formattedCode.replace(
          /const (func[\d]*) = require\('ajv-keywords\/dist\/definitions\/transform'\).transform\n  .toLowerCase/g,
          "import transform from 'ajv-keywords/dist/definitions/transform'\nconst $1 = transform.transform.toLowerCase",
        );
      }
      formattedCode = formattedCode.replace(
        /const (formats[\d]*) = require\('ajv-formats\/dist\/formats'\).fullFormats.regex/g,
        "import * as formats from 'ajv-formats/dist/formats'\nconst $1 = formats.fullFormats.regex as any",
      );

      formattedCode = formattedCode.replace(
        /module.exports = validate.*\n/g,
        "",
      );

      formattedCode = formattedCode.replace(
        /const (pattern[\d]+?) \= new RegExp\('\/(.*)\/i', 'u'\)/g,
        "const $1 = new RegExp(/$2/, 'i');",
      );

      formattedCode = formattedCode.replace(
        /module.exports.default = validate.*\n/g,
        "module.exports.default = validate" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1) + "\n",
      );

      formattedCode = formattedCode.replaceAll(
        "{ instancePath = '', parentData, parentDataProperty, rootData = data } = {}\n)",
        'instancePath = ""): Promise<Array<ErrorObject>>',
      );

      formattedCode = formattedCode.replaceAll(
        "\n  let errors = 0",
        "\nlet errors: Array<ErrorObject> = []",
      );
      formattedCode = formattedCode.replace(/\n[\s]*(.*)/gm, "\n$1");
      formattedCode = formattedCode.replace(/:\n(.*)/gm, ": $1");
      formattedCode = formattedCode.replace(/=\n(.*)/gm, "= $1");
      formattedCode = formattedCode.replace(/'\n},/gm, "'},");
      formattedCode = formattedCode.replace(/\+\n'/gm, "+ '");

      formattedCode = formattedCode.replaceAll('\{2\}', 'OPENBRACES2CLOSEBRACES')
      formattedCode = formattedCode.replaceAll('\{5\}', 'OPENBRACES5CLOSEBRACES')

      for (const message in messages) {
        formattedCode = formattedCode.replace(
          new RegExp(
            "schemaPath: '#" + message + "',(...+?)message:...+?}",
            "isg",
          ),
          `schemaPath: '#${message}',$1 message: "${messages[message]}"}`,
        );
      }

      formattedCode = formattedCode.replaceAll('OPENBRACES2CLOSEBRACES', '{2}')
      formattedCode = formattedCode.replaceAll('OPENBRACES5CLOSEBRACES', '{5}')

      formattedCode = formattedCode.replace(
        /\nvalidate.*.errors = \[/g,
        "errors.push(",
      );
      formattedCode = formattedCode.replace(/\]\nreturn false/gs, ");");

      //replace \ndata, with \ndata:Servertype.$id[0].toUpperCase() + type.$id.slice(1) + '\n'
      formattedCode = formattedCode.replaceAll(
        "\ndata,\n",
        "\ndata:Server" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1) + "Interface,\n",
      );

      formattedCode = formattedCode.replace(
        /\nvalidate[\d]*.errors = vErrors/,
        "",
      );
      formattedCode = formattedCode.replace(
        /return errors === 0/,
        "return errors",
      );

      formattedCode = formattedCode.replace(
        /(validate[\d]*).errors/g,
        "(validate" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1) + " as any).errors",
      );

      formattedCode = formattedCode.replace(
        /if \(errors ==.*\) {/g,
        "if (true) {",
      );

      formattedCode = formattedCode.replaceAll(
        "errors++",
        "",
      );

      formattedCode = formattedCode.replaceAll(
        "return errors",
        "return vErrors",
      );

      formattedCode = formattedCode.replaceAll(
        "return errors",
        "return vErrors",
      );

      formattedCode = formattedCode.replaceAll(
        "let vErrors = null",
        "",
      );

      formattedCode = formattedCode.replaceAll(
        "let errors: Array<ErrorObject> = []",
        "let vErrors: Array<ErrorObject> = []",
      );

      formattedCode = formattedCode.replace(
        "): Promise<Array<ErrorObject>> {",
        ",awaesumUserName?:string): Promise<Array<ErrorObject>> {",
      );

      writeFileSync("javascriptClientValidations/" + type.$id + ".ts", formattedCode);

      formattedCode = originalCode;
      var matches = formattedCode.match(/const (schema[\d]*) \= ...*?\n}/s);
      if (matches) {
        var schemaCode = matches[0];
        var v = eval(
          schemaCode.replace(
            /const schema\d\d \= /,
            "function asd(){ return ",
          ) +
          "};asd()",
        );
      }
    });

  const validate = ajv.compile(
    JSON.parse(schema.replaceAll("export const " + type.$id + " = ", "")),
  );
  let moduleCode = standaloneCode(ajv, validate);

  //user prettier javascript on moduleCode
  prettier
    .format(moduleCode, {
      parser: "typescript",
      plugins: [prettier_typescript, prettier_estree as any],
      trailingComma: "none",
      printWidth: 80,
      singleQuote: true,
      semi: false,
    })
    .then((formattedCode: string) => {
      var originalCode = formattedCode;

      formattedCode = formattedCode.replace(
        /const (func[\d]*) = require\('ajv\/dist\/runtime\/ucs2length'\).default/g,
        "import ucs2length from 'ajv/dist/runtime/ucs2length';const $1 = (ucs2length as any).default;",
      );
      

formattedCode = formattedCode.replace(
  "const func2 = require('ajv-keywords/dist/definitions/transform').transform",
  "const func2 = (await import('ajv-keywords/dist/definitions/transform')).default.transform",
);

formattedCode = formattedCode.replace(
  "const func3 = require('ajv-keywords/dist/definitions/transform').transform",
  "const func3 = (await import('ajv-keywords/dist/definitions/transform')).default.transform",
);

      //AwesumDotCustomValidation needs to be replaced with await Awesum.CustomValidation
      formattedCode = formattedCode.replace(
        /awaitSpaceServerAndClientFunctionsDot(.*)\(/g,
        "await serverAndClientFunctions.$1(",
      );

      formattedCode = formattedCode.replaceAll(
        "serverAndClientFunctions.isNameGloballyUnique(",
        "serverAndClientFunctions.isNameGloballyUnique(data.email,",
      );

      formattedCode = formattedCode.replace(
        /function validate[\d]*/,
        "import type { ErrorObject } from 'ajv'\nimport * as serverAndClientFunctions from '../serverAndClientFunctions'\nimport type { Server" + type.$id![0].toUpperCase() +
        type.$id!.slice(1) + "Interface } from '../serverInterfaces/Server" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1) +
        "Interface'\nexport async function validate" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1),
      );

      formattedCode = formattedCode.replace(
        /module.exports.default = validate.*\n/g,
        "",
      );

      formattedCode = formattedCode.replace(
        /const (func[\d]*) = require\('ajv\/dist\/runtime\/ucs2length'\).default/g,
        "import ucs2length from 'ajv/dist/runtime/ucs2length';const $1 = (ucs2length as any).default;",
      );

      formattedCode = formattedCode.replace(
        /const (formats[\d]*) = require\('ajv-formats\/dist\/formats'\).fullFormats.regex/g,
        "import * as formats from 'ajv-formats/dist/formats'\nconst $1 = formats.fullFormats.regex as any",
      );

      formattedCode = formattedCode.replace(
        /module.exports = validate.*\n/g,
        "",
      );

      formattedCode = formattedCode.replace(
        /const (pattern[\d]+?) \= new RegExp\('\/(.*)\/i', 'u'\)/g,
        "const $1 = new RegExp(/$2/, 'i');",
      );

      formattedCode = formattedCode.replace(
        /module.exports.default = validate.*\n/g,
        "module.exports.default = validate" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1) + "\n",
      );

      formattedCode = formattedCode.replaceAll(
        "{ instancePath = '', parentData, parentDataProperty, rootData = data } = {}\n)",
        'instancePath = ""): Promise<Array<ErrorObject>>',
      );

      formattedCode = formattedCode.replaceAll(
        "\n  let errors = 0",
        "\nlet errors: Array<ErrorObject> = []",
      );
      formattedCode = formattedCode.replace(/\n[\s]*(.*)/gm, "\n$1");
      formattedCode = formattedCode.replace(/:\n(.*)/gm, ": $1");
      formattedCode = formattedCode.replace(/=\n(.*)/gm, "= $1");
      formattedCode = formattedCode.replace(/'\n},/gm, "'},");
      formattedCode = formattedCode.replace(/\+\n'/gm, "+ '");

      formattedCode = formattedCode.replaceAll('\{2\}', 'OPENBRACES2CLOSEBRACES')
      formattedCode = formattedCode.replaceAll('\{5\}', 'OPENBRACES5CLOSEBRACES')

      for (const message in messages) {
        formattedCode = formattedCode.replace(
          new RegExp(
            "schemaPath: '#" + message + "',(...+?)message:...+?}",
            "isg",
          ),
          `schemaPath: '#${message}',$1 message: "${messages[message]}"}`,
        );
      }

      formattedCode = formattedCode.replaceAll('OPENBRACES2CLOSEBRACES', '{2}')
      formattedCode = formattedCode.replaceAll('OPENBRACES5CLOSEBRACES', '{5}')

      formattedCode = formattedCode.replace(
        /\nvalidate.*.errors = \[/g,
        "errors.push(",
      );
      formattedCode = formattedCode.replace(/\]\nreturn false/gs, ");");

      //replace \ndata, with \ndata:Servertype.$id[0].toUpperCase() + type.$id.slice(1) + '\n'
      formattedCode = formattedCode.replaceAll(
        "\ndata,\n",
        "\ndata:Server" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1) + "Interface,\n",
      );

      formattedCode = formattedCode.replace(
        /\nvalidate[\d]*.errors = vErrors/,
        "",
      );
      formattedCode = formattedCode.replace(
        /return errors === 0/,
        "return errors",
      );

      formattedCode = formattedCode.replace(
        /(validate[\d]*).errors/g,
        "(validate" +
        type.$id![0].toUpperCase() +
        type.$id!.slice(1) + " as any).errors",
      );

      formattedCode = formattedCode.replace(
        /if \(errors ==.*\) {/g,
        "if (true) {",
      );

      formattedCode = formattedCode.replace(
        "): Promise<Array<ErrorObject>> {",
        ",awaesumUserName?:string): Promise<Array<ErrorObject>> {",
      );

      writeFileSync("javascriptValidations/" + type.$id + ".ts", formattedCode);

      formattedCode = originalCode;
      var matches = formattedCode.match(/const (schema[\d]*) \= ...*?\n}/s);
      if (matches) {
        var schemaCode = matches[0];
        var v = eval(
          schemaCode.replace(
            /const schema\d\d \= /,
            "function asd(){ return ",
          ) +
          "};asd()",
        );
      }
    });

  var tsCode = ModelToTypeScript.Generate({
    types: [type],
  });

  prettier
    .format(tsCode, {
      parser: "typescript",
      plugins: [prettier_typescript, prettier_estree as any],
      trailingComma: "none",
      printWidth: 80,
      singleQuote: true,
      semi: false,
    })
    .then((formattedCode: string) => {
      formattedCode = formattedCode.replace(/export const ...*/s, "");
      writeFileSync("./tsFiles/" + type.$id + ".ts", formattedCode);
    });
});

//convert all files in the /resources folder from ts objects to json files using a for loop
const resourcesFolder = "./../client/src/resources";

import * as fs from "fs"
fs.readdir(resourcesFolder, (err: any, files: any) => {
  files.forEach(async (file: any) => {
    if (file.startsWith("Resources.")) {
      var resources = await import(resourcesFolder + "/" + file);
      resources = resources[Object.keys(resources)[0]];
      for (const key in resources) {
        if (resources[key].key) {
          resources[key] = resources[key].value;
        }
        if (key.startsWith("_")) {
          delete resources[key];
        }
      }
      const resourcesJson = JSON.stringify(resources, null, 2);
      writeFileSync(
        "./resources/" +
        file.replace("Resources.ts", "Resources.en-US.ts").replace(
          ".ts",
          ".json",
        ),
        resourcesJson,
      );
    }
  });
});



if (process.platform === "win32") {
  execSync(
    `"C:/Program Files/PostgreSQL/16/bin/psql.exe" -U postgres -h localhost -d awesumDev -p 5432 -f postgresSchemas.sql`,
  );
} else {
  execSync(
    `psql -U postgres -h localhost -d awesumDev -p 5432 -f postgresSchemas.sql`,
  );
}

execSync(`npx kysely-codegen --out-file ./db/db.d.ts --type-mapping='{"numeric":"number"}'`)