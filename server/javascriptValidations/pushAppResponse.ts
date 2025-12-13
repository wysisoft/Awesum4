'use strict'
const schema36 = {
$id: 'pushAppResponse',
type: 'object',
properties: {
app: {
$id: 'app',
type: 'object',
properties: {
email: {
minLength: 5,
maxLength: 100,
format: 'email',
transform: ['trim', 'toLowerCase'],
type: 'string'},
name: {
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
uniqueName: {
minLength: 1,
maxLength: 100,
pattern: '/^(?!API$|I$).+$/i',
isNameGloballyUnique: true,
transform: ['trim', 'toLowerCase'],
type: 'string'},
version: { default: 0, minimum: 0, type: 'integer' },
touched: { default: false, type: 'boolean' },
lastModified: { default: 1765576511840, type: 'number' },
homePageImageType: {
default: 0,
minimum: 0,
maximum: 3,
type: 'integer'},
homePageImage: {
default: '00000000-0000-0000-0000-000000000001',
format: 'uuid',
type: 'string'},
authenticationType: {
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
lang: {
default: 'en-US',
minLength: 1,
maxLength: 100,
transform: ['trim', 'toLowerCase'],
type: 'string'},
enableNarrator: { default: false, type: 'boolean' },
groups: { default: '', maxLength: 8000, type: 'string' },
id: {
default: '019b148f-9160-7501-a783-be3a24d896f2',
format: 'uuid',
minLength: 36,
type: 'string'},
lastSync: { default: 0, type: 'number' }
},
required: [
'email',
'name',
'uniqueName',
'version',
'touched',
'lastModified',
'homePageImageType',
'homePageImage',
'authenticationType',
'lang',
'enableNarrator',
'groups',
'id',
'lastSync'
]
}
},
required: ['app']
}
const func2 = (await import('ajv-keywords/dist/definitions/transform')).default.transform
.toLowerCase
const func3 = (await import('ajv-keywords/dist/definitions/transform')).default.transform.trim
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const pattern0 = new RegExp(/^(?!API$|I$).+$/, 'i');
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerPushAppResponseInterface } from '../serverInterfaces/ServerPushAppResponseInterface'
export async function validatePushAppResponse(
data:ServerPushAppResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="pushAppResponse" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (data.app === undefined && (missing0 = 'app')) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"
}
);
} else {
if (data.app !== undefined) {
let data0 = data.app
const _errs1 = errors
if (true) {
if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
let missing1
if (
(data0.email === undefined && (missing1 = 'email')) ||
(data0.name === undefined && (missing1 = 'name')) ||
(data0.uniqueName === undefined && (missing1 = 'uniqueName')) ||
(data0.version === undefined && (missing1 = 'version')) ||
(data0.touched === undefined && (missing1 = 'touched')) ||
(data0.lastModified === undefined &&
(missing1 = 'lastModified')) ||
(data0.homePageImageType === undefined &&
(missing1 = 'homePageImageType')) ||
(data0.homePageImage === undefined &&
(missing1 = 'homePageImage')) ||
(data0.authenticationType === undefined &&
(missing1 = 'authenticationType')) ||
(data0.lang === undefined && (missing1 = 'lang')) ||
(data0.enableNarrator === undefined &&
(missing1 = 'enableNarrator')) ||
(data0.groups === undefined && (missing1 = 'groups')) ||
(data0.id === undefined && (missing1 = 'id')) ||
(data0.lastSync === undefined && (missing1 = 'lastSync'))
) {errors.push(
{
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: missing1 },
message: "must have required property '" + missing1 + "'"
}
);
} else {
if (data0.email !== undefined) {
let data1 = data0.email
const _errs3 = errors
if (typeof data1 == 'string' && data0 !== undefined) {
data1 = func2(func3(data1))
data0['email'] = data1
}
if (true) {
if (true) {
if (typeof data1 === 'string') {
if (func4(data1) > 100) {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data1) < 5) {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"
}
);
} else {
if (!formats0.test(data1)) {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"
}
);
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs3 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.name !== undefined) {
let data2 = data0.name
const _errs5 = errors
if (typeof data2 == 'string' && data0 !== undefined) {
data2 = func2(func3(data2))
data0['name'] = data2
}
if (true) {
if (typeof data2 === 'string') {
if (func4(data2) > 100) {errors.push(
{
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data2) < 1) {errors.push(
{
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs5 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.uniqueName !== undefined) {
let data3 = data0.uniqueName
const _errs7 = errors
if (typeof data3 == 'string' && data0 !== undefined) {
data3 = func2(func3(data3))
data0['uniqueName'] = data3
}
if (true) {
if (typeof data3 === 'string') {
if (func4(data3) > 100) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data3) < 1) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
} else {
if (!pattern0.test(data3)) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/pattern',
keyword: 'pattern',
params: { pattern: '/^(?!API$|I$).+$/i' },
 message: "Unique_name_contains_reserved_words"
}
);
} else {
if (
!await serverAndClientFunctions.isNameGloballyUnique(data.email,
data3
)
) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/isNameGloballyUnique',
keyword: 'isNameGloballyUnique',
params: {},
 message: "Not_Globally_Unique"
}
);
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs7 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.version !== undefined) {
let data4 = data0.version
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
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/type',
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
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
var valid1 = _errs9 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.touched !== undefined) {
const _errs11 = errors
if (typeof data0.touched !== 'boolean') {errors.push(
{
instancePath: instancePath + '/app/touched',
schemaPath: '#/properties/app/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid1 = _errs11 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.lastModified !== undefined) {
let data6 = data0.lastModified
const _errs13 = errors
if (
!(typeof data6 == 'number' && isFinite(data6))
) {errors.push(
{
instancePath: instancePath + '/app/lastModified',
schemaPath: '#/properties/app/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid1 = _errs13 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.homePageImageType !== undefined) {
let data7 = data0.homePageImageType
const _errs15 = errors
if (
!(
typeof data7 == 'number' &&
!(data7 % 1) &&
!isNaN(data7) &&
isFinite(data7)
)
) {errors.push(
{
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data7 == 'number' &&
isFinite(data7)
) {
if (data7 > 3 || isNaN(data7)) {errors.push(
{
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data7 < 0 || isNaN(data7)) {errors.push(
{
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/minimum',
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
var valid1 = _errs15 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.homePageImage !== undefined) {
let data8 = data0.homePageImage
const _errs17 = errors
if (true) {
if (true) {
if (typeof data8 === 'string') {
if (!formats2.test(data8)) {errors.push(
{
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs17 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.authenticationType !== undefined) {
let data9 = data0.authenticationType
const _errs19 = errors
if (
typeof data9 == 'string' &&
data0 !== undefined
) {
data9 = func2(func3(data9))
data0['authenticationType'] = data9
}
if (true) {
if (typeof data9 === 'string') {
if (func4(data9) > 100) {errors.push(
{
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data9) < 1) {errors.push(
{
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs19 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.lang !== undefined) {
let data10 = data0.lang
const _errs21 = errors
if (
typeof data10 == 'string' &&
data0 !== undefined
) {
data10 = func2(func3(data10))
data0['lang'] = data10
}
if (true) {
if (typeof data10 === 'string') {
if (func4(data10) > 100) {errors.push(
{
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data10) < 1) {errors.push(
{
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs21 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.enableNarrator !== undefined) {
const _errs23 = errors
if (
typeof data0.enableNarrator !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/app/enableNarrator',
schemaPath: '#/properties/app/properties/enableNarrator/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid1 = _errs23 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.groups !== undefined) {
let data12 = data0.groups
const _errs25 = errors
if (true) {
if (typeof data12 === 'string') {
if (func4(data12) > 8000) {errors.push(
{
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid1 = _errs25 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.id !== undefined) {
let data13 = data0.id
const _errs27 = errors
if (true) {
if (true) {
if (typeof data13 === 'string') {
if (func4(data13) < 36) {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/minLength',
keyword: 'minLength',
params: { limit: 36 },
 message: "Must_be_36_characters"
}
);
} else {
if (!formats2.test(data13)) {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid1 = _errs27 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.lastSync !== undefined) {
let data14 = data0.lastSync
const _errs29 = errors
if (
!(
typeof data14 == 'number' &&
isFinite(data14)
)
) {errors.push(
{
instancePath: instancePath + '/app/lastSync',
schemaPath: '#/properties/app/properties/lastSync/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid1 = _errs29 === errors
} else {
var valid1 = true
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
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
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
