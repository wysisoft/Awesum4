'use strict'
const schema34 = {
$id: 'syncRequest',
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
lastModified: { default: 1762879447790, type: 'number' },
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
groups: { maxLength: 8000, type: 'string' },
id: {
default: '019a73cd-a2ee-7146-ac1c-398d6acb2fba',
format: 'uuid',
minLength: 36,
type: 'string'
}
},
required: [
'email',
'name',
'uniqueName',
'version',
'lastModified',
'homePageImageType',
'homePageImage',
'authenticationType',
'lang',
'enableNarrator',
'groups',
'id'
]
},
database: {
$id: 'database',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
lastModified: { default: 1762879447790, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019a73cd-a2ee-7146-ac1c-3fa80df8cbc5',
format: 'uuid',
type: 'string'},
order: { default: 0, minimum: 0, type: 'integer' },
homePageIconType: {
default: 0,
minimum: 0,
maximum: 3,
type: 'integer'},
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
},
databaseUnit: {
$id: 'databaseUnit',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
order: { minimum: 0, type: 'integer' },
lastModified: { type: 'number' },
version: { minimum: 0, type: 'integer' },
id: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
databaseId: { format: 'uuid', type: 'string' },
successVideoType: {
default: 0,
minimum: 0,
maximum: 2,
type: 'integer'},
successVideoUrl: { maxLength: 100, type: 'string' },
successAnimations: {
default: 'Fireworks',
maxLength: 100,
type: 'string'},
successSound: { format: 'uuid', type: 'string' },
successSoundType: {
default: 2,
minimum: 0,
maximum: 4,
type: 'integer'},
homePageImageType: {
default: 0,
minimum: 0,
maximum: 3,
type: 'integer'},
homePageImage: {
default: '00000000-0000-0000-0000-000000000002',
format: 'uuid',
type: 'string'},
router: { format: 'uuid', type: 'string' },
routerTime: { type: 'number' },
routerTimeImmediate: { default: false, type: 'boolean' },
points: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'name',
'order',
'lastModified',
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
},
databaseItem: {
$id: 'databaseItem',
type: 'object',
properties: {
itemType: { minimum: 0, maximum: 5, type: 'integer' },
order: { minimum: 0, type: 'integer' },
unitId: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
lastModified: { type: 'number' },
version: { minimum: 0, type: 'integer' },
databaseId: { format: 'uuid', type: 'string' },
id: { format: 'uuid', type: 'string' },
dataText: { maxLength: 8000, type: 'string' },
data: {}
},
required: [
'itemType',
'order',
'unitId',
'appId',
'lastModified',
'version',
'databaseId',
'id',
'dataText',
'data'
]
},
followerRequest: {
$id: 'followerRequest',
type: 'object',
properties: {
leaderAppId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
followerAppId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
id: {
default: '019a73cd-a2ef-751c-8fbf-df931f81397a',
format: 'uuid',
type: 'string'},
followerName: {
minLength: 1,
maxLength: 100,
default: 'Follower Name',
type: 'string'},
leaderName: {
minLength: 1,
maxLength: 100,
default: 'Leader Name',
type: 'string'},
followerEmail: {
minLength: 1,
maxLength: 100,
format: 'email',
doesEmailExist: true,
default: 'follower@example.com',
type: 'string'},
leaderEmail: {
minLength: 1,
maxLength: 100,
format: 'email',
doesEmailExist: true,
default: 'leader@example.com',
type: 'string'},
initiatedByFollower: { default: false, type: 'boolean' },
lastModified: { default: 1762879447791, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
status: { default: 0, minimum: 0, maximum: 2, type: 'integer' },
groups: { maxLength: 8000, default: '', type: 'string' },
points: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'leaderAppId',
'followerAppId',
'id',
'followerName',
'leaderName',
'followerEmail',
'leaderEmail',
'initiatedByFollower',
'lastModified',
'version',
'status',
'groups',
'points'
]
},
followerDatabase: {
$id: 'followerDatabase',
type: 'object',
properties: {
followerRequestId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
id: {
default: '019a73cd-a2ef-751c-8fbf-d858f77eba66',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 1762879447791, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'followerRequestId',
'id',
'databaseId',
'lastModified',
'version'
]
},
router: {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019a73cd-a2ef-751c-8fbf-ebed4011b1cc',
format: 'uuid',
type: 'string'},
appId: { format: 'uuid', type: 'string' },
routerMac: {
default: '00:00:00:00:00:00',
format: 'regex',
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
contentEncoding: 'base64',
type: 'string'},
ipAddress: { default: '0.0.0.0', format: 'ipv4', type: 'string' },
mondayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
tuesdayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
wednesdayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
thursdayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
fridayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
saturdayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
sundayTimesAndDurations: {
default: '06:30|60',
format: 'regex',
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$',
type: 'string'},
version: { default: 0, minimum: 0, type: 'integer' },
lastModified: { default: 1762879447791, type: 'number' },
status: { default: 1, maximum: 2, type: 'integer' }
},
required: [
'id',
'appId',
'routerMac',
'ipAddress',
'mondayTimesAndDurations',
'tuesdayTimesAndDurations',
'wednesdayTimesAndDurations',
'thursdayTimesAndDurations',
'fridayTimesAndDurations',
'saturdayTimesAndDurations',
'sundayTimesAndDurations',
'version',
'lastModified',
'status'
]
},
followerDatabaseCompletion: {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019a73cd-a2ef-751c-8fbf-e4c01016ed84',
format: 'uuid',
type: 'string'},
followerRequestId: { format: 'uuid', type: 'string' },
description: { maxLength: 1000, type: 'string' },
itemId: { format: 'uuid', type: 'string' },
parentItemId: { format: 'uuid', type: 'string' },
itemLevel: { minimum: 0, maximum: 8, type: 'integer' },
lastModified: { type: 'number' },
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
'version'
]
},
media: {
$id: 'media',
type: 'object',
properties: {
id: {
default: '019a73cd-a2ef-751c-8fbf-e0c3f7fe8316',
format: 'uuid',
type: 'string'},
size: { minimum: 0, type: 'integer' },
data: { maxLength: 8000, type: 'string' },
appId: { format: 'uuid', type: 'string' },
lastModified: { type: 'number' }
},
required: ['id', 'size', 'data', 'appId', 'lastModified']
},
deletion: {
$id: 'deletion',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
level: { minimum: 0, maximum: 8, type: 'integer' }
},
required: ['id', 'level']
}
}
}
const func2 = (await import('ajv-keywords/dist/definitions/transform')).default.transform
.toLowerCase
const func3 = (await import('ajv-keywords/dist/definitions/transform')).default.transform.trim
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
import * as formats from 'ajv-formats/dist/formats'
const formats94 = formats.fullFormats.regex as any
const formats96 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
const pattern0 = new RegExp(/^(?!API$|I$).+$/, 'i');
const pattern1 = new RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', 'u')
const pattern2 = new RegExp('^([0-9]{2}:[0-9]{2})\\|([0-9]+)$', 'u')
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerSyncRequestInterface } from '../serverInterfaces/ServerSyncRequestInterface'
export async function validateSyncRequest(
data:ServerSyncRequestInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="syncRequest" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
if (data.app !== undefined) {
let data0 = data.app
const _errs1 = errors
if (true) {
if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
let missing0
if (
(data0.email === undefined && (missing0 = 'email')) ||
(data0.name === undefined && (missing0 = 'name')) ||
(data0.uniqueName === undefined && (missing0 = 'uniqueName')) ||
(data0.version === undefined && (missing0 = 'version')) ||
(data0.lastModified === undefined &&
(missing0 = 'lastModified')) ||
(data0.homePageImageType === undefined &&
(missing0 = 'homePageImageType')) ||
(data0.homePageImage === undefined &&
(missing0 = 'homePageImage')) ||
(data0.authenticationType === undefined &&
(missing0 = 'authenticationType')) ||
(data0.lang === undefined && (missing0 = 'lang')) ||
(data0.enableNarrator === undefined &&
(missing0 = 'enableNarrator')) ||
(data0.groups === undefined && (missing0 = 'groups')) ||
(data0.id === undefined && (missing0 = 'id'))
) {errors.push(
{
instancePath: instancePath + '/app',
schemaPath: '#/properties/app/required',
keyword: 'required',
params: { missingProperty: missing0 },
message: "must have required property '" + missing0 + "'"
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
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data1) < 5) {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"}
);
} else {
if (!formats0.test(data1)) {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
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
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data2) < 1) {errors.push(
{
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
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
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data3) < 1) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!pattern0.test(data3)) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/pattern',
keyword: 'pattern',
params: { pattern: '/^(?!API$|I$).+$/i' },
 message: "Unique_name_contains_reserved_words"}
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
 message: "Not_Globally_Unique"}
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
 message: "Must_be_an_integer"}
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
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid1 = _errs9 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.lastModified !== undefined) {
let data5 = data0.lastModified
const _errs11 = errors
if (!(typeof data5 == 'number' && isFinite(data5))) {errors.push(
{
instancePath: instancePath + '/app/lastModified',
schemaPath: '#/properties/app/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid1 = _errs11 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.homePageImageType !== undefined) {
let data6 = data0.homePageImageType
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
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data6 == 'number' && isFinite(data6)) {
if (data6 > 3 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data6 < 0 || isNaN(data6)) {errors.push(
{
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid1 = _errs13 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.homePageImage !== undefined) {
let data7 = data0.homePageImage
const _errs15 = errors
if (true) {
if (true) {
if (typeof data7 === 'string') {
if (!formats2.test(data7)) {errors.push(
{
instancePath: instancePath + '/app/homePageImage',
schemaPath: '#/properties/app/properties/homePageImage/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
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
var valid1 = _errs15 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.authenticationType !== undefined) {
let data8 = data0.authenticationType
const _errs17 = errors
if (
typeof data8 == 'string' &&
data0 !== undefined
) {
data8 = func2(func3(data8))
data0['authenticationType'] = data8
}
if (true) {
if (typeof data8 === 'string') {
if (func4(data8) > 100) {errors.push(
{
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data8) < 1) {errors.push(
{
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
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
var valid1 = _errs17 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.lang !== undefined) {
let data9 = data0.lang
const _errs19 = errors
if (
typeof data9 == 'string' &&
data0 !== undefined
) {
data9 = func2(func3(data9))
data0['lang'] = data9
}
if (true) {
if (typeof data9 === 'string') {
if (func4(data9) > 100) {errors.push(
{
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data9) < 1) {errors.push(
{
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
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
var valid1 = _errs19 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.enableNarrator !== undefined) {
const _errs21 = errors
if (
typeof data0.enableNarrator !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/app/enableNarrator',
schemaPath: '#/properties/app/properties/enableNarrator/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid1 = _errs21 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.groups !== undefined) {
let data11 = data0.groups
const _errs23 = errors
if (true) {
if (typeof data11 === 'string') {
if (func4(data11) > 8000) {errors.push(
{
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
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
var valid1 = _errs23 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data0.id !== undefined) {
let data12 = data0.id
const _errs25 = errors
if (true) {
if (true) {
if (typeof data12 === 'string') {
if (func4(data12) < 36) {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/minLength',
keyword: 'minLength',
params: { limit: 36 },
 message: "Must_be_36_characters"}
);
} else {
if (!formats2.test(data12)) {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
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
var valid1 = _errs25 === errors
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
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.database !== undefined) {
let data13 = data.database
const _errs27 = errors
if (true) {
if (data13 && typeof data13 == 'object' && !Array.isArray(data13)) {
let missing1
if (
(data13.name === undefined && (missing1 = 'name')) ||
(data13.lastModified === undefined &&
(missing1 = 'lastModified')) ||
(data13.version === undefined && (missing1 = 'version')) ||
(data13.appId === undefined && (missing1 = 'appId')) ||
(data13.id === undefined && (missing1 = 'id')) ||
(data13.order === undefined && (missing1 = 'order')) ||
(data13.homePageIconType === undefined &&
(missing1 = 'homePageIconType')) ||
(data13.homePageIcon === undefined &&
(missing1 = 'homePageIcon'))
) {errors.push(
{
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: missing1 },
message: "must have required property '" + missing1 + "'"
}
);
} else {
if (data13.name !== undefined) {
let data14 = data13.name
const _errs29 = errors
if (true) {
if (typeof data14 === 'string') {
if (func4(data14) > 100) {errors.push(
{
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data14) < 1) {errors.push(
{
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid2 = _errs29 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data13.lastModified !== undefined) {
let data15 = data13.lastModified
const _errs31 = errors
if (!(typeof data15 == 'number' && isFinite(data15))) {errors.push(
{
instancePath: instancePath + '/database/lastModified',
schemaPath: '#/properties/database/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid2 = _errs31 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data13.version !== undefined) {
let data16 = data13.version
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
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data16 == 'number' && isFinite(data16)) {
if (data16 < 0 || isNaN(data16)) {errors.push(
{
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid2 = _errs33 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data13.appId !== undefined) {
let data17 = data13.appId
const _errs35 = errors
if (true) {
if (true) {
if (typeof data17 === 'string') {
if (!formats2.test(data17)) {errors.push(
{
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid2 = _errs35 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data13.id !== undefined) {
let data18 = data13.id
const _errs37 = errors
if (true) {
if (true) {
if (typeof data18 === 'string') {
if (!formats2.test(data18)) {errors.push(
{
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid2 = _errs37 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data13.order !== undefined) {
let data19 = data13.order
const _errs39 = errors
if (
!(
typeof data19 == 'number' &&
!(data19 % 1) &&
!isNaN(data19) &&
isFinite(data19)
)
) {errors.push(
{
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data19 == 'number' &&
isFinite(data19)
) {
if (data19 < 0 || isNaN(data19)) {errors.push(
{
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid2 = _errs39 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data13.homePageIconType !== undefined) {
let data20 = data13.homePageIconType
const _errs41 = errors
if (
!(
typeof data20 == 'number' &&
!(data20 % 1) &&
!isNaN(data20) &&
isFinite(data20)
)
) {errors.push(
{
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data20 == 'number' &&
isFinite(data20)
) {
if (data20 > 3 || isNaN(data20)) {errors.push(
{
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data20 < 0 || isNaN(data20)) {errors.push(
{
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid2 = _errs41 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data13.homePageIcon !== undefined) {
let data21 = data13.homePageIcon
const _errs43 = errors
if (true) {
if (true) {
if (typeof data21 === 'string') {
if (!formats2.test(data21)) {errors.push(
{
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid2 = _errs43 === errors
} else {
var valid2 = true
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
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs27 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseUnit !== undefined) {
let data22 = data.databaseUnit
const _errs45 = errors
if (true) {
if (
data22 &&
typeof data22 == 'object' &&
!Array.isArray(data22)
) {
let missing2
if (
(data22.name === undefined && (missing2 = 'name')) ||
(data22.order === undefined && (missing2 = 'order')) ||
(data22.lastModified === undefined &&
(missing2 = 'lastModified')) ||
(data22.version === undefined && (missing2 = 'version')) ||
(data22.id === undefined && (missing2 = 'id')) ||
(data22.appId === undefined && (missing2 = 'appId')) ||
(data22.databaseId === undefined &&
(missing2 = 'databaseId')) ||
(data22.successVideoType === undefined &&
(missing2 = 'successVideoType')) ||
(data22.successVideoUrl === undefined &&
(missing2 = 'successVideoUrl')) ||
(data22.successAnimations === undefined &&
(missing2 = 'successAnimations')) ||
(data22.successSound === undefined &&
(missing2 = 'successSound')) ||
(data22.successSoundType === undefined &&
(missing2 = 'successSoundType')) ||
(data22.homePageImageType === undefined &&
(missing2 = 'homePageImageType')) ||
(data22.homePageImage === undefined &&
(missing2 = 'homePageImage')) ||
(data22.router === undefined && (missing2 = 'router')) ||
(data22.routerTime === undefined &&
(missing2 = 'routerTime')) ||
(data22.routerTimeImmediate === undefined &&
(missing2 = 'routerTimeImmediate')) ||
(data22.points === undefined && (missing2 = 'points'))
) {errors.push(
{
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: missing2 },
message: "must have required property '" + missing2 + "'"
}
);
} else {
if (data22.name !== undefined) {
let data23 = data22.name
const _errs47 = errors
if (true) {
if (typeof data23 === 'string') {
if (func4(data23) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data23) < 1) {errors.push(
{
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid3 = _errs47 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.order !== undefined) {
let data24 = data22.order
const _errs49 = errors
if (
!(
typeof data24 == 'number' &&
!(data24 % 1) &&
!isNaN(data24) &&
isFinite(data24)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data24 == 'number' && isFinite(data24)) {
if (data24 < 0 || isNaN(data24)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid3 = _errs49 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.lastModified !== undefined) {
let data25 = data22.lastModified
const _errs51 = errors
if (!(typeof data25 == 'number' && isFinite(data25))) {errors.push(
{
instancePath: instancePath + '/databaseUnit/lastModified',
schemaPath: '#/properties/databaseUnit/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid3 = _errs51 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.version !== undefined) {
let data26 = data22.version
const _errs53 = errors
if (
!(
typeof data26 == 'number' &&
!(data26 % 1) &&
!isNaN(data26) &&
isFinite(data26)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data26 == 'number' && isFinite(data26)) {
if (data26 < 0 || isNaN(data26)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid3 = _errs53 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.id !== undefined) {
let data27 = data22.id
const _errs55 = errors
if (true) {
if (true) {
if (typeof data27 === 'string') {
if (!formats2.test(data27)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid3 = _errs55 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.appId !== undefined) {
let data28 = data22.appId
const _errs57 = errors
if (true) {
if (true) {
if (typeof data28 === 'string') {
if (!formats2.test(data28)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid3 = _errs57 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.databaseId !== undefined) {
let data29 = data22.databaseId
const _errs59 = errors
if (true) {
if (true) {
if (typeof data29 === 'string') {
if (!formats2.test(data29)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid3 = _errs59 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.successVideoType !== undefined) {
let data30 = data22.successVideoType
const _errs61 = errors
if (
!(
typeof data30 == 'number' &&
!(data30 % 1) &&
!isNaN(data30) &&
isFinite(data30)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data30 == 'number' &&
isFinite(data30)
) {
if (data30 > 2 || isNaN(data30)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 2
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data30 < 0 || isNaN(data30)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid3 = _errs61 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.successVideoUrl !== undefined) {
let data31 = data22.successVideoUrl
const _errs63 = errors
if (true) {
if (typeof data31 === 'string') {
if (func4(data31) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid3 = _errs63 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data22.successAnimations !== undefined
) {
let data32 = data22.successAnimations
const _errs65 = errors
if (true) {
if (typeof data32 === 'string') {
if (func4(data32) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid3 = _errs65 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.successSound !== undefined) {
let data33 = data22.successSound
const _errs67 = errors
if (true) {
if (true) {
if (typeof data33 === 'string') {
if (!formats2.test(data33)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid3 = _errs67 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data22.successSoundType !== undefined
) {
let data34 = data22.successSoundType
const _errs69 = errors
if (
!(
typeof data34 == 'number' &&
!(data34 % 1) &&
!isNaN(data34) &&
isFinite(data34)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data34 == 'number' &&
isFinite(data34)
) {
if (data34 > 4 || isNaN(data34)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 4
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (
data34 < 0 ||
isNaN(data34)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid3 = _errs69 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data22.homePageImageType !== undefined
) {
let data35 = data22.homePageImageType
const _errs71 = errors
if (
!(
typeof data35 == 'number' &&
!(data35 % 1) &&
!isNaN(data35) &&
isFinite(data35)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data35 == 'number' &&
isFinite(data35)
) {
if (
data35 > 3 ||
isNaN(data35)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (
data35 < 0 ||
isNaN(data35)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid3 = _errs71 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data22.homePageImage !== undefined
) {
let data36 = data22.homePageImage
const _errs73 = errors
if (true) {
if (true) {
if (
typeof data36 === 'string'
) {
if (
!formats2.test(data36)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid3 = _errs73 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data22.router !== undefined) {
let data37 = data22.router
const _errs75 = errors
if (true) {
if (true) {
if (
typeof data37 === 'string'
) {
if (
!formats2.test(data37)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid3 = _errs75 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data22.routerTime !== undefined
) {
let data38 = data22.routerTime
const _errs77 = errors
if (
!(
typeof data38 == 'number' &&
isFinite(data38)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/routerTime',
schemaPath: '#/properties/databaseUnit/properties/routerTime/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"}
);
}
var valid3 = _errs77 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data22.routerTimeImmediate !== undefined
) {
const _errs79 = errors
if (
typeof data22.routerTimeImmediate !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/routerTimeImmediate',
schemaPath: '#/properties/databaseUnit/properties/routerTimeImmediate/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"}
);
}
var valid3 = _errs79 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data22.points !== undefined
) {
let data40 = data22.points
const _errs81 = errors
if (
!(
typeof data40 == 'number' &&
!(data40 % 1) &&
!isNaN(data40) &&
isFinite(data40)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data40 == 'number' &&
isFinite(data40)
) {
if (
data40 < 0 ||
isNaN(data40)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid3 = _errs81 === errors
} else {
var valid3 = true
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
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs45 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseItem !== undefined) {
let data41 = data.databaseItem
const _errs83 = errors
if (true) {
if (
data41 &&
typeof data41 == 'object' &&
!Array.isArray(data41)
) {
let missing3
if (
(data41.itemType === undefined &&
(missing3 = 'itemType')) ||
(data41.order === undefined && (missing3 = 'order')) ||
(data41.unitId === undefined && (missing3 = 'unitId')) ||
(data41.appId === undefined && (missing3 = 'appId')) ||
(data41.lastModified === undefined &&
(missing3 = 'lastModified')) ||
(data41.version === undefined && (missing3 = 'version')) ||
(data41.databaseId === undefined &&
(missing3 = 'databaseId')) ||
(data41.id === undefined && (missing3 = 'id')) ||
(data41.dataText === undefined &&
(missing3 = 'dataText')) ||
(data41.data === undefined && (missing3 = 'data'))
) {errors.push(
{
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: missing3 },
message: "must have required property '" + missing3 + "'"
}
);
} else {
if (data41.itemType !== undefined) {
let data42 = data41.itemType
const _errs85 = errors
if (
!(
typeof data42 == 'number' &&
!(data42 % 1) &&
!isNaN(data42) &&
isFinite(data42)
)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data42 == 'number' && isFinite(data42)) {
if (data42 > 5 || isNaN(data42)) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 5 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data42 < 0 || isNaN(data42)) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid4 = _errs85 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data41.order !== undefined) {
let data43 = data41.order
const _errs87 = errors
if (
!(
typeof data43 == 'number' &&
!(data43 % 1) &&
!isNaN(data43) &&
isFinite(data43)
)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data43 == 'number' && isFinite(data43)) {
if (data43 < 0 || isNaN(data43)) {errors.push(
{
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid4 = _errs87 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data41.unitId !== undefined) {
let data44 = data41.unitId
const _errs89 = errors
if (true) {
if (true) {
if (typeof data44 === 'string') {
if (!formats2.test(data44)) {errors.push(
{
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid4 = _errs89 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data41.appId !== undefined) {
let data45 = data41.appId
const _errs91 = errors
if (true) {
if (true) {
if (typeof data45 === 'string') {
if (!formats2.test(data45)) {errors.push(
{
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid4 = _errs91 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data41.lastModified !== undefined) {
let data46 = data41.lastModified
const _errs93 = errors
if (
!(typeof data46 == 'number' && isFinite(data46))
) {errors.push(
{
instancePath: instancePath + '/databaseItem/lastModified',
schemaPath: '#/properties/databaseItem/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid4 = _errs93 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data41.version !== undefined) {
let data47 = data41.version
const _errs95 = errors
if (
!(
typeof data47 == 'number' &&
!(data47 % 1) &&
!isNaN(data47) &&
isFinite(data47)
)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data47 == 'number' &&
isFinite(data47)
) {
if (data47 < 0 || isNaN(data47)) {errors.push(
{
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid4 = _errs95 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data41.databaseId !== undefined) {
let data48 = data41.databaseId
const _errs97 = errors
if (true) {
if (true) {
if (typeof data48 === 'string') {
if (!formats2.test(data48)) {errors.push(
{
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid4 = _errs97 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data41.id !== undefined) {
let data49 = data41.id
const _errs99 = errors
if (true) {
if (true) {
if (typeof data49 === 'string') {
if (!formats2.test(data49)) {errors.push(
{
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid4 = _errs99 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data41.dataText !== undefined) {
let data50 = data41.dataText
const _errs101 = errors
if (true) {
if (typeof data50 === 'string') {
if (func4(data50) > 8000) {errors.push(
{
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid4 = _errs101 === errors
} else {
var valid4 = true
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
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs83 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerRequest !== undefined) {
let data51 = data.followerRequest
const _errs103 = errors
if (true) {
if (
data51 &&
typeof data51 == 'object' &&
!Array.isArray(data51)
) {
let missing4
if (
(data51.leaderAppId === undefined &&
(missing4 = 'leaderAppId')) ||
(data51.followerAppId === undefined &&
(missing4 = 'followerAppId')) ||
(data51.id === undefined && (missing4 = 'id')) ||
(data51.followerName === undefined &&
(missing4 = 'followerName')) ||
(data51.leaderName === undefined &&
(missing4 = 'leaderName')) ||
(data51.followerEmail === undefined &&
(missing4 = 'followerEmail')) ||
(data51.leaderEmail === undefined &&
(missing4 = 'leaderEmail')) ||
(data51.initiatedByFollower === undefined &&
(missing4 = 'initiatedByFollower')) ||
(data51.lastModified === undefined &&
(missing4 = 'lastModified')) ||
(data51.version === undefined &&
(missing4 = 'version')) ||
(data51.status === undefined && (missing4 = 'status')) ||
(data51.groups === undefined && (missing4 = 'groups')) ||
(data51.points === undefined && (missing4 = 'points'))
) {errors.push(
{
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: missing4 },
message: "must have required property '" + missing4 + "'"
}
);
} else {
if (data51.leaderAppId !== undefined) {
let data52 = data51.leaderAppId
const _errs105 = errors
if (true) {
if (true) {
if (typeof data52 === 'string') {
if (!formats2.test(data52)) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid5 = _errs105 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.followerAppId !== undefined) {
let data53 = data51.followerAppId
const _errs107 = errors
if (true) {
if (true) {
if (typeof data53 === 'string') {
if (!formats2.test(data53)) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid5 = _errs107 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.id !== undefined) {
let data54 = data51.id
const _errs109 = errors
if (true) {
if (true) {
if (typeof data54 === 'string') {
if (!formats2.test(data54)) {errors.push(
{
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid5 = _errs109 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.followerName !== undefined) {
let data55 = data51.followerName
const _errs111 = errors
if (true) {
if (typeof data55 === 'string') {
if (func4(data55) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data55) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid5 = _errs111 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.leaderName !== undefined) {
let data56 = data51.leaderName
const _errs113 = errors
if (true) {
if (typeof data56 === 'string') {
if (func4(data56) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data56) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid5 = _errs113 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.followerEmail !== undefined) {
let data57 = data51.followerEmail
const _errs115 = errors
if (true) {
if (true) {
if (typeof data57 === 'string') {
if (func4(data57) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data57) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!formats0.test(data57)) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data57
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
);
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid5 = _errs115 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.leaderEmail !== undefined) {
let data58 = data51.leaderEmail
const _errs117 = errors
if (true) {
if (true) {
if (typeof data58 === 'string') {
if (func4(data58) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data58) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!formats0.test(data58)) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/format',
keyword: 'format',
params: { format: 'email' },
 message: "Must_be_a_valid_email"}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data58
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"}
);
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid5 = _errs117 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data51.initiatedByFollower !== undefined
) {
const _errs119 = errors
if (
typeof data51.initiatedByFollower !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerRequest/initiatedByFollower',
schemaPath: '#/properties/followerRequest/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid5 = _errs119 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.lastModified !== undefined) {
let data60 = data51.lastModified
const _errs121 = errors
if (
!(
typeof data60 == 'number' &&
isFinite(data60)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/lastModified',
schemaPath: '#/properties/followerRequest/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid5 = _errs121 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.version !== undefined) {
let data61 = data51.version
const _errs123 = errors
if (
!(
typeof data61 == 'number' &&
!(data61 % 1) &&
!isNaN(data61) &&
isFinite(data61)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data61 == 'number' &&
isFinite(data61)
) {
if (data61 < 0 || isNaN(data61)) {errors.push(
{
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid5 = _errs123 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.status !== undefined) {
let data62 = data51.status
const _errs125 = errors
if (
!(
typeof data62 == 'number' &&
!(data62 % 1) &&
!isNaN(data62) &&
isFinite(data62)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data62 == 'number' &&
isFinite(data62)
) {
if (
data62 > 2 ||
isNaN(data62)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 2
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (
data62 < 0 ||
isNaN(data62)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid5 = _errs125 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.groups !== undefined) {
let data63 = data51.groups
const _errs127 = errors
if (true) {
if (
typeof data63 === 'string'
) {
if (func4(data63) > 8000) {errors.push(
{
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
var valid5 = _errs127 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data51.points !== undefined) {
let data64 = data51.points
const _errs129 = errors
if (
!(
typeof data64 == 'number' &&
!(data64 % 1) &&
!isNaN(data64) &&
isFinite(data64)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data64 == 'number' &&
isFinite(data64)
) {
if (
data64 < 0 ||
isNaN(data64)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid5 = _errs129 === errors
} else {
var valid5 = true
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
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs103 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabase !== undefined) {
let data65 = data.followerDatabase
const _errs131 = errors
if (true) {
if (
data65 &&
typeof data65 == 'object' &&
!Array.isArray(data65)
) {
let missing5
if (
(data65.followerRequestId === undefined &&
(missing5 = 'followerRequestId')) ||
(data65.id === undefined && (missing5 = 'id')) ||
(data65.databaseId === undefined &&
(missing5 = 'databaseId')) ||
(data65.lastModified === undefined &&
(missing5 = 'lastModified')) ||
(data65.version === undefined && (missing5 = 'version'))
) {errors.push(
{
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: missing5 },
message: "must have required property '" + missing5 + "'"
}
);
} else {
if (data65.followerRequestId !== undefined) {
let data66 = data65.followerRequestId
const _errs133 = errors
if (true) {
if (true) {
if (typeof data66 === 'string') {
if (!formats2.test(data66)) {errors.push(
{
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid6 = _errs133 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data65.id !== undefined) {
let data67 = data65.id
const _errs135 = errors
if (true) {
if (true) {
if (typeof data67 === 'string') {
if (!formats2.test(data67)) {errors.push(
{
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid6 = _errs135 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data65.databaseId !== undefined) {
let data68 = data65.databaseId
const _errs137 = errors
if (true) {
if (true) {
if (typeof data68 === 'string') {
if (!formats2.test(data68)) {errors.push(
{
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid6 = _errs137 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data65.lastModified !== undefined) {
let data69 = data65.lastModified
const _errs139 = errors
if (
!(
typeof data69 == 'number' &&
isFinite(data69)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/lastModified',
schemaPath: '#/properties/followerDatabase/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid6 = _errs139 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data65.version !== undefined) {
let data70 = data65.version
const _errs141 = errors
if (
!(
typeof data70 == 'number' &&
!(data70 % 1) &&
!isNaN(data70) &&
isFinite(data70)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data70 == 'number' &&
isFinite(data70)
) {
if (data70 < 0 || isNaN(data70)) {errors.push(
{
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid6 = _errs141 === errors
} else {
var valid6 = true
}
}
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs131 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.router !== undefined) {
let data71 = data.router
const _errs143 = errors
if (true) {
if (
data71 &&
typeof data71 == 'object' &&
!Array.isArray(data71)
) {
let missing6
if (
(data71.id === undefined && (missing6 = 'id')) ||
(data71.appId === undefined &&
(missing6 = 'appId')) ||
(data71.routerMac === undefined &&
(missing6 = 'routerMac')) ||
(data71.ipAddress === undefined &&
(missing6 = 'ipAddress')) ||
(data71.mondayTimesAndDurations === undefined &&
(missing6 = 'mondayTimesAndDurations')) ||
(data71.tuesdayTimesAndDurations === undefined &&
(missing6 = 'tuesdayTimesAndDurations')) ||
(data71.wednesdayTimesAndDurations === undefined &&
(missing6 = 'wednesdayTimesAndDurations')) ||
(data71.thursdayTimesAndDurations === undefined &&
(missing6 = 'thursdayTimesAndDurations')) ||
(data71.fridayTimesAndDurations === undefined &&
(missing6 = 'fridayTimesAndDurations')) ||
(data71.saturdayTimesAndDurations === undefined &&
(missing6 = 'saturdayTimesAndDurations')) ||
(data71.sundayTimesAndDurations === undefined &&
(missing6 = 'sundayTimesAndDurations')) ||
(data71.version === undefined &&
(missing6 = 'version')) ||
(data71.lastModified === undefined &&
(missing6 = 'lastModified')) ||
(data71.status === undefined && (missing6 = 'status'))
) {errors.push(
{
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: missing6 },
message: "must have required property '" + missing6 + "'"
}
);
} else {
if (data71.id !== undefined) {
let data72 = data71.id
const _errs145 = errors
if (true) {
if (true) {
if (typeof data72 === 'string') {
if (!formats2.test(data72)) {errors.push(
{
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid7 = _errs145 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data71.appId !== undefined) {
let data73 = data71.appId
const _errs147 = errors
if (true) {
if (true) {
if (typeof data73 === 'string') {
if (!formats2.test(data73)) {errors.push(
{
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid7 = _errs147 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data71.routerMac !== undefined) {
let data74 = data71.routerMac
const _errs149 = errors
if (true) {
if (true) {
if (typeof data74 === 'string') {
if (!pattern1.test(data74)) {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'},
 message: "Must_be_a_valid_MAC_address"}
);
} else {
if (!formats94(data74)) {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_MAC_address"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid7 = _errs149 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data71.ipAddress !== undefined) {
let data75 = data71.ipAddress
const _errs151 = errors
if (true) {
if (true) {
if (typeof data75 === 'string') {
if (!formats96.test(data75)) {errors.push(
{
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/format',
keyword: 'format',
params: { format: 'ipv4' },
 message: "Must_be_a_valid_IP_address"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid7 = _errs151 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.mondayTimesAndDurations !== undefined
) {
let data76 = data71.mondayTimesAndDurations
const _errs153 = errors
if (true) {
if (true) {
if (typeof data76 === 'string') {
if (!pattern2.test(data76)) {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data76)) {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid7 = _errs153 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.tuesdayTimesAndDurations !== undefined
) {
let data77 = data71.tuesdayTimesAndDurations
const _errs155 = errors
if (true) {
if (true) {
if (typeof data77 === 'string') {
if (!pattern2.test(data77)) {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data77)) {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: { format: 'regex' },
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid7 = _errs155 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.wednesdayTimesAndDurations !== undefined
) {
let data78 = data71.wednesdayTimesAndDurations
const _errs157 = errors
if (true) {
if (true) {
if (typeof data78 === 'string') {
if (!pattern2.test(data78)) {errors.push(
{
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data78)) {errors.push(
{
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid7 = _errs157 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.thursdayTimesAndDurations !== undefined
) {
let data79 = data71.thursdayTimesAndDurations
const _errs159 = errors
if (true) {
if (true) {
if (typeof data79 === 'string') {
if (!pattern2.test(data79)) {errors.push(
{
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data79)) {errors.push(
{
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid7 = _errs159 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.fridayTimesAndDurations !== undefined
) {
let data80 = data71.fridayTimesAndDurations
const _errs161 = errors
if (true) {
if (true) {
if (
typeof data80 === 'string'
) {
if (!pattern2.test(data80)) {errors.push(
{
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data80)) {errors.push(
{
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid7 = _errs161 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.saturdayTimesAndDurations !== undefined
) {
let data81 = data71.saturdayTimesAndDurations
const _errs163 = errors
if (true) {
if (true) {
if (
typeof data81 === 'string'
) {
if (
!pattern2.test(data81)
) {errors.push(
{
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data81)) {errors.push(
{
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid7 = _errs163 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.sundayTimesAndDurations !== undefined
) {
let data82 = data71.sundayTimesAndDurations
const _errs165 = errors
if (true) {
if (true) {
if (
typeof data82 === 'string'
) {
if (
!pattern2.test(data82)
) {errors.push(
{
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (
!formats94(data82)
) {errors.push(
{
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid7 = _errs165 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.version !== undefined
) {
let data83 = data71.version
const _errs167 = errors
if (
!(
typeof data83 == 'number' &&
!(data83 % 1) &&
!isNaN(data83) &&
isFinite(data83)
)
) {errors.push(
{
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data83 == 'number' &&
isFinite(data83)
) {
if (
data83 < 0 ||
isNaN(data83)
) {errors.push(
{
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid7 = _errs167 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.lastModified !== undefined
) {
let data84 = data71.lastModified
const _errs169 = errors
if (
!(
typeof data84 == 'number' &&
isFinite(data84)
)
) {errors.push(
{
instancePath: instancePath + '/router/lastModified',
schemaPath: '#/properties/router/properties/lastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"}
);
}
var valid7 = _errs169 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data71.status !== undefined
) {
let data85 = data71.status
const _errs171 = errors
if (
!(
typeof data85 == 'number' &&
!(data85 % 1) &&
!isNaN(data85) &&
isFinite(data85)
)
) {errors.push(
{
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data85 == 'number' &&
isFinite(data85)
) {
if (
data85 > 2 ||
isNaN(data85)
) {errors.push(
{
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 2
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
}
}
}
var valid7 = _errs171 === errors
} else {
var valid7 = true
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
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs143 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabaseCompletion !== undefined) {
let data86 = data.followerDatabaseCompletion
const _errs173 = errors
if (true) {
if (
data86 &&
typeof data86 == 'object' &&
!Array.isArray(data86)
) {
let missing7
if (
(data86.id === undefined && (missing7 = 'id')) ||
(data86.followerRequestId === undefined &&
(missing7 = 'followerRequestId')) ||
(data86.description === undefined &&
(missing7 = 'description')) ||
(data86.itemId === undefined &&
(missing7 = 'itemId')) ||
(data86.parentItemId === undefined &&
(missing7 = 'parentItemId')) ||
(data86.itemLevel === undefined &&
(missing7 = 'itemLevel')) ||
(data86.lastModified === undefined &&
(missing7 = 'lastModified')) ||
(data86.version === undefined &&
(missing7 = 'version'))
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: missing7 },
message: "must have required property '" +
missing7 +
"'"
}
);
} else {
if (data86.id !== undefined) {
let data87 = data86.id
const _errs175 = errors
if (true) {
if (true) {
if (typeof data87 === 'string') {
if (!formats2.test(data87)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid8 = _errs175 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data86.followerRequestId !== undefined) {
let data88 = data86.followerRequestId
const _errs177 = errors
if (true) {
if (true) {
if (typeof data88 === 'string') {
if (!formats2.test(data88)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid8 = _errs177 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data86.description !== undefined) {
let data89 = data86.description
const _errs179 = errors
if (true) {
if (typeof data89 === 'string') {
if (func4(data89) > 1000) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/description',
schemaPath: '#/properties/followerDatabaseCompletion/properties/description/maxLength',
keyword: 'maxLength',
params: { limit: 1000 },
 message: "Must_be_less_than_1000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/description',
schemaPath: '#/properties/followerDatabaseCompletion/properties/description/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid8 = _errs179 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data86.itemId !== undefined) {
let data90 = data86.itemId
const _errs181 = errors
if (true) {
if (true) {
if (typeof data90 === 'string') {
if (!formats2.test(data90)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid8 = _errs181 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data86.parentItemId !== undefined) {
let data91 = data86.parentItemId
const _errs183 = errors
if (true) {
if (true) {
if (typeof data91 === 'string') {
if (!formats2.test(data91)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid8 = _errs183 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data86.itemLevel !== undefined) {
let data92 = data86.itemLevel
const _errs185 = errors
if (
!(
typeof data92 == 'number' &&
!(data92 % 1) &&
!isNaN(data92) &&
isFinite(data92)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data92 == 'number' &&
isFinite(data92)
) {
if (data92 > 8 || isNaN(data92)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 8
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data92 < 0 || isNaN(data92)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid8 = _errs185 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data86.lastModified !== undefined) {
let data93 = data86.lastModified
const _errs187 = errors
if (
!(
typeof data93 == 'number' &&
isFinite(data93)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/lastModified',
schemaPath: '#/properties/followerDatabaseCompletion/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid8 = _errs187 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data86.version !== undefined) {
let data94 = data86.version
const _errs189 = errors
if (
!(
typeof data94 == 'number' &&
!(data94 % 1) &&
!isNaN(data94) &&
isFinite(data94)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/version',
schemaPath: '#/properties/followerDatabaseCompletion/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data94 == 'number' &&
isFinite(data94)
) {
if (
data94 < 0 ||
isNaN(data94)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/version',
schemaPath: '#/properties/followerDatabaseCompletion/properties/version/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid8 = _errs189 === errors
} else {
var valid8 = true
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
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs173 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.media !== undefined) {
let data95 = data.media
const _errs191 = errors
if (true) {
if (
data95 &&
typeof data95 == 'object' &&
!Array.isArray(data95)
) {
let missing8
if (
(data95.id === undefined && (missing8 = 'id')) ||
(data95.size === undefined &&
(missing8 = 'size')) ||
(data95.data === undefined &&
(missing8 = 'data')) ||
(data95.appId === undefined &&
(missing8 = 'appId')) ||
(data95.lastModified === undefined &&
(missing8 = 'lastModified'))
) {errors.push(
{
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: { missingProperty: missing8 },
message: "must have required property '" +
missing8 +
"'"
}
);
} else {
if (data95.id !== undefined) {
let data96 = data95.id
const _errs193 = errors
if (true) {
if (true) {
if (typeof data96 === 'string') {
if (!formats2.test(data96)) {errors.push(
{
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid9 = _errs193 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data95.size !== undefined) {
let data97 = data95.size
const _errs195 = errors
if (
!(
typeof data97 == 'number' &&
!(data97 % 1) &&
!isNaN(data97) &&
isFinite(data97)
)
) {errors.push(
{
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data97 == 'number' &&
isFinite(data97)
) {
if (data97 < 0 || isNaN(data97)) {errors.push(
{
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
var valid9 = _errs195 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data95.data !== undefined) {
let data98 = data95.data
const _errs197 = errors
if (true) {
if (typeof data98 === 'string') {
if (func4(data98) > 8000) {errors.push(
{
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid9 = _errs197 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data95.appId !== undefined) {
let data99 = data95.appId
const _errs199 = errors
if (true) {
if (true) {
if (typeof data99 === 'string') {
if (!formats2.test(data99)) {errors.push(
{
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid9 = _errs199 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data95.lastModified !== undefined) {
let data100 = data95.lastModified
const _errs201 = errors
if (
!(
typeof data100 == 'number' &&
isFinite(data100)
)
) {errors.push(
{
instancePath: instancePath + '/media/lastModified',
schemaPath: '#/properties/media/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid9 = _errs201 === errors
} else {
var valid9 = true
}
}
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs191 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.deletion !== undefined) {
let data101 = data.deletion
const _errs203 = errors
if (true) {
if (
data101 &&
typeof data101 == 'object' &&
!Array.isArray(data101)
) {
let missing9
if (
(data101.id === undefined &&
(missing9 = 'id')) ||
(data101.level === undefined &&
(missing9 = 'level'))
) {errors.push(
{
instancePath: instancePath + '/deletion',
schemaPath: '#/properties/deletion/required',
keyword: 'required',
params: { missingProperty: missing9 },
message: "must have required property '" +
missing9 +
"'"
}
);
} else {
if (data101.id !== undefined) {
let data102 = data101.id
const _errs205 = errors
if (true) {
if (true) {
if (typeof data102 === 'string') {
if (!formats2.test(data102)) {errors.push(
{
instancePath: instancePath + '/deletion/id',
schemaPath: '#/properties/deletion/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/deletion/id',
schemaPath: '#/properties/deletion/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid10 = _errs205 === errors
} else {
var valid10 = true
}
if (valid10) {
if (data101.level !== undefined) {
let data103 = data101.level
const _errs207 = errors
if (
!(
typeof data103 == 'number' &&
!(data103 % 1) &&
!isNaN(data103) &&
isFinite(data103)
)
) {errors.push(
{
instancePath: instancePath + '/deletion/level',
schemaPath: '#/properties/deletion/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data103 == 'number' &&
isFinite(data103)
) {
if (data103 > 8 || isNaN(data103)) {errors.push(
{
instancePath: instancePath + '/deletion/level',
schemaPath: '#/properties/deletion/properties/level/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 8
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data103 < 0 || isNaN(data103)) {errors.push(
{
instancePath: instancePath + '/deletion/level',
schemaPath: '#/properties/deletion/properties/level/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
 message: "Must_be_greater_than_or_equal_to_0"}
);
}
}
}
}
var valid10 = _errs207 === errors
} else {
var valid10 = true
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/deletion',
schemaPath: '#/properties/deletion/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs203 === errors
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
