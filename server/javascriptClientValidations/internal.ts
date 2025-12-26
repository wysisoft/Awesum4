'use strict'
const schema16 = {
$id: 'internal',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
lastModified: { default: 0, type: 'integer' }
},
required: ['id', 'lastModified']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerInternalInterface } from '../serverInterfaces/ServerInternalInterface'
export async function validateInternal(
data:ServerInternalInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="internal" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.id === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.lastModified === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.id !== undefined) {
let data0 = data.id
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err2 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
} else {
const err3 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
}
if (data.lastModified !== undefined) {
let data1 = data.lastModified
if (
!(
typeof data1 == 'number' &&
!(data1 % 1) &&
!isNaN(data1) &&
isFinite(data1)
)
) {
const err4 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
}
} else {
const err5 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
return vErrors
}
