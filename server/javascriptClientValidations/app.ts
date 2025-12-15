'use strict'
const schema12 = {
$id: 'app',
type: 'object',
properties: {
email: {
minLength: 5,
maxLength: 100,
format: 'email',
transform: ['trim', 'toLowerCase'],
type: 'string'},
name: {
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
uniqueName: {
minLength: 1,
maxLength: 100,
pattern: '/^(?!API$|I$).+$/i',
isNameGloballyUnique: true,
transform: ['trim', 'toLowerCase'],
type: 'string'},
version: { default: 0, minimum: 0, type: 'integer' },
touched: { default: false, type: 'boolean' },
lastModified: { default: 1765770028258, type: 'number' },
homePageImageType: { default: 0, minimum: 0, maximum: 3, type: 'integer' },
homePageImage: {
default: '00000000-0000-0000-0000-000000000001',
format: 'uuid',
type: 'string'},
authenticationType: {
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
lang: {
default: 'en-US',
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
enableNarrator: { default: false, type: 'boolean' },
groups: { default: '', maxLength: 8000, type: 'string' },
id: {
default: '019b2018-64e2-74dc-b86c-2146a2231b9c',
format: 'uuid',
minLength: 36,
type: 'string'},
lastSync: { default: 0, type: 'number' }
},
required: [
'email',
'name',
'uniqueName',
'version',
'touched',
'lastModified',
'homePageImageType',
'homePageImage',
'authenticationType',
'lang',
'enableNarrator',
'groups',
'id',
'lastSync'
]
}
import transform from 'ajv-keywords/dist/definitions/transform'
const func2 = transform.transform.toLowerCase
const func3 = transform.transform.trim
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const pattern0 = new RegExp(/^(?!API$|I$).+$/, 'i');
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerAppInterface } from '../serverInterfaces/ServerAppInterface'
export async function validateApp(
data:ServerAppInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="app" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.email === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'email' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.name === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'name' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data.uniqueName === undefined) {
const err2 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'uniqueName' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data.version === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'version' },
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
if (data.homePageImageType === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'homePageImageType' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.homePageImage === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'homePageImage' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.authenticationType === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'authenticationType' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.lang === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lang' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.enableNarrator === undefined) {
const err10 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'enableNarrator' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data.groups === undefined) {
const err11 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'groups' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data.id === undefined) {
const err12 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'id' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data.lastSync === undefined) {
const err13 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lastSync' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data.email !== undefined) {
let data0 = data.email
if (typeof data0 == 'string' && data !== undefined) {
data0 = func2(func3(data0))
data['email'] = data0
}
if (typeof data0 === 'string') {
if (func4(data0) > 100) {
const err14 = {
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
if (func4(data0) < 5) {
const err15 = {
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err15]
} else {
vErrors.push(err15)
}

}
if (!formats0.test(data0)) {
const err16 = {
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
} else {
const err17 = {
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/type',
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
if (data.name !== undefined) {
let data1 = data.name
if (typeof data1 == 'string' && data !== undefined) {
data1 = func2(func3(data1))
data['name'] = data1
}
if (typeof data1 === 'string') {
if (func4(data1) > 100) {
const err18 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
if (func4(data1) < 1) {
const err19 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
} else {
const err20 = {
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
}
if (data.uniqueName !== undefined) {
let data2 = data.uniqueName
if (typeof data2 == 'string' && data !== undefined) {
data2 = func2(func3(data2))
data['uniqueName'] = data2
}
if (typeof data2 === 'string') {
if (func4(data2) > 100) {
const err21 = {
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
if (func4(data2) < 1) {
const err22 = {
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
if (!pattern0.test(data2)) {
const err23 = {
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/pattern',
keyword: 'pattern',
params: { pattern: '/^(?!API$|I$).+$/i' },
 message: "Unique_name_contains_reserved_words"
}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
if (!await serverAndClientFunctions.isNameGloballyUnique(data,data2)) {
const err24 = {
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/isNameGloballyUnique',
keyword: 'isNameGloballyUnique',
params: {},
 message: "Not_Globally_Unique"
}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
} else {
const err25 = {
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/type',
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
if (data.version !== undefined) {
let data3 = data.version
if (
!(
typeof data3 == 'number' &&
!(data3 % 1) &&
!isNaN(data3) &&
isFinite(data3)
)
) {
const err26 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
if (typeof data3 == 'number' && isFinite(data3)) {
if (data3 < 0 || isNaN(data3)) {
const err27 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
}
}
if (data.touched !== undefined) {
if (typeof data.touched !== 'boolean') {
const err28 = {
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
}
if (data.lastModified !== undefined) {
let data5 = data.lastModified
if (!(typeof data5 == 'number' && isFinite(data5))) {
const err29 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
}
if (data.homePageImageType !== undefined) {
let data6 = data.homePageImageType
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {
const err30 = {
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 3 || isNaN(data6)) {
const err31 = {
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
if (data6 < 0 || isNaN(data6)) {
const err32 = {
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
}
}
if (data.homePageImage !== undefined) {
let data7 = data.homePageImage
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {
const err33 = {
instancePath: instancePath + '/homePageImage',
schemaPath: '#/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
} else {
const err34 = {
instancePath: instancePath + '/homePageImage',
schemaPath: '#/properties/homePageImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
}
if (data.authenticationType !== undefined) {
let data8 = data.authenticationType
if (typeof data8 == 'string' && data !== undefined) {
data8 = func2(func3(data8))
data['authenticationType'] = data8
}
if (typeof data8 === 'string') {
if (func4(data8) > 100) {
const err35 = {
instancePath: instancePath + '/authenticationType',
schemaPath: '#/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
if (func4(data8) < 1) {
const err36 = {
instancePath: instancePath + '/authenticationType',
schemaPath: '#/properties/authenticationType/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
} else {
const err37 = {
instancePath: instancePath + '/authenticationType',
schemaPath: '#/properties/authenticationType/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
}
if (data.lang !== undefined) {
let data9 = data.lang
if (typeof data9 == 'string' && data !== undefined) {
data9 = func2(func3(data9))
data['lang'] = data9
}
if (typeof data9 === 'string') {
if (func4(data9) > 100) {
const err38 = {
instancePath: instancePath + '/lang',
schemaPath: '#/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
if (func4(data9) < 1) {
const err39 = {
instancePath: instancePath + '/lang',
schemaPath: '#/properties/lang/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
} else {
const err40 = {
instancePath: instancePath + '/lang',
schemaPath: '#/properties/lang/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err40]
} else {
vErrors.push(err40)
}

}
}
if (data.enableNarrator !== undefined) {
if (typeof data.enableNarrator !== 'boolean') {
const err41 = {
instancePath: instancePath + '/enableNarrator',
schemaPath: '#/properties/enableNarrator/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
}
if (data.groups !== undefined) {
let data11 = data.groups
if (typeof data11 === 'string') {
if (func4(data11) > 8000) {
const err42 = {
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
} else {
const err43 = {
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err43]
} else {
vErrors.push(err43)
}

}
}
if (data.id !== undefined) {
let data12 = data.id
if (typeof data12 === 'string') {
if (func4(data12) < 36) {
const err44 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/minLength',
keyword: 'minLength',
params: { limit: 36 },
 message: "Must_be_36_characters"
}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
if (!formats2.test(data12)) {
const err45 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
} else {
const err46 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err46]
} else {
vErrors.push(err46)
}

}
}
if (data.lastSync !== undefined) {
let data13 = data.lastSync
if (!(typeof data13 == 'number' && isFinite(data13))) {
const err47 = {
instancePath: instancePath + '/lastSync',
schemaPath: '#/properties/lastSync/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

}
}
} else {
const err48 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err48]
} else {
vErrors.push(err48)
}

}
return vErrors
}
