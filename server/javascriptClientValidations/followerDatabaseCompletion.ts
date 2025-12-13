'use strict'
const schema29 = {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019b148f-9161-730a-bb36-c59da5468e05',
format: 'uuid',
type: 'string'},
followerRequestId: { format: 'uuid', type: 'string' },
itemId: { format: 'uuid', type: 'string' },
parentItemId: { format: 'uuid', type: 'string' },
itemLevel: { minimum: 0, maximum: 9, type: 'integer' },
lastModified: { default: 0, type: 'number' }
},
required: [
'id',
'followerRequestId',
'itemId',
'parentItemId',
'itemLevel',
'lastModified'
]
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerFollowerDatabaseCompletionInterface } from '../serverInterfaces/ServerFollowerDatabaseCompletionInterface'
export async function validateFollowerDatabaseCompletion(
data:ServerFollowerDatabaseCompletionInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="followerDatabaseCompletion" */ 
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
if (data.followerRequestId === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'followerRequestId' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.itemId === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'itemId' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.parentItemId === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'parentItemId' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.itemLevel === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'itemLevel' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.lastModified === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.id !== undefined) {
let data0 = data.id
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err6 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
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
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
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
if (data.followerRequestId !== undefined) {
let data1 = data.followerRequestId
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err8 = {
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/format',
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
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/type',
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
if (data.itemId !== undefined) {
let data2 = data.itemId
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err10 = {
instancePath: instancePath + '/itemId',
schemaPath: '#/properties/itemId/format',
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
instancePath: instancePath + '/itemId',
schemaPath: '#/properties/itemId/type',
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
if (data.parentItemId !== undefined) {
let data3 = data.parentItemId
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {
const err12 = {
instancePath: instancePath + '/parentItemId',
schemaPath: '#/properties/parentItemId/format',
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
instancePath: instancePath + '/parentItemId',
schemaPath: '#/properties/parentItemId/type',
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
if (data.itemLevel !== undefined) {
let data4 = data.itemLevel
if (
!(
typeof data4 == 'number' &&
!(data4 % 1) &&
!isNaN(data4) &&
isFinite(data4)
)
) {
const err14 = {
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/type',
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
if (typeof data4 == 'number' && isFinite(data4)) {
if (data4 > 9 || isNaN(data4)) {
const err15 = {
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
if (data4 < 0 || isNaN(data4)) {
const err16 = {
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
}
}
if (data.lastModified !== undefined) {
let data5 = data.lastModified
if (!(typeof data5 == 'number' && isFinite(data5))) {
const err17 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
}
} else {
const err18 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
return vErrors
}
