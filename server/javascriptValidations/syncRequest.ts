'use strict'
const schema32 = {
$id: 'syncRequest',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
level: { minimum: 0, maximum: 8, type: 'integer' },
values: { type: 'object', patternProperties: { '^(.*)$': {} } },
action: { minimum: 0, maximum: 3, type: 'integer' },
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
lastModified: { default: 1763557874131, type: 'number' },
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
default: '019a9c3d-99d3-7378-87b0-86b7a93c6fc0',
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
},
database: {
$id: 'database',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
lastModified: { default: 1763557874132, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019a9c3d-99d4-7350-b701-b3529e00d5f9',
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
touched: { default: false, type: 'boolean' },
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
touched: { default: false, type: 'boolean' },
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
'touched',
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
default: '019a9c3d-99d4-7350-b701-bad71815ab5c',
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
lastModified: { default: 1763557874132, type: 'number' },
touched: { default: false, type: 'boolean' },
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
'touched',
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
default: '019a9c3d-99d4-7350-b701-b73d637afe2d',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 1763557874132, type: 'number' },
touched: { default: false, type: 'boolean' },
version: { default: 0, minimum: 0, type: 'integer' }
},
required: [
'followerRequestId',
'id',
'databaseId',
'lastModified',
'touched',
'version'
]
},
router: {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019a9c3d-99d4-7350-b701-c7bcf639647c',
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
lastModified: { default: 1763557874132, type: 'number' },
touched: { default: false, type: 'boolean' },
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
'touched',
'status'
]
},
followerDatabaseCompletion: {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019a9c3d-99d4-7350-b701-c0052e1f3922',
format: 'uuid',
type: 'string'},
followerRequestId: { format: 'uuid', type: 'string' },
description: { maxLength: 1000, type: 'string' },
itemId: { format: 'uuid', type: 'string' },
parentItemId: { format: 'uuid', type: 'string' },
itemLevel: { minimum: 0, maximum: 8, type: 'integer' },
lastModified: { type: 'number' },
touched: { default: false, type: 'boolean' },
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
},
media: {
$id: 'media',
type: 'object',
properties: {
id: {
default: '019a9c3d-99d4-7350-b701-bc7441b8db7d',
format: 'uuid',
type: 'string'},
size: { minimum: 0, type: 'integer' },
data: { maxLength: 8000, type: 'string' },
appId: { format: 'uuid', type: 'string' },
lastModified: { type: 'number' },
touched: { default: false, type: 'boolean' }
},
required: ['id', 'size', 'data', 'appId', 'lastModified', 'touched']
}
}
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import * as formats from 'ajv-formats/dist/formats'
const formats90 = formats.fullFormats.regex as any
const formats92 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
const func2 = (await import('ajv-keywords/dist/definitions/transform')).default.transform
.toLowerCase
const func3 = (await import('ajv-keywords/dist/definitions/transform')).default.transform.trim
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
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
if (data.level !== undefined) {
let data1 = data.level
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
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 > 8 || isNaN(data1)) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 8 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data1 < 0 || isNaN(data1)) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
message: 'must be >= 0'
}
);
}
}
}
}
var valid0 = _errs3 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.values !== undefined) {
let data2 = data.values
const _errs5 = errors
if (true) {
if (
!(data2 && typeof data2 == 'object' && !Array.isArray(data2))
) {errors.push(
{
instancePath: instancePath + '/values',
schemaPath: '#/properties/values/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs5 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.action !== undefined) {
let data3 = data.action
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
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data3 == 'number' && isFinite(data3)) {
if (data3 > 3 || isNaN(data3)) {errors.push(
{
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data3 < 0 || isNaN(data3)) {errors.push(
{
instancePath: instancePath + '/action',
schemaPath: '#/properties/action/minimum',
keyword: 'minimum',
params: { comparison: '>=', limit: 0 },
message: 'must be >= 0'
}
);
}
}
}
}
var valid0 = _errs7 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.app !== undefined) {
let data4 = data.app
const _errs9 = errors
if (true) {
if (
data4 &&
typeof data4 == 'object' &&
!Array.isArray(data4)
) {
let missing0
if (
(data4.email === undefined && (missing0 = 'email')) ||
(data4.name === undefined && (missing0 = 'name')) ||
(data4.uniqueName === undefined &&
(missing0 = 'uniqueName')) ||
(data4.version === undefined && (missing0 = 'version')) ||
(data4.lastModified === undefined &&
(missing0 = 'lastModified')) ||
(data4.homePageImageType === undefined &&
(missing0 = 'homePageImageType')) ||
(data4.homePageImage === undefined &&
(missing0 = 'homePageImage')) ||
(data4.authenticationType === undefined &&
(missing0 = 'authenticationType')) ||
(data4.lang === undefined && (missing0 = 'lang')) ||
(data4.enableNarrator === undefined &&
(missing0 = 'enableNarrator')) ||
(data4.groups === undefined && (missing0 = 'groups')) ||
(data4.id === undefined && (missing0 = 'id')) ||
(data4.lastSync === undefined && (missing0 = 'lastSync'))
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
if (data4.email !== undefined) {
let data5 = data4.email
const _errs11 = errors
if (typeof data5 == 'string' && data4 !== undefined) {
data5 = func2(func3(data5))
data4['email'] = data5
}
if (true) {
if (true) {
if (typeof data5 === 'string') {
if (func4(data5) > 100) {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data5) < 5) {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"}
);
} else {
if (!formats0.test(data5)) {errors.push(
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
var valid1 = _errs11 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.name !== undefined) {
let data6 = data4.name
const _errs13 = errors
if (typeof data6 == 'string' && data4 !== undefined) {
data6 = func2(func3(data6))
data4['name'] = data6
}
if (true) {
if (typeof data6 === 'string') {
if (func4(data6) > 100) {errors.push(
{
instancePath: instancePath + '/app/name',
schemaPath: '#/properties/app/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data6) < 1) {errors.push(
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
var valid1 = _errs13 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.uniqueName !== undefined) {
let data7 = data4.uniqueName
const _errs15 = errors
if (
typeof data7 == 'string' &&
data4 !== undefined
) {
data7 = func2(func3(data7))
data4['uniqueName'] = data7
}
if (true) {
if (typeof data7 === 'string') {
if (func4(data7) > 100) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data7) < 1) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!pattern0.test(data7)) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/pattern',
keyword: 'pattern',
params: {
pattern: '/^(?!API$|I$).+$/i'},
 message: "Unique_name_contains_reserved_words"}
);
} else {
if (
!await serverAndClientFunctions.isNameGloballyUnique(data.email,
data7
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
var valid1 = _errs15 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.version !== undefined) {
let data8 = data4.version
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
instancePath: instancePath + '/app/version',
schemaPath: '#/properties/app/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data8 == 'number' &&
isFinite(data8)
) {
if (data8 < 0 || isNaN(data8)) {errors.push(
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
var valid1 = _errs17 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.lastModified !== undefined) {
let data9 = data4.lastModified
const _errs19 = errors
if (
!(typeof data9 == 'number' && isFinite(data9))
) {errors.push(
{
instancePath: instancePath + '/app/lastModified',
schemaPath: '#/properties/app/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid1 = _errs19 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.homePageImageType !== undefined) {
let data10 = data4.homePageImageType
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
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data10 == 'number' &&
isFinite(data10)
) {
if (data10 > 3 || isNaN(data10)) {errors.push(
{
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data10 < 0 || isNaN(data10)) {errors.push(
{
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/minimum',
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
var valid1 = _errs21 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.homePageImage !== undefined) {
let data11 = data4.homePageImage
const _errs23 = errors
if (true) {
if (true) {
if (typeof data11 === 'string') {
if (!formats2.test(data11)) {errors.push(
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
var valid1 = _errs23 === errors
} else {
var valid1 = true
}
if (valid1) {
if (
data4.authenticationType !== undefined
) {
let data12 = data4.authenticationType
const _errs25 = errors
if (
typeof data12 == 'string' &&
data4 !== undefined
) {
data12 = func2(func3(data12))
data4['authenticationType'] = data12
}
if (true) {
if (typeof data12 === 'string') {
if (func4(data12) > 100) {errors.push(
{
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data12) < 1) {errors.push(
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
var valid1 = _errs25 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.lang !== undefined) {
let data13 = data4.lang
const _errs27 = errors
if (
typeof data13 == 'string' &&
data4 !== undefined
) {
data13 = func2(func3(data13))
data4['lang'] = data13
}
if (true) {
if (typeof data13 === 'string') {
if (func4(data13) > 100) {errors.push(
{
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data13) < 1) {errors.push(
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
var valid1 = _errs27 === errors
} else {
var valid1 = true
}
if (valid1) {
if (
data4.enableNarrator !== undefined
) {
const _errs29 = errors
if (
typeof data4.enableNarrator !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/app/enableNarrator',
schemaPath: '#/properties/app/properties/enableNarrator/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid1 = _errs29 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.groups !== undefined) {
let data15 = data4.groups
const _errs31 = errors
if (true) {
if (typeof data15 === 'string') {
if (func4(data15) > 8000) {errors.push(
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
var valid1 = _errs31 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.id !== undefined) {
let data16 = data4.id
const _errs33 = errors
if (true) {
if (true) {
if (
typeof data16 === 'string'
) {
if (func4(data16) < 36) {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/minLength',
keyword: 'minLength',
params: { limit: 36 },
 message: "Must_be_36_characters"}
);
} else {
if (
!formats2.test(data16)
) {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid1 = _errs33 === errors
} else {
var valid1 = true
}
if (valid1) {
if (
data4.lastSync !== undefined
) {
let data17 = data4.lastSync
const _errs35 = errors
if (
!(
typeof data17 == 'number' &&
isFinite(data17)
)
) {errors.push(
{
instancePath: instancePath + '/app/lastSync',
schemaPath: '#/properties/app/properties/lastSync/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"}
);
}
var valid1 = _errs35 === errors
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
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.database !== undefined) {
let data18 = data.database
const _errs37 = errors
if (true) {
if (
data18 &&
typeof data18 == 'object' &&
!Array.isArray(data18)
) {
let missing1
if (
(data18.name === undefined && (missing1 = 'name')) ||
(data18.lastModified === undefined &&
(missing1 = 'lastModified')) ||
(data18.version === undefined &&
(missing1 = 'version')) ||
(data18.appId === undefined && (missing1 = 'appId')) ||
(data18.id === undefined && (missing1 = 'id')) ||
(data18.order === undefined && (missing1 = 'order')) ||
(data18.homePageIconType === undefined &&
(missing1 = 'homePageIconType')) ||
(data18.homePageIcon === undefined &&
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
if (data18.name !== undefined) {
let data19 = data18.name
const _errs39 = errors
if (true) {
if (typeof data19 === 'string') {
if (func4(data19) > 100) {errors.push(
{
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data19) < 1) {errors.push(
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
var valid2 = _errs39 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data18.lastModified !== undefined) {
let data20 = data18.lastModified
const _errs41 = errors
if (
!(typeof data20 == 'number' && isFinite(data20))
) {errors.push(
{
instancePath: instancePath + '/database/lastModified',
schemaPath: '#/properties/database/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid2 = _errs41 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data18.version !== undefined) {
let data21 = data18.version
const _errs43 = errors
if (
!(
typeof data21 == 'number' &&
!(data21 % 1) &&
!isNaN(data21) &&
isFinite(data21)
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
if (
typeof data21 == 'number' &&
isFinite(data21)
) {
if (data21 < 0 || isNaN(data21)) {errors.push(
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
var valid2 = _errs43 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data18.appId !== undefined) {
let data22 = data18.appId
const _errs45 = errors
if (true) {
if (true) {
if (typeof data22 === 'string') {
if (!formats2.test(data22)) {errors.push(
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
var valid2 = _errs45 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data18.id !== undefined) {
let data23 = data18.id
const _errs47 = errors
if (true) {
if (true) {
if (typeof data23 === 'string') {
if (!formats2.test(data23)) {errors.push(
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
var valid2 = _errs47 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data18.order !== undefined) {
let data24 = data18.order
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
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data24 == 'number' &&
isFinite(data24)
) {
if (data24 < 0 || isNaN(data24)) {errors.push(
{
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/minimum',
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
var valid2 = _errs49 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data18.homePageIconType !== undefined) {
let data25 = data18.homePageIconType
const _errs51 = errors
if (
!(
typeof data25 == 'number' &&
!(data25 % 1) &&
!isNaN(data25) &&
isFinite(data25)
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
typeof data25 == 'number' &&
isFinite(data25)
) {
if (data25 > 3 || isNaN(data25)) {errors.push(
{
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data25 < 0 || isNaN(data25)) {errors.push(
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
var valid2 = _errs51 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data18.homePageIcon !== undefined) {
let data26 = data18.homePageIcon
const _errs53 = errors
if (true) {
if (true) {
if (typeof data26 === 'string') {
if (!formats2.test(data26)) {errors.push(
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
var valid2 = _errs53 === errors
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
var valid0 = _errs37 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseUnit !== undefined) {
let data27 = data.databaseUnit
const _errs55 = errors
if (true) {
if (
data27 &&
typeof data27 == 'object' &&
!Array.isArray(data27)
) {
let missing2
if (
(data27.name === undefined && (missing2 = 'name')) ||
(data27.order === undefined &&
(missing2 = 'order')) ||
(data27.lastModified === undefined &&
(missing2 = 'lastModified')) ||
(data27.touched === undefined &&
(missing2 = 'touched')) ||
(data27.version === undefined &&
(missing2 = 'version')) ||
(data27.id === undefined && (missing2 = 'id')) ||
(data27.appId === undefined &&
(missing2 = 'appId')) ||
(data27.databaseId === undefined &&
(missing2 = 'databaseId')) ||
(data27.successVideoType === undefined &&
(missing2 = 'successVideoType')) ||
(data27.successVideoUrl === undefined &&
(missing2 = 'successVideoUrl')) ||
(data27.successAnimations === undefined &&
(missing2 = 'successAnimations')) ||
(data27.successSound === undefined &&
(missing2 = 'successSound')) ||
(data27.successSoundType === undefined &&
(missing2 = 'successSoundType')) ||
(data27.homePageImageType === undefined &&
(missing2 = 'homePageImageType')) ||
(data27.homePageImage === undefined &&
(missing2 = 'homePageImage')) ||
(data27.router === undefined &&
(missing2 = 'router')) ||
(data27.routerTime === undefined &&
(missing2 = 'routerTime')) ||
(data27.routerTimeImmediate === undefined &&
(missing2 = 'routerTimeImmediate')) ||
(data27.points === undefined && (missing2 = 'points'))
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
if (data27.name !== undefined) {
let data28 = data27.name
const _errs57 = errors
if (true) {
if (typeof data28 === 'string') {
if (func4(data28) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data28) < 1) {errors.push(
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
var valid3 = _errs57 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data27.order !== undefined) {
let data29 = data27.order
const _errs59 = errors
if (
!(
typeof data29 == 'number' &&
!(data29 % 1) &&
!isNaN(data29) &&
isFinite(data29)
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
if (
typeof data29 == 'number' &&
isFinite(data29)
) {
if (data29 < 0 || isNaN(data29)) {errors.push(
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
var valid3 = _errs59 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data27.lastModified !== undefined) {
let data30 = data27.lastModified
const _errs61 = errors
if (
!(
typeof data30 == 'number' &&
isFinite(data30)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/lastModified',
schemaPath: '#/properties/databaseUnit/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid3 = _errs61 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data27.touched !== undefined) {
const _errs63 = errors
if (typeof data27.touched !== 'boolean') {errors.push(
{
instancePath: instancePath + '/databaseUnit/touched',
schemaPath: '#/properties/databaseUnit/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid3 = _errs63 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data27.version !== undefined) {
let data32 = data27.version
const _errs65 = errors
if (
!(
typeof data32 == 'number' &&
!(data32 % 1) &&
!isNaN(data32) &&
isFinite(data32)
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
if (
typeof data32 == 'number' &&
isFinite(data32)
) {
if (data32 < 0 || isNaN(data32)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/minimum',
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
var valid3 = _errs65 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data27.id !== undefined) {
let data33 = data27.id
const _errs67 = errors
if (true) {
if (true) {
if (typeof data33 === 'string') {
if (!formats2.test(data33)) {errors.push(
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
var valid3 = _errs67 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data27.appId !== undefined) {
let data34 = data27.appId
const _errs69 = errors
if (true) {
if (true) {
if (typeof data34 === 'string') {
if (!formats2.test(data34)) {errors.push(
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
var valid3 = _errs69 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data27.databaseId !== undefined) {
let data35 = data27.databaseId
const _errs71 = errors
if (true) {
if (true) {
if (typeof data35 === 'string') {
if (!formats2.test(data35)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/format',
keyword: 'format',
params: {
format: 'uuid'},
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
var valid3 = _errs71 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.successVideoType !== undefined
) {
let data36 = data27.successVideoType
const _errs73 = errors
if (
!(
typeof data36 == 'number' &&
!(data36 % 1) &&
!isNaN(data36) &&
isFinite(data36)
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
typeof data36 == 'number' &&
isFinite(data36)
) {
if (
data36 > 2 ||
isNaN(data36)
) {errors.push(
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
if (
data36 < 0 ||
isNaN(data36)
) {errors.push(
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
var valid3 = _errs73 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.successVideoUrl !== undefined
) {
let data37 = data27.successVideoUrl
const _errs75 = errors
if (true) {
if (
typeof data37 === 'string'
) {
if (func4(data37) > 100) {errors.push(
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
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
var valid3 = _errs75 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.successAnimations !== undefined
) {
let data38 = data27.successAnimations
const _errs77 = errors
if (true) {
if (
typeof data38 === 'string'
) {
if (func4(data38) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: {
limit: 100
},
 message: "Must_be_less_than_100_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
var valid3 = _errs77 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.successSound !== undefined
) {
let data39 = data27.successSound
const _errs79 = errors
if (true) {
if (true) {
if (
typeof data39 === 'string'
) {
if (
!formats2.test(data39)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid3 = _errs79 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.successSoundType !== undefined
) {
let data40 = data27.successSoundType
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
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/type',
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
data40 > 4 ||
isNaN(data40)
) {errors.push(
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
data40 < 0 ||
isNaN(data40)
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
var valid3 = _errs81 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.homePageImageType !== undefined
) {
let data41 = data27.homePageImageType
const _errs83 = errors
if (
!(
typeof data41 == 'number' &&
!(data41 % 1) &&
!isNaN(data41) &&
isFinite(data41)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data41 == 'number' &&
isFinite(data41)
) {
if (
data41 > 3 ||
isNaN(data41)
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
data41 < 0 ||
isNaN(data41)
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
var valid3 = _errs83 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.homePageImage !== undefined
) {
let data42 = data27.homePageImage
const _errs85 = errors
if (
errors === _errs85
) {
if (
errors === _errs85
) {
if (
typeof data42 === 'string'
) {
if (
!formats2.test(
data42
)
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
var valid3 = _errs85 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.router !== undefined
) {
let data43 = data27.router
const _errs87 = errors
if (
errors === _errs87
) {
if (
errors === _errs87
) {
if (
typeof data43 === 'string'
) {
if (
!formats2.test(
data43
)
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
var valid3 = _errs87 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.routerTime !== undefined
) {
let data44 = data27.routerTime
const _errs89 = errors
if (
!(
typeof data44 == 'number' &&
isFinite(data44)
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
var valid3 = _errs89 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.routerTimeImmediate !== undefined
) {
const _errs91 = errors
if (
typeof data27.routerTimeImmediate !== 'boolean'
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
var valid3 = _errs91 ===
errors
} else {
var valid3 = true
}
if (valid3) {
if (
data27.points !== undefined
) {
let data46 = data27.points
const _errs93 = errors
if (
!(
typeof data46 == 'number' &&
!(
data46 % 1
) &&
!isNaN(
data46
) &&
isFinite(
data46
)
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
if (
errors === _errs93
) {
if (
typeof data46 == 'number' &&
isFinite(
data46
)
) {
if (
data46 <
0 ||
isNaN(
data46
)
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
var valid3 = _errs93 ===
errors
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
var valid0 = _errs55 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseItem !== undefined) {
let data47 = data.databaseItem
const _errs95 = errors
if (true) {
if (
data47 &&
typeof data47 == 'object' &&
!Array.isArray(data47)
) {
let missing3
if (
(data47.itemType === undefined &&
(missing3 = 'itemType')) ||
(data47.order === undefined &&
(missing3 = 'order')) ||
(data47.unitId === undefined &&
(missing3 = 'unitId')) ||
(data47.appId === undefined &&
(missing3 = 'appId')) ||
(data47.lastModified === undefined &&
(missing3 = 'lastModified')) ||
(data47.touched === undefined &&
(missing3 = 'touched')) ||
(data47.version === undefined &&
(missing3 = 'version')) ||
(data47.databaseId === undefined &&
(missing3 = 'databaseId')) ||
(data47.id === undefined && (missing3 = 'id')) ||
(data47.dataText === undefined &&
(missing3 = 'dataText')) ||
(data47.data === undefined && (missing3 = 'data'))
) {errors.push(
{
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: missing3 },
message: "must have required property '" +
missing3 +
"'"
}
);
} else {
if (data47.itemType !== undefined) {
let data48 = data47.itemType
const _errs97 = errors
if (
!(
typeof data48 == 'number' &&
!(data48 % 1) &&
!isNaN(data48) &&
isFinite(data48)
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
if (
typeof data48 == 'number' &&
isFinite(data48)
) {
if (data48 > 5 || isNaN(data48)) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 5 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data48 < 0 || isNaN(data48)) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/minimum',
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
var valid4 = _errs97 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data47.order !== undefined) {
let data49 = data47.order
const _errs99 = errors
if (
!(
typeof data49 == 'number' &&
!(data49 % 1) &&
!isNaN(data49) &&
isFinite(data49)
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
if (
typeof data49 == 'number' &&
isFinite(data49)
) {
if (data49 < 0 || isNaN(data49)) {errors.push(
{
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/minimum',
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
var valid4 = _errs99 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data47.unitId !== undefined) {
let data50 = data47.unitId
const _errs101 = errors
if (true) {
if (true) {
if (typeof data50 === 'string') {
if (!formats2.test(data50)) {errors.push(
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
var valid4 = _errs101 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data47.appId !== undefined) {
let data51 = data47.appId
const _errs103 = errors
if (true) {
if (true) {
if (typeof data51 === 'string') {
if (!formats2.test(data51)) {errors.push(
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
var valid4 = _errs103 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data47.lastModified !== undefined) {
let data52 = data47.lastModified
const _errs105 = errors
if (
!(
typeof data52 == 'number' &&
isFinite(data52)
)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/lastModified',
schemaPath: '#/properties/databaseItem/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid4 = _errs105 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data47.touched !== undefined) {
const _errs107 = errors
if (
typeof data47.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/databaseItem/touched',
schemaPath: '#/properties/databaseItem/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid4 = _errs107 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data47.version !== undefined) {
let data54 = data47.version
const _errs109 = errors
if (
!(
typeof data54 == 'number' &&
!(data54 % 1) &&
!isNaN(data54) &&
isFinite(data54)
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
typeof data54 == 'number' &&
isFinite(data54)
) {
if (data54 < 0 || isNaN(data54)) {errors.push(
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
var valid4 = _errs109 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data47.databaseId !== undefined) {
let data55 = data47.databaseId
const _errs111 = errors
if (true) {
if (true) {
if (
typeof data55 === 'string'
) {
if (!formats2.test(data55)) {errors.push(
{
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid4 = _errs111 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data47.id !== undefined) {
let data56 = data47.id
const _errs113 = errors
if (true) {
if (true) {
if (
typeof data56 === 'string'
) {
if (
!formats2.test(data56)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid4 = _errs113 === errors
} else {
var valid4 = true
}
if (valid4) {
if (
data47.dataText !== undefined
) {
let data57 = data47.dataText
const _errs115 = errors
if (true) {
if (
typeof data57 === 'string'
) {
if (func4(data57) > 8000) {errors.push(
{
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/maxLength',
keyword: 'maxLength',
params: {
limit: 8000
},
 message: "Must_be_less_than_8000_characters"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
var valid4 = _errs115 === errors
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
var valid0 = _errs95 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerRequest !== undefined) {
let data58 = data.followerRequest
const _errs117 = errors
if (true) {
if (
data58 &&
typeof data58 == 'object' &&
!Array.isArray(data58)
) {
let missing4
if (
(data58.leaderAppId === undefined &&
(missing4 = 'leaderAppId')) ||
(data58.followerAppId === undefined &&
(missing4 = 'followerAppId')) ||
(data58.id === undefined && (missing4 = 'id')) ||
(data58.followerName === undefined &&
(missing4 = 'followerName')) ||
(data58.leaderName === undefined &&
(missing4 = 'leaderName')) ||
(data58.followerEmail === undefined &&
(missing4 = 'followerEmail')) ||
(data58.leaderEmail === undefined &&
(missing4 = 'leaderEmail')) ||
(data58.initiatedByFollower === undefined &&
(missing4 = 'initiatedByFollower')) ||
(data58.lastModified === undefined &&
(missing4 = 'lastModified')) ||
(data58.touched === undefined &&
(missing4 = 'touched')) ||
(data58.version === undefined &&
(missing4 = 'version')) ||
(data58.status === undefined &&
(missing4 = 'status')) ||
(data58.groups === undefined &&
(missing4 = 'groups')) ||
(data58.points === undefined &&
(missing4 = 'points'))
) {errors.push(
{
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: missing4 },
message: "must have required property '" +
missing4 +
"'"
}
);
} else {
if (data58.leaderAppId !== undefined) {
let data59 = data58.leaderAppId
const _errs119 = errors
if (true) {
if (true) {
if (typeof data59 === 'string') {
if (!formats2.test(data59)) {errors.push(
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
var valid5 = _errs119 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data58.followerAppId !== undefined) {
let data60 = data58.followerAppId
const _errs121 = errors
if (true) {
if (true) {
if (typeof data60 === 'string') {
if (!formats2.test(data60)) {errors.push(
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
var valid5 = _errs121 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data58.id !== undefined) {
let data61 = data58.id
const _errs123 = errors
if (true) {
if (true) {
if (typeof data61 === 'string') {
if (!formats2.test(data61)) {errors.push(
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
var valid5 = _errs123 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data58.followerName !== undefined) {
let data62 = data58.followerName
const _errs125 = errors
if (true) {
if (typeof data62 === 'string') {
if (func4(data62) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data62) < 1) {errors.push(
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
var valid5 = _errs125 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data58.leaderName !== undefined) {
let data63 = data58.leaderName
const _errs127 = errors
if (true) {
if (typeof data63 === 'string') {
if (func4(data63) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data63) < 1) {errors.push(
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
var valid5 = _errs127 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.followerEmail !== undefined
) {
let data64 = data58.followerEmail
const _errs129 = errors
if (true) {
if (true) {
if (typeof data64 === 'string') {
if (func4(data64) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data64) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (
!formats0.test(data64)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/format',
keyword: 'format',
params: {
format: 'email'},
 message: "Must_be_a_valid_email"}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data64
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
var valid5 = _errs129 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.leaderEmail !== undefined
) {
let data65 = data58.leaderEmail
const _errs131 = errors
if (true) {
if (true) {
if (
typeof data65 === 'string'
) {
if (func4(data65) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data65) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (
!formats0.test(data65)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/format',
keyword: 'format',
params: {
format: 'email'},
 message: "Must_be_a_valid_email"}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data65
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
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid5 = _errs131 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.initiatedByFollower !== undefined
) {
const _errs133 = errors
if (
typeof data58.initiatedByFollower !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerRequest/initiatedByFollower',
schemaPath: '#/properties/followerRequest/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid5 = _errs133 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.lastModified !== undefined
) {
let data67 = data58.lastModified
const _errs135 = errors
if (
!(
typeof data67 == 'number' &&
isFinite(data67)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/lastModified',
schemaPath: '#/properties/followerRequest/properties/lastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"}
);
}
var valid5 = _errs135 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.touched !== undefined
) {
const _errs137 = errors
if (
typeof data58.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerRequest/touched',
schemaPath: '#/properties/followerRequest/properties/touched/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"}
);
}
var valid5 = _errs137 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.version !== undefined
) {
let data69 = data58.version
const _errs139 = errors
if (
!(
typeof data69 == 'number' &&
!(data69 % 1) &&
!isNaN(data69) &&
isFinite(data69)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data69 == 'number' &&
isFinite(data69)
) {
if (
data69 < 0 ||
isNaN(data69)
) {errors.push(
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
var valid5 = _errs139 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.status !== undefined
) {
let data70 = data58.status
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
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data70 == 'number' &&
isFinite(data70)
) {
if (
data70 > 2 ||
isNaN(data70)
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
data70 < 0 ||
isNaN(data70)
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
var valid5 = _errs141 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.groups !== undefined
) {
let data71 = data58.groups
const _errs143 = errors
if (
errors === _errs143
) {
if (
typeof data71 === 'string'
) {
if (
func4(data71) >
8000
) {errors.push(
{
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/maxLength',
keyword: 'maxLength',
params: {
limit: 8000
},
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
var valid5 = _errs143 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data58.points !== undefined
) {
let data72 = data58.points
const _errs145 = errors
if (
!(
typeof data72 == 'number' &&
!(data72 % 1) &&
!isNaN(data72) &&
isFinite(data72)
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
if (
errors === _errs145
) {
if (
typeof data72 == 'number' &&
isFinite(data72)
) {
if (
data72 < 0 ||
isNaN(data72)
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
var valid5 = _errs145 === errors
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
var valid0 = _errs117 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabase !== undefined) {
let data73 = data.followerDatabase
const _errs147 = errors
if (true) {
if (
data73 &&
typeof data73 == 'object' &&
!Array.isArray(data73)
) {
let missing5
if (
(data73.followerRequestId === undefined &&
(missing5 = 'followerRequestId')) ||
(data73.id === undefined &&
(missing5 = 'id')) ||
(data73.databaseId === undefined &&
(missing5 = 'databaseId')) ||
(data73.lastModified === undefined &&
(missing5 = 'lastModified')) ||
(data73.touched === undefined &&
(missing5 = 'touched')) ||
(data73.version === undefined &&
(missing5 = 'version'))
) {errors.push(
{
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: missing5 },
message: "must have required property '" +
missing5 +
"'"
}
);
} else {
if (data73.followerRequestId !== undefined) {
let data74 = data73.followerRequestId
const _errs149 = errors
if (true) {
if (true) {
if (typeof data74 === 'string') {
if (!formats2.test(data74)) {errors.push(
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
var valid6 = _errs149 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data73.id !== undefined) {
let data75 = data73.id
const _errs151 = errors
if (true) {
if (true) {
if (typeof data75 === 'string') {
if (!formats2.test(data75)) {errors.push(
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
var valid6 = _errs151 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data73.databaseId !== undefined) {
let data76 = data73.databaseId
const _errs153 = errors
if (true) {
if (true) {
if (typeof data76 === 'string') {
if (!formats2.test(data76)) {errors.push(
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
var valid6 = _errs153 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data73.lastModified !== undefined) {
let data77 = data73.lastModified
const _errs155 = errors
if (
!(
typeof data77 == 'number' &&
isFinite(data77)
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
var valid6 = _errs155 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data73.touched !== undefined) {
const _errs157 = errors
if (
typeof data73.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/touched',
schemaPath: '#/properties/followerDatabase/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid6 = _errs157 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data73.version !== undefined) {
let data79 = data73.version
const _errs159 = errors
if (
!(
typeof data79 == 'number' &&
!(data79 % 1) &&
!isNaN(data79) &&
isFinite(data79)
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
typeof data79 == 'number' &&
isFinite(data79)
) {
if (
data79 < 0 ||
isNaN(data79)
) {errors.push(
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
var valid6 = _errs159 === errors
} else {
var valid6 = true
}
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
var valid0 = _errs147 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.router !== undefined) {
let data80 = data.router
const _errs161 = errors
if (true) {
if (
data80 &&
typeof data80 == 'object' &&
!Array.isArray(data80)
) {
let missing6
if (
(data80.id === undefined &&
(missing6 = 'id')) ||
(data80.appId === undefined &&
(missing6 = 'appId')) ||
(data80.routerMac === undefined &&
(missing6 = 'routerMac')) ||
(data80.ipAddress === undefined &&
(missing6 = 'ipAddress')) ||
(data80.mondayTimesAndDurations === undefined &&
(missing6 = 'mondayTimesAndDurations')) ||
(data80.tuesdayTimesAndDurations === undefined &&
(missing6 = 'tuesdayTimesAndDurations')) ||
(data80.wednesdayTimesAndDurations === undefined &&
(missing6 = 'wednesdayTimesAndDurations')) ||
(data80.thursdayTimesAndDurations === undefined &&
(missing6 = 'thursdayTimesAndDurations')) ||
(data80.fridayTimesAndDurations === undefined &&
(missing6 = 'fridayTimesAndDurations')) ||
(data80.saturdayTimesAndDurations === undefined &&
(missing6 = 'saturdayTimesAndDurations')) ||
(data80.sundayTimesAndDurations === undefined &&
(missing6 = 'sundayTimesAndDurations')) ||
(data80.version === undefined &&
(missing6 = 'version')) ||
(data80.lastModified === undefined &&
(missing6 = 'lastModified')) ||
(data80.touched === undefined &&
(missing6 = 'touched')) ||
(data80.status === undefined &&
(missing6 = 'status'))
) {errors.push(
{
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: missing6 },
message: "must have required property '" +
missing6 +
"'"
}
);
} else {
if (data80.id !== undefined) {
let data81 = data80.id
const _errs163 = errors
if (true) {
if (true) {
if (typeof data81 === 'string') {
if (!formats2.test(data81)) {errors.push(
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
var valid7 = _errs163 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data80.appId !== undefined) {
let data82 = data80.appId
const _errs165 = errors
if (true) {
if (true) {
if (typeof data82 === 'string') {
if (!formats2.test(data82)) {errors.push(
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
var valid7 = _errs165 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data80.routerMac !== undefined) {
let data83 = data80.routerMac
const _errs167 = errors
if (true) {
if (true) {
if (typeof data83 === 'string') {
if (!pattern1.test(data83)) {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'},
 message: "Must_be_a_valid_MAC_address"}
);
} else {
if (!formats90(data83)) {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/format',
keyword: 'format',
params: {
format: 'regex'},
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
var valid7 = _errs167 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data80.ipAddress !== undefined) {
let data84 = data80.ipAddress
const _errs169 = errors
if (true) {
if (true) {
if (typeof data84 === 'string') {
if (!formats92.test(data84)) {errors.push(
{
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/format',
keyword: 'format',
params: {
format: 'ipv4'},
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
var valid7 = _errs169 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.mondayTimesAndDurations !== undefined
) {
let data85 = data80.mondayTimesAndDurations
const _errs171 = errors
if (true) {
if (true) {
if (
typeof data85 === 'string'
) {
if (!pattern2.test(data85)) {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats90(data85)) {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid7 = _errs171 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.tuesdayTimesAndDurations !== undefined
) {
let data86 = data80.tuesdayTimesAndDurations
const _errs173 = errors
if (true) {
if (true) {
if (
typeof data86 === 'string'
) {
if (
!pattern2.test(data86)
) {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats90(data86)) {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid7 = _errs173 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.wednesdayTimesAndDurations !== undefined
) {
let data87 = data80.wednesdayTimesAndDurations
const _errs175 = errors
if (true) {
if (true) {
if (
typeof data87 === 'string'
) {
if (
!pattern2.test(data87)
) {errors.push(
{
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (
!formats90(data87)
) {errors.push(
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
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid7 = _errs175 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.thursdayTimesAndDurations !== undefined
) {
let data88 = data80.thursdayTimesAndDurations
const _errs177 = errors
if (true) {
if (true) {
if (
typeof data88 === 'string'
) {
if (
!pattern2.test(data88)
) {errors.push(
{
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (
!formats90(data88)
) {errors.push(
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
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid7 = _errs177 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.fridayTimesAndDurations !== undefined
) {
let data89 = data80.fridayTimesAndDurations
const _errs179 = errors
if (true) {
if (true) {
if (
typeof data89 === 'string'
) {
if (
!pattern2.test(
data89
)
) {errors.push(
{
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (
!formats90(data89)
) {errors.push(
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
var valid7 = _errs179 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.saturdayTimesAndDurations !== undefined
) {
let data90 = data80.saturdayTimesAndDurations
const _errs181 = errors
if (true) {
if (
errors === _errs181
) {
if (
typeof data90 === 'string'
) {
if (
!pattern2.test(
data90
)
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
if (
!formats90(
data90
)
) {errors.push(
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
var valid7 = _errs181 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.sundayTimesAndDurations !== undefined
) {
let data91 = data80.sundayTimesAndDurations
const _errs183 = errors
if (
errors === _errs183
) {
if (
errors === _errs183
) {
if (
typeof data91 === 'string'
) {
if (
!pattern2.test(
data91
)
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
!formats90(
data91
)
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
var valid7 = _errs183 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.version !== undefined
) {
let data92 = data80.version
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
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (
errors === _errs185
) {
if (
typeof data92 == 'number' &&
isFinite(data92)
) {
if (
data92 < 0 ||
isNaN(data92)
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
var valid7 = _errs185 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.lastModified !== undefined
) {
let data93 = data80.lastModified
const _errs187 = errors
if (
!(
typeof data93 == 'number' &&
isFinite(data93)
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
var valid7 = _errs187 ===
errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.touched !== undefined
) {
const _errs189 = errors
if (
typeof data80.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/router/touched',
schemaPath: '#/properties/router/properties/touched/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"}
);
}
var valid7 = _errs189 ===
errors
} else {
var valid7 = true
}
if (valid7) {
if (
data80.status !== undefined
) {
let data95 = data80.status
const _errs191 = errors
if (
!(
typeof data95 == 'number' &&
!(
data95 % 1
) &&
!isNaN(
data95
) &&
isFinite(
data95
)
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
if (
errors === _errs191
) {
if (
typeof data95 == 'number' &&
isFinite(
data95
)
) {
if (
data95 >
2 ||
isNaN(
data95
)
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
var valid7 = _errs191 ===
errors
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
var valid0 = _errs161 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabaseCompletion !== undefined) {
let data96 = data.followerDatabaseCompletion
const _errs193 = errors
if (true) {
if (
data96 &&
typeof data96 == 'object' &&
!Array.isArray(data96)
) {
let missing7
if (
(data96.id === undefined &&
(missing7 = 'id')) ||
(data96.followerRequestId === undefined &&
(missing7 = 'followerRequestId')) ||
(data96.description === undefined &&
(missing7 = 'description')) ||
(data96.itemId === undefined &&
(missing7 = 'itemId')) ||
(data96.parentItemId === undefined &&
(missing7 = 'parentItemId')) ||
(data96.itemLevel === undefined &&
(missing7 = 'itemLevel')) ||
(data96.lastModified === undefined &&
(missing7 = 'lastModified')) ||
(data96.touched === undefined &&
(missing7 = 'touched')) ||
(data96.version === undefined &&
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
if (data96.id !== undefined) {
let data97 = data96.id
const _errs195 = errors
if (true) {
if (true) {
if (typeof data97 === 'string') {
if (!formats2.test(data97)) {errors.push(
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
var valid8 = _errs195 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data96.followerRequestId !== undefined
) {
let data98 = data96.followerRequestId
const _errs197 = errors
if (true) {
if (true) {
if (typeof data98 === 'string') {
if (!formats2.test(data98)) {errors.push(
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
var valid8 = _errs197 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data96.description !== undefined) {
let data99 = data96.description
const _errs199 = errors
if (true) {
if (typeof data99 === 'string') {
if (func4(data99) > 1000) {errors.push(
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
var valid8 = _errs199 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data96.itemId !== undefined) {
let data100 = data96.itemId
const _errs201 = errors
if (true) {
if (true) {
if (
typeof data100 === 'string'
) {
if (!formats2.test(data100)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid8 = _errs201 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data96.parentItemId !== undefined
) {
let data101 = data96.parentItemId
const _errs203 = errors
if (true) {
if (true) {
if (
typeof data101 === 'string'
) {
if (
!formats2.test(data101)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid8 = _errs203 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data96.itemLevel !== undefined
) {
let data102 = data96.itemLevel
const _errs205 = errors
if (
!(
typeof data102 == 'number' &&
!(data102 % 1) &&
!isNaN(data102) &&
isFinite(data102)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data102 == 'number' &&
isFinite(data102)
) {
if (
data102 > 8 ||
isNaN(data102)
) {errors.push(
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
if (
data102 < 0 ||
isNaN(data102)
) {errors.push(
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
var valid8 = _errs205 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data96.lastModified !== undefined
) {
let data103 = data96.lastModified
const _errs207 = errors
if (
!(
typeof data103 == 'number' &&
isFinite(data103)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/lastModified',
schemaPath: '#/properties/followerDatabaseCompletion/properties/lastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"}
);
}
var valid8 = _errs207 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data96.touched !== undefined
) {
const _errs209 = errors
if (
typeof data96.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/touched',
schemaPath: '#/properties/followerDatabaseCompletion/properties/touched/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"}
);
}
var valid8 = _errs209 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data96.version !== undefined
) {
let data105 = data96.version
const _errs211 = errors
if (
!(
typeof data105 == 'number' &&
!(data105 % 1) &&
!isNaN(data105) &&
isFinite(data105)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/version',
schemaPath: '#/properties/followerDatabaseCompletion/properties/version/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data105 == 'number' &&
isFinite(data105)
) {
if (
data105 < 0 ||
isNaN(data105)
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
var valid8 = _errs211 === errors
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
var valid0 = _errs193 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.media !== undefined) {
let data106 = data.media
const _errs213 = errors
if (true) {
if (
data106 &&
typeof data106 == 'object' &&
!Array.isArray(data106)
) {
let missing8
if (
(data106.id === undefined &&
(missing8 = 'id')) ||
(data106.size === undefined &&
(missing8 = 'size')) ||
(data106.data === undefined &&
(missing8 = 'data')) ||
(data106.appId === undefined &&
(missing8 = 'appId')) ||
(data106.lastModified === undefined &&
(missing8 = 'lastModified')) ||
(data106.touched === undefined &&
(missing8 = 'touched'))
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
if (data106.id !== undefined) {
let data107 = data106.id
const _errs215 = errors
if (true) {
if (true) {
if (typeof data107 === 'string') {
if (!formats2.test(data107)) {errors.push(
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
var valid9 = _errs215 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data106.size !== undefined) {
let data108 = data106.size
const _errs217 = errors
if (
!(
typeof data108 == 'number' &&
!(data108 % 1) &&
!isNaN(data108) &&
isFinite(data108)
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
typeof data108 == 'number' &&
isFinite(data108)
) {
if (
data108 < 0 ||
isNaN(data108)
) {errors.push(
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
var valid9 = _errs217 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data106.data !== undefined) {
let data109 = data106.data
const _errs219 = errors
if (true) {
if (typeof data109 === 'string') {
if (func4(data109) > 8000) {errors.push(
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
var valid9 = _errs219 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data106.appId !== undefined) {
let data110 = data106.appId
const _errs221 = errors
if (true) {
if (true) {
if (
typeof data110 === 'string'
) {
if (
!formats2.test(data110)
) {errors.push(
{
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid9 = _errs221 === errors
} else {
var valid9 = true
}
if (valid9) {
if (
data106.lastModified !== undefined
) {
let data111 = data106.lastModified
const _errs223 = errors
if (
!(
typeof data111 == 'number' &&
isFinite(data111)
)
) {errors.push(
{
instancePath: instancePath + '/media/lastModified',
schemaPath: '#/properties/media/properties/lastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"}
);
}
var valid9 = _errs223 === errors
} else {
var valid9 = true
}
if (valid9) {
if (
data106.touched !== undefined
) {
const _errs225 = errors
if (
typeof data106.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/media/touched',
schemaPath: '#/properties/media/properties/touched/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"}
);
}
var valid9 = _errs225 === errors
} else {
var valid9 = true
}
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
var valid0 = _errs213 === errors
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
