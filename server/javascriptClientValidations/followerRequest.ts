'use strict'
const schema20 = {
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
default: '019a9c3d-99d4-7350-b701-bad71815ab5c',
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
lastModified: { default: 1763557874132, type: 'number' },
touched: { default: false, type: 'boolean' },
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
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import * as ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = ucs2length.default;
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerFollowerRequestInterface } from '../serverInterfaces/ServerFollowerRequestInterface'
export async function validateFollowerRequest(
data:ServerFollowerRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="followerRequest" */ 
let vErrors: Array<ErrorObject> = []
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.leaderAppId === undefined) {
const err0 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'leaderAppId' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err0]
} else {
vErrors.push(err0)
}

}
if (data.followerAppId === undefined) {
const err1 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'followerAppId' },
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
if (data.followerName === undefined) {
const err3 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'followerName' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err3]
} else {
vErrors.push(err3)
}

}
if (data.leaderName === undefined) {
const err4 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'leaderName' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err4]
} else {
vErrors.push(err4)
}

}
if (data.followerEmail === undefined) {
const err5 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'followerEmail' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err5]
} else {
vErrors.push(err5)
}

}
if (data.leaderEmail === undefined) {
const err6 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'leaderEmail' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err6]
} else {
vErrors.push(err6)
}

}
if (data.initiatedByFollower === undefined) {
const err7 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'initiatedByFollower' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err7]
} else {
vErrors.push(err7)
}

}
if (data.lastModified === undefined) {
const err8 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'lastModified' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err8]
} else {
vErrors.push(err8)
}

}
if (data.touched === undefined) {
const err9 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'touched' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err9]
} else {
vErrors.push(err9)
}

}
if (data.version === undefined) {
const err10 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'version' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err10]
} else {
vErrors.push(err10)
}

}
if (data.status === undefined) {
const err11 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'status' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err11]
} else {
vErrors.push(err11)
}

}
if (data.groups === undefined) {
const err12 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'groups' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err12]
} else {
vErrors.push(err12)
}

}
if (data.points === undefined) {
const err13 = {
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: 'points' },
 message: "Required"}
