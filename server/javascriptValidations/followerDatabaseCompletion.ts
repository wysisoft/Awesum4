'use strict'
const schema29 = {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019b148f-9161-730a-bb36-c59da5468e05',
format: 'uuid',
type: 'string'},
followerRequestId: { format: 'uuid', type: 'string' },
itemId: { format: 'uuid', type: 'string' },
parentItemId: { format: 'uuid', type: 'string' },
itemLevel: { minimum: 0, maximum: 9, type: 'integer' },
lastModified: { default: 0, type: 'number' }
},
required: [
'id',
'followerRequestId',
'itemId',
'parentItemId',
'itemLevel',
'lastModified'
]
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
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
(data.itemId === undefined && (missing0 = 'itemId')) ||
(data.parentItemId === undefined && (missing0 = 'parentItemId')) ||
(data.itemLevel === undefined && (missing0 = 'itemLevel')) ||
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
 message: "Must_be_a_valid_UUID"
}
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
if (data.itemId !== undefined) {
let data2 = data.itemId
const _errs5 = errors
if (true) {
if (true) {
if (typeof data2 === 'string') {
if (!formats2.test(data2)) {errors.push(
{
instancePath: instancePath + '/itemId',
schemaPath: '#/properties/itemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.parentItemId !== undefined) {
let data3 = data.parentItemId
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {errors.push(
{
instancePath: instancePath + '/parentItemId',
schemaPath: '#/properties/parentItemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.itemLevel !== undefined) {
let data4 = data.itemLevel
const _errs9 = errors
if (
!(
typeof data4 == 'number' &&
!(data4 % 1) &&
!isNaN(data4) &&
isFinite(data4)
)
) {errors.push(
{
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data4 == 'number' && isFinite(data4)) {
if (data4 > 9 || isNaN(data4)) {errors.push(
{
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data4 < 0 || isNaN(data4)) {errors.push(
{
instancePath: instancePath + '/itemLevel',
schemaPath: '#/properties/itemLevel/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
}
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastModified !== undefined) {
let data5 = data.lastModified
const _errs11 = errors
if (!(typeof data5 == 'number' && isFinite(data5))) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
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
