'use strict'
const schema38 = {
$id: 'syncResponse',
type: 'object',
properties: {
id: { format: 'uuid', type: 'string' },
level: { minimum: 0, maximum: 9, type: 'integer' },
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
touched: { default: false, type: 'boolean' },
lastModified: { default: 1765770028258, type: 'number' },
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
default: '019b2018-64e2-74dc-b86c-2146a2231b9c',
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
},
database: {
$id: 'database',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
lastModified: { default: 0, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019b2018-64e2-74dc-b86c-251ef9347e63',
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
type: 'string'},
touched: { default: true, type: 'boolean' }
},
required: [
'name',
'lastModified',
'version',
'appId',
'id',
'order',
'homePageIconType',
'homePageIcon',
'touched'
]
},
databaseUnit: {
$id: 'databaseUnit',
type: 'object',
properties: {
name: { minLength: 1, maxLength: 100, type: 'string' },
order: { minimum: 0, type: 'integer' },
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
version: { minimum: 0, type: 'integer' },
id: { format: 'uuid', type: 'string' },
appId: { format: 'uuid', type: 'string' },
databaseId: { format: 'uuid', type: 'string' },
successVideoType: {
default: 2,
minimum: 0,
maximum: 2,
type: 'integer'},
successVideoUrl: { maxLength: 100, type: 'string' },
successAnimations: {
default: 'Fireworks',
maxLength: 100,
type: 'string'},
successSound: {
default: '00000000-0000-0000-0000-000000000005',
format: 'uuid',
type: 'string'},
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
router: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
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
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
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
default: '019b2018-64e3-77bf-a300-e63b88175df5',
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
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
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
default: '019b2018-64e3-77bf-a300-e32d9b784e34',
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
},
followerDatabaseCompletion: {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019b2018-64e3-77bf-a300-ef70da79d1d9',
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
},
router: {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019b2018-64e3-77bf-a300-f2b88193236f',
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
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
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
media: {
$id: 'media',
type: 'object',
properties: {
id: {
default: '019b2018-64e3-77bf-a300-ebd2308ff932',
format: 'uuid',
type: 'string'},
size: { minimum: 0, type: 'integer' },
data: { maxLength: 8000, type: 'string' },
appId: { format: 'uuid', type: 'string' },
touched: { default: true, type: 'boolean' }
},
required: ['id', 'size', 'data', 'appId', 'touched']
},
message: { type: 'string' },
result: { minimum: 0, maximum: 9, type: 'integer' }
},
required: ['id']
}
const formats2 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
import * as formats from 'ajv-formats/dist/formats'
const formats100 = formats.fullFormats.regex as any
const formats102 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
const func2 = (await import('ajv-keywords/dist/definitions/transform')).default.transform
.toLowerCase
const func3 = (await import('ajv-keywords/dist/definitions/transform')).default.transform.trim
import ucs2length from 'ajv/dist/runtime/ucs2length';const func4 = (ucs2length as any).default;
const pattern0 = new RegExp(/^(?!API$|I$).+$/, 'i');
const pattern1 = new RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', 'u')
const pattern2 = new RegExp('^([0-9]{2}:[0-9]{2})\\|([0-9]+)$', 'u')
import type { ErrorObject } from 'ajv'
import * as serverAndClientFunctions from '../serverAndClientFunctions'
import type { ServerSyncResponseInterface } from '../serverInterfaces/ServerSyncResponseInterface'
export async function validateSyncResponse(
data:ServerSyncResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="syncResponse" */ let vErrors = null
let errors: Array<ErrorObject> = []
if (true) {
if (data && typeof data == 'object' && !Array.isArray(data)) {
let missing0
if (data.id === undefined && (missing0 = 'id')) {errors.push(
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
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (typeof data1 == 'number' && isFinite(data1)) {
if (data1 > 9 || isNaN(data1)) {errors.push(
{
instancePath: instancePath + '/level',
schemaPath: '#/properties/level/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 9 },
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data1 < 0 || isNaN(data1)) {errors.push(
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
 message: "Must_be_an_integer"
}
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
 message: "Must_be_less_than_or_equal_to_maximum"
}
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
let missing1
if (
(data4.email === undefined && (missing1 = 'email')) ||
(data4.name === undefined && (missing1 = 'name')) ||
(data4.uniqueName === undefined &&
(missing1 = 'uniqueName')) ||
(data4.version === undefined &&
(missing1 = 'version')) ||
(data4.touched === undefined &&
(missing1 = 'touched')) ||
(data4.lastModified === undefined &&
(missing1 = 'lastModified')) ||
(data4.homePageImageType === undefined &&
(missing1 = 'homePageImageType')) ||
(data4.homePageImage === undefined &&
(missing1 = 'homePageImage')) ||
(data4.authenticationType === undefined &&
(missing1 = 'authenticationType')) ||
(data4.lang === undefined && (missing1 = 'lang')) ||
(data4.enableNarrator === undefined &&
(missing1 = 'enableNarrator')) ||
(data4.groups === undefined && (missing1 = 'groups')) ||
(data4.id === undefined && (missing1 = 'id')) ||
(data4.lastSync === undefined &&
(missing1 = 'lastSync'))
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
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data5) < 5) {errors.push(
{
instancePath: instancePath + '/app/email',
schemaPath: '#/properties/app/properties/email/minLength',
keyword: 'minLength',
params: { limit: 5 },
 message: "Required"
}
);
} else {
if (!formats0.test(data5)) {errors.push(
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
var valid1 = _errs11 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.name !== undefined) {
let data6 = data4.name
const _errs13 = errors
if (
typeof data6 == 'string' &&
data4 !== undefined
) {
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
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data6) < 1) {errors.push(
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
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data7) < 1) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
} else {
if (!pattern0.test(data7)) {errors.push(
{
instancePath: instancePath + '/app/uniqueName',
schemaPath: '#/properties/app/properties/uniqueName/pattern',
keyword: 'pattern',
params: {
pattern: '/^(?!API$|I$).+$/i'},
 message: "Unique_name_contains_reserved_words"
}
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
 message: "Must_be_an_integer"
}
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
var valid1 = _errs17 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.touched !== undefined) {
const _errs19 = errors
if (typeof data4.touched !== 'boolean') {errors.push(
{
instancePath: instancePath + '/app/touched',
schemaPath: '#/properties/app/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid1 = _errs19 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.lastModified !== undefined) {
let data10 = data4.lastModified
const _errs21 = errors
if (
!(
typeof data10 == 'number' &&
isFinite(data10)
)
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
var valid1 = _errs21 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.homePageImageType !== undefined) {
let data11 = data4.homePageImageType
const _errs23 = errors
if (
!(
typeof data11 == 'number' &&
!(data11 % 1) &&
!isNaN(data11) &&
isFinite(data11)
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
typeof data11 == 'number' &&
isFinite(data11)
) {
if (data11 > 3 || isNaN(data11)) {errors.push(
{
instancePath: instancePath + '/app/homePageImageType',
schemaPath: '#/properties/app/properties/homePageImageType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data11 < 0 || isNaN(data11)) {errors.push(
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
var valid1 = _errs23 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.homePageImage !== undefined) {
let data12 = data4.homePageImage
const _errs25 = errors
if (true) {
if (true) {
if (typeof data12 === 'string') {
if (!formats2.test(data12)) {errors.push(
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
var valid1 = _errs25 === errors
} else {
var valid1 = true
}
if (valid1) {
if (
data4.authenticationType !== undefined
) {
let data13 = data4.authenticationType
const _errs27 = errors
if (
typeof data13 == 'string' &&
data4 !== undefined
) {
data13 = func2(func3(data13))
data4['authenticationType'] = data13
}
if (true) {
if (typeof data13 === 'string') {
if (func4(data13) > 100) {errors.push(
{
instancePath: instancePath + '/app/authenticationType',
schemaPath: '#/properties/app/properties/authenticationType/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data13) < 1) {errors.push(
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
var valid1 = _errs27 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.lang !== undefined) {
let data14 = data4.lang
const _errs29 = errors
if (
typeof data14 == 'string' &&
data4 !== undefined
) {
data14 = func2(func3(data14))
data4['lang'] = data14
}
if (true) {
if (typeof data14 === 'string') {
if (func4(data14) > 100) {errors.push(
{
instancePath: instancePath + '/app/lang',
schemaPath: '#/properties/app/properties/lang/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data14) < 1) {errors.push(
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
var valid1 = _errs29 === errors
} else {
var valid1 = true
}
if (valid1) {
if (
data4.enableNarrator !== undefined
) {
const _errs31 = errors
if (
typeof data4.enableNarrator !== 'boolean'
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
var valid1 = _errs31 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.groups !== undefined) {
let data16 = data4.groups
const _errs33 = errors
if (true) {
if (
typeof data16 === 'string'
) {
if (func4(data16) > 8000) {errors.push(
{
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/maxLength',
keyword: 'maxLength',
params: {
limit: 8000
},
 message: "Must_be_less_than_8000_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/app/groups',
schemaPath: '#/properties/app/properties/groups/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
var valid1 = _errs33 === errors
} else {
var valid1 = true
}
if (valid1) {
if (data4.id !== undefined) {
let data17 = data4.id
const _errs35 = errors
if (true) {
if (true) {
if (
typeof data17 === 'string'
) {
if (
func4(data17) < 36
) {errors.push(
{
instancePath: instancePath + '/app/id',
schemaPath: '#/properties/app/properties/id/minLength',
keyword: 'minLength',
params: {
limit: 36
},
 message: "Must_be_36_characters"
}
);
} else {
if (
!formats2.test(
data17
)
) {errors.push(
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
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid1 = _errs35 === errors
} else {
var valid1 = true
}
if (valid1) {
if (
data4.lastSync !== undefined
) {
let data18 = data4.lastSync
const _errs37 = errors
if (
!(
typeof data18 == 'number' &&
isFinite(data18)
)
) {errors.push(
{
instancePath: instancePath + '/app/lastSync',
schemaPath: '#/properties/app/properties/lastSync/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid1 = _errs37 === errors
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
var valid0 = _errs9 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.database !== undefined) {
let data19 = data.database
const _errs39 = errors
if (true) {
if (
data19 &&
typeof data19 == 'object' &&
!Array.isArray(data19)
) {
let missing2
if (
(data19.name === undefined && (missing2 = 'name')) ||
(data19.lastModified === undefined &&
(missing2 = 'lastModified')) ||
(data19.version === undefined &&
(missing2 = 'version')) ||
(data19.appId === undefined &&
(missing2 = 'appId')) ||
(data19.id === undefined && (missing2 = 'id')) ||
(data19.order === undefined &&
(missing2 = 'order')) ||
(data19.homePageIconType === undefined &&
(missing2 = 'homePageIconType')) ||
(data19.homePageIcon === undefined &&
(missing2 = 'homePageIcon')) ||
(data19.touched === undefined &&
(missing2 = 'touched'))
) {errors.push(
{
instancePath: instancePath + '/database',
schemaPath: '#/properties/database/required',
keyword: 'required',
params: { missingProperty: missing2 },
message: "must have required property '" + missing2 + "'"
}
);
} else {
if (data19.name !== undefined) {
let data20 = data19.name
const _errs41 = errors
if (true) {
if (typeof data20 === 'string') {
if (func4(data20) > 100) {errors.push(
{
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data20) < 1) {errors.push(
{
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
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
var valid2 = _errs41 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data19.lastModified !== undefined) {
let data21 = data19.lastModified
const _errs43 = errors
if (
!(typeof data21 == 'number' && isFinite(data21))
) {errors.push(
{
instancePath: instancePath + '/database/lastModified',
schemaPath: '#/properties/database/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid2 = _errs43 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data19.version !== undefined) {
let data22 = data19.version
const _errs45 = errors
if (
!(
typeof data22 == 'number' &&
!(data22 % 1) &&
!isNaN(data22) &&
isFinite(data22)
)
) {errors.push(
{
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data22 == 'number' &&
isFinite(data22)
) {
if (data22 < 0 || isNaN(data22)) {errors.push(
{
instancePath: instancePath + '/database/version',
schemaPath: '#/properties/database/properties/version/minimum',
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
var valid2 = _errs45 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data19.appId !== undefined) {
let data23 = data19.appId
const _errs47 = errors
if (true) {
if (true) {
if (typeof data23 === 'string') {
if (!formats2.test(data23)) {errors.push(
{
instancePath: instancePath + '/database/appId',
schemaPath: '#/properties/database/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid2 = _errs47 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data19.id !== undefined) {
let data24 = data19.id
const _errs49 = errors
if (true) {
if (true) {
if (typeof data24 === 'string') {
if (!formats2.test(data24)) {errors.push(
{
instancePath: instancePath + '/database/id',
schemaPath: '#/properties/database/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid2 = _errs49 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data19.order !== undefined) {
let data25 = data19.order
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
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data25 == 'number' &&
isFinite(data25)
) {
if (data25 < 0 || isNaN(data25)) {errors.push(
{
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/minimum',
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
var valid2 = _errs51 === errors
} else {
var valid2 = true
}
if (valid2) {
if (
data19.homePageIconType !== undefined
) {
let data26 = data19.homePageIconType
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
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data26 == 'number' &&
isFinite(data26)
) {
if (data26 > 3 || isNaN(data26)) {errors.push(
{
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data26 < 0 || isNaN(data26)) {errors.push(
{
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/minimum',
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
var valid2 = _errs53 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data19.homePageIcon !== undefined) {
let data27 = data19.homePageIcon
const _errs55 = errors
if (true) {
if (true) {
if (typeof data27 === 'string') {
if (!formats2.test(data27)) {errors.push(
{
instancePath: instancePath + '/database/homePageIcon',
schemaPath: '#/properties/database/properties/homePageIcon/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid2 = _errs55 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data19.touched !== undefined) {
const _errs57 = errors
if (
typeof data19.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/database/touched',
schemaPath: '#/properties/database/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid2 = _errs57 === errors
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
var valid0 = _errs39 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseUnit !== undefined) {
let data29 = data.databaseUnit
const _errs59 = errors
if (true) {
if (
data29 &&
typeof data29 == 'object' &&
!Array.isArray(data29)
) {
let missing3
if (
(data29.name === undefined &&
(missing3 = 'name')) ||
(data29.order === undefined &&
(missing3 = 'order')) ||
(data29.lastModified === undefined &&
(missing3 = 'lastModified')) ||
(data29.touched === undefined &&
(missing3 = 'touched')) ||
(data29.version === undefined &&
(missing3 = 'version')) ||
(data29.id === undefined && (missing3 = 'id')) ||
(data29.appId === undefined &&
(missing3 = 'appId')) ||
(data29.databaseId === undefined &&
(missing3 = 'databaseId')) ||
(data29.successVideoType === undefined &&
(missing3 = 'successVideoType')) ||
(data29.successVideoUrl === undefined &&
(missing3 = 'successVideoUrl')) ||
(data29.successAnimations === undefined &&
(missing3 = 'successAnimations')) ||
(data29.successSound === undefined &&
(missing3 = 'successSound')) ||
(data29.successSoundType === undefined &&
(missing3 = 'successSoundType')) ||
(data29.homePageImageType === undefined &&
(missing3 = 'homePageImageType')) ||
(data29.homePageImage === undefined &&
(missing3 = 'homePageImage')) ||
(data29.router === undefined &&
(missing3 = 'router')) ||
(data29.routerTime === undefined &&
(missing3 = 'routerTime')) ||
(data29.routerTimeImmediate === undefined &&
(missing3 = 'routerTimeImmediate')) ||
(data29.points === undefined &&
(missing3 = 'points'))
) {errors.push(
{
instancePath: instancePath + '/databaseUnit',
schemaPath: '#/properties/databaseUnit/required',
keyword: 'required',
params: { missingProperty: missing3 },
message: "must have required property '" +
missing3 +
"'"
}
);
} else {
if (data29.name !== undefined) {
let data30 = data29.name
const _errs61 = errors
if (true) {
if (typeof data30 === 'string') {
if (func4(data30) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data30) < 1) {errors.push(
{
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
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
var valid3 = _errs61 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data29.order !== undefined) {
let data31 = data29.order
const _errs63 = errors
if (
!(
typeof data31 == 'number' &&
!(data31 % 1) &&
!isNaN(data31) &&
isFinite(data31)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data31 == 'number' &&
isFinite(data31)
) {
if (data31 < 0 || isNaN(data31)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/minimum',
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
var valid3 = _errs63 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data29.lastModified !== undefined) {
let data32 = data29.lastModified
const _errs65 = errors
if (
!(
typeof data32 == 'number' &&
isFinite(data32)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/lastModified',
schemaPath: '#/properties/databaseUnit/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid3 = _errs65 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data29.touched !== undefined) {
const _errs67 = errors
if (typeof data29.touched !== 'boolean') {errors.push(
{
instancePath: instancePath + '/databaseUnit/touched',
schemaPath: '#/properties/databaseUnit/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid3 = _errs67 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data29.version !== undefined) {
let data34 = data29.version
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
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data34 == 'number' &&
isFinite(data34)
) {
if (data34 < 0 || isNaN(data34)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/version',
schemaPath: '#/properties/databaseUnit/properties/version/minimum',
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
var valid3 = _errs69 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data29.id !== undefined) {
let data35 = data29.id
const _errs71 = errors
if (true) {
if (true) {
if (typeof data35 === 'string') {
if (!formats2.test(data35)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/id',
schemaPath: '#/properties/databaseUnit/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid3 = _errs71 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data29.appId !== undefined) {
let data36 = data29.appId
const _errs73 = errors
if (true) {
if (true) {
if (typeof data36 === 'string') {
if (!formats2.test(data36)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/appId',
schemaPath: '#/properties/databaseUnit/properties/appId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid3 = _errs73 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data29.databaseId !== undefined) {
let data37 = data29.databaseId
const _errs75 = errors
if (true) {
if (true) {
if (
typeof data37 === 'string'
) {
if (!formats2.test(data37)) {errors.push(
{
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/databaseUnit/databaseId',
schemaPath: '#/properties/databaseUnit/properties/databaseId/type',
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
data29.successVideoType !== undefined
) {
let data38 = data29.successVideoType
const _errs77 = errors
if (
!(
typeof data38 == 'number' &&
!(data38 % 1) &&
!isNaN(data38) &&
isFinite(data38)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data38 == 'number' &&
isFinite(data38)
) {
if (
data38 > 2 ||
isNaN(data38)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 2
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (
data38 < 0 ||
isNaN(data38)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/minimum',
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
var valid3 = _errs77 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.successVideoUrl !== undefined
) {
let data39 = data29.successVideoUrl
const _errs79 = errors
if (true) {
if (
typeof data39 === 'string'
) {
if (func4(data39) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successVideoUrl',
schemaPath: '#/properties/databaseUnit/properties/successVideoUrl/maxLength',
keyword: 'maxLength',
params: {
limit: 100
},
 message: "Must_be_less_than_100_characters"
}
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
var valid3 = _errs79 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.successAnimations !== undefined
) {
let data40 = data29.successAnimations
const _errs81 = errors
if (true) {
if (
typeof data40 === 'string'
) {
if (func4(data40) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successAnimations',
schemaPath: '#/properties/databaseUnit/properties/successAnimations/maxLength',
keyword: 'maxLength',
params: {
limit: 100
},
 message: "Must_be_less_than_100_characters"
}
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
var valid3 = _errs81 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.successSound !== undefined
) {
let data41 = data29.successSound
const _errs83 = errors
if (true) {
if (true) {
if (
typeof data41 === 'string'
) {
if (
!formats2.test(
data41
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSound',
schemaPath: '#/properties/databaseUnit/properties/successSound/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid3 = _errs83 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.successSoundType !== undefined
) {
let data42 = data29.successSoundType
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
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data42 == 'number' &&
isFinite(data42)
) {
if (
data42 > 4 ||
isNaN(data42)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 4
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (
data42 < 0 ||
isNaN(data42)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/minimum',
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
var valid3 = _errs85 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.homePageImageType !== undefined
) {
let data43 = data29.homePageImageType
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
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (
errors === _errs87
) {
if (
typeof data43 == 'number' &&
isFinite(data43)
) {
if (
data43 > 3 ||
isNaN(data43)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 3
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (
data43 < 0 ||
isNaN(data43)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/minimum',
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
var valid3 = _errs87 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.homePageImage !== undefined
) {
let data44 = data29.homePageImage
const _errs89 = errors
if (
errors === _errs89
) {
if (
errors === _errs89
) {
if (
typeof data44 === 'string'
) {
if (
!formats2.test(
data44
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/homePageImage',
schemaPath: '#/properties/databaseUnit/properties/homePageImage/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid3 = _errs89 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.router !== undefined
) {
let data45 = data29.router
const _errs91 = errors
if (
errors === _errs91
) {
if (
errors === _errs91
) {
if (
typeof data45 === 'string'
) {
if (
!formats2.test(
data45
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/router',
schemaPath: '#/properties/databaseUnit/properties/router/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid3 = _errs91 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.routerTime !== undefined
) {
let data46 = data29.routerTime
const _errs93 = errors
if (
!(
typeof data46 == 'number' &&
isFinite(
data46
)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/routerTime',
schemaPath: '#/properties/databaseUnit/properties/routerTime/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid3 = _errs93 ===
errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.routerTimeImmediate !== undefined
) {
const _errs95 = errors
if (
typeof data29.routerTimeImmediate !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/routerTimeImmediate',
schemaPath: '#/properties/databaseUnit/properties/routerTimeImmediate/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"
}
);
}
var valid3 = _errs95 ===
errors
} else {
var valid3 = true
}
if (valid3) {
if (
data29.points !== undefined
) {
let data48 = data29.points
const _errs97 = errors
if (
!(
typeof data48 == 'number' &&
!(
data48 %
1
) &&
!isNaN(
data48
) &&
isFinite(
data48
)
)
) {errors.push(
{
instancePath: instancePath + '/databaseUnit/points',
schemaPath: '#/properties/databaseUnit/properties/points/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (
errors === _errs97
) {
if (
typeof data48 == 'number' &&
isFinite(
data48
)
) {
if (
data48 <
0 ||
isNaN(
data48
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
 message: "Must_be_greater_than_or_equal_to_0"
}
);
}
}
}
var valid3 = _errs97 ===
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
var valid0 = _errs59 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseItem !== undefined) {
let data49 = data.databaseItem
const _errs99 = errors
if (true) {
if (
data49 &&
typeof data49 == 'object' &&
!Array.isArray(data49)
) {
let missing4
if (
(data49.itemType === undefined &&
(missing4 = 'itemType')) ||
(data49.order === undefined &&
(missing4 = 'order')) ||
(data49.unitId === undefined &&
(missing4 = 'unitId')) ||
(data49.appId === undefined &&
(missing4 = 'appId')) ||
(data49.lastModified === undefined &&
(missing4 = 'lastModified')) ||
(data49.touched === undefined &&
(missing4 = 'touched')) ||
(data49.version === undefined &&
(missing4 = 'version')) ||
(data49.databaseId === undefined &&
(missing4 = 'databaseId')) ||
(data49.id === undefined && (missing4 = 'id')) ||
(data49.dataText === undefined &&
(missing4 = 'dataText')) ||
(data49.data === undefined && (missing4 = 'data'))
) {errors.push(
{
instancePath: instancePath + '/databaseItem',
schemaPath: '#/properties/databaseItem/required',
keyword: 'required',
params: { missingProperty: missing4 },
message: "must have required property '" +
missing4 +
"'"
}
);
} else {
if (data49.itemType !== undefined) {
let data50 = data49.itemType
const _errs101 = errors
if (
!(
typeof data50 == 'number' &&
!(data50 % 1) &&
!isNaN(data50) &&
isFinite(data50)
)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data50 == 'number' &&
isFinite(data50)
) {
if (data50 > 5 || isNaN(data50)) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 5
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data50 < 0 || isNaN(data50)) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/minimum',
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
var valid4 = _errs101 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data49.order !== undefined) {
let data51 = data49.order
const _errs103 = errors
if (
!(
typeof data51 == 'number' &&
!(data51 % 1) &&
!isNaN(data51) &&
isFinite(data51)
)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data51 == 'number' &&
isFinite(data51)
) {
if (data51 < 0 || isNaN(data51)) {errors.push(
{
instancePath: instancePath + '/databaseItem/order',
schemaPath: '#/properties/databaseItem/properties/order/minimum',
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
var valid4 = _errs103 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data49.unitId !== undefined) {
let data52 = data49.unitId
const _errs105 = errors
if (true) {
if (true) {
if (typeof data52 === 'string') {
if (!formats2.test(data52)) {errors.push(
{
instancePath: instancePath + '/databaseItem/unitId',
schemaPath: '#/properties/databaseItem/properties/unitId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid4 = _errs105 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data49.appId !== undefined) {
let data53 = data49.appId
const _errs107 = errors
if (true) {
if (true) {
if (typeof data53 === 'string') {
if (!formats2.test(data53)) {errors.push(
{
instancePath: instancePath + '/databaseItem/appId',
schemaPath: '#/properties/databaseItem/properties/appId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid4 = _errs107 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data49.lastModified !== undefined) {
let data54 = data49.lastModified
const _errs109 = errors
if (
!(
typeof data54 == 'number' &&
isFinite(data54)
)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/lastModified',
schemaPath: '#/properties/databaseItem/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid4 = _errs109 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data49.touched !== undefined) {
const _errs111 = errors
if (
typeof data49.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/databaseItem/touched',
schemaPath: '#/properties/databaseItem/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid4 = _errs111 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data49.version !== undefined) {
let data56 = data49.version
const _errs113 = errors
if (
!(
typeof data56 == 'number' &&
!(data56 % 1) &&
!isNaN(data56) &&
isFinite(data56)
)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data56 == 'number' &&
isFinite(data56)
) {
if (
data56 < 0 ||
isNaN(data56)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/minimum',
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
var valid4 = _errs113 === errors
} else {
var valid4 = true
}
if (valid4) {
if (
data49.databaseId !== undefined
) {
let data57 = data49.databaseId
const _errs115 = errors
if (true) {
if (true) {
if (
typeof data57 === 'string'
) {
if (
!formats2.test(data57)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/databaseId',
schemaPath: '#/properties/databaseItem/properties/databaseId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid4 = _errs115 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data49.id !== undefined) {
let data58 = data49.id
const _errs117 = errors
if (true) {
if (true) {
if (
typeof data58 === 'string'
) {
if (
!formats2.test(data58)
) {errors.push(
{
instancePath: instancePath + '/databaseItem/id',
schemaPath: '#/properties/databaseItem/properties/id/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid4 = _errs117 === errors
} else {
var valid4 = true
}
if (valid4) {
if (
data49.dataText !== undefined
) {
let data59 = data49.dataText
const _errs119 = errors
if (true) {
if (
typeof data59 === 'string'
) {
if (
func4(data59) > 8000
) {errors.push(
{
instancePath: instancePath + '/databaseItem/dataText',
schemaPath: '#/properties/databaseItem/properties/dataText/maxLength',
keyword: 'maxLength',
params: {
limit: 8000
},
 message: "Must_be_less_than_8000_characters"
}
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
var valid4 = _errs119 === errors
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
var valid0 = _errs99 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerRequest !== undefined) {
let data60 = data.followerRequest
const _errs121 = errors
if (true) {
if (
data60 &&
typeof data60 == 'object' &&
!Array.isArray(data60)
) {
let missing5
if (
(data60.leaderAppId === undefined &&
(missing5 = 'leaderAppId')) ||
(data60.followerAppId === undefined &&
(missing5 = 'followerAppId')) ||
(data60.id === undefined &&
(missing5 = 'id')) ||
(data60.followerName === undefined &&
(missing5 = 'followerName')) ||
(data60.leaderName === undefined &&
(missing5 = 'leaderName')) ||
(data60.followerEmail === undefined &&
(missing5 = 'followerEmail')) ||
(data60.leaderEmail === undefined &&
(missing5 = 'leaderEmail')) ||
(data60.initiatedByFollower === undefined &&
(missing5 = 'initiatedByFollower')) ||
(data60.lastModified === undefined &&
(missing5 = 'lastModified')) ||
(data60.touched === undefined &&
(missing5 = 'touched')) ||
(data60.version === undefined &&
(missing5 = 'version')) ||
(data60.status === undefined &&
(missing5 = 'status')) ||
(data60.groups === undefined &&
(missing5 = 'groups')) ||
(data60.points === undefined &&
(missing5 = 'points'))
) {errors.push(
{
instancePath: instancePath + '/followerRequest',
schemaPath: '#/properties/followerRequest/required',
keyword: 'required',
params: { missingProperty: missing5 },
message: "must have required property '" +
missing5 +
"'"
}
);
} else {
if (data60.leaderAppId !== undefined) {
let data61 = data60.leaderAppId
const _errs123 = errors
if (true) {
if (true) {
if (typeof data61 === 'string') {
if (!formats2.test(data61)) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderAppId',
schemaPath: '#/properties/followerRequest/properties/leaderAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid5 = _errs123 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data60.followerAppId !== undefined) {
let data62 = data60.followerAppId
const _errs125 = errors
if (true) {
if (true) {
if (typeof data62 === 'string') {
if (!formats2.test(data62)) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerAppId',
schemaPath: '#/properties/followerRequest/properties/followerAppId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid5 = _errs125 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data60.id !== undefined) {
let data63 = data60.id
const _errs127 = errors
if (true) {
if (true) {
if (typeof data63 === 'string') {
if (!formats2.test(data63)) {errors.push(
{
instancePath: instancePath + '/followerRequest/id',
schemaPath: '#/properties/followerRequest/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid5 = _errs127 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data60.followerName !== undefined) {
let data64 = data60.followerName
const _errs129 = errors
if (true) {
if (typeof data64 === 'string') {
if (func4(data64) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data64) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
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
var valid5 = _errs129 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data60.leaderName !== undefined) {
let data65 = data60.leaderName
const _errs131 = errors
if (true) {
if (typeof data65 === 'string') {
if (func4(data65) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data65) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
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
var valid5 = _errs131 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.followerEmail !== undefined
) {
let data66 = data60.followerEmail
const _errs133 = errors
if (true) {
if (true) {
if (
typeof data66 === 'string'
) {
if (func4(data66) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data66) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"
}
);
} else {
if (
!formats0.test(data66)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/format',
keyword: 'format',
params: {
format: 'email'},
 message: "Must_be_a_valid_email"
}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data66
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"
}
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
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid5 = _errs133 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.leaderEmail !== undefined
) {
let data67 = data60.leaderEmail
const _errs135 = errors
if (true) {
if (true) {
if (
typeof data67 === 'string'
) {
if (func4(data67) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: {
limit: 100
},
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data67) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/minLength',
keyword: 'minLength',
params: {
limit: 1
},
 message: "Required"
}
);
} else {
if (
!formats0.test(data67)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/format',
keyword: 'format',
params: {
format: 'email'},
 message: "Must_be_a_valid_email"
}
);
} else {
if (
!await serverAndClientFunctions.doesEmailExist(
data67
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/doesEmailExist',
keyword: 'doesEmailExist',
params: {},
 message: "Email_does_not_exist"
}
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
var valid5 = _errs135 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.initiatedByFollower !== undefined
) {
const _errs137 = errors
if (
typeof data60.initiatedByFollower !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerRequest/initiatedByFollower',
schemaPath: '#/properties/followerRequest/properties/initiatedByFollower/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"
}
);
}
var valid5 = _errs137 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.lastModified !== undefined
) {
let data69 = data60.lastModified
const _errs139 = errors
if (
!(
typeof data69 == 'number' &&
isFinite(data69)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/lastModified',
schemaPath: '#/properties/followerRequest/properties/lastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid5 = _errs139 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.touched !== undefined
) {
const _errs141 = errors
if (
typeof data60.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerRequest/touched',
schemaPath: '#/properties/followerRequest/properties/touched/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"
}
);
}
var valid5 = _errs141 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.version !== undefined
) {
let data71 = data60.version
const _errs143 = errors
if (
!(
typeof data71 == 'number' &&
!(data71 % 1) &&
!isNaN(data71) &&
isFinite(data71)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data71 == 'number' &&
isFinite(data71)
) {
if (
data71 < 0 ||
isNaN(data71)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/minimum',
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
var valid5 = _errs143 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.status !== undefined
) {
let data72 = data60.status
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
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
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
data72 > 2 ||
isNaN(data72)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 2
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (
data72 < 0 ||
isNaN(data72)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/status',
schemaPath: '#/properties/followerRequest/properties/status/minimum',
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
var valid5 = _errs145 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.groups !== undefined
) {
let data73 = data60.groups
const _errs147 = errors
if (
errors === _errs147
) {
if (
typeof data73 === 'string'
) {
if (
func4(data73) >
8000
) {errors.push(
{
instancePath: instancePath + '/followerRequest/groups',
schemaPath: '#/properties/followerRequest/properties/groups/maxLength',
keyword: 'maxLength',
params: {
limit: 8000
},
 message: "Must_be_less_than_8000_characters"
}
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
var valid5 = _errs147 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data60.points !== undefined
) {
let data74 = data60.points
const _errs149 = errors
if (
!(
typeof data74 == 'number' &&
!(data74 % 1) &&
!isNaN(
data74
) &&
isFinite(data74)
)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (
errors === _errs149
) {
if (
typeof data74 == 'number' &&
isFinite(data74)
) {
if (
data74 < 0 ||
isNaN(data74)
) {errors.push(
{
instancePath: instancePath + '/followerRequest/points',
schemaPath: '#/properties/followerRequest/properties/points/minimum',
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
var valid5 = _errs149 ===
errors
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
var valid0 = _errs121 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabase !== undefined) {
let data75 = data.followerDatabase
const _errs151 = errors
if (true) {
if (
data75 &&
typeof data75 == 'object' &&
!Array.isArray(data75)
) {
let missing6
if (
(data75.followerRequestId === undefined &&
(missing6 = 'followerRequestId')) ||
(data75.id === undefined &&
(missing6 = 'id')) ||
(data75.databaseId === undefined &&
(missing6 = 'databaseId')) ||
(data75.lastModified === undefined &&
(missing6 = 'lastModified')) ||
(data75.touched === undefined &&
(missing6 = 'touched')) ||
(data75.version === undefined &&
(missing6 = 'version')) ||
(data75.databaseVersion === undefined &&
(missing6 = 'databaseVersion')) ||
(data75.databaseLastModified === undefined &&
(missing6 = 'databaseLastModified')) ||
(data75.unitVersion === undefined &&
(missing6 = 'unitVersion')) ||
(data75.unitLastModified === undefined &&
(missing6 = 'unitLastModified')) ||
(data75.itemVersion === undefined &&
(missing6 = 'itemVersion')) ||
(data75.itemLastModified === undefined &&
(missing6 = 'itemLastModified'))
) {errors.push(
{
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/required',
keyword: 'required',
params: { missingProperty: missing6 },
message: "must have required property '" +
missing6 +
"'"
}
);
} else {
if (data75.followerRequestId !== undefined) {
let data76 = data75.followerRequestId
const _errs153 = errors
if (true) {
if (true) {
if (typeof data76 === 'string') {
if (!formats2.test(data76)) {errors.push(
{
instancePath: instancePath + '/followerDatabase/followerRequestId',
schemaPath: '#/properties/followerDatabase/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid6 = _errs153 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data75.id !== undefined) {
let data77 = data75.id
const _errs155 = errors
if (true) {
if (true) {
if (typeof data77 === 'string') {
if (!formats2.test(data77)) {errors.push(
{
instancePath: instancePath + '/followerDatabase/id',
schemaPath: '#/properties/followerDatabase/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid6 = _errs155 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data75.databaseId !== undefined) {
let data78 = data75.databaseId
const _errs157 = errors
if (true) {
if (true) {
if (typeof data78 === 'string') {
if (!formats2.test(data78)) {errors.push(
{
instancePath: instancePath + '/followerDatabase/databaseId',
schemaPath: '#/properties/followerDatabase/properties/databaseId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid6 = _errs157 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data75.lastModified !== undefined) {
let data79 = data75.lastModified
const _errs159 = errors
if (
!(
typeof data79 == 'number' &&
isFinite(data79)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/lastModified',
schemaPath: '#/properties/followerDatabase/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid6 = _errs159 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data75.touched !== undefined) {
const _errs161 = errors
if (
typeof data75.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/touched',
schemaPath: '#/properties/followerDatabase/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid6 = _errs161 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data75.version !== undefined) {
let data81 = data75.version
const _errs163 = errors
if (
!(
typeof data81 == 'number' &&
!(data81 % 1) &&
!isNaN(data81) &&
isFinite(data81)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data81 == 'number' &&
isFinite(data81)
) {
if (
data81 < 0 ||
isNaN(data81)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/minimum',
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
var valid6 = _errs163 === errors
} else {
var valid6 = true
}
if (valid6) {
if (
data75.databaseVersion !== undefined
) {
let data82 = data75.databaseVersion
const _errs165 = errors
if (
!(
typeof data82 == 'number' &&
!(data82 % 1) &&
!isNaN(data82) &&
isFinite(data82)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/databaseVersion',
schemaPath: '#/properties/followerDatabase/properties/databaseVersion/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data82 == 'number' &&
isFinite(data82)
) {
if (
data82 < 0 ||
isNaN(data82)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/databaseVersion',
schemaPath: '#/properties/followerDatabase/properties/databaseVersion/minimum',
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
var valid6 = _errs165 === errors
} else {
var valid6 = true
}
if (valid6) {
if (
data75.databaseLastModified !== undefined
) {
let data83 = data75.databaseLastModified
const _errs167 = errors
if (
!(
typeof data83 == 'number' &&
isFinite(data83)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/databaseLastModified',
schemaPath: '#/properties/followerDatabase/properties/databaseLastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid6 = _errs167 === errors
} else {
var valid6 = true
}
if (valid6) {
if (
data75.unitVersion !== undefined
) {
let data84 = data75.unitVersion
const _errs169 = errors
if (
!(
typeof data84 == 'number' &&
!(data84 % 1) &&
!isNaN(data84) &&
isFinite(data84)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/unitVersion',
schemaPath: '#/properties/followerDatabase/properties/unitVersion/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data84 == 'number' &&
isFinite(data84)
) {
if (
data84 < 0 ||
isNaN(data84)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/unitVersion',
schemaPath: '#/properties/followerDatabase/properties/unitVersion/minimum',
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
var valid6 = _errs169 === errors
} else {
var valid6 = true
}
if (valid6) {
if (
data75.unitLastModified !== undefined
) {
let data85 = data75.unitLastModified
const _errs171 = errors
if (
!(
typeof data85 == 'number' &&
isFinite(data85)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/unitLastModified',
schemaPath: '#/properties/followerDatabase/properties/unitLastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid6 = _errs171 === errors
} else {
var valid6 = true
}
if (valid6) {
if (
data75.itemVersion !== undefined
) {
let data86 = data75.itemVersion
const _errs173 = errors
if (
!(
typeof data86 == 'number' &&
!(data86 % 1) &&
!isNaN(data86) &&
isFinite(data86)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/itemVersion',
schemaPath: '#/properties/followerDatabase/properties/itemVersion/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (
errors === _errs173
) {
if (
typeof data86 == 'number' &&
isFinite(data86)
) {
if (
data86 < 0 ||
isNaN(data86)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/itemVersion',
schemaPath: '#/properties/followerDatabase/properties/itemVersion/minimum',
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
var valid6 = _errs173 === errors
} else {
var valid6 = true
}
if (valid6) {
if (
data75.itemLastModified !== undefined
) {
let data87 = data75.itemLastModified
const _errs175 = errors
if (
!(
typeof data87 == 'number' &&
isFinite(data87)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabase/itemLastModified',
schemaPath: '#/properties/followerDatabase/properties/itemLastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid6 = _errs175 === errors
} else {
var valid6 = true
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
instancePath: instancePath + '/followerDatabase',
schemaPath: '#/properties/followerDatabase/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs151 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabaseCompletion !== undefined) {
let data88 = data.followerDatabaseCompletion
const _errs177 = errors
if (true) {
if (
data88 &&
typeof data88 == 'object' &&
!Array.isArray(data88)
) {
let missing7
if (
(data88.id === undefined &&
(missing7 = 'id')) ||
(data88.followerRequestId === undefined &&
(missing7 = 'followerRequestId')) ||
(data88.itemId === undefined &&
(missing7 = 'itemId')) ||
(data88.parentItemId === undefined &&
(missing7 = 'parentItemId')) ||
(data88.itemLevel === undefined &&
(missing7 = 'itemLevel')) ||
(data88.lastModified === undefined &&
(missing7 = 'lastModified'))
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
if (data88.id !== undefined) {
let data89 = data88.id
const _errs179 = errors
if (true) {
if (true) {
if (typeof data89 === 'string') {
if (!formats2.test(data89)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/id',
schemaPath: '#/properties/followerDatabaseCompletion/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid7 = _errs179 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data88.followerRequestId !== undefined
) {
let data90 = data88.followerRequestId
const _errs181 = errors
if (true) {
if (true) {
if (typeof data90 === 'string') {
if (!formats2.test(data90)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/followerRequestId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/followerRequestId/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid7 = _errs181 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data88.itemId !== undefined) {
let data91 = data88.itemId
const _errs183 = errors
if (true) {
if (true) {
if (typeof data91 === 'string') {
if (!formats2.test(data91)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid7 = _errs183 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data88.parentItemId !== undefined
) {
let data92 = data88.parentItemId
const _errs185 = errors
if (true) {
if (true) {
if (
typeof data92 === 'string'
) {
if (!formats2.test(data92)) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/parentItemId',
schemaPath: '#/properties/followerDatabaseCompletion/properties/parentItemId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid7 = _errs185 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data88.itemLevel !== undefined
) {
let data93 = data88.itemLevel
const _errs187 = errors
if (
!(
typeof data93 == 'number' &&
!(data93 % 1) &&
!isNaN(data93) &&
isFinite(data93)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data93 == 'number' &&
isFinite(data93)
) {
if (
data93 > 9 ||
isNaN(data93)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 9
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (
data93 < 0 ||
isNaN(data93)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/itemLevel',
schemaPath: '#/properties/followerDatabaseCompletion/properties/itemLevel/minimum',
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
var valid7 = _errs187 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data88.lastModified !== undefined
) {
let data94 = data88.lastModified
const _errs189 = errors
if (
!(
typeof data94 == 'number' &&
isFinite(data94)
)
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion/lastModified',
schemaPath: '#/properties/followerDatabaseCompletion/properties/lastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid7 = _errs189 === errors
} else {
var valid7 = true
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
var valid0 = _errs177 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.router !== undefined) {
let data95 = data.router
const _errs191 = errors
if (true) {
if (
data95 &&
typeof data95 == 'object' &&
!Array.isArray(data95)
) {
let missing8
if (
(data95.id === undefined &&
(missing8 = 'id')) ||
(data95.appId === undefined &&
(missing8 = 'appId')) ||
(data95.routerMac === undefined &&
(missing8 = 'routerMac')) ||
(data95.ipAddress === undefined &&
(missing8 = 'ipAddress')) ||
(data95.mondayTimesAndDurations === undefined &&
(missing8 = 'mondayTimesAndDurations')) ||
(data95.tuesdayTimesAndDurations === undefined &&
(missing8 = 'tuesdayTimesAndDurations')) ||
(data95.wednesdayTimesAndDurations === undefined &&
(missing8 = 'wednesdayTimesAndDurations')) ||
(data95.thursdayTimesAndDurations === undefined &&
(missing8 = 'thursdayTimesAndDurations')) ||
(data95.fridayTimesAndDurations === undefined &&
(missing8 = 'fridayTimesAndDurations')) ||
(data95.saturdayTimesAndDurations === undefined &&
(missing8 = 'saturdayTimesAndDurations')) ||
(data95.sundayTimesAndDurations === undefined &&
(missing8 = 'sundayTimesAndDurations')) ||
(data95.version === undefined &&
(missing8 = 'version')) ||
(data95.lastModified === undefined &&
(missing8 = 'lastModified')) ||
(data95.touched === undefined &&
(missing8 = 'touched')) ||
(data95.status === undefined &&
(missing8 = 'status'))
) {errors.push(
{
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
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
instancePath: instancePath + '/router/id',
schemaPath: '#/properties/router/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"
}
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
var valid8 = _errs193 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data95.appId !== undefined) {
let data97 = data95.appId
const _errs195 = errors
if (true) {
if (true) {
if (typeof data97 === 'string') {
if (!formats2.test(data97)) {errors.push(
{
instancePath: instancePath + '/router/appId',
schemaPath: '#/properties/router/properties/appId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid8 = _errs195 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data95.routerMac !== undefined) {
let data98 = data95.routerMac
const _errs197 = errors
if (true) {
if (true) {
if (
typeof data98 === 'string'
) {
if (!pattern1.test(data98)) {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'},
 message: "Must_be_a_valid_MAC_address"
}
);
} else {
if (!formats100(data98)) {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_MAC_address"
}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/type',
keyword: 'type',
params: {
type: 'string'},
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
if (
data95.ipAddress !== undefined
) {
let data99 = data95.ipAddress
const _errs199 = errors
if (true) {
if (true) {
if (
typeof data99 === 'string'
) {
if (
!formats102.test(data99)
) {errors.push(
{
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/format',
keyword: 'format',
params: {
format: 'ipv4'},
 message: "Must_be_a_valid_IP_address"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/router/ipAddress',
schemaPath: '#/properties/router/properties/ipAddress/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
}
var valid8 = _errs199 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.mondayTimesAndDurations !== undefined
) {
let data100 = data95.mondayTimesAndDurations
const _errs201 = errors
if (true) {
if (true) {
if (
typeof data100 === 'string'
) {
if (
!pattern2.test(data100)
) {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"
}
);
} else {
if (
!formats100(data100)
) {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"
}
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
var valid8 = _errs201 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.tuesdayTimesAndDurations !== undefined
) {
let data101 = data95.tuesdayTimesAndDurations
const _errs203 = errors
if (true) {
if (true) {
if (
typeof data101 === 'string'
) {
if (
!pattern2.test(
data101
)
) {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"
}
);
} else {
if (
!formats100(data101)
) {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"
}
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
var valid8 = _errs203 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.wednesdayTimesAndDurations !== undefined
) {
let data102 = data95.wednesdayTimesAndDurations
const _errs205 = errors
if (true) {
if (true) {
if (
typeof data102 === 'string'
) {
if (
!pattern2.test(
data102
)
) {errors.push(
{
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"
}
);
} else {
if (
!formats100(
data102
)
) {errors.push(
{
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"
}
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
var valid8 = _errs205 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.thursdayTimesAndDurations !== undefined
) {
let data103 = data95.thursdayTimesAndDurations
const _errs207 = errors
if (true) {
if (
errors === _errs207
) {
if (
typeof data103 === 'string'
) {
if (
!pattern2.test(
data103
)
) {errors.push(
{
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"
}
);
} else {
if (
!formats100(
data103
)
) {errors.push(
{
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"
}
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
var valid8 = _errs207 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.fridayTimesAndDurations !== undefined
) {
let data104 = data95.fridayTimesAndDurations
const _errs209 = errors
if (
errors === _errs209
) {
if (
errors === _errs209
) {
if (
typeof data104 === 'string'
) {
if (
!pattern2.test(
data104
)
) {errors.push(
{
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"
}
);
} else {
if (
!formats100(
data104
)
) {errors.push(
{
instancePath: instancePath + '/router/fridayTimesAndDurations',
schemaPath: '#/properties/router/properties/fridayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"
}
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
var valid8 = _errs209 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.saturdayTimesAndDurations !== undefined
) {
let data105 = data95.saturdayTimesAndDurations
const _errs211 = errors
if (
errors === _errs211
) {
if (
errors === _errs211
) {
if (
typeof data105 === 'string'
) {
if (
!pattern2.test(
data105
)
) {errors.push(
{
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"
}
);
} else {
if (
!formats100(
data105
)
) {errors.push(
{
instancePath: instancePath + '/router/saturdayTimesAndDurations',
schemaPath: '#/properties/router/properties/saturdayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"
}
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
var valid8 = _errs211 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.sundayTimesAndDurations !== undefined
) {
let data106 = data95.sundayTimesAndDurations
const _errs213 = errors
if (
errors === _errs213
) {
if (
errors === _errs213
) {
if (
typeof data106 === 'string'
) {
if (
!pattern2.test(
data106
)
) {errors.push(
{
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"
}
);
} else {
if (
!formats100(
data106
)
) {errors.push(
{
instancePath: instancePath + '/router/sundayTimesAndDurations',
schemaPath: '#/properties/router/properties/sundayTimesAndDurations/format',
keyword: 'format',
params: {
format: 'regex'},
 message: "Must_be_a_valid_time_and_duration"
}
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
var valid8 = _errs213 ===
errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.version !== undefined
) {
let data107 = data95.version
const _errs215 = errors
if (
!(
typeof data107 == 'number' &&
!(
data107 % 1
) &&
!isNaN(
data107
) &&
isFinite(
data107
)
)
) {errors.push(
{
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (
errors === _errs215
) {
if (
typeof data107 == 'number' &&
isFinite(
data107
)
) {
if (
data107 <
0 ||
isNaN(
data107
)
) {errors.push(
{
instancePath: instancePath + '/router/version',
schemaPath: '#/properties/router/properties/version/minimum',
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
var valid8 = _errs215 ===
errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.lastModified !== undefined
) {
let data108 = data95.lastModified
const _errs217 = errors
if (
!(
typeof data108 == 'number' &&
isFinite(
data108
)
)
) {errors.push(
{
instancePath: instancePath + '/router/lastModified',
schemaPath: '#/properties/router/properties/lastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid8 = _errs217 ===
errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.touched !== undefined
) {
const _errs219 = errors
if (
typeof data95.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/router/touched',
schemaPath: '#/properties/router/properties/touched/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"
}
);
}
var valid8 = _errs219 ===
errors
} else {
var valid8 = true
}
if (valid8) {
if (
data95.status !== undefined
) {
let data110 = data95.status
const _errs221 = errors
if (
!(
typeof data110 == 'number' &&
!(
data110 %
1
) &&
!isNaN(
data110
) &&
isFinite(
data110
)
)
) {errors.push(
{
instancePath: instancePath + '/router/status',
schemaPath: '#/properties/router/properties/status/type',
keyword: 'type',
params: {
type: 'integer'},
 message: "Must_be_an_integer"
}
);
}
if (
errors === _errs221
) {
if (
typeof data110 == 'number' &&
isFinite(
data110
)
) {
if (
data110 >
2 ||
isNaN(
data110
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
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
}
}
}
var valid8 = _errs221 ===
errors
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
var valid0 = _errs191 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.media !== undefined) {
let data111 = data.media
const _errs223 = errors
if (true) {
if (
data111 &&
typeof data111 == 'object' &&
!Array.isArray(data111)
) {
let missing9
if (
(data111.id === undefined &&
(missing9 = 'id')) ||
(data111.size === undefined &&
(missing9 = 'size')) ||
(data111.data === undefined &&
(missing9 = 'data')) ||
(data111.appId === undefined &&
(missing9 = 'appId')) ||
(data111.touched === undefined &&
(missing9 = 'touched'))
) {errors.push(
{
instancePath: instancePath + '/media',
schemaPath: '#/properties/media/required',
keyword: 'required',
params: {
missingProperty: missing9
},
message: "must have required property '" +
missing9 +
"'"
}
);
} else {
if (data111.id !== undefined) {
let data112 = data111.id
const _errs225 = errors
if (true) {
if (true) {
if (typeof data112 === 'string') {
if (!formats2.test(data112)) {errors.push(
{
instancePath: instancePath + '/media/id',
schemaPath: '#/properties/media/properties/id/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid9 = _errs225 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data111.size !== undefined) {
let data113 = data111.size
const _errs227 = errors
if (
!(
typeof data113 == 'number' &&
!(data113 % 1) &&
!isNaN(data113) &&
isFinite(data113)
)
) {errors.push(
{
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data113 == 'number' &&
isFinite(data113)
) {
if (
data113 < 0 ||
isNaN(data113)
) {errors.push(
{
instancePath: instancePath + '/media/size',
schemaPath: '#/properties/media/properties/size/minimum',
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
var valid9 = _errs227 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data111.data !== undefined) {
let data114 = data111.data
const _errs229 = errors
if (true) {
if (
typeof data114 === 'string'
) {
if (func4(data114) > 8000) {errors.push(
{
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/maxLength',
keyword: 'maxLength',
params: { limit: 8000 },
 message: "Must_be_less_than_8000_characters"
}
);
}
} else {errors.push(
{
instancePath: instancePath + '/media/data',
schemaPath: '#/properties/media/properties/data/type',
keyword: 'type',
params: {
type: 'string'},
message: 'must be string'
}
);
}
}
var valid9 = _errs229 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data111.appId !== undefined) {
let data115 = data111.appId
const _errs231 = errors
if (true) {
if (true) {
if (
typeof data115 === 'string'
) {
if (
!formats2.test(data115)
) {errors.push(
{
instancePath: instancePath + '/media/appId',
schemaPath: '#/properties/media/properties/appId/format',
keyword: 'format',
params: {
format: 'uuid'},
 message: "Must_be_a_valid_UUID"
}
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
var valid9 = _errs231 === errors
} else {
var valid9 = true
}
if (valid9) {
if (
data111.touched !== undefined
) {
const _errs233 = errors
if (
typeof data111.touched !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/media/touched',
schemaPath: '#/properties/media/properties/touched/type',
keyword: 'type',
params: {
type: 'boolean'},
 message: "Must_be_a_boolean"
}
);
}
var valid9 = _errs233 === errors
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
var valid0 = _errs223 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.message !== undefined) {
const _errs235 = errors
if (typeof data.message !== 'string') {errors.push(
{
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
var valid0 = _errs235 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.result !== undefined) {
let data118 = data.result
const _errs237 = errors
if (
!(
typeof data118 == 'number' &&
!(data118 % 1) &&
!isNaN(data118) &&
isFinite(data118)
)
) {errors.push(
{
instancePath: instancePath + '/result',
schemaPath: '#/properties/result/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"
}
);
}
if (true) {
if (
typeof data118 == 'number' &&
isFinite(data118)
) {
if (data118 > 9 || isNaN(data118)) {errors.push(
{
instancePath: instancePath + '/result',
schemaPath: '#/properties/result/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 9
},
 message: "Must_be_less_than_or_equal_to_maximum"
}
);
} else {
if (data118 < 0 || isNaN(data118)) {errors.push(
{
instancePath: instancePath + '/result',
schemaPath: '#/properties/result/minimum',
keyword: 'minimum',
params: {
comparison: '>=',
limit: 0
},
message: 'must be >= 0'
}
);
}
}
}
}
var valid0 = _errs237 === errors
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