if (vErrors === null) {
vErrors = [err13]
} else {
vErrors.push(err13)
}

}
if (data.leaderAppId !== undefined) {
let data0 = data.leaderAppId
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {
const err14 = {
instancePath: instancePath + '/leaderAppId',
schemaPath: '#/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err14]
} else {
vErrors.push(err14)
}

}
} else {
const err15 = {
instancePath: instancePath + '/leaderAppId',
schemaPath: '#/properties/leaderAppId/type',
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
if (data.followerAppId !== undefined) {
let data1 = data.followerAppId
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {
const err16 = {
instancePath: instancePath + '/followerAppId',
schemaPath: '#/properties/followerAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err16]
} else {
vErrors.push(err16)
}

}
} else {
const err17 = {
instancePath: instancePath + '/followerAppId',
schemaPath: '#/properties/followerAppId/type',
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
if (data.id !== undefined) {
let data2 = data.id
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {
const err18 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
if (vErrors === null) {
vErrors = [err18]
} else {
vErrors.push(err18)
}

}
} else {
const err19 = {
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err19]
} else {
vErrors.push(err19)
}

}
}
if (data.followerName !== undefined) {
let data3 = data.followerName
if (typeof data3 === 'string') {
if (func4(data3) > 100) {
const err20 = {
instancePath: instancePath + '/followerName',
schemaPath: '#/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err20]
} else {
vErrors.push(err20)
}

}
if (func4(data3) < 1) {
const err21 = {
instancePath: instancePath + '/followerName',
schemaPath: '#/properties/followerName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err21]
} else {
vErrors.push(err21)
}

}
} else {
const err22 = {
instancePath: instancePath + '/followerName',
schemaPath: '#/properties/followerName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err22]
} else {
vErrors.push(err22)
}

}
}
if (data.leaderName !== undefined) {
let data4 = data.leaderName
if (typeof data4 === 'string') {
if (func4(data4) > 100) {
const err23 = {
instancePath: instancePath + '/leaderName',
schemaPath: '#/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err23]
} else {
vErrors.push(err23)
}

}
if (func4(data4) < 1) {
const err24 = {
instancePath: instancePath + '/leaderName',
schemaPath: '#/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err24]
} else {
vErrors.push(err24)
}

}
} else {
const err25 = {
instancePath: instancePath + '/leaderName',
schemaPath: '#/properties/leaderName/type',
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
if (data.followerEmail !== undefined) {
let data5 = data.followerEmail
if (typeof data5 === 'string') {
if (func4(data5) > 100) {
const err26 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err26]
} else {
vErrors.push(err26)
}

}
if (func4(data5) < 1) {
const err27 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err27]
} else {
vErrors.push(err27)
}

}
if (!formats0.test(data5)) {
const err28 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err28]
} else {
vErrors.push(err28)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data5)) {
const err29 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
if (vErrors === null) {
vErrors = [err29]
} else {
vErrors.push(err29)
}

}
} else {
const err30 = {
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err30]
} else {
vErrors.push(err30)
}

}
}
if (data.leaderEmail !== undefined) {
let data6 = data.leaderEmail
if (typeof data6 === 'string') {
if (func4(data6) > 100) {
const err31 = {
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
if (vErrors === null) {
vErrors = [err31]
} else {
vErrors.push(err31)
}

}
if (func4(data6) < 1) {
const err32 = {
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
if (vErrors === null) {
vErrors = [err32]
} else {
vErrors.push(err32)
}

}
if (!formats0.test(data6)) {
const err33 = {
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
if (vErrors === null) {
vErrors = [err33]
} else {
vErrors.push(err33)
}

}
if (!await serverAndClientFunctions.doesEmailExist(data6)) {
const err34 = {
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
if (vErrors === null) {
vErrors = [err34]
} else {
vErrors.push(err34)
}

}
} else {
const err35 = {
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err35]
} else {
vErrors.push(err35)
}

}
}
if (data.initiatedByFollower !== undefined) {
if (typeof data.initiatedByFollower !== 'boolean') {
const err36 = {
instancePath: instancePath + '/initiatedByFollower',
schemaPath: '#/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err36]
} else {
vErrors.push(err36)
}

}
}
if (data.lastModified !== undefined) {
let data8 = data.lastModified
if (!(typeof data8 == 'number' && isFinite(data8))) {
const err37 = {
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
if (vErrors === null) {
vErrors = [err37]
} else {
vErrors.push(err37)
}

}
}
if (data.touched !== undefined) {
if (typeof data.touched !== 'boolean') {
const err38 = {
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
if (vErrors === null) {
vErrors = [err38]
} else {
vErrors.push(err38)
}

}
}
if (data.version !== undefined) {
let data10 = data.version
if (
!(
typeof data10 == 'number' &&
!(data10 % 1) &&
!isNaN(data10) &&
isFinite(data10)
)
) {
const err39 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err39]
} else {
vErrors.push(err39)
}

}
if (typeof data10 == 'number' && isFinite(data10)) {
if (data10 < 0 || isNaN(data10)) {
const err40 = {
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err40]
} else {
vErrors.push(err40)
}

}
}
}
if (data.status !== undefined) {
let data11 = data.status
if (
!(
typeof data11 == 'number' &&
!(data11 % 1) &&
!isNaN(data11) &&
isFinite(data11)
)
) {
const err41 = {
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err41]
} else {
vErrors.push(err41)
}

}
if (typeof data11 == 'number' && isFinite(data11)) {
if (data11 > 2 || isNaN(data11)) {
const err42 = {
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"}
if (vErrors === null) {
vErrors = [err42]
} else {
vErrors.push(err42)
}

}
if (data11 < 0 || isNaN(data11)) {
const err43 = {
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err43]
} else {
vErrors.push(err43)
}

}
}
}
if (data.groups !== undefined) {
let data12 = data.groups
if (typeof data12 === 'string') {
if (func4(data12) > 8000) {
const err44 = {
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
if (vErrors === null) {
vErrors = [err44]
} else {
vErrors.push(err44)
}

}
} else {
const err45 = {
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
if (vErrors === null) {
vErrors = [err45]
} else {
vErrors.push(err45)
}

}
}
if (data.points !== undefined) {
let data13 = data.points
if (
!(
typeof data13 == 'number' &&
!(data13 % 1) &&
!isNaN(data13) &&
isFinite(data13)
)
) {
const err46 = {
instancePath: instancePath + '/points',
schemaPath: '#/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
if (vErrors === null) {
vErrors = [err46]
} else {
vErrors.push(err46)
}

}
if (typeof data13 == 'number' && isFinite(data13)) {
if (data13 < 0 || isNaN(data13)) {
const err47 = {
instancePath: instancePath + '/points',
schemaPath: '#/properties/points/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
if (vErrors === null) {
vErrors = [err47]
} else {
vErrors.push(err47)
}

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
