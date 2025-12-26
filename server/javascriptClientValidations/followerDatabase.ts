'use strict'
const schema23 = {
$id: 'followerDatabase',
type: 'object',
properties: {
followerRequestId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
id: {
default: '019b5b8d-43e9-7712-a981-9190d5796332',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 0, type: 'integer' },
touched: { default: true, type: 'boolean' },
version: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'followerRequestId',
'id',
'databaseId',
'lastModified',
'touched',
'version'
]
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerFollowerDatabaseInterface } from '../serverInterfaces/ServerFollowerDatabaseInterface'
export async function validateFollowerDatabase(
data:ServerFollowerDatabaseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="followerDatabase" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.followerRequestId === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.id === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.databaseId === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'databaseId' },
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
if (data.touched === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'touched' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.version === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'version' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.followerRequestId !== undefined) {
let data0 = data.followerRequestId
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err6 = {
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/format',
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
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/type',
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
if (data.id !== undefined) {
let data1 = data.id
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err8 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
} else {
const err9 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
}
if (data.databaseId !== undefined) {
let data2 = data.databaseId
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err10 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
} else {
const err11 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
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
const err12 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_a_number"
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
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
}
if (data.version !== undefined) {
let data5 = data.version
if (
!(
typeof data5 == 'number' &&
!(data5 % 1) &&
!isNaN(data5) &&
isFinite(data5)
)
) {
const err14 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 < 0 || isNaN(data5)) {
const err15 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
}
}
} else {
const err16 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
return vErrors
}
