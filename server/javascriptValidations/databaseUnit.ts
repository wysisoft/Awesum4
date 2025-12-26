'use strict'
const schema18 = {
$id: 'databaseUnit',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
order: { minimum: 0, type: 'integer' },
lastModified: { default: 0, type: 'integer' },
touched: { default: true, type: 'boolean' },
version: { minimum: 0, type: 'integer' },
id: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
databaseId: { format: 'uuid', type: 'string' },
successVideoType: { default: 2, minimum: 0, maximum: 2, type: 'integer' },
successVideoUrl: { maxLength: 100, type: 'string' },
successAnimations: { default: 'Fireworks', maxLength: 100, type: 'string' },
successSound: {
default: '00000000-0000-0000-0000-000000000005',
format: 'uuid',
type: 'string'},
successSoundType: { default: 2, minimum: 0, maximum: 4, type: 'integer' },
homePageImageType: { default: 0, minimum: 0, maximum: 3, type: 'integer' },
homePageImage: {
default: '00000000-0000-0000-0000-000000000002',
format: 'uuid',
type: 'string'},
router: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
routerTime: { type: 'integer' },
routerTimeImmediate: { default: false, type: 'boolean' },
points: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'name',
'order',
'lastModified',
'touched',
'version',
'id',
'appId',
'databaseId',
'successVideoType',
'successVideoUrl',
'successAnimations',
'successSound',
'successSoundType',
'homePageImageType',
'homePageImage',
'router',
'routerTime',
'routerTimeImmediate',
'points'
]
}
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerDatabaseUnitInterface } from '../serverInterfaces/ServerDatabaseUnitInterface'
export async function validateDatabaseUnit(
data:ServerDatabaseUnitInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="databaseUnit" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.name === undefined && (missing0 = 'name')) ||
(data.order === undefined && (missing0 = 'order')) ||
(data.lastModified === undefined && (missing0 = 'lastModified')) ||
(data.touched === undefined && (missing0 = 'touched')) ||
(data.version === undefined && (missing0 = 'version')) ||
(data.id === undefined && (missing0 = 'id')) ||
(data.appId === undefined && (missing0 = 'appId')) ||
(data.databaseId === undefined && (missing0 = 'databaseId')) ||
(data.successVideoType === undefined &&
(missing0 = 'successVideoType')) ||
(data.successVideoUrl === undefined &&
(missing0 = 'successVideoUrl')) ||
(data.successAnimations === undefined &&
(missing0 = 'successAnimations')) ||
(data.successSound === undefined && (missing0 = 'successSound')) ||
(data.successSoundType === undefined &&
(missing0 = 'successSoundType')) ||
(data.homePageImageType === undefined &&
(missing0 = 'homePageImageType')) ||
(data.homePageImage === undefined && (missing0 = 'homePageImage')) ||
(data.router === undefined && (missing0 = 'router')) ||
(data.routerTime === undefined && (missing0 = 'routerTime')) ||
(data.routerTimeImmediate === undefined &&
(missing0 = 'routerTimeImmediate')) ||
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
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data0) < 1) {errors.push(
{
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
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
if (data.order !== undefined) {
let data1 = data.order
const _errs3 = errors
if (
!(
typeof data1 == 'number' &&
!(data1 % 1) &&
!isNaN(data1) &&
isFinite(data1)
)
) {errors.push(
{
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 < 0 || isNaN(data1)) {errors.push(
{
instancePath: instancePath + '/order',
schemaPath: '#/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
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
if (data.lastModified !== undefined) {
let data2 = data.lastModified
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
instancePath: instancePath + '/lastModified',
schemaPath: '#/properties/lastModified/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.touched !== undefined) {
const _errs7 = errors
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
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.version !== undefined) {
let data4 = data.version
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
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data4 == 'number' && isFinite(data4)) {
if (data4 < 0 || isNaN(data4)) {errors.push(
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
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.id !== undefined) {
let data5 = data.id
const _errs11 = errors
if (true) {
if (true) {
if (typeof data5 === 'string') {
if (!formats2.test(data5)) {errors.push(
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
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.appId !== undefined) {
let data6 = data.appId
const _errs13 = errors
if (true) {
if (true) {
if (typeof data6 === 'string') {
if (!formats2.test(data6)) {errors.push(
{
instancePath: instancePath + '/appId',
schemaPath: '#/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid0 = _errs13 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseId !== undefined) {
let data7 = data.databaseId
const _errs15 = errors
if (true) {
if (true) {
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {errors.push(
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
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successVideoType !== undefined) {
let data8 = data.successVideoType
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
instancePath: instancePath + '/successVideoType',
schemaPath: '#/properties/successVideoType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data8 == 'number' && isFinite(data8)) {
if (data8 > 2 || isNaN(data8)) {errors.push(
{
instancePath: instancePath + '/successVideoType',
schemaPath: '#/properties/successVideoType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 2 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data8 < 0 || isNaN(data8)) {errors.push(
{
instancePath: instancePath + '/successVideoType',
schemaPath: '#/properties/successVideoType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
}
var valid0 = _errs17 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successVideoUrl !== undefined) {
let data9 = data.successVideoUrl
const _errs19 = errors
if (true) {
if (typeof data9 === 'string') {
if (func4(data9) > 100) {errors.push(
{
instancePath: instancePath + '/successVideoUrl',
schemaPath: '#/properties/successVideoUrl/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/successVideoUrl',
schemaPath: '#/properties/successVideoUrl/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs19 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successAnimations !== undefined) {
let data10 = data.successAnimations
const _errs21 = errors
if (true) {
if (typeof data10 === 'string') {
if (func4(data10) > 100) {errors.push(
{
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/successAnimations',
schemaPath: '#/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs21 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successSound !== undefined) {
let data11 = data.successSound
const _errs23 = errors
if (true) {
if (true) {
if (typeof data11 === 'string') {
if (!formats2.test(data11)) {errors.push(
{
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/successSound',
schemaPath: '#/properties/successSound/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs23 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.successSoundType !== undefined) {
let data12 = data.successSoundType
const _errs25 = errors
if (
!(
typeof data12 == 'number' &&
!(data12 % 1) &&
!isNaN(data12) &&
isFinite(data12)
)
) {errors.push(
{
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data12 == 'number' &&
isFinite(data12)
) {
if (data12 > 4 || isNaN(data12)) {errors.push(
{
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 4
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data12 < 0 || isNaN(data12)) {errors.push(
{
instancePath: instancePath + '/successSoundType',
schemaPath: '#/properties/successSoundType/minimum',
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
var valid0 = _errs25 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.homePageImageType !== undefined) {
let data13 = data.homePageImageType
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
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/type',
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
if (data13 > 3 || isNaN(data13)) {errors.push(
{
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data13 < 0 || isNaN(data13)) {errors.push(
{
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/minimum',
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
var valid0 = _errs27 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.homePageImage !== undefined) {
let data14 = data.homePageImage
const _errs29 = errors
if (true) {
if (true) {
if (typeof data14 === 'string') {
if (!formats2.test(data14)) {errors.push(
{
instancePath: instancePath + '/homePageImage',
schemaPath: '#/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/homePageImage',
schemaPath: '#/properties/homePageImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs29 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.router !== undefined) {
let data15 = data.router
const _errs31 = errors
if (true) {
if (true) {
if (typeof data15 === 'string') {
if (!formats2.test(data15)) {errors.push(
{
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid0 = _errs31 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.routerTime !== undefined) {
let data16 = data.routerTime
const _errs33 = errors
if (
!(
typeof data16 == 'number' &&
!(data16 % 1) &&
!isNaN(data16) &&
isFinite(data16)
)
) {errors.push(
{
instancePath: instancePath + '/routerTime',
schemaPath: '#/properties/routerTime/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_a_number"
}
);
}
var valid0 = _errs33 === errors
} else {
var valid0 = true
}
if (valid0) {
if (
data.routerTimeImmediate !== undefined
) {
const _errs35 = errors
if (
typeof data.routerTimeImmediate !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/routerTimeImmediate',
schemaPath: '#/properties/routerTimeImmediate/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid0 = _errs35 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.points !== undefined) {
let data18 = data.points
const _errs37 = errors
if (
!(
typeof data18 == 'number' &&
!(data18 % 1) &&
!isNaN(data18) &&
isFinite(data18)
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
typeof data18 == 'number' &&
isFinite(data18)
) {
if (
data18 < 0 ||
isNaN(data18)
) {errors.push(
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
var valid0 = _errs37 === errors
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
