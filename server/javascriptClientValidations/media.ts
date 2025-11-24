'use strict'
const schema26 = {
$id: 'media',
type: 'object',
properties: {
id: {
default: '019ab2f1-3b3b-7707-bc13-62cbf154bf1f',
format: 'uuid',
type: 'string'},
size: { minimum: 0, type: 'integer' },
data: { maxLength: 8000, type: 'string' },
appId: { format: 'uuid', type: 'string' },
touched: { default: true, type: 'boolean' }
},
required: ['id', 'size', 'data', 'appId', 'touched']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerMediaInterface } from '../serverInterfaces/ServerMediaInterface'
export async function validateMedia(
data:ServerMediaInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="media" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.id === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.size === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'size' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.data === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'data' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.appId === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'appId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.touched === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'touched' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.id !== undefined) {
let data0 = data.id
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err5 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
} else {
const err6 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
}
if (data.size !== undefined) {
let data1 = data.size
if (
!(
typeof data1 == 'number' &&
!(data1 % 1) &&
!isNaN(data1) &&
isFinite(data1)
)
) {
const err7 = {
instancePath: instancePath + '/size',
schemaPath: '#/properties/size/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 < 0 || isNaN(data1)) {
const err8 = {
instancePath: instancePath + '/size',
schemaPath: '#/properties/size/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
}
}
if (data.data !== undefined) {
let data2 = data.data
if (typeof data2 === 'string') {
if (func4(data2) > 8000) {
const err9 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
} else {
const err10 = {
instancePath: instancePath + '/data',
schemaPath: '#/properties/data/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
}
if (data.appId !== undefined) {
let data3 = data.appId
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {
const err11 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
} else {
const err12 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
}
if (data.touched !== undefined) {
if (typeof data.touched !== 'boolean') {
const err13 = {
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
}
} else {
const err14 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
return vErrors
}
