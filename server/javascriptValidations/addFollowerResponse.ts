'use strict'
const schema37 = {
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
default: '019a73cd-a2ef-751c-8fbf-df931f81397a',
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
lastModified: { default: 1762879447791, type: 'number' },
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
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerAddFollowerResponseInterface } from '../serverInterfaces/ServerAddFollowerResponseInterface'
export async function validateAddFollowerResponse(
data:ServerAddFollowerResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="addFollowerResponse" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (data.follower === undefined && (missing0 = 'follower')) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.follower !== undefined) {
let data0 = data.follower
const _errs1 = errors
if (true) {
if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
let missing1
if (
(data0.leaderAppId === undefined &&
(missing1 = 'leaderAppId')) ||
(data0.followerAppId === undefined &&
(missing1 = 'followerAppId')) ||
(data0.id === undefined && (missing1 = 'id')) ||
(data0.followerName === undefined &&
(missing1 = 'followerName')) ||
(data0.leaderName === undefined && (missing1 = 'leaderName')) ||
(data0.followerEmail === undefined &&
(missing1 = 'followerEmail')) ||
(data0.leaderEmail === undefined &&
(missing1 = 'leaderEmail')) ||
(data0.initiatedByFollower === undefined &&
(missing1 = 'initiatedByFollower')) ||
(data0.lastModified === undefined &&
(missing1 = 'lastModified')) ||
(data0.version === undefined && (missing1 = 'version')) ||
(data0.status === undefined && (missing1 = 'status')) ||
(data0.groups === undefined && (missing1 = 'groups')) ||
(data0.points === undefined && (missing1 = 'points'))
) {errors.push(
{
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/required',
keyword: 'required',
params: { missingProperty: missing1 },
message: "must have required property '" + missing1 + "'"
}
);
} else {
if (data0.leaderAppId !== undefined) {
let data1 = data0.leaderAppId
const _errs3 = errors
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {errors.push(
{
instancePath: instancePath + '/follower/leaderAppId',
schemaPath: '#/properties/follower/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/follower/leaderAppId',
schemaPath: '#/properties/follower/properties/leaderAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs3 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.followerAppId !== undefined) {
let data2 = data0.followerAppId
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {errors.push(
{
instancePath: instancePath + '/follower/followerAppId',
schemaPath: '#/properties/follower/properties/followerAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/follower/followerAppId',
schemaPath: '#/properties/follower/properties/followerAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs5 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.id !== undefined) {
let data3 = data0.id
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {errors.push(
{
instancePath: instancePath + '/follower/id',
schemaPath: '#/properties/follower/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/follower/id',
schemaPath: '#/properties/follower/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs7 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.followerName !== undefined) {
let data4 = data0.followerName
const _errs9 = errors
if (true) {
if (typeof data4 === 'string') {
if (func4(data4) > 100) {errors.push(
{
instancePath: instancePath + '/follower/followerName',
schemaPath: '#/properties/follower/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data4) < 1) {errors.push(
{
instancePath: instancePath + '/follower/followerName',
schemaPath: '#/properties/follower/properties/followerName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/follower/followerName',
schemaPath: '#/properties/follower/properties/followerName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs9 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.leaderName !== undefined) {
let data5 = data0.leaderName
const _errs11 = errors
if (true) {
if (typeof data5 === 'string') {
if (func4(data5) > 100) {errors.push(
{
instancePath: instancePath + '/follower/leaderName',
schemaPath: '#/properties/follower/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data5) < 1) {errors.push(
{
instancePath: instancePath + '/follower/leaderName',
schemaPath: '#/properties/follower/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/follower/leaderName',
schemaPath: '#/properties/follower/properties/leaderName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs11 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.followerEmail !== undefined) {
let data6 = data0.followerEmail
const _errs13 = errors
if (true) {
if (true) {
if (typeof data6 === 'string') {
if (func4(data6) > 100) {errors.push(
{
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data6) < 1) {errors.push(
{
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!formats0.test(data6)) {errors.push(
{
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data6
)
) {errors.push(
{
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
);
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/follower/followerEmail',
schemaPath: '#/properties/follower/properties/followerEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs13 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.leaderEmail !== undefined) {
let data7 = data0.leaderEmail
const _errs15 = errors
if (true) {
if (true) {
if (typeof data7 === 'string') {
if (func4(data7) > 100) {errors.push(
{
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data7) < 1) {errors.push(
{
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!formats0.test(data7)) {errors.push(
{
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data7
)
) {errors.push(
{
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
);
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/follower/leaderEmail',
schemaPath: '#/properties/follower/properties/leaderEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs15 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.initiatedByFollower !== undefined) {
const _errs17 = errors
if (
typeof data0.initiatedByFollower !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/follower/initiatedByFollower',
schemaPath: '#/properties/follower/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid1 = _errs17 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.lastModified !== undefined) {
let data9 = data0.lastModified
const _errs19 = errors
if (
!(
typeof data9 == 'number' &&
isFinite(data9)
)
) {errors.push(
{
instancePath: instancePath + '/follower/lastModified',
schemaPath: '#/properties/follower/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid1 = _errs19 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.version !== undefined) {
let data10 = data0.version
const _errs21 = errors
if (
!(
typeof data10 == 'number' &&
!(data10 % 1) &&
!isNaN(data10) &&
isFinite(data10)
)
) {errors.push(
{
instancePath: instancePath + '/follower/version',
schemaPath: '#/properties/follower/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data10 == 'number' &&
isFinite(data10)
) {
if (data10 < 0 || isNaN(data10)) {errors.push(
{
instancePath: instancePath + '/follower/version',
schemaPath: '#/properties/follower/properties/version/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid1 = _errs21 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.status !== undefined) {
let data11 = data0.status
const _errs23 = errors
if (
!(
typeof data11 == 'number' &&
!(data11 % 1) &&
!isNaN(data11) &&
isFinite(data11)
)
) {errors.push(
{
instancePath: instancePath + '/follower/status',
schemaPath: '#/properties/follower/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data11 == 'number' &&
isFinite(data11)
) {
if (data11 > 2 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/follower/status',
schemaPath: '#/properties/follower/properties/status/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 2
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data11 < 0 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/follower/status',
schemaPath: '#/properties/follower/properties/status/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid1 = _errs23 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.groups !== undefined) {
let data12 = data0.groups
const _errs25 = errors
if (true) {
if (typeof data12 === 'string') {
if (func4(data12) > 8000) {errors.push(
{
instancePath: instancePath + '/follower/groups',
schemaPath: '#/properties/follower/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/follower/groups',
schemaPath: '#/properties/follower/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs25 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.points !== undefined) {
let data13 = data0.points
const _errs27 = errors
if (
!(
typeof data13 == 'number' &&
!(data13 % 1) &&
!isNaN(data13) &&
isFinite(data13)
)
) {errors.push(
{
instancePath: instancePath + '/follower/points',
schemaPath: '#/properties/follower/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data13 == 'number' &&
isFinite(data13)
) {
if (data13 < 0 || isNaN(data13)) {errors.push(
{
instancePath: instancePath + '/follower/points',
schemaPath: '#/properties/follower/properties/points/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid1 = _errs27 === errors
} else {
var valid1 = true
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/follower',
schemaPath: '#/properties/follower/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
}
}
} else {errors.push(
{
instancePath,
schemaPath: '#/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
return errors
}
