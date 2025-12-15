'use strict'
const schema17 = {
$id: 'database',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
lastModified: { default: 0, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019b2018-64e2-74dc-b86c-251ef9347e63',
format: 'uuid',
type: 'string'},
order: { default: 0, minimum: 0, type: 'integer' },
homePageIconType: { default: 0, minimum: 0, maximum: 3, type: 'integer' },
homePageIcon: {
default: '00000000-0000-0000-0000-000000000002',
format: 'uuid',
type: 'string'},
touched: { default: true, type: 'boolean' }
},
required: [
'name',
'lastModified',
'version',
'appId',
'id',
'order',
'homePageIconType',
'homePageIcon',
'touched'
]
}
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDatabaseInterface } from '../serverInterfaces/ServerDatabaseInterface'
export async function validateDatabase(
data:ServerDatabaseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="database" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.name === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'name' },
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
if (data.version === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'version' },
 message: "Required"
}
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
 message: "Required"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.id === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.order === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'order' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.homePageIconType === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'homePageIconType' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.homePageIcon === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'homePageIcon' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.touched === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'touched' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.name !== undefined) {
let data0 = data.name
if (typeof data0 === 'string') {
if (func4(data0) > 100) {
const err9 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (func4(data0) < 1) {
const err10 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
} else {
const err11 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/type',
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
let data1 = data.lastModified
if (!(typeof data1 == 'number' && isFinite(data1))) {
const err12 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
}
if (data.version !== undefined) {
let data2 = data.version
if (
!(
typeof data2 == 'number' &&
!(data2 % 1) &&
!isNaN(data2) &&
isFinite(data2)
)
) {
const err13 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (typeof data2 == 'number' && isFinite(data2)) {
if (data2 < 0 || isNaN(data2)) {
const err14 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
}
}
if (data.appId !== undefined) {
let data3 = data.appId
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {
const err15 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
} else {
const err16 = {
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
}
if (data.id !== undefined) {
let data4 = data.id
if (typeof data4 === 'string') {
if (!formats2.test(data4)) {
const err17 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err17]
} else {
vErrors.push(err17)
}

}
} else {
const err18 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
}
if (data.order !== undefined) {
let data5 = data.order
if (
!(
typeof data5 == 'number' &&
!(data5 % 1) &&
!isNaN(data5) &&
isFinite(data5)
)
) {
const err19 = {
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 < 0 || isNaN(data5)) {
const err20 = {
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
}
}
if (data.homePageIconType !== undefined) {
let data6 = data.homePageIconType
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {
const err21 = {
instancePath: instancePath + '/homePageIconType',
schemaPath: '#/properties/homePageIconType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 3 || isNaN(data6)) {
const err22 = {
instancePath: instancePath + '/homePageIconType',
schemaPath: '#/properties/homePageIconType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (data6 < 0 || isNaN(data6)) {
const err23 = {
instancePath: instancePath + '/homePageIconType',
schemaPath: '#/properties/homePageIconType/minimum',
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
if (data.homePageIcon !== undefined) {
let data7 = data.homePageIcon
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {
const err24 = {
instancePath: instancePath + '/homePageIcon',
schemaPath: '#/properties/homePageIcon/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
} else {
const err25 = {
instancePath: instancePath + '/homePageIcon',
schemaPath: '#/properties/homePageIcon/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
}
if (data.touched !== undefined) {
if (typeof data.touched !== 'boolean') {
const err26 = {
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
}
} else {
const err27 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
return vErrors
}
