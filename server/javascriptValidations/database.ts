'use strict'
const schema13 = {
$id: 'database',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
lastModified: { default: 1763863931755, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019aae7b-ab6b-730e-b242-91812e9d220a',
format: 'uuid',
type: 'string'},
order: { default: 0, minimum: 0, type: 'integer' },
homePageIconType: { default: 0, minimum: 0, maximum: 3, type: 'integer' },
homePageIcon: {
default: '00000000-0000-0000-0000-000000000002',
format: 'uuid',
type: 'string'
}
},
required: [
'name',
'lastModified',
'version',
'appId',
'id',
'order',
'homePageIconType',
'homePageIcon'
]
}
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDatabaseInterface } from '../serverInterfaces/ServerDatabaseInterface'
export async function validateDatabase(
data:ServerDatabaseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="database" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.name === undefined && (missing0 = 'name')) ||
(data.lastModified === undefined && (missing0 = 'lastModified')) ||
(data.version === undefined && (missing0 = 'version')) ||
(data.appId === undefined && (missing0 = 'appId')) ||
(data.id === undefined && (missing0 = 'id')) ||
(data.order === undefined && (missing0 = 'order')) ||
(data.homePageIconType === undefined &&
(missing0 = 'homePageIconType')) ||
(data.homePageIcon === undefined && (missing0 = 'homePageIcon'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.name !== undefined) {
let data0 = data.name
const _errs1 = errors
if (true) {
if (typeof data0 === 'string') {
if (func4(data0) > 100) {errors.push(
{
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data0) < 1) {errors.push(
{
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/type',
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
if (data.lastModified !== undefined) {
let data1 = data.lastModified
const _errs3 = errors
if (!(typeof data1 == 'number' && isFinite(data1))) {errors.push(
{
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.version !== undefined) {
let data2 = data.version
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
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data2 == 'number' && isFinite(data2)) {
if (data2 < 0 || isNaN(data2)) {errors.push(
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
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.appId !== undefined) {
let data3 = data.appId
const _errs7 = errors
if (true) {
if (true) {
if (typeof data3 === 'string') {
if (!formats2.test(data3)) {errors.push(
{
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/type',
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
if (data.id !== undefined) {
let data4 = data.id
const _errs9 = errors
if (true) {
if (true) {
if (typeof data4 === 'string') {
if (!formats2.test(data4)) {errors.push(
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
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.order !== undefined) {
let data5 = data.order
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
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data5 == 'number' && isFinite(data5)) {
if (data5 < 0 || isNaN(data5)) {errors.push(
{
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.homePageIconType !== undefined) {
let data6 = data.homePageIconType
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
instancePath: instancePath + '/homePageIconType',
schemaPath: '#/properties/homePageIconType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 3 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/homePageIconType',
schemaPath: '#/properties/homePageIconType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data6 < 0 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/homePageIconType',
schemaPath: '#/properties/homePageIconType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.homePageIcon !== undefined) {
let data7 = data.homePageIcon
const _errs15 = errors
if (true) {
if (true) {
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {errors.push(
{
instancePath: instancePath + '/homePageIcon',
schemaPath: '#/properties/homePageIcon/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/homePageIcon',
schemaPath: '#/properties/homePageIcon/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs15 === errors
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
