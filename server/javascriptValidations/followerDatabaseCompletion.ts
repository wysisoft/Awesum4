'use strict'
const schema27 = {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019ab2f1-3b3b-7707-bc13-64a5cb18b319',
format: 'uuid',
type: 'string'},
followerRequestId: { format: 'uuid', type: 'string' },
description: { maxLength: 1000, type: 'string' },
itemId: { format: 'uuid', type: 'string' },
parentItemId: { format: 'uuid', type: 'string' },
itemLevel: { minimum: 0, maximum: 9, type: 'integer' },
lastModified: { type: 'number' },
touched: { default: true, type: 'boolean' },
version: { minimum: 0, type: 'integer' }
},
required: [
'id',
'followerRequestId',
'description',
'itemId',
'parentItemId',
'itemLevel',
'lastModified',
'touched',
'version'
]
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerFollowerDatabaseCompletionInterface } from '../serverInterfaces/ServerFollowerDatabaseCompletionInterface'
export async function validateFollowerDatabaseCompletion(
data:ServerFollowerDatabaseCompletionInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="followerDatabaseCompletion" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.id === undefined && (missing0 = 'id')) ||
(data.followerRequestId === undefined &&
(missing0 = 'followerRequestId')) ||
(data.description === undefined && (missing0 = 'description')) ||
(data.itemId === undefined && (missing0 = 'itemId')) ||
(data.parentItemId === undefined && (missing0 = 'parentItemId')) ||
(data.itemLevel === undefined && (missing0 = 'itemLevel')) ||
(data.lastModified === undefined && (missing0 = 'lastModified')) ||
(data.touched === undefined && (missing0 = 'touched')) ||
(data.version === undefined && (missing0 = 'version'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
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
if (data.description !== undefined) {
let data2 = data.description
const _errs5 = errors
if (true) {
if (typeof data2 === 'string') {
if (func4(data2) > 1000) {errors.push(
{
instancePath: instancePath + '/description',
schemaPath: '#/properties/description/maxLength',
keyword: 'maxLength',
params: { limit: 1000 },
 message: "Must_be_less_than_1000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/description',
schemaPath: '#/properties/description/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.itemId !== undefined) {
let data3 = data.itemId
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {errors.push(
{
instancePath: instancePath + '/itemId',
schemaPath: '#/properties/itemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/itemId',
schemaPath: '#/properties/itemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.parentItemId !== undefined) {
let data4 = data.parentItemId
const _errs9 = errors
if (true) {
if (true) {
if (typeof data4 === 'string') {
if (!formats2.test(data4)) {errors.push(
{
instancePath: instancePath + '/parentItemId',
schemaPath: '#/properties/parentItemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/parentItemId',
schemaPath: '#/properties/parentItemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.itemLevel !== undefined) {
let data5 = data.itemLevel
const _errs11 = errors
if (
!(
typeof data5 == 'number' &&
!(data5 % 1) &&
!isNaN(data5) &&
isFinite(data5)
)
) {errors.push(
{
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 > 9 || isNaN(data5)) {errors.push(
{
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data5 < 0 || isNaN(data5)) {errors.push(
{
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastModified !== undefined) {
let data6 = data.lastModified
const _errs13 = errors
if (!(typeof data6 == 'number' && isFinite(data6))) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.touched !== undefined) {
const _errs15 = errors
if (typeof data.touched !== 'boolean') {errors.push(
{
instancePath: instancePath + '/touched',
schemaPath: '#/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.version !== undefined) {
let data8 = data.version
const _errs17 = errors
if (
!(
typeof data8 == 'number' &&
!(data8 % 1) &&
!isNaN(data8) &&
isFinite(data8)
)
) {errors.push(
{
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 < 0 || isNaN(data8)) {errors.push(
{
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
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
