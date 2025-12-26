'use strict'
const schema13 = {
$id: 'deletion',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
databaseId: { format: 'uuid', type: 'string' },
level: { minimum: 0, maximum: 9, type: 'integer' },
lastModified: { default: 0, type: 'integer' }
},
required: ['id', 'databaseId', 'level', 'lastModified']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDeletionInterface } from '../serverInterfaces/ServerDeletionInterface'
export async function validateDeletion(
data:ServerDeletionInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="deletion" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.id === undefined && (missing0 = 'id')) ||
(data.databaseId === undefined && (missing0 = 'databaseId')) ||
(data.level === undefined && (missing0 = 'level')) ||
(data.lastModified === undefined && (missing0 = 'lastModified'))
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
if (data.id !== undefined) {
let data0 = data.id
const _errs1 = errors
if (true) {
if (true) {
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {errors.push(
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
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseId !== undefined) {
let data1 = data.databaseId
const _errs3 = errors
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {errors.push(
{
instancePath: instancePath + '/databaseId',
schemaPath: '#/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
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
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.level !== undefined) {
let data2 = data.level
const _errs5 = errors
if (
!(
typeof data2 == 'number' &&
!(data2 % 1) &&
!isNaN(data2) &&
isFinite(data2)
)
) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data2 == 'number' && isFinite(data2)) {
if (data2 > 9 || isNaN(data2)) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data2 < 0 || isNaN(data2)) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
}
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastModified !== undefined) {
let data3 = data.lastModified
const _errs7 = errors
if (
!(
typeof data3 == 'number' &&
!(data3 % 1) &&
!isNaN(data3) &&
isFinite(data3)
)
) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_a_number"
}
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
