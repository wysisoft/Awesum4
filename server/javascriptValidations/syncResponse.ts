'use strict'
const schema35 = {
$id: 'syncResponse',
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
lastModified: { default: 1762885163314, type: 'number' },
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
default: '019a7424-d933-71e8-89c8-0b9067a0b2b7',
format: 'uuid',
minLength: 36,
type: 'string'},
lastSync: { type: 'number' }
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
lastModified: { default: 1762885163315, type: 'number' },
version: { default: 0, minimum: 0, type: 'integer' },
appId: { format: 'uuid', type: 'string' },
id: {
default: '019a7424-d933-71e8-89c8-0e35243ed9f7',
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
default: '019a7424-d933-71e8-89c8-146aac28c141',
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
lastModified: { default: 1762885163315, type: 'number' },
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
default: '019a7424-d933-71e8-89c8-11a4e6894859',
format: 'uuid',
type: 'string'},
databaseId: {
default: '00000000-0000-0000-0000-000000000000',
format: 'uuid',
type: 'string'},
lastModified: { default: 1762885163315, type: 'number' },
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
followerDatabaseCompletion: {
$id: 'followerDatabaseCompletion',
type: 'object',
properties: {
id: {
default: '019a7424-d933-71e8-89c8-1f4a59116eff',
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
router: {
$id: 'router',
type: 'object',
properties: {
id: {
default: '019a7424-d933-71e8-89c8-201c7194f08a',
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
lastModified: { default: 1762885163315, type: 'number' },
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
media: {
$id: 'media',
type: 'object',
properties: {
id: {
default: '019a7424-d933-71e8-89c8-1b3249c6b785',
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
},
message: {
$id: 'message',
type: 'object',
properties: {
level: { minimum: 0, maximum: 8, type: 'integer' },
message: { minLength: 1, maxLength: 100, type: 'string' },
id: { format: 'uuid', type: 'string' }
},
required: ['level', 'message', 'id']
},
result: { minimum: 0, maximum: 7, type: 'integer' }
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
import type { ServerSyncResponseInterface } from '../serverInterfaces/ServerSyncResponseInterface'
export async function validateSyncResponse(
data:ServerSyncResponseInterface,
instancePath = "",awaesumUserName?:string): Promise<Array<ErrorObject>> {
/*# sourceURL="syncResponse" */ let vErrors = null
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
(data0.id === undefined && (missing0 = 'id')) ||
(data0.lastSync === undefined && (missing0 = 'lastSync'))
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
if (valid1) {
if (data0.lastSync !== undefined) {
let data13 = data0.lastSync
const _errs27 = errors
if (
!(
typeof data13 == 'number' &&
isFinite(data13)
)
) {errors.push(
{
instancePath: instancePath + '/app/lastSync',
schemaPath: '#/properties/app/properties/lastSync/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid1 = _errs27 === errors
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
var valid0 = _errs1 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.database !== undefined) {
let data14 = data.database
const _errs29 = errors
if (true) {
if (data14 && typeof data14 == 'object' && !Array.isArray(data14)) {
let missing1
if (
(data14.name === undefined && (missing1 = 'name')) ||
(data14.lastModified === undefined &&
(missing1 = 'lastModified')) ||
(data14.version === undefined && (missing1 = 'version')) ||
(data14.appId === undefined && (missing1 = 'appId')) ||
(data14.id === undefined && (missing1 = 'id')) ||
(data14.order === undefined && (missing1 = 'order')) ||
(data14.homePageIconType === undefined &&
(missing1 = 'homePageIconType')) ||
(data14.homePageIcon === undefined &&
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
if (data14.name !== undefined) {
let data15 = data14.name
const _errs31 = errors
if (true) {
if (typeof data15 === 'string') {
if (func4(data15) > 100) {errors.push(
{
instancePath: instancePath + '/database/name',
schemaPath: '#/properties/database/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data15) < 1) {errors.push(
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
var valid2 = _errs31 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data14.lastModified !== undefined) {
let data16 = data14.lastModified
const _errs33 = errors
if (!(typeof data16 == 'number' && isFinite(data16))) {errors.push(
{
instancePath: instancePath + '/database/lastModified',
schemaPath: '#/properties/database/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid2 = _errs33 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data14.version !== undefined) {
let data17 = data14.version
const _errs35 = errors
if (
!(
typeof data17 == 'number' &&
!(data17 % 1) &&
!isNaN(data17) &&
isFinite(data17)
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
if (typeof data17 == 'number' && isFinite(data17)) {
if (data17 < 0 || isNaN(data17)) {errors.push(
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
var valid2 = _errs35 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data14.appId !== undefined) {
let data18 = data14.appId
const _errs37 = errors
if (true) {
if (true) {
if (typeof data18 === 'string') {
if (!formats2.test(data18)) {errors.push(
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
var valid2 = _errs37 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data14.id !== undefined) {
let data19 = data14.id
const _errs39 = errors
if (true) {
if (true) {
if (typeof data19 === 'string') {
if (!formats2.test(data19)) {errors.push(
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
var valid2 = _errs39 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data14.order !== undefined) {
let data20 = data14.order
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
instancePath: instancePath + '/database/order',
schemaPath: '#/properties/database/properties/order/type',
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
if (data20 < 0 || isNaN(data20)) {errors.push(
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
var valid2 = _errs41 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data14.homePageIconType !== undefined) {
let data21 = data14.homePageIconType
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
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/type',
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
if (data21 > 3 || isNaN(data21)) {errors.push(
{
instancePath: instancePath + '/database/homePageIconType',
schemaPath: '#/properties/database/properties/homePageIconType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 3 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data21 < 0 || isNaN(data21)) {errors.push(
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
var valid2 = _errs43 === errors
} else {
var valid2 = true
}
if (valid2) {
if (data14.homePageIcon !== undefined) {
let data22 = data14.homePageIcon
const _errs45 = errors
if (true) {
if (true) {
if (typeof data22 === 'string') {
if (!formats2.test(data22)) {errors.push(
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
var valid2 = _errs45 === errors
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
var valid0 = _errs29 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseUnit !== undefined) {
let data23 = data.databaseUnit
const _errs47 = errors
if (true) {
if (
data23 &&
typeof data23 == 'object' &&
!Array.isArray(data23)
) {
let missing2
if (
(data23.name === undefined && (missing2 = 'name')) ||
(data23.order === undefined && (missing2 = 'order')) ||
(data23.lastModified === undefined &&
(missing2 = 'lastModified')) ||
(data23.version === undefined && (missing2 = 'version')) ||
(data23.id === undefined && (missing2 = 'id')) ||
(data23.appId === undefined && (missing2 = 'appId')) ||
(data23.databaseId === undefined &&
(missing2 = 'databaseId')) ||
(data23.successVideoType === undefined &&
(missing2 = 'successVideoType')) ||
(data23.successVideoUrl === undefined &&
(missing2 = 'successVideoUrl')) ||
(data23.successAnimations === undefined &&
(missing2 = 'successAnimations')) ||
(data23.successSound === undefined &&
(missing2 = 'successSound')) ||
(data23.successSoundType === undefined &&
(missing2 = 'successSoundType')) ||
(data23.homePageImageType === undefined &&
(missing2 = 'homePageImageType')) ||
(data23.homePageImage === undefined &&
(missing2 = 'homePageImage')) ||
(data23.router === undefined && (missing2 = 'router')) ||
(data23.routerTime === undefined &&
(missing2 = 'routerTime')) ||
(data23.routerTimeImmediate === undefined &&
(missing2 = 'routerTimeImmediate')) ||
(data23.points === undefined && (missing2 = 'points'))
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
if (data23.name !== undefined) {
let data24 = data23.name
const _errs49 = errors
if (true) {
if (typeof data24 === 'string') {
if (func4(data24) > 100) {errors.push(
{
instancePath: instancePath + '/databaseUnit/name',
schemaPath: '#/properties/databaseUnit/properties/name/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data24) < 1) {errors.push(
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
var valid3 = _errs49 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.order !== undefined) {
let data25 = data23.order
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
instancePath: instancePath + '/databaseUnit/order',
schemaPath: '#/properties/databaseUnit/properties/order/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data25 == 'number' && isFinite(data25)) {
if (data25 < 0 || isNaN(data25)) {errors.push(
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
var valid3 = _errs51 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.lastModified !== undefined) {
let data26 = data23.lastModified
const _errs53 = errors
if (!(typeof data26 == 'number' && isFinite(data26))) {errors.push(
{
instancePath: instancePath + '/databaseUnit/lastModified',
schemaPath: '#/properties/databaseUnit/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid3 = _errs53 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.version !== undefined) {
let data27 = data23.version
const _errs55 = errors
if (
!(
typeof data27 == 'number' &&
!(data27 % 1) &&
!isNaN(data27) &&
isFinite(data27)
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
if (typeof data27 == 'number' && isFinite(data27)) {
if (data27 < 0 || isNaN(data27)) {errors.push(
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
var valid3 = _errs55 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.id !== undefined) {
let data28 = data23.id
const _errs57 = errors
if (true) {
if (true) {
if (typeof data28 === 'string') {
if (!formats2.test(data28)) {errors.push(
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
var valid3 = _errs57 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.appId !== undefined) {
let data29 = data23.appId
const _errs59 = errors
if (true) {
if (true) {
if (typeof data29 === 'string') {
if (!formats2.test(data29)) {errors.push(
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
var valid3 = _errs59 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.databaseId !== undefined) {
let data30 = data23.databaseId
const _errs61 = errors
if (true) {
if (true) {
if (typeof data30 === 'string') {
if (!formats2.test(data30)) {errors.push(
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
var valid3 = _errs61 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.successVideoType !== undefined) {
let data31 = data23.successVideoType
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
instancePath: instancePath + '/databaseUnit/successVideoType',
schemaPath: '#/properties/databaseUnit/properties/successVideoType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data31 == 'number' &&
isFinite(data31)
) {
if (data31 > 2 || isNaN(data31)) {errors.push(
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
if (data31 < 0 || isNaN(data31)) {errors.push(
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
var valid3 = _errs63 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.successVideoUrl !== undefined) {
let data32 = data23.successVideoUrl
const _errs65 = errors
if (true) {
if (typeof data32 === 'string') {
if (func4(data32) > 100) {errors.push(
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
var valid3 = _errs65 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data23.successAnimations !== undefined
) {
let data33 = data23.successAnimations
const _errs67 = errors
if (true) {
if (typeof data33 === 'string') {
if (func4(data33) > 100) {errors.push(
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
var valid3 = _errs67 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.successSound !== undefined) {
let data34 = data23.successSound
const _errs69 = errors
if (true) {
if (true) {
if (typeof data34 === 'string') {
if (!formats2.test(data34)) {errors.push(
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
var valid3 = _errs69 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data23.successSoundType !== undefined
) {
let data35 = data23.successSoundType
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
instancePath: instancePath + '/databaseUnit/successSoundType',
schemaPath: '#/properties/databaseUnit/properties/successSoundType/type',
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
if (data35 > 4 || isNaN(data35)) {errors.push(
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
data35 < 0 ||
isNaN(data35)
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
var valid3 = _errs71 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data23.homePageImageType !== undefined
) {
let data36 = data23.homePageImageType
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
instancePath: instancePath + '/databaseUnit/homePageImageType',
schemaPath: '#/properties/databaseUnit/properties/homePageImageType/type',
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
data36 > 3 ||
isNaN(data36)
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
data36 < 0 ||
isNaN(data36)
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
var valid3 = _errs73 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data23.homePageImage !== undefined
) {
let data37 = data23.homePageImage
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
var valid3 = _errs75 === errors
} else {
var valid3 = true
}
if (valid3) {
if (data23.router !== undefined) {
let data38 = data23.router
const _errs77 = errors
if (true) {
if (true) {
if (
typeof data38 === 'string'
) {
if (
!formats2.test(data38)
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
var valid3 = _errs77 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data23.routerTime !== undefined
) {
let data39 = data23.routerTime
const _errs79 = errors
if (
!(
typeof data39 == 'number' &&
isFinite(data39)
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
var valid3 = _errs79 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data23.routerTimeImmediate !== undefined
) {
const _errs81 = errors
if (
typeof data23.routerTimeImmediate !== 'boolean'
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
var valid3 = _errs81 === errors
} else {
var valid3 = true
}
if (valid3) {
if (
data23.points !== undefined
) {
let data41 = data23.points
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
typeof data41 == 'number' &&
isFinite(data41)
) {
if (
data41 < 0 ||
isNaN(data41)
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
var valid3 = _errs83 === errors
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
var valid0 = _errs47 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.databaseItem !== undefined) {
let data42 = data.databaseItem
const _errs85 = errors
if (true) {
if (
data42 &&
typeof data42 == 'object' &&
!Array.isArray(data42)
) {
let missing3
if (
(data42.itemType === undefined &&
(missing3 = 'itemType')) ||
(data42.order === undefined && (missing3 = 'order')) ||
(data42.unitId === undefined && (missing3 = 'unitId')) ||
(data42.appId === undefined && (missing3 = 'appId')) ||
(data42.lastModified === undefined &&
(missing3 = 'lastModified')) ||
(data42.version === undefined && (missing3 = 'version')) ||
(data42.databaseId === undefined &&
(missing3 = 'databaseId')) ||
(data42.id === undefined && (missing3 = 'id')) ||
(data42.dataText === undefined &&
(missing3 = 'dataText')) ||
(data42.data === undefined && (missing3 = 'data'))
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
if (data42.itemType !== undefined) {
let data43 = data42.itemType
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
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (typeof data43 == 'number' && isFinite(data43)) {
if (data43 > 5 || isNaN(data43)) {errors.push(
{
instancePath: instancePath + '/databaseItem/itemType',
schemaPath: '#/properties/databaseItem/properties/itemType/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 5 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data43 < 0 || isNaN(data43)) {errors.push(
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
var valid4 = _errs87 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data42.order !== undefined) {
let data44 = data42.order
const _errs89 = errors
if (
!(
typeof data44 == 'number' &&
!(data44 % 1) &&
!isNaN(data44) &&
isFinite(data44)
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
if (typeof data44 == 'number' && isFinite(data44)) {
if (data44 < 0 || isNaN(data44)) {errors.push(
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
var valid4 = _errs89 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data42.unitId !== undefined) {
let data45 = data42.unitId
const _errs91 = errors
if (true) {
if (true) {
if (typeof data45 === 'string') {
if (!formats2.test(data45)) {errors.push(
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
var valid4 = _errs91 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data42.appId !== undefined) {
let data46 = data42.appId
const _errs93 = errors
if (true) {
if (true) {
if (typeof data46 === 'string') {
if (!formats2.test(data46)) {errors.push(
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
var valid4 = _errs93 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data42.lastModified !== undefined) {
let data47 = data42.lastModified
const _errs95 = errors
if (
!(typeof data47 == 'number' && isFinite(data47))
) {errors.push(
{
instancePath: instancePath + '/databaseItem/lastModified',
schemaPath: '#/properties/databaseItem/properties/lastModified/type',
keyword: 'type',
params: { type: 'number' },
 message: "Must_be_a_number"}
);
}
var valid4 = _errs95 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data42.version !== undefined) {
let data48 = data42.version
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
instancePath: instancePath + '/databaseItem/version',
schemaPath: '#/properties/databaseItem/properties/version/type',
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
if (data48 < 0 || isNaN(data48)) {errors.push(
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
var valid4 = _errs97 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data42.databaseId !== undefined) {
let data49 = data42.databaseId
const _errs99 = errors
if (true) {
if (true) {
if (typeof data49 === 'string') {
if (!formats2.test(data49)) {errors.push(
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
var valid4 = _errs99 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data42.id !== undefined) {
let data50 = data42.id
const _errs101 = errors
if (true) {
if (true) {
if (typeof data50 === 'string') {
if (!formats2.test(data50)) {errors.push(
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
var valid4 = _errs101 === errors
} else {
var valid4 = true
}
if (valid4) {
if (data42.dataText !== undefined) {
let data51 = data42.dataText
const _errs103 = errors
if (true) {
if (typeof data51 === 'string') {
if (func4(data51) > 8000) {errors.push(
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
var valid4 = _errs103 === errors
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
var valid0 = _errs85 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerRequest !== undefined) {
let data52 = data.followerRequest
const _errs105 = errors
if (true) {
if (
data52 &&
typeof data52 == 'object' &&
!Array.isArray(data52)
) {
let missing4
if (
(data52.leaderAppId === undefined &&
(missing4 = 'leaderAppId')) ||
(data52.followerAppId === undefined &&
(missing4 = 'followerAppId')) ||
(data52.id === undefined && (missing4 = 'id')) ||
(data52.followerName === undefined &&
(missing4 = 'followerName')) ||
(data52.leaderName === undefined &&
(missing4 = 'leaderName')) ||
(data52.followerEmail === undefined &&
(missing4 = 'followerEmail')) ||
(data52.leaderEmail === undefined &&
(missing4 = 'leaderEmail')) ||
(data52.initiatedByFollower === undefined &&
(missing4 = 'initiatedByFollower')) ||
(data52.lastModified === undefined &&
(missing4 = 'lastModified')) ||
(data52.version === undefined &&
(missing4 = 'version')) ||
(data52.status === undefined && (missing4 = 'status')) ||
(data52.groups === undefined && (missing4 = 'groups')) ||
(data52.points === undefined && (missing4 = 'points'))
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
if (data52.leaderAppId !== undefined) {
let data53 = data52.leaderAppId
const _errs107 = errors
if (true) {
if (true) {
if (typeof data53 === 'string') {
if (!formats2.test(data53)) {errors.push(
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
var valid5 = _errs107 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.followerAppId !== undefined) {
let data54 = data52.followerAppId
const _errs109 = errors
if (true) {
if (true) {
if (typeof data54 === 'string') {
if (!formats2.test(data54)) {errors.push(
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
var valid5 = _errs109 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.id !== undefined) {
let data55 = data52.id
const _errs111 = errors
if (true) {
if (true) {
if (typeof data55 === 'string') {
if (!formats2.test(data55)) {errors.push(
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
var valid5 = _errs111 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.followerName !== undefined) {
let data56 = data52.followerName
const _errs113 = errors
if (true) {
if (typeof data56 === 'string') {
if (func4(data56) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerName',
schemaPath: '#/properties/followerRequest/properties/followerName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data56) < 1) {errors.push(
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
var valid5 = _errs113 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.leaderName !== undefined) {
let data57 = data52.leaderName
const _errs115 = errors
if (true) {
if (typeof data57 === 'string') {
if (func4(data57) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderName',
schemaPath: '#/properties/followerRequest/properties/leaderName/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data57) < 1) {errors.push(
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
var valid5 = _errs115 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.followerEmail !== undefined) {
let data58 = data52.followerEmail
const _errs117 = errors
if (true) {
if (true) {
if (typeof data58 === 'string') {
if (func4(data58) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data58) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/followerEmail',
schemaPath: '#/properties/followerRequest/properties/followerEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!formats0.test(data58)) {errors.push(
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
data58
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
var valid5 = _errs117 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.leaderEmail !== undefined) {
let data59 = data52.leaderEmail
const _errs119 = errors
if (true) {
if (true) {
if (typeof data59 === 'string') {
if (func4(data59) > 100) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data59) < 1) {errors.push(
{
instancePath: instancePath + '/followerRequest/leaderEmail',
schemaPath: '#/properties/followerRequest/properties/leaderEmail/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
} else {
if (!formats0.test(data59)) {errors.push(
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
data59
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
var valid5 = _errs119 === errors
} else {
var valid5 = true
}
if (valid5) {
if (
data52.initiatedByFollower !== undefined
) {
const _errs121 = errors
if (
typeof data52.initiatedByFollower !== 'boolean'
) {errors.push(
{
instancePath: instancePath + '/followerRequest/initiatedByFollower',
schemaPath: '#/properties/followerRequest/properties/initiatedByFollower/type',
keyword: 'type',
params: { type: 'boolean' },
 message: "Must_be_a_boolean"}
);
}
var valid5 = _errs121 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.lastModified !== undefined) {
let data61 = data52.lastModified
const _errs123 = errors
if (
!(
typeof data61 == 'number' &&
isFinite(data61)
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
var valid5 = _errs123 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.version !== undefined) {
let data62 = data52.version
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
instancePath: instancePath + '/followerRequest/version',
schemaPath: '#/properties/followerRequest/properties/version/type',
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
if (data62 < 0 || isNaN(data62)) {errors.push(
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
var valid5 = _errs125 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.status !== undefined) {
let data63 = data52.status
const _errs127 = errors
if (
!(
typeof data63 == 'number' &&
!(data63 % 1) &&
!isNaN(data63) &&
isFinite(data63)
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
typeof data63 == 'number' &&
isFinite(data63)
) {
if (
data63 > 2 ||
isNaN(data63)
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
data63 < 0 ||
isNaN(data63)
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
var valid5 = _errs127 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.groups !== undefined) {
let data64 = data52.groups
const _errs129 = errors
if (true) {
if (
typeof data64 === 'string'
) {
if (func4(data64) > 8000) {errors.push(
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
var valid5 = _errs129 === errors
} else {
var valid5 = true
}
if (valid5) {
if (data52.points !== undefined) {
let data65 = data52.points
const _errs131 = errors
if (
!(
typeof data65 == 'number' &&
!(data65 % 1) &&
!isNaN(data65) &&
isFinite(data65)
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
typeof data65 == 'number' &&
isFinite(data65)
) {
if (
data65 < 0 ||
isNaN(data65)
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
var valid5 = _errs131 === errors
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
var valid0 = _errs105 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabase !== undefined) {
let data66 = data.followerDatabase
const _errs133 = errors
if (true) {
if (
data66 &&
typeof data66 == 'object' &&
!Array.isArray(data66)
) {
let missing5
if (
(data66.followerRequestId === undefined &&
(missing5 = 'followerRequestId')) ||
(data66.id === undefined && (missing5 = 'id')) ||
(data66.databaseId === undefined &&
(missing5 = 'databaseId')) ||
(data66.lastModified === undefined &&
(missing5 = 'lastModified')) ||
(data66.version === undefined && (missing5 = 'version'))
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
if (data66.followerRequestId !== undefined) {
let data67 = data66.followerRequestId
const _errs135 = errors
if (true) {
if (true) {
if (typeof data67 === 'string') {
if (!formats2.test(data67)) {errors.push(
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
var valid6 = _errs135 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data66.id !== undefined) {
let data68 = data66.id
const _errs137 = errors
if (true) {
if (true) {
if (typeof data68 === 'string') {
if (!formats2.test(data68)) {errors.push(
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
var valid6 = _errs137 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data66.databaseId !== undefined) {
let data69 = data66.databaseId
const _errs139 = errors
if (true) {
if (true) {
if (typeof data69 === 'string') {
if (!formats2.test(data69)) {errors.push(
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
var valid6 = _errs139 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data66.lastModified !== undefined) {
let data70 = data66.lastModified
const _errs141 = errors
if (
!(
typeof data70 == 'number' &&
isFinite(data70)
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
var valid6 = _errs141 === errors
} else {
var valid6 = true
}
if (valid6) {
if (data66.version !== undefined) {
let data71 = data66.version
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
instancePath: instancePath + '/followerDatabase/version',
schemaPath: '#/properties/followerDatabase/properties/version/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data71 == 'number' &&
isFinite(data71)
) {
if (data71 < 0 || isNaN(data71)) {errors.push(
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
var valid6 = _errs143 === errors
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
var valid0 = _errs133 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.followerDatabaseCompletion !== undefined) {
let data72 = data.followerDatabaseCompletion
const _errs145 = errors
if (true) {
if (
data72 &&
typeof data72 == 'object' &&
!Array.isArray(data72)
) {
let missing6
if (
(data72.id === undefined && (missing6 = 'id')) ||
(data72.followerRequestId === undefined &&
(missing6 = 'followerRequestId')) ||
(data72.description === undefined &&
(missing6 = 'description')) ||
(data72.itemId === undefined &&
(missing6 = 'itemId')) ||
(data72.parentItemId === undefined &&
(missing6 = 'parentItemId')) ||
(data72.itemLevel === undefined &&
(missing6 = 'itemLevel')) ||
(data72.lastModified === undefined &&
(missing6 = 'lastModified')) ||
(data72.version === undefined &&
(missing6 = 'version'))
) {errors.push(
{
instancePath: instancePath + '/followerDatabaseCompletion',
schemaPath: '#/properties/followerDatabaseCompletion/required',
keyword: 'required',
params: { missingProperty: missing6 },
message: "must have required property '" + missing6 + "'"
}
);
} else {
if (data72.id !== undefined) {
let data73 = data72.id
const _errs147 = errors
if (true) {
if (true) {
if (typeof data73 === 'string') {
if (!formats2.test(data73)) {errors.push(
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
var valid7 = _errs147 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data72.followerRequestId !== undefined) {
let data74 = data72.followerRequestId
const _errs149 = errors
if (true) {
if (true) {
if (typeof data74 === 'string') {
if (!formats2.test(data74)) {errors.push(
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
var valid7 = _errs149 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data72.description !== undefined) {
let data75 = data72.description
const _errs151 = errors
if (true) {
if (typeof data75 === 'string') {
if (func4(data75) > 1000) {errors.push(
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
var valid7 = _errs151 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data72.itemId !== undefined) {
let data76 = data72.itemId
const _errs153 = errors
if (true) {
if (true) {
if (typeof data76 === 'string') {
if (!formats2.test(data76)) {errors.push(
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
var valid7 = _errs153 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data72.parentItemId !== undefined) {
let data77 = data72.parentItemId
const _errs155 = errors
if (true) {
if (true) {
if (typeof data77 === 'string') {
if (!formats2.test(data77)) {errors.push(
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
var valid7 = _errs155 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data72.itemLevel !== undefined) {
let data78 = data72.itemLevel
const _errs157 = errors
if (
!(
typeof data78 == 'number' &&
!(data78 % 1) &&
!isNaN(data78) &&
isFinite(data78)
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
typeof data78 == 'number' &&
isFinite(data78)
) {
if (data78 > 8 || isNaN(data78)) {errors.push(
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
if (data78 < 0 || isNaN(data78)) {errors.push(
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
var valid7 = _errs157 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data72.lastModified !== undefined) {
let data79 = data72.lastModified
const _errs159 = errors
if (
!(
typeof data79 == 'number' &&
isFinite(data79)
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
var valid7 = _errs159 === errors
} else {
var valid7 = true
}
if (valid7) {
if (data72.version !== undefined) {
let data80 = data72.version
const _errs161 = errors
if (
!(
typeof data80 == 'number' &&
!(data80 % 1) &&
!isNaN(data80) &&
isFinite(data80)
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
typeof data80 == 'number' &&
isFinite(data80)
) {
if (data80 < 0 || isNaN(data80)) {errors.push(
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
var valid7 = _errs161 === errors
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
var valid0 = _errs145 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.router !== undefined) {
let data81 = data.router
const _errs163 = errors
if (true) {
if (
data81 &&
typeof data81 == 'object' &&
!Array.isArray(data81)
) {
let missing7
if (
(data81.id === undefined && (missing7 = 'id')) ||
(data81.appId === undefined &&
(missing7 = 'appId')) ||
(data81.routerMac === undefined &&
(missing7 = 'routerMac')) ||
(data81.ipAddress === undefined &&
(missing7 = 'ipAddress')) ||
(data81.mondayTimesAndDurations === undefined &&
(missing7 = 'mondayTimesAndDurations')) ||
(data81.tuesdayTimesAndDurations === undefined &&
(missing7 = 'tuesdayTimesAndDurations')) ||
(data81.wednesdayTimesAndDurations === undefined &&
(missing7 = 'wednesdayTimesAndDurations')) ||
(data81.thursdayTimesAndDurations === undefined &&
(missing7 = 'thursdayTimesAndDurations')) ||
(data81.fridayTimesAndDurations === undefined &&
(missing7 = 'fridayTimesAndDurations')) ||
(data81.saturdayTimesAndDurations === undefined &&
(missing7 = 'saturdayTimesAndDurations')) ||
(data81.sundayTimesAndDurations === undefined &&
(missing7 = 'sundayTimesAndDurations')) ||
(data81.version === undefined &&
(missing7 = 'version')) ||
(data81.lastModified === undefined &&
(missing7 = 'lastModified')) ||
(data81.status === undefined &&
(missing7 = 'status'))
) {errors.push(
{
instancePath: instancePath + '/router',
schemaPath: '#/properties/router/required',
keyword: 'required',
params: { missingProperty: missing7 },
message: "must have required property '" +
missing7 +
"'"
}
);
} else {
if (data81.id !== undefined) {
let data82 = data81.id
const _errs165 = errors
if (true) {
if (true) {
if (typeof data82 === 'string') {
if (!formats2.test(data82)) {errors.push(
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
var valid8 = _errs165 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data81.appId !== undefined) {
let data83 = data81.appId
const _errs167 = errors
if (true) {
if (true) {
if (typeof data83 === 'string') {
if (!formats2.test(data83)) {errors.push(
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
var valid8 = _errs167 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data81.routerMac !== undefined) {
let data84 = data81.routerMac
const _errs169 = errors
if (true) {
if (true) {
if (typeof data84 === 'string') {
if (!pattern1.test(data84)) {errors.push(
{
instancePath: instancePath + '/router/routerMac',
schemaPath: '#/properties/router/properties/routerMac/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'},
 message: "Must_be_a_valid_MAC_address"}
);
} else {
if (!formats94(data84)) {errors.push(
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
var valid8 = _errs169 === errors
} else {
var valid8 = true
}
if (valid8) {
if (data81.ipAddress !== undefined) {
let data85 = data81.ipAddress
const _errs171 = errors
if (true) {
if (true) {
if (typeof data85 === 'string') {
if (!formats96.test(data85)) {errors.push(
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
var valid8 = _errs171 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.mondayTimesAndDurations !== undefined
) {
let data86 = data81.mondayTimesAndDurations
const _errs173 = errors
if (true) {
if (true) {
if (typeof data86 === 'string') {
if (!pattern2.test(data86)) {errors.push(
{
instancePath: instancePath + '/router/mondayTimesAndDurations',
schemaPath: '#/properties/router/properties/mondayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data86)) {errors.push(
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
var valid8 = _errs173 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.tuesdayTimesAndDurations !== undefined
) {
let data87 = data81.tuesdayTimesAndDurations
const _errs175 = errors
if (true) {
if (true) {
if (typeof data87 === 'string') {
if (!pattern2.test(data87)) {errors.push(
{
instancePath: instancePath + '/router/tuesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/tuesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data87)) {errors.push(
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
if (
data81.wednesdayTimesAndDurations !== undefined
) {
let data88 = data81.wednesdayTimesAndDurations
const _errs177 = errors
if (true) {
if (true) {
if (typeof data88 === 'string') {
if (!pattern2.test(data88)) {errors.push(
{
instancePath: instancePath + '/router/wednesdayTimesAndDurations',
schemaPath: '#/properties/router/properties/wednesdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data88)) {errors.push(
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
var valid8 = _errs177 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.thursdayTimesAndDurations !== undefined
) {
let data89 = data81.thursdayTimesAndDurations
const _errs179 = errors
if (true) {
if (true) {
if (
typeof data89 === 'string'
) {
if (!pattern2.test(data89)) {errors.push(
{
instancePath: instancePath + '/router/thursdayTimesAndDurations',
schemaPath: '#/properties/router/properties/thursdayTimesAndDurations/pattern',
keyword: 'pattern',
params: {
pattern: '^([0-9]{2}:[0-9]{2})\\|([0-9]+)$'},
 message: "Must_be_a_valid_time_and_duration"}
);
} else {
if (!formats94(data89)) {errors.push(
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
var valid8 = _errs179 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.fridayTimesAndDurations !== undefined
) {
let data90 = data81.fridayTimesAndDurations
const _errs181 = errors
if (true) {
if (true) {
if (
typeof data90 === 'string'
) {
if (
!pattern2.test(data90)
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
if (!formats94(data90)) {errors.push(
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
var valid8 = _errs181 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.saturdayTimesAndDurations !== undefined
) {
let data91 = data81.saturdayTimesAndDurations
const _errs183 = errors
if (true) {
if (true) {
if (
typeof data91 === 'string'
) {
if (
!pattern2.test(data91)
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
!formats94(data91)
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
var valid8 = _errs183 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.sundayTimesAndDurations !== undefined
) {
let data92 = data81.sundayTimesAndDurations
const _errs185 = errors
if (true) {
if (true) {
if (
typeof data92 === 'string'
) {
if (
!pattern2.test(data92)
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
!formats94(data92)
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
var valid8 = _errs185 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.version !== undefined
) {
let data93 = data81.version
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
typeof data93 == 'number' &&
isFinite(data93)
) {
if (
data93 < 0 ||
isNaN(data93)
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
var valid8 = _errs187 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.lastModified !== undefined
) {
let data94 = data81.lastModified
const _errs189 = errors
if (
!(
typeof data94 == 'number' &&
isFinite(data94)
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
var valid8 = _errs189 === errors
} else {
var valid8 = true
}
if (valid8) {
if (
data81.status !== undefined
) {
let data95 = data81.status
const _errs191 = errors
if (
!(
typeof data95 == 'number' &&
!(data95 % 1) &&
!isNaN(data95) &&
isFinite(data95)
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
isFinite(data95)
) {
if (
data95 > 2 ||
isNaN(data95)
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
var valid8 = _errs191 === errors
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
var valid0 = _errs163 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.media !== undefined) {
let data96 = data.media
const _errs193 = errors
if (true) {
if (
data96 &&
typeof data96 == 'object' &&
!Array.isArray(data96)
) {
let missing8
if (
(data96.id === undefined && (missing8 = 'id')) ||
(data96.size === undefined &&
(missing8 = 'size')) ||
(data96.data === undefined &&
(missing8 = 'data')) ||
(data96.appId === undefined &&
(missing8 = 'appId')) ||
(data96.lastModified === undefined &&
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
if (data96.id !== undefined) {
let data97 = data96.id
const _errs195 = errors
if (true) {
if (true) {
if (typeof data97 === 'string') {
if (!formats2.test(data97)) {errors.push(
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
var valid9 = _errs195 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data96.size !== undefined) {
let data98 = data96.size
const _errs197 = errors
if (
!(
typeof data98 == 'number' &&
!(data98 % 1) &&
!isNaN(data98) &&
isFinite(data98)
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
typeof data98 == 'number' &&
isFinite(data98)
) {
if (data98 < 0 || isNaN(data98)) {errors.push(
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
var valid9 = _errs197 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data96.data !== undefined) {
let data99 = data96.data
const _errs199 = errors
if (true) {
if (typeof data99 === 'string') {
if (func4(data99) > 8000) {errors.push(
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
var valid9 = _errs199 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data96.appId !== undefined) {
let data100 = data96.appId
const _errs201 = errors
if (true) {
if (true) {
if (typeof data100 === 'string') {
if (!formats2.test(data100)) {errors.push(
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
var valid9 = _errs201 === errors
} else {
var valid9 = true
}
if (valid9) {
if (data96.lastModified !== undefined) {
let data101 = data96.lastModified
const _errs203 = errors
if (
!(
typeof data101 == 'number' &&
isFinite(data101)
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
var valid9 = _errs203 === errors
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
var valid0 = _errs193 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.deletion !== undefined) {
let data102 = data.deletion
const _errs205 = errors
if (true) {
if (
data102 &&
typeof data102 == 'object' &&
!Array.isArray(data102)
) {
let missing9
if (
(data102.id === undefined &&
(missing9 = 'id')) ||
(data102.level === undefined &&
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
if (data102.id !== undefined) {
let data103 = data102.id
const _errs207 = errors
if (true) {
if (true) {
if (typeof data103 === 'string') {
if (!formats2.test(data103)) {errors.push(
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
var valid10 = _errs207 === errors
} else {
var valid10 = true
}
if (valid10) {
if (data102.level !== undefined) {
let data104 = data102.level
const _errs209 = errors
if (
!(
typeof data104 == 'number' &&
!(data104 % 1) &&
!isNaN(data104) &&
isFinite(data104)
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
typeof data104 == 'number' &&
isFinite(data104)
) {
if (data104 > 8 || isNaN(data104)) {errors.push(
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
if (data104 < 0 || isNaN(data104)) {errors.push(
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
var valid10 = _errs209 === errors
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
var valid0 = _errs205 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.message !== undefined) {
let data105 = data.message
const _errs211 = errors
if (true) {
if (
data105 &&
typeof data105 == 'object' &&
!Array.isArray(data105)
) {
let missing10
if (
(data105.level === undefined &&
(missing10 = 'level')) ||
(data105.message === undefined &&
(missing10 = 'message')) ||
(data105.id === undefined &&
(missing10 = 'id'))
) {errors.push(
{
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/required',
keyword: 'required',
params: { missingProperty: missing10 },
message: "must have required property '" +
missing10 +
"'"
}
);
} else {
if (data105.level !== undefined) {
let data106 = data105.level
const _errs213 = errors
if (
!(
typeof data106 == 'number' &&
!(data106 % 1) &&
!isNaN(data106) &&
isFinite(data106)
)
) {errors.push(
{
instancePath: instancePath + '/message/level',
schemaPath: '#/properties/message/properties/level/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data106 == 'number' &&
isFinite(data106)
) {
if (data106 > 8 || isNaN(data106)) {errors.push(
{
instancePath: instancePath + '/message/level',
schemaPath: '#/properties/message/properties/level/maximum',
keyword: 'maximum',
params: {
comparison: '<=',
limit: 8
},
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data106 < 0 || isNaN(data106)) {errors.push(
{
instancePath: instancePath + '/message/level',
schemaPath: '#/properties/message/properties/level/minimum',
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
var valid11 = _errs213 === errors
} else {
var valid11 = true
}
if (valid11) {
if (data105.message !== undefined) {
let data107 = data105.message
const _errs215 = errors
if (true) {
if (typeof data107 === 'string') {
if (func4(data107) > 100) {errors.push(
{
instancePath: instancePath + '/message/message',
schemaPath: '#/properties/message/properties/message/maxLength',
keyword: 'maxLength',
params: { limit: 100 },
 message: "Must_be_less_than_100_characters"}
);
} else {
if (func4(data107) < 1) {errors.push(
{
instancePath: instancePath + '/message/message',
schemaPath: '#/properties/message/properties/message/minLength',
keyword: 'minLength',
params: { limit: 1 },
 message: "Required"}
);
}
}
} else {errors.push(
{
instancePath: instancePath + '/message/message',
schemaPath: '#/properties/message/properties/message/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
var valid11 = _errs215 === errors
} else {
var valid11 = true
}
if (valid11) {
if (data105.id !== undefined) {
let data108 = data105.id
const _errs217 = errors
if (true) {
if (true) {
if (typeof data108 === 'string') {
if (!formats2.test(data108)) {errors.push(
{
instancePath: instancePath + '/message/id',
schemaPath: '#/properties/message/properties/id/format',
keyword: 'format',
params: { format: 'uuid' },
 message: "Must_be_a_valid_UUID"}
);
}
} else {errors.push(
{
instancePath: instancePath + '/message/id',
schemaPath: '#/properties/message/properties/id/type',
keyword: 'type',
params: { type: 'string' },
message: 'must be string'
}
);
}
}
}
var valid11 = _errs217 === errors
} else {
var valid11 = true
}
}
}
}
} else {errors.push(
{
instancePath: instancePath + '/message',
schemaPath: '#/properties/message/type',
keyword: 'type',
params: { type: 'object' },
message: 'must be object'
}
);
}
}
var valid0 = _errs211 === errors
} else {
var valid0 = true
}
if (valid0) {
if (data.result !== undefined) {
let data109 = data.result
const _errs219 = errors
if (
!(
typeof data109 == 'number' &&
!(data109 % 1) &&
!isNaN(data109) &&
isFinite(data109)
)
) {errors.push(
{
instancePath: instancePath + '/result',
schemaPath: '#/properties/result/type',
keyword: 'type',
params: { type: 'integer' },
 message: "Must_be_an_integer"}
);
}
if (true) {
if (
typeof data109 == 'number' &&
isFinite(data109)
) {
if (data109 > 7 || isNaN(data109)) {errors.push(
{
instancePath: instancePath + '/result',
schemaPath: '#/properties/result/maximum',
keyword: 'maximum',
params: { comparison: '<=', limit: 7 },
 message: "Must_be_less_than_or_equal_to_maximum"}
);
} else {
if (data109 < 0 || isNaN(data109)) {errors.push(
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
var valid0 = _errs219 === errors
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
