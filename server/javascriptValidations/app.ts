'use strict'
const schema12 = {
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
touched: { default: true, type: 'boolean' },
lastModified: { default: 1763938745147, type: 'number' },
homePageImageType: { default: 0, minimum: 0, maximum: 3, type: 'integer' },
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
default: '019ab2f1-3b3b-7707-bc13-509aa68271f2',
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
const func2 = (await import('ajv-keywords/dist/definitions/transform')).default.transform
.toLowerCase
const func3 = (await import('ajv-keywords/dist/definitions/transform')).default.transform.trim
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const pattern0 = new RegExp(/^(?!API$|I$).+$/, 'i');
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerAppInterface } from '../serverInterfaces/ServerAppInterface'
export async function validateApp(
data:ServerAppInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="app" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (
(data.email === undefined && (missing0 = 'email')) ||
(data.name === undefined && (missing0 = 'name')) ||
(data.uniqueName === undefined && (missing0 = 'uniqueName')) ||
(data.version === undefined && (missing0 = 'version')) ||
(data.touched === undefined && (missing0 = 'touched')) ||
(data.lastModified === undefined && (missing0 = 'lastModified')) ||
(data.homePageImageType === undefined &&
(missing0 = 'homePageImageType')) ||
(data.homePageImage === undefined && (missing0 = 'homePageImage')) ||
(data.authenticationType === undefined &&
(missing0 = 'authenticationType')) ||
(data.lang === undefined && (missing0 = 'lang')) ||
(data.enableNarrator === undefined && (missing0 = 'enableNarrator')) ||
(data.groups === undefined && (missing0 = 'groups')) ||
(data.id === undefined && (missing0 = 'id')) ||
(data.lastSync === undefined && (missing0 = 'lastSync'))
) {errors.push(
{
instancePath,
schemaPath: '#/required',
keyword: 'required',
params: { missingProperty: missing0 },
 message: "Required"}
);
} else {
if (data.email !== undefined) {
let data0 = data.email
const _errs1 = errors
if (typeof data0 == 'string' && data !== undefined) {
data0 = func2(func3(data0))
data['email'] = data0
}
if (true) {
if (true) {
if (typeof data0 === 'string') {
if (func4(data0) > 100) {errors.push(
{
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data0) < 5) {errors.push(
{
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"}
);
} else {
if (!formats0.test(data0)) {errors.push(
{
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
);
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/email',
schemaPath: '#/properties/email/type',
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
if (data.name !== undefined) {
let data1 = data.name
const _errs3 = errors
if (typeof data1 == 'string' && data !== undefined) {
data1 = func2(func3(data1))
data['name'] = data1
}
if (true) {
if (typeof data1 === 'string') {
if (func4(data1) > 100) {errors.push(
{
instancePath: instancePath + '/name',
schemaPath: '#/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data1) < 1) {errors.push(
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
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.uniqueName !== undefined) {
let data2 = data.uniqueName
const _errs5 = errors
if (typeof data2 == 'string' && data !== undefined) {
data2 = func2(func3(data2))
data['uniqueName'] = data2
}
if (true) {
if (typeof data2 === 'string') {
if (func4(data2) > 100) {errors.push(
{
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data2) < 1) {errors.push(
{
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!pattern0.test(data2)) {errors.push(
{
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/pattern',
keyword: 'pattern',
params: { pattern: '/^(?!API$|I$).+$/i' },
 message: "Unique_name_contains_reserved_words"}
);
} else {
if (
!await serverAndClientFunctions.isNameGloballyUnique(data.email,
data2
)
) {errors.push(
{
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/isNameGloballyUnique',
keyword: 'isNameGloballyUnique',
params: {},
 message: "Not_Globally_Unique"}
);
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/uniqueName',
schemaPath: '#/properties/uniqueName/type',
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
if (data.version !== undefined) {
let data3 = data.version
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
instancePath: instancePath + '/version',
schemaPath: '#/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data3 == 'number' && isFinite(data3)) {
if (data3 < 0 || isNaN(data3)) {errors.push(
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
 message: "Must_be_a_boolean"}
);
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
 message: "Must_be_a_number"}
);
}
var valid0 = _errs11 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.homePageImageType !== undefined) {
let data6 = data.homePageImageType
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
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 3 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data6 < 0 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/homePageImageType',
schemaPath: '#/properties/homePageImageType/minimum',
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
if (data.homePageImage !== undefined) {
let data7 = data.homePageImage
const _errs15 = errors
if (true) {
if (true) {
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {errors.push(
{
instancePath: instancePath + '/homePageImage',
schemaPath: '#/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
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
var valid0 = _errs15 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.authenticationType !== undefined) {
let data8 = data.authenticationType
const _errs17 = errors
if (typeof data8 == 'string' && data !== undefined) {
data8 = func2(func3(data8))
data['authenticationType'] = data8
}
if (true) {
if (typeof data8 === 'string') {
if (func4(data8) > 100) {errors.push(
{
instancePath: instancePath + '/authenticationType',
schemaPath: '#/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data8) < 1) {errors.push(
{
instancePath: instancePath + '/authenticationType',
schemaPath: '#/properties/authenticationType/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/authenticationType',
schemaPath: '#/properties/authenticationType/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs17 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lang !== undefined) {
let data9 = data.lang
const _errs19 = errors
if (
typeof data9 == 'string' &&
data !== undefined
) {
data9 = func2(func3(data9))
data['lang'] = data9
}
if (true) {
if (typeof data9 === 'string') {
if (func4(data9) > 100) {errors.push(
{
instancePath: instancePath + '/lang',
schemaPath: '#/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data9) < 1) {errors.push(
{
instancePath: instancePath + '/lang',
schemaPath: '#/properties/lang/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/lang',
schemaPath: '#/properties/lang/type',
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
if (data.enableNarrator !== undefined) {
const _errs21 = errors
if (typeof data.enableNarrator !== 'boolean') {errors.push(
{
instancePath: instancePath + '/enableNarrator',
schemaPath: '#/properties/enableNarrator/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid0 = _errs21 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.groups !== undefined) {
let data11 = data.groups
const _errs23 = errors
if (true) {
if (typeof data11 === 'string') {
if (func4(data11) > 8000) {errors.push(
{
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/groups',
schemaPath: '#/properties/groups/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid0 = _errs23 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.id !== undefined) {
let data12 = data.id
const _errs25 = errors
if (true) {
if (true) {
if (typeof data12 === 'string') {
if (func4(data12) < 36) {errors.push(
{
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/minLength',
keyword: 'minLength',
params: { limit: 36 },
 message: "Must_be_36_characters"}
);
} else {
if (!formats2.test(data12)) {errors.push(
{
instancePath: instancePath + '/id',
schemaPath: '#/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
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
var valid0 = _errs25 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.lastSync !== undefined) {
let data13 = data.lastSync
const _errs27 = errors
if (
!(
typeof data13 == 'number' &&
isFinite(data13)
)
) {errors.push(
{
instancePath: instancePath + '/lastSync',
schemaPath: '#/properties/lastSync/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid0 = _errs27 === errors
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
