'use strict'
const schema14 = {
$id: 'message',
type: 'object',
properties: {
level: { minimum: 0, maximum: 8, type: 'integer' },
message: { minLength: 1, maxLength: 100, type: 'string' },
id: { format: 'uuid', type: 'string' }
},
required: ['level', 'message', 'id']
}
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerMessageInterface } from '../serverInterfaces/ServerMessageInterface'
export async function validateMessage(
data:ServerMessageInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="message" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.level === undefined && (missing0 = 'level')) ||
(data.message === undefined && (missing0 = 'message')) ||
(data.id === undefined && (missing0 = 'id'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.level !== undefined) {
let data0 = data.level
const _errs1 = errors
if (
!(
typeof data0 == 'number' &&
!(data0 % 1) &&
!isNaN(data0) &&
isFinite(data0)
)
) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data0 == 'number' && isFinite(data0)) {
if (data0 > 8 || isNaN(data0)) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 8 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data0 < 0 || isNaN(data0)) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.message !== undefined) {
let data1 = data.message
const _errs3 = errors
if (true) {
if (typeof data1 === 'string') {
if (func4(data1) > 100) {errors.push(
{
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data1) < 1) {errors.push(
{
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
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
 message: "Must_be_a_valid_UUID"}
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
