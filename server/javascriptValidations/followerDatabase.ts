'use strict'
const schema23 = {
$id: 'followerDatabase',
type: 'object',
properties: {
followerRequestId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
id: {
default: '019b148f-9161-730a-bb36-b87cd07cfb6b',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
version: { default: 0, minimum: 0, type: 'integer' },
databaseVersion: { default: 0, minimum: 0, type: 'integer' },
databaseLastModified: { default: 0, type: 'number' },
unitVersion: { default: 0, minimum: 0, type: 'integer' },
unitLastModified: { default: 0, type: 'number' },
itemVersion: { default: 0, minimum: 0, type: 'integer' },
itemLastModified: { default: 0, type: 'number' }
},
required: [
'followerRequestId',
'id',
'databaseId',
'lastModified',
'touched',
'version',
'databaseVersion',
'databaseLastModified',
'unitVersion',
'unitLastModified',
'itemVersion',
'itemLastModified'
]
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerFollowerDatabaseInterface } from '../serverInterfaces/ServerFollowerDatabaseInterface'
export async function validateFollowerDatabase(
data:ServerFollowerDatabaseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="followerDatabase" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.followerRequestId === undefined &&
(missing0 = 'followerRequestId')) ||
(data.id === undefined && (missing0 = 'id')) ||
(data.databaseId === undefined && (missing0 = 'databaseId')) ||
(data.lastModified === undefined && (missing0 = 'lastModified')) ||
(data.touched === undefined && (missing0 = 'touched')) ||
(data.version === undefined && (missing0 = 'version')) ||
(data.databaseVersion === undefined &&
(missing0 = 'databaseVersion')) ||
(data.databaseLastModified === undefined &&
(missing0 = 'databaseLastModified')) ||
(data.unitVersion === undefined && (missing0 = 'unitVersion')) ||
(data.unitLastModified === undefined &&
(missing0 = 'unitLastModified')) ||
(data.itemVersion === undefined && (missing0 = 'itemVersion')) ||
(data.itemLastModified === undefined && (missing0 = 'itemLastModified'))
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
if (data.followerRequestId !== undefined) {
let data0 = data.followerRequestId
const _errs1 = errors
if (true) {
if (true) {
if (typeof data0 === 'string') {
if (!formats2.test(data0)) {errors.push(
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
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.id !== undefined) {
let data1 = data.id
const _errs3 = errors
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (!formats2.test(data1)) {errors.push(
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
if (!formats2.test(data2)) {errors.push(
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
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastModified !== undefined) {
let data3 = data.lastModified
const _errs7 = errors
if (!(typeof data3 == 'number' && isFinite(data3))) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.touched !== undefined) {
const _errs9 = errors
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
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.version !== undefined) {
let data5 = data.version
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
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 < 0 || isNaN(data5)) {errors.push(
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
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseVersion !== undefined) {
let data6 = data.databaseVersion
const _errs13 = errors
if (
!(
typeof data6 == 'number' &&
!(data6 % 1) &&
!isNaN(data6) &&
isFinite(data6)
)
) {errors.push(
{
instancePath: instancePath + '/databaseVersion',
schemaPath: '#/properties/databaseVersion/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 < 0 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/databaseVersion',
schemaPath: '#/properties/databaseVersion/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
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
if (data.databaseLastModified !== undefined) {
let data7 = data.databaseLastModified
const _errs15 = errors
if (!(typeof data7 == 'number' && isFinite(data7))) {errors.push(
{
instancePath: instancePath + '/databaseLastModified',
schemaPath: '#/properties/databaseLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.unitVersion !== undefined) {
let data8 = data.unitVersion
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
instancePath: instancePath + '/unitVersion',
schemaPath: '#/properties/unitVersion/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 < 0 || isNaN(data8)) {errors.push(
{
instancePath: instancePath + '/unitVersion',
schemaPath: '#/properties/unitVersion/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
var valid0 = _errs17 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.unitLastModified !== undefined) {
let data9 = data.unitLastModified
const _errs19 = errors
if (
!(typeof data9 == 'number' && isFinite(data9))
) {errors.push(
{
instancePath: instancePath + '/unitLastModified',
schemaPath: '#/properties/unitLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs19 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.itemVersion !== undefined) {
let data10 = data.itemVersion
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
instancePath: instancePath + '/itemVersion',
schemaPath: '#/properties/itemVersion/type',
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
instancePath: instancePath + '/itemVersion',
schemaPath: '#/properties/itemVersion/minimum',
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
if (data.itemLastModified !== undefined) {
let data11 = data.itemLastModified
const _errs23 = errors
if (
!(
typeof data11 == 'number' &&
isFinite(data11)
)
) {errors.push(
{
instancePath: instancePath + '/itemLastModified',
schemaPath: '#/properties/itemLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs23 === errors
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
