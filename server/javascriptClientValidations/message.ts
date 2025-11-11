'use strict'
const schema14 = {
$id: 'message',
type: 'object',
properties: {
level: { minimum: 0, maximum: 8, type: 'integer' },
message: { minLength: 1, maxLength: 100, type: 'string' },
id: { format: 'uuid', type: 'string' }
},
required: ['level', 'message', 'id']
}
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerMessageInterface } from '../serverInterfaces/ServerMessageInterface'
export async function validateMessage(
data:ServerMessageInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="message" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.level === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'level' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.message === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'message' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.id === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.level !== undefined) {
let data0 = data.level
if (
!(
typeof data0 == 'number' &&
!(data0 % 1) &&
!isNaN(data0) &&
isFinite(data0)
)
) {
const err3 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (typeof data0 == 'number' && isFinite(data0)) {
if (data0 > 8 || isNaN(data0)) {
const err4 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 8 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data0 < 0 || isNaN(data0)) {
const err5 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
}
}
if (data.message !== undefined) {
let data1 = data.message
if (typeof data1 === 'string') {
if (func4(data1) > 100) {
const err6 = {
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (func4(data1) < 1) {
const err7 = {
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
} else {
const err8 = {
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
}
if (data.id !== undefined) {
let data2 = data.id
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err9 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
} else {
const err10 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
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
} else {
const err11 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
return vErrors
}
