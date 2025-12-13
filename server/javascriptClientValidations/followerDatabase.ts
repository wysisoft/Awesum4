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
default: '019b148f-9161-730a-bb36-b87cd07cfb6b',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
version: { default: 0, minimum: 0, type: 'integer' },
databaseVersion: { default: 0, minimum: 0, type: 'integer' },
databaseLastModified: { default: 0, type: 'number' },
unitVersion: { default: 0, minimum: 0, type: 'integer' },
unitLastModified: { default: 0, type: 'number' },
itemVersion: { default: 0, minimum: 0, type: 'integer' },
itemLastModified: { default: 0, type: 'number' }
},
required: [
'followerRequestId',
'id',
'databaseId',
'lastModified',
'touched',
'version',
'databaseVersion',
'databaseLastModified',
'unitVersion',
'unitLastModified',
'itemVersion',
'itemLastModified'
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
if (data.databaseVersion === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'databaseVersion' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.databaseLastModified === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'databaseLastModified' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.unitVersion === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'unitVersion' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.unitLastModified === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'unitLastModified' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.itemVersion === undefined) {
const err10 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'itemVersion' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data.itemLastModified === undefined) {
const err11 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'itemLastModified' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data.followerRequestId !== undefined) {
let data0 = data.followerRequestId
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err12 = {
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
} else {
const err13 = {
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
}
if (data.id !== undefined) {
let data1 = data.id
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err14 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
} else {
const err15 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
}
if (data.databaseId !== undefined) {
let data2 = data.databaseId
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err16 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
} else {
const err17 = {
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
}
if (data.lastModified !== undefined) {
let data3 = data.lastModified
if (!(typeof data3 == 'number' && isFinite(data3))) {
const err18 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
}
if (data.touched !== undefined) {
if (typeof data.touched !== 'boolean') {
const err19 = {
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
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
const err20 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 < 0 || isNaN(data5)) {
const err21 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
}
}
if (data.databaseVersion !== undefined) {
let data6 = data.databaseVersion
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {
const err22 = {
instancePath: instancePath + '/databaseVersion',
schemaPath: '#/properties/databaseVersion/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 < 0 || isNaN(data6)) {
const err23 = {
instancePath: instancePath + '/databaseVersion',
schemaPath: '#/properties/databaseVersion/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
}
}
if (data.databaseLastModified !== undefined) {
let data7 = data.databaseLastModified
if (!(typeof data7 == 'number' && isFinite(data7))) {
const err24 = {
instancePath: instancePath + '/databaseLastModified',
schemaPath: '#/properties/databaseLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
}
if (data.unitVersion !== undefined) {
let data8 = data.unitVersion
if (
!(
typeof data8 == 'number' &&
!(data8 % 1) &&
!isNaN(data8) &&
isFinite(data8)
)
) {
const err25 = {
instancePath: instancePath + '/unitVersion',
schemaPath: '#/properties/unitVersion/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 < 0 || isNaN(data8)) {
const err26 = {
instancePath: instancePath + '/unitVersion',
schemaPath: '#/properties/unitVersion/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
}
}
if (data.unitLastModified !== undefined) {
let data9 = data.unitLastModified
if (!(typeof data9 == 'number' && isFinite(data9))) {
const err27 = {
instancePath: instancePath + '/unitLastModified',
schemaPath: '#/properties/unitLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
}
if (data.itemVersion !== undefined) {
let data10 = data.itemVersion
if (
!(
typeof data10 == 'number' &&
!(data10 % 1) &&
!isNaN(data10) &&
isFinite(data10)
)
) {
const err28 = {
instancePath: instancePath + '/itemVersion',
schemaPath: '#/properties/itemVersion/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
if (typeof data10 == 'number' && isFinite(data10)) {
if (data10 < 0 || isNaN(data10)) {
const err29 = {
instancePath: instancePath + '/itemVersion',
schemaPath: '#/properties/itemVersion/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
}
}
if (data.itemLastModified !== undefined) {
let data11 = data.itemLastModified
if (!(typeof data11 == 'number' && isFinite(data11))) {
const err30 = {
instancePath: instancePath + '/itemLastModified',
schemaPath: '#/properties/itemLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
}
} else {
const err31 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
return vErrors
}
