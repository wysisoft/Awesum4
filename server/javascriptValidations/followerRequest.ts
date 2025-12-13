'use strict'
const schema25 = {
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
default: '019b148f-9161-730a-bb36-beb69d63cb33',
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
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerFollowerRequestInterface } from '../serverInterfaces/ServerFollowerRequestInterface'
export async function validateFollowerRequest(
data:ServerFollowerRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="followerRequest" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.leaderAppId === undefined && (missing0 = 'leaderAppId')) ||
(data.followerAppId === undefined && (missing0 = 'followerAppId')) ||
(data.id === undefined && (missing0 = 'id')) ||
(data.followerName === undefined && (missing0 = 'followerName')) ||
(data.leaderName === undefined && (missing0 = 'leaderName')) ||
(data.followerEmail === undefined && (missing0 = 'followerEmail')) ||
(data.leaderEmail === undefined && (missing0 = 'leaderEmail')) ||
(data.initiatedByFollower === undefined &&
(missing0 = 'initiatedByFollower')) ||
(data.lastModified === undefined && (missing0 = 'lastModified')) ||
(data.touched === undefined && (missing0 = 'touched')) ||
(data.version === undefined && (missing0 = 'version')) ||
(data.status === undefined && (missing0 = 'status')) ||
(data.groups === undefined && (missing0 = 'groups')) ||
(data.points === undefined && (missing0 = 'points'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"
}
);
} else {
if (data.leaderAppId !== undefined) {
let data0 = data.leaderAppId
const _errs1 = errors
if (true) {
if (true) {
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {errors.push(
{
instancePath: instancePath + '/leaderAppId',
schemaPath: '#/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/leaderAppId',
schemaPath: '#/properties/leaderAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerAppId !== undefined) {
let data1 = data.followerAppId
const _errs3 = errors
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {errors.push(
{
instancePath: instancePath + '/followerAppId',
schemaPath: '#/properties/followerAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerAppId',
schemaPath: '#/properties/followerAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.id !== undefined) {
let data2 = data.id
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {errors.push(
{
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerName !== undefined) {
let data3 = data.followerName
const _errs7 = errors
if (true) {
if (typeof data3 === 'string') {
if (func4(data3) > 100) {errors.push(
{
instancePath: instancePath + '/followerName',
schemaPath: '#/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data3) < 1) {errors.push(
{
instancePath: instancePath + '/followerName',
schemaPath: '#/properties/followerName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/followerName',
schemaPath: '#/properties/followerName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.leaderName !== undefined) {
let data4 = data.leaderName
const _errs9 = errors
if (true) {
if (typeof data4 === 'string') {
if (func4(data4) > 100) {errors.push(
{
instancePath: instancePath + '/leaderName',
schemaPath: '#/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data4) < 1) {errors.push(
{
instancePath: instancePath + '/leaderName',
schemaPath: '#/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/leaderName',
schemaPath: '#/properties/leaderName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerEmail !== undefined) {
let data5 = data.followerEmail
const _errs11 = errors
if (true) {
if (true) {
if (typeof data5 === 'string') {
if (func4(data5) > 100) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data5) < 1) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
} else {
if (!formats0.test(data5)) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data5
)
) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"
}
);
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.leaderEmail !== undefined) {
let data6 = data.leaderEmail
const _errs13 = errors
if (true) {
if (true) {
if (typeof data6 === 'string') {
if (func4(data6) > 100) {errors.push(
{
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data6) < 1) {errors.push(
{
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
} else {
if (!formats0.test(data6)) {errors.push(
{
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data6
)
) {errors.push(
{
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"
}
);
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/leaderEmail',
schemaPath: '#/properties/leaderEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.initiatedByFollower !== undefined) {
const _errs15 = errors
if (typeof data.initiatedByFollower !== 'boolean') {errors.push(
{
instancePath: instancePath + '/initiatedByFollower',
schemaPath: '#/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastModified !== undefined) {
let data8 = data.lastModified
const _errs17 = errors
if (!(typeof data8 == 'number' && isFinite(data8))) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs17 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.touched !== undefined) {
const _errs19 = errors
if (typeof data.touched !== 'boolean') {errors.push(
{
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid0 = _errs19 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.version !== undefined) {
let data10 = data.version
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
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data10 == 'number' &&
isFinite(data10)
) {
if (data10 < 0 || isNaN(data10)) {errors.push(
{
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
var valid0 = _errs21 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.status !== undefined) {
let data11 = data.status
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
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data11 == 'number' &&
isFinite(data11)
) {
if (data11 > 2 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 2
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data11 < 0 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/status',
schemaPath: '#/properties/status/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
}
var valid0 = _errs23 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.groups !== undefined) {
let data12 = data.groups
const _errs25 = errors
if (true) {
if (typeof data12 === 'string') {
if (func4(data12) > 8000) {errors.push(
{
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs25 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.points !== undefined) {
let data13 = data.points
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
instancePath: instancePath + '/points',
schemaPath: '#/properties/points/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data13 == 'number' &&
isFinite(data13)
) {
if (data13 < 0 || isNaN(data13)) {errors.push(
{
instancePath: instancePath + '/points',
schemaPath: '#/properties/points/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
var valid0 = _errs27 === errors
} else {
var valid0 = true
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
