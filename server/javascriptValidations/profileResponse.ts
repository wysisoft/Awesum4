'use strict'
const schema22 = {
$id: 'profileResponse',
type: 'object',
properties: {
sub: { type: 'string' },
name: { type: 'string' },
given_name: { type: 'string' },
family_name: { type: 'string' },
picture: { type: 'string' },
email: { type: 'string' },
provider: { type: 'string' },
email_verified: { type: 'boolean' },
sessionId: { type: 'string' }
},
required: [
'sub',
'name',
'given_name',
'family_name',
'picture',
'email',
'provider',
'email_verified',
'sessionId'
]
}
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerProfileResponseInterface } from '../serverInterfaces/ServerProfileResponseInterface'
export async function validateProfileResponse(
data:ServerProfileResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="profileResponse" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.sub === undefined && (missing0 = 'sub')) ||
(data.name === undefined && (missing0 = 'name')) ||
(data.given_name === undefined && (missing0 = 'given_name')) ||
(data.family_name === undefined && (missing0 = 'family_name')) ||
(data.picture === undefined && (missing0 = 'picture')) ||
(data.email === undefined && (missing0 = 'email')) ||
(data.provider === undefined && (missing0 = 'provider')) ||
(data.email_verified === undefined && (missing0 = 'email_verified')) ||
(data.sessionId === undefined && (missing0 = 'sessionId'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.sub !== undefined) {
const _errs1 = errors
if (typeof data.sub !== 'string') {errors.push(
{
instancePath: instancePath + '/sub',
schemaPath: '#/properties/sub/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.name !== undefined) {
const _errs3 = errors
if (typeof data.name !== 'string') {errors.push(
{
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.given_name !== undefined) {
const _errs5 = errors
if (typeof data.given_name !== 'string') {errors.push(
{
instancePath: instancePath + '/given_name',
schemaPath: '#/properties/given_name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.family_name !== undefined) {
const _errs7 = errors
if (typeof data.family_name !== 'string') {errors.push(
{
instancePath: instancePath + '/family_name',
schemaPath: '#/properties/family_name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.picture !== undefined) {
const _errs9 = errors
if (typeof data.picture !== 'string') {errors.push(
{
instancePath: instancePath + '/picture',
schemaPath: '#/properties/picture/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.email !== undefined) {
const _errs11 = errors
if (typeof data.email !== 'string') {errors.push(
{
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.provider !== undefined) {
const _errs13 = errors
if (typeof data.provider !== 'string') {errors.push(
{
instancePath: instancePath + '/provider',
schemaPath: '#/properties/provider/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.email_verified !== undefined) {
const _errs15 = errors
if (typeof data.email_verified !== 'boolean') {errors.push(
{
instancePath: instancePath + '/email_verified',
schemaPath: '#/properties/email_verified/type',
keyword: 'type',
params: { type: 'boolean' },
message: 'must be boolean'
}
);
}
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.sessionId !== undefined) {
const _errs17 = errors
if (typeof data.sessionId !== 'string') {errors.push(
{
instancePath: instancePath + '/sessionId',
schemaPath: '#/properties/sessionId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs17 === errors
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
