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
lastModified: { default: 1766496613186, type: 'number' },
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
default: '019b4b67-3342-751d-8382-54dcbd2f4a34',
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
default: '019b4b67-3343-718d-8250-4e0197a47c49',
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
touched: { default: true, type: 'boolean' },
unitLastModified: { default: 0, type: 'number' },
itemLastModified: { default: 0, type: 'number' },
mediaLastModified: { default: 0, type: 'number' }
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
'touched',
'unitLastModified',
'itemLastModified',
'mediaLastModified'
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
'dataText'
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
default: '019b4b67-3343-718d-8250-542b3781e4a6',
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
default: '019b4b67-3343-718d-8250-514eb26eb943',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 0, type: 'number' },
touched: { default: true, type: 'boolean' },
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
followerDatabaseCompletion: {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019b4b67-3343-718d-8250-5e0e49c8b24c',
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
default: '019b4b67-3343-718d-8250-610b4c3a81eb',
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
default: '019b4b67-3343-718d-8250-58ffd6d9c130',
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
const formats102 = formats.fullFormats.regex as any
const formats104 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
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
(missing2 = 'touched')) ||
(data19.unitLastModified === undefined &&
(missing2 = 'unitLastModified')) ||
(data19.itemLastModified === undefined &&
(missing2 = 'itemLastModified')) ||
(data19.mediaLastModified === undefined &&
(missing2 = 'mediaLastModified'))
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
if (valid2) {
if (
data19.unitLastModified !== undefined
) {
let data29 = data19.unitLastModified
const _errs59 = errors
if (
!(
typeof data29 == 'number' &&
isFinite(data29)
)
) {errors.push(
{
instancePath: instancePath + '/database/unitLastModified',
schemaPath: '#/properties/database/properties/unitLastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"
}
);
}
var valid2 = _errs59 === errors
} else {
var valid2 = true
}
if (valid2) {
if (
data19.itemLastModified !== undefined
) {
let data30 = data19.itemLastModified
const _errs61 = errors
if (
!(
typeof data30 == 'number' &&
isFinite(data30)
)
) {errors.push(
{
instancePath: instancePath + '/database/itemLastModified',
schemaPath: '#/properties/database/properties/itemLastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid2 = _errs61 === errors
} else {
var valid2 = true
}
if (valid2) {
if (
data19.mediaLastModified !== undefined
) {
let data31 = data19.mediaLastModified
const _errs63 = errors
if (
!(
typeof data31 == 'number' &&
isFinite(data31)
)
) {errors.push(
{
instancePath: instancePath + '/database/mediaLastModified',
schemaPath: '#/properties/database/properties/mediaLastModified/type',
keyword: 'type',
params: {
type: 'number'},
 message: "Must_be_a_number"
}
);
}
var valid2 = _errs63 === errors
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
let data32 = data.databaseUnit
const _errs65 = errors
if (true) {
if (
data32 &&
typeof data32 == 'object' &&
!Array.isArray(data32)
) {
let missing3
if (
(data32.name === undefined &&
(missing3 = 'name')) ||
(data32.order === undefined &&
(missing3 = 'order')) ||
(data32.lastModified === undefined &&
(missing3 = 'lastModified')) ||
(data32.touched === undefined &&
(missing3 = 'touched')) ||
(data32.version === undefined &&
(missing3 = 'version')) ||
(data32.id === undefined && (missing3 = 'id')) ||
(data32.appId === undefined &&
(missing3 = 'appId')) ||
(data32.databaseId === undefined &&
(missing3 = 'databaseId')) ||
(data32.successVideoType === undefined &&
(missing3 = 'successVideoType')) ||
(data32.successVideoUrl === undefined &&
(missing3 = 'successVideoUrl')) ||
(data32.successAnimations === undefined &&
(missing3 = 'successAnimations')) ||
(data32.successSound === undefined &&
(missing3 = 'successSound')) ||
(data32.successSoundType === undefined &&
(missing3 = 'successSoundType')) ||
(data32.homePageImageType === undefined &&
(missing3 = 'homePageImageType')) ||
(data32.homePageImage === undefined &&
(missing3 = 'homePageImage')) ||
(data32.router === undefined &&
(missing3 = 'router')) ||
(data32.routerTime === undefined &&
(missing3 = 'routerTime')) ||
(data32.routerTimeImmediate === undefined &&
(missing3 = 'routerTimeImmediate')) ||
(data32.points === undefined &&
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
if (data32.name !== undefined) {
let data33 = data32.name
const _errs67 = errors
if (true) {
if (typeof data33 === 'string') {
if (func4(data33) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data33) < 1) {errors.push(
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
var valid3 = _errs67 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data32.order !== undefined) {
let data34 = data32.order
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
typeof data34 == 'number' &&
isFinite(data34)
) {
if (data34 < 0 || isNaN(data34)) {errors.push(
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
var valid3 = _errs69 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data32.lastModified !== undefined) {
let data35 = data32.lastModified
const _errs71 = errors
if (
!(
typeof data35 == 'number' &&
isFinite(data35)
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
var valid3 = _errs71 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data32.touched !== undefined) {
const _errs73 = errors
if (typeof data32.touched !== 'boolean') {errors.push(
{
instancePath: instancePath + '/databaseUnit/touched',
schemaPath: '#/properties/databaseUnit/properties/touched/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"
}
);
}
var valid3 = _errs73 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data32.version !== undefined) {
let data37 = data32.version
const _errs75 = errors
if (
!(
typeof data37 == 'number' &&
!(data37 % 1) &&
!isNaN(data37) &&
isFinite(data37)
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
typeof data37 == 'number' &&
isFinite(data37)
) {
if (data37 < 0 || isNaN(data37)) {errors.push(
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
var valid3 = _errs75 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data32.id !== undefined) {
let data38 = data32.id
const _errs77 = errors
if (true) {
if (true) {
if (typeof data38 === 'string') {
if (!formats2.test(data38)) {errors.push(
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
var valid3 = _errs77 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data32.appId !== undefined) {
let data39 = data32.appId
const _errs79 = errors
if (true) {
if (true) {
if (typeof data39 === 'string') {
if (!formats2.test(data39)) {errors.push(
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
var valid3 = _errs79 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data32.databaseId !== undefined) {
let data40 = data32.databaseId
const _errs81 = errors
if (true) {
if (true) {
if (
typeof data40 === 'string'
) {
if (!formats2.test(data40)) {errors.push(
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
var valid3 = _errs81 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.successVideoType !== undefined
) {
let data41 = data32.successVideoType
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
typeof data41 == 'number' &&
isFinite(data41)
) {
if (
data41 > 2 ||
isNaN(data41)
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
data41 < 0 ||
isNaN(data41)
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
var valid3 = _errs83 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.successVideoUrl !== undefined
) {
let data42 = data32.successVideoUrl
const _errs85 = errors
if (true) {
if (
typeof data42 === 'string'
) {
if (func4(data42) > 100) {errors.push(
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
var valid3 = _errs85 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.successAnimations !== undefined
) {
let data43 = data32.successAnimations
const _errs87 = errors
if (true) {
if (
typeof data43 === 'string'
) {
if (func4(data43) > 100) {errors.push(
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
var valid3 = _errs87 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.successSound !== undefined
) {
let data44 = data32.successSound
const _errs89 = errors
if (true) {
if (true) {
if (
typeof data44 === 'string'
) {
if (
!formats2.test(
data44
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
var valid3 = _errs89 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.successSoundType !== undefined
) {
let data45 = data32.successSoundType
const _errs91 = errors
if (
!(
typeof data45 == 'number' &&
!(data45 % 1) &&
!isNaN(data45) &&
isFinite(data45)
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
typeof data45 == 'number' &&
isFinite(data45)
) {
if (
data45 > 4 ||
isNaN(data45)
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
data45 < 0 ||
isNaN(data45)
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
var valid3 = _errs91 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.homePageImageType !== undefined
) {
let data46 = data32.homePageImageType
const _errs93 = errors
if (
!(
typeof data46 == 'number' &&
!(data46 % 1) &&
!isNaN(data46) &&
isFinite(data46)
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
errors === _errs93
) {
if (
typeof data46 == 'number' &&
isFinite(data46)
) {
if (
data46 > 3 ||
isNaN(data46)
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
data46 < 0 ||
isNaN(data46)
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
var valid3 = _errs93 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.homePageImage !== undefined
) {
let data47 = data32.homePageImage
const _errs95 = errors
if (
errors === _errs95
) {
if (
errors === _errs95
) {
if (
typeof data47 === 'string'
) {
if (
!formats2.test(
data47
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
var valid3 = _errs95 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.router !== undefined
) {
let data48 = data32.router
const _errs97 = errors
if (
errors === _errs97
) {
if (
errors === _errs97
) {
if (
typeof data48 === 'string'
) {
if (
!formats2.test(
data48
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
var valid3 = _errs97 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.routerTime !== undefined
) {
let data49 = data32.routerTime
const _errs99 = errors
if (
!(
typeof data49 == 'number' &&
isFinite(
data49
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
var valid3 = _errs99 ===
errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.routerTimeImmediate !== undefined
) {
const _errs101 = errors
if (
typeof data32.routerTimeImmediate !== 'boolean'
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
var valid3 = _errs101 ===
errors
} else {
var valid3 = true
}
if (valid3) {
if (
data32.points !== undefined
) {
let data51 = data32.points
const _errs103 = errors
if (
!(
typeof data51 == 'number' &&
!(
data51 %
1
) &&
!isNaN(
data51
) &&
isFinite(
data51
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
errors === _errs103
) {
if (
typeof data51 == 'number' &&
isFinite(
data51
)
) {
if (
data51 <
0 ||
isNaN(
data51
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
var valid3 = _errs103 ===
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
var valid0 = _errs65 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseItem !== undefined) {
let data52 = data.databaseItem
const _errs105 = errors
if (true) {
if (
data52 &&
typeof data52 == 'object' &&
!Array.isArray(data52)
) {
let missing4
if (
(data52.itemType === undefined &&
(missing4 = 'itemType')) ||
(data52.order === undefined &&
(missing4 = 'order')) ||
(data52.unitId === undefined &&
(missing4 = 'unitId')) ||
(data52.appId === undefined &&
(missing4 = 'appId')) ||
(data52.lastModified === undefined &&
(missing4 = 'lastModified')) ||
(data52.touched === undefined &&
(missing4 = 'touched')) ||
(data52.version === undefined &&
(missing4 = 'version')) ||
(data52.databaseId === undefined &&
(missing4 = 'databaseId')) ||
(data52.id === undefined && (missing4 = 'id')) ||
(data52.dataText === undefined &&
(missing4 = 'dataText'))
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
if (data52.itemType !== undefined) {
let data53 = data52.itemType
const _errs107 = errors
if (
!(
typeof data53 == 'number' &&
!(data53 % 1) &&
!isNaN(data53) &&
isFinite(data53)
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
typeof data53 == 'number' &&
isFinite(data53)
) {
if (data53 > 5 || isNaN(data53)) {errors.push(
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
if (data53 < 0 || isNaN(data53)) {errors.push(
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
var valid4 = _errs107 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data52.order !== undefined) {
let data54 = data52.order
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
typeof data54 == 'number' &&
isFinite(data54)
) {
if (data54 < 0 || isNaN(data54)) {errors.push(
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
var valid4 = _errs109 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data52.unitId !== undefined) {
let data55 = data52.unitId
const _errs111 = errors
if (true) {
if (true) {
if (typeof data55 === 'string') {
if (!formats2.test(data55)) {errors.push(
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
var valid4 = _errs111 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data52.appId !== undefined) {
let data56 = data52.appId
const _errs113 = errors
if (true) {
if (true) {
if (typeof data56 === 'string') {
if (!formats2.test(data56)) {errors.push(
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
var valid4 = _errs113 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data52.lastModified !== undefined) {
let data57 = data52.lastModified
const _errs115 = errors
if (
!(
typeof data57 == 'number' &&
isFinite(data57)
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
var valid4 = _errs115 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data52.touched !== undefined) {
const _errs117 = errors
if (
typeof data52.touched !== 'boolean'
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
var valid4 = _errs117 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data52.version !== undefined) {
let data59 = data52.version
const _errs119 = errors
if (
!(
typeof data59 == 'number' &&
!(data59 % 1) &&
!isNaN(data59) &&
isFinite(data59)
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
typeof data59 == 'number' &&
isFinite(data59)
) {
if (
data59 < 0 ||
isNaN(data59)
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
var valid4 = _errs119 === errors
} else {
var valid4 = true
}
if (valid4) {
if (
data52.databaseId !== undefined
) {
let data60 = data52.databaseId
const _errs121 = errors
if (true) {
if (true) {
if (
typeof data60 === 'string'
) {
if (
!formats2.test(data60)
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
var valid4 = _errs121 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data52.id !== undefined) {
let data61 = data52.id
const _errs123 = errors
if (true) {
if (true) {
if (
typeof data61 === 'string'
) {
if (
!formats2.test(data61)
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
var valid4 = _errs123 === errors
} else {
var valid4 = true
}
if (valid4) {
if (
data52.dataText !== undefined
) {
let data62 = data52.dataText
const _errs125 = errors
if (true) {
if (
typeof data62 === 'string'
) {
if (
func4(data62) > 8000
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
var valid4 = _errs125 === errors
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
var valid0 = _errs105 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerRequest !== undefined) {
let data63 = data.followerRequest
const _errs127 = errors
if (true) {
if (
data63 &&
typeof data63 == 'object' &&
!Array.isArray(data63)
) {
let missing5
if (
(data63.leaderAppId === undefined &&
(missing5 = 'leaderAppId')) ||
(data63.followerAppId === undefined &&
(missing5 = 'followerAppId')) ||
(data63.id === undefined &&
(missing5 = 'id')) ||
(data63.followerName === undefined &&
(missing5 = 'followerName')) ||
(data63.leaderName === undefined &&
(missing5 = 'leaderName')) ||
(data63.followerEmail === undefined &&
(missing5 = 'followerEmail')) ||
(data63.leaderEmail === undefined &&
(missing5 = 'leaderEmail')) ||
(data63.initiatedByFollower === undefined &&
(missing5 = 'initiatedByFollower')) ||
(data63.lastModified === undefined &&
(missing5 = 'lastModified')) ||
(data63.touched === undefined &&
(missing5 = 'touched')) ||
(data63.version === undefined &&
(missing5 = 'version')) ||
(data63.status === undefined &&
(missing5 = 'status')) ||
(data63.groups === undefined &&
(missing5 = 'groups')) ||
(data63.points === undefined &&
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
if (data63.leaderAppId !== undefined) {
let data64 = data63.leaderAppId
const _errs129 = errors
if (true) {
if (true) {
if (typeof data64 === 'string') {
if (!formats2.test(data64)) {errors.push(
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
var valid5 = _errs129 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data63.followerAppId !== undefined) {
let data65 = data63.followerAppId
const _errs131 = errors
if (true) {
if (true) {
if (typeof data65 === 'string') {
if (!formats2.test(data65)) {errors.push(
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
var valid5 = _errs131 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data63.id !== undefined) {
let data66 = data63.id
const _errs133 = errors
if (true) {
if (true) {
if (typeof data66 === 'string') {
if (!formats2.test(data66)) {errors.push(
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
var valid5 = _errs133 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data63.followerName !== undefined) {
let data67 = data63.followerName
const _errs135 = errors
if (true) {
if (typeof data67 === 'string') {
if (func4(data67) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data67) < 1) {errors.push(
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
var valid5 = _errs135 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data63.leaderName !== undefined) {
let data68 = data63.leaderName
const _errs137 = errors
if (true) {
if (typeof data68 === 'string') {
if (func4(data68) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data68) < 1) {errors.push(
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
var valid5 = _errs137 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.followerEmail !== undefined
) {
let data69 = data63.followerEmail
const _errs139 = errors
if (true) {
if (true) {
if (
typeof data69 === 'string'
) {
if (func4(data69) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"
}
);
} else {
if (func4(data69) < 1) {errors.push(
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
!formats0.test(data69)
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
data69
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
var valid5 = _errs139 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.leaderEmail !== undefined
) {
let data70 = data63.leaderEmail
const _errs141 = errors
if (true) {
if (true) {
if (
typeof data70 === 'string'
) {
if (func4(data70) > 100) {errors.push(
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
if (func4(data70) < 1) {errors.push(
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
!formats0.test(data70)
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
data70
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
var valid5 = _errs141 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.initiatedByFollower !== undefined
) {
const _errs143 = errors
if (
typeof data63.initiatedByFollower !== 'boolean'
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
var valid5 = _errs143 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.lastModified !== undefined
) {
let data72 = data63.lastModified
const _errs145 = errors
if (
!(
typeof data72 == 'number' &&
isFinite(data72)
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
var valid5 = _errs145 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.touched !== undefined
) {
const _errs147 = errors
if (
typeof data63.touched !== 'boolean'
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
var valid5 = _errs147 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.version !== undefined
) {
let data74 = data63.version
const _errs149 = errors
if (
!(
typeof data74 == 'number' &&
!(data74 % 1) &&
!isNaN(data74) &&
isFinite(data74)
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
typeof data74 == 'number' &&
isFinite(data74)
) {
if (
data74 < 0 ||
isNaN(data74)
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
var valid5 = _errs149 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.status !== undefined
) {
let data75 = data63.status
const _errs151 = errors
if (
!(
typeof data75 == 'number' &&
!(data75 % 1) &&
!isNaN(data75) &&
isFinite(data75)
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
errors === _errs151
) {
if (
typeof data75 == 'number' &&
isFinite(data75)
) {
if (
data75 > 2 ||
isNaN(data75)
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
data75 < 0 ||
isNaN(data75)
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
var valid5 = _errs151 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.groups !== undefined
) {
let data76 = data63.groups
const _errs153 = errors
if (
errors === _errs153
) {
if (
typeof data76 === 'string'
) {
if (
func4(data76) >
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
var valid5 = _errs153 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data63.points !== undefined
) {
let data77 = data63.points
const _errs155 = errors
if (
!(
typeof data77 == 'number' &&
!(data77 % 1) &&
!isNaN(
data77
) &&
isFinite(data77)
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
errors === _errs155
) {
if (
typeof data77 == 'number' &&
isFinite(data77)
) {
if (
data77 < 0 ||
isNaN(data77)
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
var valid5 = _errs155 ===
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
var valid0 = _errs127 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabase !== undefined) {
let data78 = data.followerDatabase
const _errs157 = errors
if (true) {
if (
data78 &&
typeof data78 == 'object' &&
!Array.isArray(data78)
) {
let missing6
if (
(data78.followerRequestId === undefined &&
(missing6 = 'followerRequestId')) ||
(data78.id === undefined &&
(missing6 = 'id')) ||
(data78.databaseId === undefined &&
(missing6 = 'databaseId')) ||
(data78.lastModified === undefined &&
(missing6 = 'lastModified')) ||
(data78.touched === undefined &&
(missing6 = 'touched')) ||
(data78.version === undefined &&
(missing6 = 'version'))
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
if (data78.followerRequestId !== undefined) {
let data79 = data78.followerRequestId
const _errs159 = errors
if (true) {
if (true) {
if (typeof data79 === 'string') {
if (!formats2.test(data79)) {errors.push(
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
var valid6 = _errs159 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data78.id !== undefined) {
let data80 = data78.id
const _errs161 = errors
if (true) {
if (true) {
if (typeof data80 === 'string') {
if (!formats2.test(data80)) {errors.push(
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
var valid6 = _errs161 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data78.databaseId !== undefined) {
let data81 = data78.databaseId
const _errs163 = errors
if (true) {
if (true) {
if (typeof data81 === 'string') {
if (!formats2.test(data81)) {errors.push(
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
var valid6 = _errs163 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data78.lastModified !== undefined) {
let data82 = data78.lastModified
const _errs165 = errors
if (
!(
typeof data82 == 'number' &&
isFinite(data82)
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
var valid6 = _errs165 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data78.touched !== undefined) {
const _errs167 = errors
if (
typeof data78.touched !== 'boolean'
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
var valid6 = _errs167 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data78.version !== undefined) {
let data84 = data78.version
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
typeof data84 == 'number' &&
isFinite(data84)
) {
if (
data84 < 0 ||
isNaN(data84)
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
var valid6 = _errs169 === errors
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
var valid0 = _errs157 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabaseCompletion !== undefined) {
let data85 = data.followerDatabaseCompletion
const _errs171 = errors
if (true) {
if (
data85 &&
typeof data85 == 'object' &&
!Array.isArray(data85)
) {
let missing7
if (
(data85.id === undefined &&
(missing7 = 'id')) ||
(data85.followerRequestId === undefined &&
(missing7 = 'followerRequestId')) ||
(data85.itemId === undefined &&
(missing7 = 'itemId')) ||
(data85.parentItemId === undefined &&
(missing7 = 'parentItemId')) ||
(data85.itemLevel === undefined &&
(missing7 = 'itemLevel')) ||
(data85.lastModified === undefined &&
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
if (data85.id !== undefined) {
let data86 = data85.id
const _errs173 = errors
if (true) {
if (true) {
if (typeof data86 === 'string') {
if (!formats2.test(data86)) {errors.push(
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
var valid7 = _errs173 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data85.followerRequestId !== undefined
) {
let data87 = data85.followerRequestId
const _errs175 = errors
if (true) {
if (true) {
if (typeof data87 === 'string') {
if (!formats2.test(data87)) {errors.push(
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
var valid7 = _errs175 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data85.itemId !== undefined) {
let data88 = data85.itemId
const _errs177 = errors
if (true) {
if (true) {
if (typeof data88 === 'string') {
if (!formats2.test(data88)) {errors.push(
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
var valid7 = _errs177 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data85.parentItemId !== undefined
) {
let data89 = data85.parentItemId
const _errs179 = errors
if (true) {
if (true) {
if (
typeof data89 === 'string'
) {
if (!formats2.test(data89)) {errors.push(
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
var valid7 = _errs179 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data85.itemLevel !== undefined
) {
let data90 = data85.itemLevel
const _errs181 = errors
if (
!(
typeof data90 == 'number' &&
!(data90 % 1) &&
!isNaN(data90) &&
isFinite(data90)
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
typeof data90 == 'number' &&
isFinite(data90)
) {
if (
data90 > 9 ||
isNaN(data90)
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
data90 < 0 ||
isNaN(data90)
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
var valid7 = _errs181 === errors
} else {
var valid7 = true
}
if (valid7) {
if (
data85.lastModified !== undefined
) {
let data91 = data85.lastModified
const _errs183 = errors
if (
!(
typeof data91 == 'number' &&
isFinite(data91)
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
var valid7 = _errs183 === errors
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
var valid0 = _errs171 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.router !== undefined) {
let data92 = data.router
const _errs185 = errors
if (true) {
if (
data92 &&
typeof data92 == 'object' &&
!Array.isArray(data92)
) {
let missing8
if (
(data92.id === undefined &&
(missing8 = 'id')) ||
(data92.appId === undefined &&
(missing8 = 'appId')) ||
(data92.routerMac === undefined &&
(missing8 = 'routerMac')) ||
(data92.ipAddress === undefined &&
(missing8 = 'ipAddress')) ||
(data92.mondayTimesAndDurations === undefined &&
(missing8 = 'mondayTimesAndDurations')) ||
(data92.tuesdayTimesAndDurations === undefined &&
(missing8 = 'tuesdayTimesAndDurations')) ||
(data92.wednesdayTimesAndDurations === undefined &&
(missing8 = 'wednesdayTimesAndDurations')) ||
(data92.thursdayTimesAndDurations === undefined &&
(missing8 = 'thursdayTimesAndDurations')) ||
(data92.fridayTimesAndDurations === undefined &&
(missing8 = 'fridayTimesAndDurations')) ||
(data92.saturdayTimesAndDurations === undefined &&
(missing8 = 'saturdayTimesAndDurations')) ||
(data92.sundayTimesAndDurations === undefined &&
(missing8 = 'sundayTimesAndDurations')) ||
(data92.version === undefined &&
(missing8 = 'version')) ||
(data92.lastModified === undefined &&
(missing8 = 'lastModified')) ||
(data92.touched === undefined &&
(missing8 = 'touched')) ||
(data92.status === undefined &&
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
if (data92.id !== undefined) {
let data93 = data92.id
const _errs187 = errors
if (true) {
if (true) {
if (typeof data93 === 'string') {
if (!formats2.test(data93)) {errors.push(
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
var valid8 = _errs187 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data92.appId !== undefined) {
let data94 = data92.appId
const _errs189 = errors
if (true) {
if (true) {
if (typeof data94 === 'string') {
if (!formats2.test(data94)) {errors.push(
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
var valid8 = _errs189 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data92.routerMac !== undefined) {
let data95 = data92.routerMac
const _errs191 = errors
if (true) {
if (true) {
if (
typeof data95 === 'string'
) {
if (!pattern1.test(data95)) {errors.push(
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
if (!formats102(data95)) {errors.push(
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
var valid8 = _errs191 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.ipAddress !== undefined
) {
let data96 = data92.ipAddress
const _errs193 = errors
if (true) {
if (true) {
if (
typeof data96 === 'string'
) {
if (
!formats104.test(data96)
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
var valid8 = _errs193 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.mondayTimesAndDurations !== undefined
) {
let data97 = data92.mondayTimesAndDurations
const _errs195 = errors
if (true) {
if (true) {
if (
typeof data97 === 'string'
) {
if (
!pattern2.test(data97)
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
!formats102(data97)
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
var valid8 = _errs195 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.tuesdayTimesAndDurations !== undefined
) {
let data98 = data92.tuesdayTimesAndDurations
const _errs197 = errors
if (true) {
if (true) {
if (
typeof data98 === 'string'
) {
if (
!pattern2.test(data98)
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
!formats102(data98)
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
var valid8 = _errs197 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.wednesdayTimesAndDurations !== undefined
) {
let data99 = data92.wednesdayTimesAndDurations
const _errs199 = errors
if (true) {
if (true) {
if (
typeof data99 === 'string'
) {
if (
!pattern2.test(
data99
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
!formats102(
data99
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
var valid8 = _errs199 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.thursdayTimesAndDurations !== undefined
) {
let data100 = data92.thursdayTimesAndDurations
const _errs201 = errors
if (true) {
if (
errors === _errs201
) {
if (
typeof data100 === 'string'
) {
if (
!pattern2.test(
data100
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
!formats102(
data100
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
var valid8 = _errs201 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.fridayTimesAndDurations !== undefined
) {
let data101 = data92.fridayTimesAndDurations
const _errs203 = errors
if (
errors === _errs203
) {
if (
errors === _errs203
) {
if (
typeof data101 === 'string'
) {
if (
!pattern2.test(
data101
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
!formats102(
data101
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
var valid8 = _errs203 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.saturdayTimesAndDurations !== undefined
) {
let data102 = data92.saturdayTimesAndDurations
const _errs205 = errors
if (
errors === _errs205
) {
if (
errors === _errs205
) {
if (
typeof data102 === 'string'
) {
if (
!pattern2.test(
data102
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
!formats102(
data102
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
var valid8 = _errs205 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.sundayTimesAndDurations !== undefined
) {
let data103 = data92.sundayTimesAndDurations
const _errs207 = errors
if (
errors === _errs207
) {
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
!formats102(
data103
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
var valid8 = _errs207 ===
errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.version !== undefined
) {
let data104 = data92.version
const _errs209 = errors
if (
!(
typeof data104 == 'number' &&
!(
data104 % 1
) &&
!isNaN(
data104
) &&
isFinite(
data104
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
errors === _errs209
) {
if (
typeof data104 == 'number' &&
isFinite(
data104
)
) {
if (
data104 <
0 ||
isNaN(
data104
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
var valid8 = _errs209 ===
errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.lastModified !== undefined
) {
let data105 = data92.lastModified
const _errs211 = errors
if (
!(
typeof data105 == 'number' &&
isFinite(
data105
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
var valid8 = _errs211 ===
errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.touched !== undefined
) {
const _errs213 = errors
if (
typeof data92.touched !== 'boolean'
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
var valid8 = _errs213 ===
errors
} else {
var valid8 = true
}
if (valid8) {
if (
data92.status !== undefined
) {
let data107 = data92.status
const _errs215 = errors
if (
!(
typeof data107 == 'number' &&
!(
data107 %
1
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
errors === _errs215
) {
if (
typeof data107 == 'number' &&
isFinite(
data107
)
) {
if (
data107 >
2 ||
isNaN(
data107
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
var valid8 = _errs215 ===
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
var valid0 = _errs185 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.media !== undefined) {
let data108 = data.media
const _errs217 = errors
if (true) {
if (
data108 &&
typeof data108 == 'object' &&
!Array.isArray(data108)
) {
let missing9
if (
(data108.id === undefined &&
(missing9 = 'id')) ||
(data108.size === undefined &&
(missing9 = 'size')) ||
(data108.data === undefined &&
(missing9 = 'data')) ||
(data108.appId === undefined &&
(missing9 = 'appId')) ||
(data108.touched === undefined &&
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
if (data108.id !== undefined) {
let data109 = data108.id
const _errs219 = errors
if (true) {
if (true) {
if (typeof data109 === 'string') {
if (!formats2.test(data109)) {errors.push(
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
var valid9 = _errs219 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data108.size !== undefined) {
let data110 = data108.size
const _errs221 = errors
if (
!(
typeof data110 == 'number' &&
!(data110 % 1) &&
!isNaN(data110) &&
isFinite(data110)
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
typeof data110 == 'number' &&
isFinite(data110)
) {
if (
data110 < 0 ||
isNaN(data110)
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
var valid9 = _errs221 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data108.data !== undefined) {
let data111 = data108.data
const _errs223 = errors
if (true) {
if (
typeof data111 === 'string'
) {
if (func4(data111) > 8000) {errors.push(
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
var valid9 = _errs223 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data108.appId !== undefined) {
let data112 = data108.appId
const _errs225 = errors
if (true) {
if (true) {
if (
typeof data112 === 'string'
) {
if (
!formats2.test(data112)
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
var valid9 = _errs225 === errors
} else {
var valid9 = true
}
if (valid9) {
if (
data108.touched !== undefined
) {
const _errs227 = errors
if (
typeof data108.touched !== 'boolean'
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
var valid9 = _errs227 === errors
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
var valid0 = _errs217 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.message !== undefined) {
const _errs229 = errors
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
var valid0 = _errs229 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.result !== undefined) {
let data115 = data.result
const _errs231 = errors
if (
!(
typeof data115 == 'number' &&
!(data115 % 1) &&
!isNaN(data115) &&
isFinite(data115)
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
typeof data115 == 'number' &&
isFinite(data115)
) {
if (data115 > 9 || isNaN(data115)) {errors.push(
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
if (data115 < 0 || isNaN(data115)) {errors.push(
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
var valid0 = _errs231 === errors
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
