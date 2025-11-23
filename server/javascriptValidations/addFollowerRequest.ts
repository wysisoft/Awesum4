'use strict'
const schema28 = {
$id: 'addFollowerRequest',
type: 'object',
properties: {
groups: { minLength: 1, maxLength: 8000, type: 'string' },
leaderAppId: { format: 'uuid', type: 'string' },
followerEmail: {
minLength: 1,
maxLength: 100,
format: 'email',
doesEmailExist: true,
emailIsNotUser: true,
type: 'string'},
initiatedByFollower: { type: 'boolean' }
},
required: ['groups', 'leaderAppId', 'followerEmail', 'initiatedByFollower']
}
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerAddFollowerRequestInterface } from '../serverInterfaces/ServerAddFollowerRequestInterface'
export async function validateAddFollowerRequest(
data:ServerAddFollowerRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="addFollowerRequest" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.groups === undefined && (missing0 = 'groups')) ||
(data.leaderAppId === undefined && (missing0 = 'leaderAppId')) ||
(data.followerEmail === undefined && (missing0 = 'followerEmail')) ||
(data.initiatedByFollower === undefined &&
(missing0 = 'initiatedByFollower'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.groups !== undefined) {
let data0 = data.groups
const _errs1 = errors
if (true) {
if (typeof data0 === 'string') {
if (func4(data0) > 8000) {errors.push(
{
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
);
} else {
if (func4(data0) < 1) {errors.push(
{
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
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
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.leaderAppId !== undefined) {
let data1 = data.leaderAppId
const _errs3 = errors
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {errors.push(
{
instancePath: instancePath + '/leaderAppId',
schemaPath: '#/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
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
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerEmail !== undefined) {
let data2 = data.followerEmail
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (func4(data2) > 100) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data2) < 1) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!formats0.test(data2)) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data2
)
) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
);
} else {
if (
!await serverAndClientFunctions.emailIsNotUser(
data2,
awaesumUserName
)
) {errors.push(
{
instancePath: instancePath + '/followerEmail',
schemaPath: '#/properties/followerEmail/emailIsNotUser',
keyword: 'emailIsNotUser',
params: {},
 message: "Email_cannot_be_your_email"}
);
}
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
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.initiatedByFollower !== undefined) {
const _errs7 = errors
if (typeof data.initiatedByFollower !== 'boolean') {errors.push(
{
instancePath: instancePath + '/initiatedByFollower',
schemaPath: '#/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid0 = _errs7 === errors
} else {
var valid0 = true
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
