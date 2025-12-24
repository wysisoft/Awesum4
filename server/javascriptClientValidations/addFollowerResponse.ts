'use strict'
const schema40 = {
$id: 'addFollowerResponse',
type: 'object',
properties: {
follower: {
$id: 'followerRequest',
type: 'object',
properties: {
leaderAppId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
followerAppId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
id: {
default: '019b4b67-3343-718d-8250-542b3781e4a6',
format: 'uuid',
type: 'string'},
followerName: {
minLength: 1,
maxLength: 100,
default: 'Follower Name',
type: 'string'},
leaderName: {
minLength: 1,
maxLength: 100,
default: 'Leader Name',
type: 'string'},
followerEmail: {
minLength: 1,
maxLength: 100,
format: 'email',
doesEmailExist: true,
default: 'follower@example.com',
type: 'string'},
leaderEmail: {
minLength: 1,
maxLength: 100,
format: 'email',
doesEmailExist: true,
default: 'leader@example.com',
type: 'string'},
initiatedByFollower: { default: false, type: 'boolean' },
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
version: { default: 0, minimum: 0, type: 'integer' },
status: { default: 0, minimum: 0, maximum: 2, type: 'integer' },
groups: { maxLength: 8000, default: '', type: 'string' },
points: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'leaderAppId',
'followerAppId',
'id',
'followerName',
'leaderName',
'followerEmail',
'leaderEmail',
'initiatedByFollower',
'lastModified',
'touched',
'version',
'status',
'groups',
'points'
]
}
},
required: ['follower']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerAddFollowerResponseInterface } from '../serverInterfaces/ServerAddFollowerResponseInterface'
export async function validateAddFollowerResponse(
data:ServerAddFollowerResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="addFollowerResponse" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.follower === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'follower' },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.follower !== undefined) {
let data0 = data.follower
if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
if (data0.leaderAppId === undefined) {
const err1 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'leaderAppId' },
message: "must have required property '" + 'leaderAppId' + "'"
}
if (vErrors === null) {
vErrors = [err1]
} else {
vErrors.push(err1)
}

}
if (data0.followerAppId === undefined) {
const err2 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'followerAppId' },
message: "must have required property '" + 'followerAppId' + "'"
}
if (vErrors === null) {
vErrors = [err2]
} else {
vErrors.push(err2)
}

}
if (data0.id === undefined) {
const err3 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'id' },
message: "must have required property '" + 'id' + "'"
}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data0.followerName === undefined) {
const err4 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'followerName' },
message: "must have required property '" + 'followerName' + "'"
}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data0.leaderName === undefined) {
const err5 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'leaderName' },
message: "must have required property '" + 'leaderName' + "'"
}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data0.followerEmail === undefined) {
const err6 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'followerEmail' },
message: "must have required property '" + 'followerEmail' + "'"
}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data0.leaderEmail === undefined) {
const err7 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'leaderEmail' },
message: "must have required property '" + 'leaderEmail' + "'"
}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data0.initiatedByFollower === undefined) {
const err8 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'initiatedByFollower' },
message: "must have required property '" + 'initiatedByFollower' + "'"
}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data0.lastModified === undefined) {
const err9 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
message: "must have required property '" + 'lastModified' + "'"
}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data0.touched === undefined) {
const err10 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'touched' },
message: "must have required property '" + 'touched' + "'"
}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data0.version === undefined) {
const err11 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'version' },
message: "must have required property '" + 'version' + "'"
}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data0.status === undefined) {
const err12 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'status' },
message: "must have required property '" + 'status' + "'"
}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data0.groups === undefined) {
const err13 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'groups' },
message: "must have required property '" + 'groups' + "'"
}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data0.points === undefined) {
const err14 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: 'points' },
message: "must have required property '" + 'points' + "'"
}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
if (data0.leaderAppId !== undefined) {
let data1 = data0.leaderAppId
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err15 = {
instancePath: instancePath + '/follower/leaderAppId',
schemaPath: '#/properties/follower/properties/leaderAppId/format',
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
instancePath: instancePath + '/follower/leaderAppId',
schemaPath: '#/properties/follower/properties/leaderAppId/type',
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
if (data0.followerAppId !== undefined) {
let data2 = data0.followerAppId
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err17 = {
instancePath: instancePath + '/follower/followerAppId',
schemaPath: '#/properties/follower/properties/followerAppId/format',
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
instancePath: instancePath + '/follower/followerAppId',
schemaPath: '#/properties/follower/properties/followerAppId/type',
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
if (data0.id !== undefined) {
let data3 = data0.id
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {
const err19 = {
instancePath: instancePath + '/follower/id',
schemaPath: '#/properties/follower/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
} else {
const err20 = {
instancePath: instancePath + '/follower/id',
schemaPath: '#/properties/follower/properties/id/type',
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
if (data0.followerName !== undefined) {
let data4 = data0.followerName
if (typeof data4 === 'string') {
if (func4(data4) > 100) {
const err21 = {
instancePath: instancePath + '/follower/followerName',
schemaPath: '#/properties/follower/properties/followerName/maxLength',
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
if (func4(data4) < 1) {
const err22 = {
instancePath: instancePath + '/follower/followerName',
schemaPath: '#/properties/follower/properties/followerName/minLength',
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
} else {
const err23 = {
instancePath: instancePath + '/follower/followerName',
schemaPath: '#/properties/follower/properties/followerName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
}
if (data0.leaderName !== undefined) {
let data5 = data0.leaderName
if (typeof data5 === 'string') {
if (func4(data5) > 100) {
const err24 = {
instancePath: instancePath + '/follower/leaderName',
schemaPath: '#/properties/follower/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
if (func4(data5) < 1) {
const err25 = {
instancePath: instancePath + '/follower/leaderName',
schemaPath: '#/properties/follower/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err25]
} else {
vErrors.push(err25)
}

}
} else {
const err26 = {
instancePath: instancePath + '/follower/leaderName',
schemaPath: '#/properties/follower/properties/leaderName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
}
if (data0.followerEmail !== undefined) {
let data6 = data0.followerEmail
if (typeof data6 === 'string') {
if (func4(data6) > 100) {
const err27 = {
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
if (func4(data6) < 1) {
const err28 = {
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
if (!formats0.test(data6)) {
const err29 = {
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data6)) {
const err30 = {
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"
}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
} else {
const err31 = {
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
}
if (data0.leaderEmail !== undefined) {
let data7 = data0.leaderEmail
if (typeof data7 === 'string') {
if (func4(data7) > 100) {
const err32 = {
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
if (func4(data7) < 1) {
const err33 = {
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
if (!formats0.test(data7)) {
const err34 = {
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data7)) {
const err35 = {
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"
}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
} else {
const err36 = {
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
}
if (data0.initiatedByFollower !== undefined) {
if (typeof data0.initiatedByFollower !== 'boolean') {
const err37 = {
instancePath: instancePath + '/follower/initiatedByFollower',
schemaPath: '#/properties/follower/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
}
if (data0.lastModified !== undefined) {
let data9 = data0.lastModified
if (!(typeof data9 == 'number' && isFinite(data9))) {
const err38 = {
instancePath: instancePath + '/follower/lastModified',
schemaPath: '#/properties/follower/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
}
if (data0.touched !== undefined) {
if (typeof data0.touched !== 'boolean') {
const err39 = {
instancePath: instancePath + '/follower/touched',
schemaPath: '#/properties/follower/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
}
if (data0.version !== undefined) {
let data11 = data0.version
if (
!(
typeof data11 == 'number' &&
!(data11 % 1) &&
!isNaN(data11) &&
isFinite(data11)
)
) {
const err40 = {
instancePath: instancePath + '/follower/version',
schemaPath: '#/properties/follower/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err40]
} else {
vErrors.push(err40)
}

}
if (typeof data11 == 'number' && isFinite(data11)) {
if (data11 < 0 || isNaN(data11)) {
const err41 = {
instancePath: instancePath + '/follower/version',
schemaPath: '#/properties/follower/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
}
}
if (data0.status !== undefined) {
let data12 = data0.status
if (
!(
typeof data12 == 'number' &&
!(data12 % 1) &&
!isNaN(data12) &&
isFinite(data12)
)
) {
const err42 = {
instancePath: instancePath + '/follower/status',
schemaPath: '#/properties/follower/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
if (typeof data12 == 'number' && isFinite(data12)) {
if (data12 > 2 || isNaN(data12)) {
const err43 = {
instancePath: instancePath + '/follower/status',
schemaPath: '#/properties/follower/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
if (vErrors === null) {
vErrors = [err43]
} else {
vErrors.push(err43)
}

}
if (data12 < 0 || isNaN(data12)) {
const err44 = {
instancePath: instancePath + '/follower/status',
schemaPath: '#/properties/follower/properties/status/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
}
}
if (data0.groups !== undefined) {
let data13 = data0.groups
if (typeof data13 === 'string') {
if (func4(data13) > 8000) {
const err45 = {
instancePath: instancePath + '/follower/groups',
schemaPath: '#/properties/follower/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
} else {
const err46 = {
instancePath: instancePath + '/follower/groups',
schemaPath: '#/properties/follower/properties/groups/type',
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
if (data0.points !== undefined) {
let data14 = data0.points
if (
!(
typeof data14 == 'number' &&
!(data14 % 1) &&
!isNaN(data14) &&
isFinite(data14)
)
) {
const err47 = {
instancePath: instancePath + '/follower/points',
schemaPath: '#/properties/follower/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

}
if (typeof data14 == 'number' && isFinite(data14)) {
if (data14 < 0 || isNaN(data14)) {
const err48 = {
instancePath: instancePath + '/follower/points',
schemaPath: '#/properties/follower/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
if (vErrors === null) {
vErrors = [err48]
} else {
vErrors.push(err48)
}

}
}
}
} else {
const err49 = {
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err49]
} else {
vErrors.push(err49)
}

}
}
} else {
const err50 = {
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
if (vErrors === null) {
vErrors = [err50]
} else {
vErrors.push(err50)
}

}
return vErrors
}
