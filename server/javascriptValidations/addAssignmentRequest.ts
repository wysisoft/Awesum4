'use strict'
const schema22 = {
$id: 'addAssignmentRequest',
type: 'object',
properties: {
group: { maxLength: 100, default: '', type: 'string' },
followerRequestId: { format: 'uuid', type: 'string' },
databaseId: { minLength: 1, format: 'uuid', type: 'string' }
},
required: ['group', 'followerRequestId', 'databaseId']
}
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerAddAssignmentRequestInterface } from '../serverInterfaces/ServerAddAssignmentRequestInterface'
export async function validateAddAssignmentRequest(
data:ServerAddAssignmentRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="addAssignmentRequest" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.group === undefined && (missing0 = 'group')) ||
(data.followerRequestId === undefined &&
(missing0 = 'followerRequestId')) ||
(data.databaseId === undefined && (missing0 = 'databaseId'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.group !== undefined) {
let data0 = data.group
const _errs1 = errors
if (true) {
if (typeof data0 === 'string') {
if (func4(data0) > 100) {errors.push(
{
instancePath: instancePath + '/group',
schemaPath: '#/properties/group/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/group',
schemaPath: '#/properties/group/type',
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
if (data.followerRequestId !== undefined) {
let data1 = data.followerRequestId
const _errs3 = errors
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {errors.push(
{
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequestId',
schemaPath: '#/properties/followerRequestId/type',
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
if (data.databaseId !== undefined) {
let data2 = data.databaseId
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (func4(data2) < 1) {errors.push(
{
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!formats2.test(data2)) {errors.push(
{
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/type',
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
