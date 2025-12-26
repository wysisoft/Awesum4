'use strict'
const schema13 = {
$id: 'deletion',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
databaseId: { format: 'uuid', type: 'string' },
level: { minimum: 0, maximum: 9, type: 'integer' },
lastModified: { default: 0, type: 'integer' }
},
required: ['id', 'databaseId', 'level', 'lastModified']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDeletionInterface } from '../serverInterfaces/ServerDeletionInterface'
export async function validateDeletion(
data:ServerDeletionInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="deletion" */ 
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
if (data.databaseId === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.level === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'level' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.lastModified === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.id !== undefined) {
let data0 = data.id
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err4 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
} else {
const err5 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
}
if (data.databaseId !== undefined) {
let data1 = data.databaseId
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err6 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
} else {
const err7 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
}
if (data.level !== undefined) {
let data2 = data.level
if (
!(
typeof data2 == 'number' &&
!(data2 % 1) &&
!isNaN(data2) &&
isFinite(data2)
)
) {
const err8 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (typeof data2 == 'number' && isFinite(data2)) {
if (data2 > 9 || isNaN(data2)) {
const err9 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data2 < 0 || isNaN(data2)) {
const err10 = {
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
}
}
if (data.lastModified !== undefined) {
let data3 = data.lastModified
if (
!(
typeof data3 == 'number' &&
!(data3 % 1) &&
!isNaN(data3) &&
isFinite(data3)
)
) {
const err11 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
}
} else {
const err12 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
return vErrors
}
